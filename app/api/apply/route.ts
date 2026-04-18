import { NextRequest, NextResponse } from "next/server";

const orgTypeLabels: Record<string, string> = {
  clinic: "Клиника",
  laboratory: "Лаборатория",
  pharmacy: "Аптека",
  diagnostic: "Диагностический центр",
  other: "Другое",
};

async function sendToGoogleSheets(payload: Record<string, string>) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.warn("GOOGLE_SCRIPT_URL is not set — skipping Google Sheets");
    return;
  }
  const res = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Google Script error: ${res.status}`);
}

async function sendToTelegram(payload: Record<string, string>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.warn("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set — skipping Telegram");
    return;
  }

  const message = `🏥 <b>Новая заявка на партнёрство — Senimen</b>

👤 <b>Имя:</b> ${payload.name}
🏢 <b>Организация:</b> ${payload.organization}
🔖 <b>Тип:</b> ${payload.orgType}
📞 <b>Телефон:</b> ${payload.phone}
📧 <b>Email:</b> ${payload.email}
💬 <b>Комментарий:</b> ${payload.comment}

🕐 ${payload.date}`;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Telegram API error: ${err}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, organization, orgType, phone, email, comment } = body;

    if (!name || !organization || !orgType || !phone || !email) {
      return NextResponse.json(
        { error: "Заполните все обязательные поля" },
        { status: 400 }
      );
    }

    const payload = {
      date: new Date().toLocaleString("ru-KZ", { timeZone: "Asia/Almaty" }),
      name,
      organization,
      orgType: orgTypeLabels[orgType] || orgType,
      phone,
      email,
      comment: comment || "—",
    };

    // Send to both — in parallel, fail silently per channel
    const results = await Promise.allSettled([
      sendToGoogleSheets(payload),
      sendToTelegram(payload),
    ]);

    // Log any errors but don't fail the request if at least one succeeded
    results.forEach((r, i) => {
      if (r.status === "rejected") {
        console.error(`Channel ${i === 0 ? "Google Sheets" : "Telegram"} failed:`, r.reason);
      }
    });

    const allFailed = results.every((r) => r.status === "rejected");
    if (allFailed) {
      return NextResponse.json(
        { error: "Ошибка при отправке. Попробуйте ещё раз." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Apply API error:", error);
    return NextResponse.json(
      { error: "Ошибка при отправке. Попробуйте ещё раз." },
      { status: 500 }
    );
  }
}
