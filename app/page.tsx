import Link from "next/link";
import FAQ from "./components/FAQ";

const APP_STORE_URL = "#"; // Replace with real App Store link
const GOOGLE_PLAY_URL = "#"; // Replace with real Google Play link

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
    question: "На чём зарабатывает Senimen?",
    answer:
      "Приложение полностью бесплатно для пользователей. Senimen получает вознаграждение от партнеров за каждого нового клиента — модель pay-per-patient.",
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
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FDF4] pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full opacity-40 -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#1D6AF3] text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#1D6AF3] rounded-full animate-pulse" />
              Часть экосистемы Medina
            </div>

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
        </div>
      </section>

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
          <div className="flex flex-wrap justify-center gap-4">
            <AppStoreButton />
            <GooglePlayButton />
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
