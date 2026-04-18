import Link from "next/link";
import FAQ from "./components/FAQ";

const APP_STORE_URL = "https://apps.apple.com/kz/app/senimen/id6758087411";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.senimen.partnerdiscount";
const WHATSAPP_URL = "https://wa.me/77785680808?text=Здравствуйте!%20У%20меня%20есть%20вопрос%20по%20приложению%20Senimen";

function WhatsAppButton({ size = "normal" }: { size?: "normal" | "small" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1ebe5d] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 ${
        size === "small" ? "px-4 py-2.5 text-sm" : "px-5 py-3"
      }`}
    >
      <svg className={size === "small" ? "w-5 h-5 flex-shrink-0" : "w-6 h-6 flex-shrink-0"} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {size === "small" ? "Написать в WhatsApp" : (
        <div className="text-left">
          <div className="text-xs opacity-90">Есть вопросы?</div>
          <div className="font-semibold text-sm leading-tight">Написать в WhatsApp</div>
        </div>
      )}
    </a>
  );
}

function AppStoreButton() {
  return (
    <a
      href={APP_STORE_URL}
      className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
      target="_blank"
      rel="noopener noreferrer"
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

function GooglePlayButton() {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
      target="_blank"
      rel="noopener noreferrer"
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

const faqItems = [
  {
    question: "Что такое Senimen и как это работает?",
    answer:
      "Senimen — это бесплатное приложение с медицинскими скидками. Вы выбираете услугу или партнера в приложении, показываете QR-код на кассе — и получаете скидку. Никаких дополнительных действий.",
  },
  {
    question: "Это безопасно?",
    answer:
      "Да. Мы сотрудничаем только с проверенными и юридически прозрачными медицинскими организациями. Ваши персональные данные обрабатываются в соответствии с законодательством Казахстана.",
  },
  {
    question: "Сколько мне нужно заплатить за приложение?",
    answer:
      "Ничего! Приложение полностью бесплатно для пользователей. Никаких скрытых платежей, подписок или комиссий.",
  },
  {
    question: "Где я могу воспользоваться скидкой?",
    answer:
      "У наших партнеров — ведущих лабораторий, аптек и медицинских центров Казахстана. Список актуальных партнеров всегда доступен внутри приложения и регулярно пополняется.",
  },
  {
    question: "Скидка распространяется на всё?",
    answer:
      "Конкретные условия зависят от партнера и услуги. Все актуальные скидки и ограничения отображаются прямо в приложении перед использованием — никаких сюрпризов.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1D6AF3] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Senimen</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#how-it-works" className="hover:text-[#1D6AF3] transition-colors">
              Как работает
            </a>
            <a href="#advantages" className="hover:text-[#1D6AF3] transition-colors">
              Преимущества
            </a>
            <a href="#partners" className="hover:text-[#1D6AF3] transition-colors">
              Партнеры
            </a>
            <a href="#faq" className="hover:text-[#1D6AF3] transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-sm font-semibold px-3 py-2 rounded-lg hover:bg-[#1ebe5d] transition-all duration-200 shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 bg-[#1D6AF3] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1558D6] transition-all duration-200 shadow-sm"
            >
              Для партнеров
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FDF4] pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full opacity-40 -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
                Экономьте на медицине —<br />
                <span className="text-[#1D6AF3]">скачайте Senimen</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Получайте скидки у лучших медицинских партнеров Казахстана за пару кликов. Бесплатно, без скрытых платежей.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <AppStoreButton />
                <GooglePlayButton />
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>10 000+ скачиваний</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>4.8 / 5 в App Store</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1D6AF3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>10+ партнеров</span>
                </div>
              </div>
            </div>

            {/* Right — phone mockup */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative" style={{animation: "float 4s ease-in-out infinite"}}>

                {/* Floating badge top-left */}
                <div className="absolute -left-10 top-16 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 z-10" style={{animation: "float 4s ease-in-out infinite 0.5s"}}>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-base">💊</div>
                  <div>
                    <div className="text-xs text-gray-400">Аптека</div>
                    <div className="text-sm font-bold text-green-600">−15%</div>
                  </div>
                </div>

                {/* Floating badge bottom-right */}
                <div className="absolute -right-8 bottom-24 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 z-10" style={{animation: "float 4s ease-in-out infinite 1s"}}>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-base">🔬</div>
                  <div>
                    <div className="text-xs text-gray-400">Анализы</div>
                    <div className="text-sm font-bold text-[#1D6AF3]">−20%</div>
                  </div>
                </div>

                {/* Phone frame */}
                <div className="w-64 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">

                    {/* Status bar */}
                    <div className="bg-[#1D6AF3] px-5 pt-8 pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-bold text-base">Senimen</span>
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-white/15 rounded-xl px-3 py-2 flex items-center gap-2">
                        <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-white/70 text-xs">Поиск партнера...</span>
                      </div>
                    </div>

                    {/* App body */}
                    <div className="px-3 py-3 bg-gray-50 space-y-2">
                      <p className="text-xs font-semibold text-gray-400 px-1">Популярные партнеры</p>

                      {/* Card 1 */}
                      <div className="bg-white rounded-2xl p-3 shadow-sm flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">🧪</div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-xs">Invivo</div>
                          <div className="text-gray-400 text-[10px]">Лаборатория • Анализы</div>
                        </div>
                        <div className="bg-green-100 text-green-700 font-bold text-xs px-2 py-1 rounded-lg flex-shrink-0">−20%</div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white rounded-2xl p-3 shadow-sm flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">🌿</div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-xs">БиоСфера</div>
                          <div className="text-gray-400 text-[10px]">Лаборатория • Диагностика</div>
                        </div>
                        <div className="bg-green-100 text-green-700 font-bold text-xs px-2 py-1 rounded-lg flex-shrink-0">−15%</div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white rounded-2xl p-3 shadow-sm flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">🏥</div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-xs">Медцентр</div>
                          <div className="text-gray-400 text-[10px]">Клиника • Консультация</div>
                        </div>
                        <div className="bg-green-100 text-green-700 font-bold text-xs px-2 py-1 rounded-lg flex-shrink-0">−10%</div>
                      </div>

                      {/* QR hint */}
                      <div className="bg-[#1D6AF3] rounded-2xl p-3 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-3" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-xs">Показать QR-код</div>
                          <div className="text-blue-200 text-[10px]">Предъявите на кассе</div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="bg-white border-t border-gray-100 px-4 py-2 flex justify-around">
                      {["🏠","🔍","❤️","👤"].map((icon, i) => (
                        <div key={i} className={`flex flex-col items-center gap-0.5 ${i === 0 ? "text-[#1D6AF3]" : "text-gray-300"}`}>
                          <span className="text-base">{icon}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">3 простых шага</h2>
            <p className="text-gray-500 text-lg">Начните экономить уже сегодня</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: "Выберите партнера",
                desc: "Откройте Senimen, найдите нужную клинику, лабораторию или аптеку в вашем городе.",
              },
              {
                step: "02",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-3" />
                  </svg>
                ),
                title: "Покажите QR-код",
                desc: "Предъявите QR или штрих-код на кассе — никаких бумаг, карточек и долгих проверок.",
              },
              {
                step: "03",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Получите скидку",
                desc: "Оплатите услугу со скидкой прямо на месте. Экономия — мгновенно, без лишних шагов.",
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group">
                <div className="absolute top-6 right-6 text-5xl font-black text-gray-50 group-hover:text-blue-50 transition-colors select-none">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-blue-50 text-[#1D6AF3] rounded-xl flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Почему выбирают Senimen
              </h2>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                Простое приложение, которое помогает реально экономить на медицинских расходах для всей семьи.
              </p>

              <ul className="space-y-4">
                {[
                  {
                    icon: "💰",
                    title: "Настоящие скидки",
                    desc: "На востребованные услуги и лекарства — не символические проценты.",
                  },
                  {
                    icon: "✅",
                    title: "Только проверенные партнеры",
                    desc: "Работаем с надёжными медицинскими организациями с подтверждённой репутацией.",
                  },
                  {
                    icon: "🆓",
                    title: "Полностью бесплатно",
                    desc: "Приложение бесплатно для пользователей — никаких скрытых платежей.",
                  },
                  {
                    icon: "🇰🇿",
                    title: "По всему Казахстану",
                    desc: "Доступно в ведущих городах страны. Партнерская сеть постоянно растёт.",
                  },
                  {
                    icon: "👨‍👩‍👧‍👦",
                    title: "Для всей семьи",
                    desc: "Скидки на обследования, лечение, анализы для детей и взрослых.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-gray-500 text-sm mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1D6AF3] to-[#0F4DBF] rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-3">Скачайте прямо сейчас</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Доступно бесплатно на iOS и Android. Уже в первый день сможете сэкономить.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <AppStoreButton />
                  <GooglePlayButton />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-60 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-60 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Наши партнеры</h2>
            <p className="text-gray-500 text-lg">Ведущие медицинские организации Казахстана</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { name: "Invivo", category: "Лаборатория", color: "bg-red-50 text-red-600 border-red-100" },
              { name: "БиоСфера", category: "Лаборатория", color: "bg-green-50 text-green-700 border-green-100" },
              { name: "Ваш логотип", category: "Партнер", color: "bg-gray-50 text-gray-400 border-gray-100", placeholder: true },
              { name: "Ваш логотип", category: "Партнер", color: "bg-gray-50 text-gray-400 border-gray-100", placeholder: true },
            ].map((partner, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-6 flex flex-col items-center justify-center gap-2 min-h-[120px] ${partner.color} ${
                  partner.placeholder ? "border-dashed" : ""
                }`}
              >
                <div className={`text-lg font-bold ${partner.placeholder ? "text-gray-300" : ""}`}>
                  {partner.name}
                </div>
                <div className="text-xs opacity-70">{partner.category}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-[#1D6AF3] font-medium hover:underline"
            >
              Стать партнером Senimen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Нам доверяют</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Удобно и действительно сэкономили на анализах! Рекомендую всем.",
                author: "Ольга С.",
                city: "Алматы",
                rating: 5,
              },
              {
                text: "Семьёй пользуемся в Invivo — всё работает чётко, скидки реальные.",
                author: "Марат К.",
                city: "Астана",
                rating: 5,
              },
              {
                text: "Приложение простое, скачала за минуту. Сразу нашла нужную лабораторию.",
                author: "Айгерим Д.",
                city: "Алматы",
                rating: 5,
              },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-[#1D6AF3]">
                    {review.author[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{review.author}</div>
                    <div className="text-xs text-gray-400">{review.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-[#1D6AF3]">10 000+</div>
              <div className="text-gray-500 text-sm mt-1">скачиваний</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#1D6AF3]">4.8 / 5</div>
              <div className="text-gray-500 text-sm mt-1">рейтинг в App Store</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#1D6AF3]">10+</div>
              <div className="text-gray-500 text-sm mt-1">партнеров</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Частые вопросы
            </h2>
            <p className="text-gray-500 text-lg">Всё, что нужно знать о Senimen</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1D6AF3] to-[#0F4DBF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы экономить на здоровье?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Скачайте Senimen бесплатно и начните получать скидки уже сегодня.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <div className="flex justify-center">
            <WhatsAppButton size="small" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#1D6AF3] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="text-white font-semibold">Senimen</span>
            <span className="text-gray-600 text-sm ml-2">Часть экосистемы Medina</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/partners" className="hover:text-white transition-colors">
              Для партнеров
            </Link>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Senimen. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
