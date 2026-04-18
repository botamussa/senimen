import Link from "next/link";
import FAQ from "../components/FAQ";
import PartnerForm from "../components/PartnerForm";
import MobileMenu from "../components/MobileMenu";

const WHATSAPP_URL = "https://wa.me/77785680808?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20о%20партнёрстве%20с%20Senimen";

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#1ebe5d] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
    >
      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-90">Есть вопросы?</div>
        <div className="font-semibold text-sm leading-tight">Написать в WhatsApp</div>
      </div>
    </a>
  );
}

const faqItems = [
  {
    question: "Сколько стоит стать партнером?",
    answer:
      "Подключение и размещение в сети Senimen полностью бесплатны. Вы оплачиваете только вознаграждение за реально приведённых клиентов — модель pay-per-patient без авансов.",
  },
  {
    question: "Как происходит подключение?",
    answer:
      "Оставьте заявку через форму ниже — наш менеджер свяжется с вами в течение рабочего дня, проконсультирует и проведет через все этапы. Интеграция, как правило, занимает 1–2 рабочих дня.",
  },
  {
    question: "Какие выгоды для клиники, аптеки или лаборатории?",
    answer:
      "Прямой поток готовых пациентов, уже заинтересованных в ваших услугах. Прозрачная модель оплаты, никаких лишних расходов на рекламу. Вы принимаете клиентов — мы обеспечиваем трафик.",
  },
  {
    question: "Как фиксируются обращения пациентов?",
    answer:
      "Через мобильное приложение Senimen (QR/штрих-код) и колл-центр Medina. Каждое обращение фиксируется и прозрачно отображается в отчетах.",
  },
  {
    question: "Что такое экосистема Medina?",
    answer:
      "Medina — крупнейший цифровой медицинский контакт-центр в Казахстане. Через него ежедневно проходит 500–1000 входящих обращений от пациентов, которых мы направляем к партнерам сети Senimen.",
  },
  {
    question: "Можно ли отказаться от партнерства?",
    answer:
      "Да, расторгнуть соглашение можно в любой момент без штрафов и дополнительных условий. Мы ценим прозрачные и взаимовыгодные отношения.",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <a href="/partners" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#1D6AF3] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-900">Senimen</span>
            <span className="hidden sm:block text-xs text-gray-400 ml-1 font-medium bg-gray-100 px-2 py-0.5 rounded-full">
              для партнеров
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#benefits" className="hover:text-[#1D6AF3] transition-colors">
              Выгоды
            </a>
            <a href="#how-it-works" className="hover:text-[#1D6AF3] transition-colors">
              Как работает
            </a>
            <a href="#faq" className="hover:text-[#1D6AF3] transition-colors">
              FAQ
            </a>
            <a href="#apply" className="hover:text-[#1D6AF3] transition-colors">
              Заявка
            </a>
          </nav>

          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 flex-shrink-0"
          >
            <svg width="14" height="14" className="flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            На главную
          </Link>
          <MobileMenu
            links={[
              { href: "#benefits", label: "Выгоды" },
              { href: "#how-it-works", label: "Как работает" },
              { href: "#faq", label: "FAQ" },
              { href: "/", label: "← На главную" },
            ]}
            variant="b2b"
          />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#0F2A6B] to-[#0F4DBF] pt-10 pb-16 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1D6AF3] opacity-10 rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-sm font-medium px-3 py-1.5 rounded-full mb-5 sm:mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Партнерская программа открыта
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-5">
              Источник новых пациентов{" "}
              <span className="text-blue-300">без затрат на рекламу</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              500–1000 целевых обращений в день через колл-центр Medina и мобильное приложение. Платите только за реальных клиентов.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-7 sm:mb-10">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-white text-[#1D6AF3] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-base sm:text-lg"
              >
                Стать партнером
                <svg width="18" height="18" className="flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <WhatsAppButton />
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Подключение бесплатно
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Оплата за результат
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Интеграция за 2 дня
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medina Ecosystem */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#1D6AF3]/10 text-[#1D6AF3] text-sm font-semibold px-3 py-1.5 rounded-full mb-4">
                  Экосистема Medina
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Готовый поток пациентов каждый день
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Senimen — часть экосистемы здоровья Medina, крупнейшего медицинского
                  контакт-центра Казахстана. Ваши новые клиенты уже ждут — просто подключитесь.
                </p>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 bg-[#1D6AF3] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1558D6] transition-all duration-200 shadow-md"
                >
                  Подключиться сейчас
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500–1000", label: "обращений в день", icon: "📞" },
                  { value: "0 тг", label: "стоимость подключения", icon: "🆓" },
                  { value: "2 дня", label: "до первого клиента", icon: "⚡" },
                  { value: "Pay-per-patient", label: "прозрачная модель", icon: "💡" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-xl font-black text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits by org type */}
      <section id="benefits" className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Выгоды для вашей организации
            </h2>
            <p className="text-gray-500 text-lg">Partнерство под любой тип бизнеса</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🏥",
                title: "Клиники",
                desc: "Привлечение пациентов на диагностику, плановое лечение и профосмотры. Увеличение загрузки специалистов без затрат на маркетинг.",
                points: ["Новые пациенты на приёмы", "Загрузка свободных слотов", "Узнаваемость в регионе"],
              },
              {
                icon: "🔬",
                title: "Лаборатории",
                desc: "Рост числа тестирований и возвратных клиентов. Senimen направляет пациентов, уже нацеленных на анализы.",
                points: ["Стабильный поток на анализы", "Рост числа повторных визитов", "Увеличение среднего чека"],
              },
              {
                icon: "💊",
                title: "Аптеки",
                desc: "Увеличение продаж и узнаваемости за счет акций и скидок для пользователей Senimen. Привлечение новой аудитории.",
                points: ["Акции на препараты", "Трафик из приложения", "Фidelity-программа"],
              },
              {
                icon: "🩻",
                title: "Диагностические центры",
                desc: "Оптимальная загрузка дорогостоящего оборудования. Поток пациентов под конкретные виды исследований.",
                points: ["Загрузка МРТ, УЗИ, КТ", "Направленный трафик", "Работа без простоев"],
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#1D6AF3] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How partnership works */}
      <section id="how-it-works" className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Как работает партнерство
            </h2>
            <p className="text-gray-500 text-lg">Просто и без бумажной волокиты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[calc(33.3%-1rem)] right-[calc(33.3%-1rem)] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

            {[
              {
                step: "1",
                icon: "📝",
                title: "Оставьте заявку",
                desc: "Заполните форму ниже. Наш менеджер свяжется с вами в течение рабочего дня и ответит на все вопросы.",
              },
              {
                step: "2",
                icon: "🤝",
                title: "Согласуйте условия",
                desc: "Подпишите договор, согласуйте размер скидки и список услуг. Никаких авансов и сложных интеграций.",
              },
              {
                step: "3",
                icon: "🚀",
                title: "Принимайте клиентов",
                desc: "Ваша организация появляется в приложении Senimen. Пациенты приходят, показывают QR-код — вы обслуживаете.",
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1D6AF3] text-white font-bold rounded-full flex items-center justify-center text-sm shadow-md">
                  {item.step}
                </div>
                <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Trust */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Нам доверяют</h2>
            <p className="text-gray-500">Уже в сети Senimen</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { name: "Invivo", category: "Лаборатория", color: "bg-red-50 border-red-100 text-red-600" },
              { name: "БиоСфера", category: "Лаборатория", color: "bg-green-50 border-green-100 text-green-700" },
              { name: "Ваш логотип", category: "Партнер", color: "bg-gray-50 border-gray-100 text-gray-300", placeholder: true },
              { name: "Ваш логотип", category: "Партнер", color: "bg-gray-50 border-gray-100 text-gray-300", placeholder: true },
            ].map((partner, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-6 flex flex-col items-center justify-center gap-2 min-h-[120px] ${partner.color} ${
                  partner.placeholder ? "border-dashed" : ""
                }`}
              >
                <div className="text-lg font-bold">{partner.name}</div>
                <div className="text-xs opacity-70">{partner.category}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏢",
                title: "Часть экосистемы Medina",
                desc: "Senimen работает в рамках крупнейшей медицинской платформы Казахстана — гарантия масштаба и надёжности.",
              },
              {
                icon: "⚖️",
                title: "Юридическая прозрачность",
                desc: "Работаем только с официально зарегистрированными организациями. Договор соответствует законодательству РК.",
              },
              {
                icon: "🔒",
                title: "Защита данных",
                desc: "Обработка персональных данных в соответствии со стандартами Казахстана. Ваши данные и данные пациентов надёжно защищены.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Вопросы партнеров
            </h2>
            <p className="text-gray-500 text-lg">Всё о партнерстве с Senimen</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-14 sm:py-20 bg-gradient-to-br from-[#EFF6FF] to-[#F0FDF4]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Оставьте заявку
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Менеджер свяжется с вами в течение рабочего дня
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-5 sm:p-8">
            <PartnerForm />
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm mb-3">Или напишите нам напрямую</p>
            <div className="flex justify-center">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Присоединяйтесь к Senimen
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Сотни медицинских организаций уже получают новых пациентов через экосистему Medina и приложение Senimen.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-[#1D6AF3] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1558D6] transition-all duration-200 shadow-lg text-lg"
          >
            Стать партнером
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#1D6AF3] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="text-white font-semibold">Senimen</span>
            <span className="text-gray-600 text-sm ml-2">Часть экосистемы Medina</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Главная
            </Link>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#apply" className="hover:text-white transition-colors">
              Стать партнером
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
