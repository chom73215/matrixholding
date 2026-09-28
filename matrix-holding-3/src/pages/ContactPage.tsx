import React, { useState } from 'react';
import { COMPANY_INFO, IMAGES } from '../data/content';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].contactPage;
  const isVi = language === 'vi';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'GENERAL INQUIRY',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const TOPICS = [
    { key: 'GENERAL INQUIRY', label: isVi ? 'TRAO ĐỔI CHUNG' : 'GENERAL INQUIRY' },
    { key: 'MATRIX NETWORK', label: 'MATRIX NETWORK' },
    { key: 'MATRIX CONNECT', label: 'MATRIX CONNECT' },
    { key: 'MATRIX VENTURES', label: 'MATRIX VENTURES' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-[#F5F3EE] text-[#111111] pt-28">
      {/* ========================================================
          1. HERO
          LET'S CONNECT.
          Asymmetric editorial layout
          ======================================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16 md:pb-24 border-b border-warm-300">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-warm-300 pb-8 mb-12 gap-8">
          <div>
            <p className="text-xs font-mono tracking-[0.35em] text-warm-600 uppercase mb-4">
              {t.tag}
            </p>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#111111] leading-[0.9] tracking-tight">
              {t.title1} <br />
              <span className="font-serif font-normal text-burgundy">{t.title2}</span>
            </h1>
          </div>

          <div className="lg:max-w-md space-y-3 font-sans text-sm text-warm-700">
            <p className="leading-relaxed">
              {t.sub}
            </p>
            <p className="text-xs font-mono text-warm-600">
              {t.timeframe}
            </p>
          </div>
        </div>

        {/* ========================================================
            2. ASYMMETRIC MAIN GRID
            Left: GET IN TOUCH (Email, Phone, Address, Archival details)
            Right: Large Contact Form (NAME, EMAIL, PHONE, MESSAGE)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
          {/* LEFT COLUMN: GET IN TOUCH */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] text-burgundy font-semibold uppercase block mb-3">
                {t.registryTag}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#111111] leading-tight">
                {t.getInTouch}
              </h2>
            </div>

            <div className="space-y-8 text-sm font-sans divide-y divide-warm-300">
              {/* Email */}
              <div className="pt-6 first:pt-0 space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-warm-500 uppercase flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-burgundy" />
                  <span>{t.emailLabel}</span>
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-serif text-2xl font-light text-[#111111] hover:text-burgundy transition-colors block"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Phone */}
              <div className="pt-6 space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-warm-500 uppercase flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-burgundy" />
                  <span>{t.phoneLabel}</span>
                </span>
                <a
                  href="tel:+84964243026"
                  className="font-serif text-2xl font-light text-[#111111] hover:text-burgundy transition-colors block tracking-wide"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Address */}
              <div className="pt-6 space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-warm-500 uppercase flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-burgundy" />
                  <span>{t.addressLabel}</span>
                </span>
                <p className="font-serif text-2xl font-light text-[#111111] leading-relaxed">
                  {isVi ? (
                    <>
                      KĐT Bắc Linh Đàm,<br />
                      Phường Hoàng Liệt,<br />
                      Hà Nội
                    </>
                  ) : (
                    <>
                      Bac Linh Dam Urban Area,<br />
                      Hoang Liet Ward,<br />
                      Hanoi, Vietnam
                    </>
                  )}
                </p>
                <p className="text-xs font-mono text-warm-600 pt-1">
                  COORDINATES: {COMPANY_INFO.coordinates}
                </p>
              </div>

              {/* Operating Hours */}
              <div className="pt-6 space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-warm-500 uppercase flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-burgundy" />
                  <span>{t.hoursLabel}</span>
                </span>
                <p className="text-warm-700 font-sans text-sm">
                  {t.hoursText}
                </p>
                <p className="text-xs text-warm-500">
                  {t.hoursNote}
                </p>
              </div>
            </div>

            {/* Reception Visual */}
            <div className="aspect-[16/9] w-full overflow-hidden bg-warm-200 border border-warm-300 relative">
              <img
                src={IMAGES.contact}
                alt="Matrix Holding Executive Reception"
                className="w-full h-full object-cover filter grayscale contrast-115"
              />
              <div className="absolute bottom-3 left-3 bg-[#111111]/85 text-[#F5F3EE] px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase">
                FIG. RECEPTION ALCOVE &bull; {isVi ? 'HÀ NỘI' : 'HANOI'}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LARGE CONTACT FORM */}
          <div className="lg:col-span-7 bg-warm-200/50 p-8 sm:p-12 md:p-16 border border-warm-300">
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <CheckCircle className="w-12 h-12 text-burgundy mx-auto" />
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#111111]">
                  {t.successTitle}
                </h3>
                <p className="text-sm text-warm-700 max-w-md mx-auto leading-relaxed font-sans">
                  {isVi
                    ? `Cảm ơn ${formData.name || 'Quý đối tác'}. Yêu cầu của bạn đã được chuyển đến văn phòng điều hành. Chuyên viên cấp cao sẽ phản hồi tới ${formData.email || 'địa chỉ của bạn'} trong thời gian sớm nhất.`
                    : `Thank you, ${formData.name || 'Partner'}. Your inquiry has been routed to our executive office. A senior associate will reply to ${formData.email || 'your email'} shortly.`}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        topic: 'GENERAL INQUIRY',
                        message: '',
                      });
                    }}
                    className="text-xs tracking-[0.2em] font-medium border-b border-[#111111] pb-1 text-[#111111] hover:text-burgundy transition-colors uppercase"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <span className="text-xs font-mono tracking-widest text-warm-500 uppercase block mb-2">
                    {t.formTag}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
                    {t.formTitle}
                  </h3>
                </div>

                {/* Topic / Intent */}
                <div>
                  <label className="block text-xs font-mono tracking-widest text-warm-600 uppercase mb-3">
                    {t.interestLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TOPICS.map((topic) => (
                      <button
                        type="button"
                        key={topic.key}
                        onClick={() => setFormData({ ...formData, topic: topic.key })}
                        className={`p-2.5 text-xs font-mono tracking-wider uppercase border text-center transition-all ${
                          formData.topic === topic.key
                            ? 'bg-[#111111] text-[#F5F3EE] border-[#111111]'
                            : 'border-warm-300 text-warm-700 hover:border-black'
                        }`}
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* NAME */}
                <div>
                  <label className="block text-xs font-mono tracking-widest text-warm-600 uppercase mb-2">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className="w-full bg-[#F5F3EE] border border-warm-300 px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#111111] rounded-none transition-colors"
                  />
                </div>

                {/* EMAIL & PHONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-warm-600 uppercase mb-2">
                      {t.emailFieldLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.emailPlaceholder}
                      className="w-full bg-[#F5F3EE] border border-warm-300 px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#111111] rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-widest text-warm-600 uppercase mb-2">
                      {t.phoneFieldLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.phonePlaceholder}
                      className="w-full bg-[#F5F3EE] border border-warm-300 px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#111111] rounded-none transition-colors"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-xs font-mono tracking-widest text-warm-600 uppercase mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    className="w-full bg-[#F5F3EE] border border-warm-300 px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#111111] rounded-none transition-colors resize-none"
                  />
                </div>

                {/* Button: SEND MESSAGE → */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#111111] text-[#F5F3EE] hover:bg-burgundy text-xs tracking-[0.25em] font-medium uppercase transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{t.sendingBtn}</span>
                  ) : (
                    <>
                      <span>{t.sendBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
