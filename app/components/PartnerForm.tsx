"use client";

import { useState } from "react";

const ORG_TYPES = [
  { value: "clinic", label: "Клиника" },
  { value: "laboratory", label: "Лаборатория" },
  { value: "pharmacy", label: "Аптека" },
  { value: "diagnostic", label: "Диагностический центр" },
  { value: "other", label: "Другое" },
];

interface FormData {
  name: string;
  organization: string;
  orgType: string;
  phone: string;
  email: string;
  comment: string;
}

interface FormErrors {
  name?: string;
  organization?: string;
  orgType?: string;
  phone?: string;
  email?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Укажите ваше имя";
  if (!data.organization.trim()) errors.organization = "Укажите название организации";
  if (!data.orgType) errors.orgType = "Выберите тип организации";
  if (!data.phone.trim()) {
    errors.phone = "Укажите номер телефона";
  } else if (!/^\+?[\d\s\-()]{7,}$/.test(data.phone.trim())) {
    errors.phone = "Введите корректный номер телефона";
  }
  if (!data.email.trim()) {
    errors.email = "Укажите email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Введите корректный email";
  }
  return errors;
}

export default function PartnerForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    organization: "",
    orgType: "",
    phone: "",
    email: "",
    comment: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    // Simulate submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
        <p className="text-gray-600">
          Наш менеджер свяжется с вами в течение рабочего дня.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Имя <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Айдос Джаксыбеков"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D6AF3] transition ${
              errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Организация <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="organization"
            value={form.organization}
            onChange={handleChange}
            placeholder="Медицинский центр Здоровье"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D6AF3] transition ${
              errors.organization ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
            }`}
          />
          {errors.organization && (
            <p className="mt-1 text-xs text-red-500">{errors.organization}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Тип организации <span className="text-red-500">*</span>
        </label>
        <select
          name="orgType"
          value={form.orgType}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1D6AF3] transition appearance-none bg-white ${
            errors.orgType ? "border-red-400 bg-red-50" : "border-gray-200"
          }`}
        >
          <option value="">Выберите тип организации</option>
          {ORG_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {errors.orgType && <p className="mt-1 text-xs text-red-500">{errors.orgType}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+7 777 000 00 00"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D6AF3] transition ${
              errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="info@clinic.kz"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D6AF3] transition ${
              errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Комментарий
        </label>
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          placeholder="Кратко расскажите о вашей организации или вопросах..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D6AF3] transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-[#1D6AF3] text-white font-semibold rounded-xl hover:bg-[#1558D6] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.99] text-lg"
      >
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Отправляем...
          </span>
        ) : (
          "Стать партнером"
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}
