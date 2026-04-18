import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, organization, orgType, phone, email, comment } = body;

    // Validate required fields
    if (!name || !organization || !orgType || !phone || !email) {
      return NextResponse.json(
        { error: "Заполните все обязательные поля" },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is not set");
      return NextResponse.json(
        { error: "Сервис временно недоступен" },
        { status: 500 }
      );
    }

    const orgTypeLabels: Record<string, string> = {
      clinic: "Клиника",
      laboratory: "Лаборатория",
      pharmacy: "Аптека",
      diagnostic: "Диагностический центр",
      other: "Другое",
    };

    const payload = {
      date: new Date().toLocaleString("ru-KZ", { timeZone: "Asia/Almaty" }),
      name,
      organization,
      orgType: orgTypeLabels[orgType] || orgType,
      phone,
      email,
      comment: comment || "—",
    };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Google Script responded with ${response.status}`);
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
