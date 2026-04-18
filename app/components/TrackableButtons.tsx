"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(action: string, label: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: "engagement",
      event_label: label,
    });
  }
}

const APP_STORE_URL = "https://apps.apple.com/kz/app/senimen/id6758087411";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.senimen.partnerdiscount";
const WHATSAPP_B2C_URL =
  "https://wa.me/77785680808?text=Здравствуйте!%20У%20меня%20есть%20вопрос%20по%20приложению%20Senimen";
const WHATSAPP_B2B_URL =
  "https://wa.me/77785680808?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20о%20партнёрстве%20с%20Senimen";

export function AppStoreButtonTracked() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("app_download_click", "App Store")}
      className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
    >
      <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-80">Скачать в</div>
        <div className="font-semibold text-sm leading-tight">App Store</div>
      </div>
    </a>
  );
}

export function GooglePlayButtonTracked() {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("app_download_click", "Google Play")}
      className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
    >
      <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.76c.3.17.64.24.99.2l12.67-7.31-2.85-2.85-10.81 9.96zM.5 1.4C.19 1.72 0 2.22 0 2.87v18.26c0 .65.19 1.15.5 1.47l.08.08 10.23-10.23v-.24L.58 1.32.5 1.4zM20.15 10.3l-2.9-1.68-3.18 3.18 3.18 3.18 2.92-1.69c.83-.48.83-1.27-.02-1.99zM4.17.24L16.84 7.55l-2.85 2.85L3.18.24C3.48.07 3.82 0 4.17.24z" />
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-80">Скачать в</div>
        <div className="font-semibold text-sm leading-tight">Google Play</div>
      </div>
    </a>
  );
}

export function WhatsAppButtonTracked({ variant = "b2c" }: { variant?: "b2c" | "b2b" }) {
  const url = variant === "b2c" ? WHATSAPP_B2C_URL : WHATSAPP_B2B_URL;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", variant === "b2c" ? "B2C Hero" : "B2B Partners")}
      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#1ebe5d] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
    >
      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-90">Есть вопросы?</div>
        <div className="font-semibold text-sm leading-tight">Написать в WhatsApp</div>
      </div>
    </a>
  );
}

export function PartnerApplyButtonTracked() {
  return (
    <a
      href="#apply"
      onClick={() => trackEvent("partner_apply_click", "B2B CTA")}
      className="inline-flex items-center gap-2 bg-[#1D6AF3] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1558D6] transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-lg"
    >
      Стать партнером
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}
