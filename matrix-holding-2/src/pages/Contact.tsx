import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Terminal, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].contact;

  const defaultTopic = language === 'vi' ? 'Yêu cầu thông tin chung' : 'General Holding Inquiry';
  const initialTopic = searchParams.get('topic') || defaultTopic;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: initialTopic,
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const topicParam = searchParams.get('topic');
    if (topicParam) {
      setFormData((prev) => ({ ...prev, topic: topicParam }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const addressText = language === 'vi' ? COMPANY_INFO.address.vi : COMPANY_INFO.address.en;

  const topicOptions = language === 'vi' ? [
    { value: 'Yêu cầu thông tin chung', label: 'Yêu cầu thông tin chung' },
    { value: 'MATRIX NETWORK', label: 'Matrix Network (Nhân Tài & Cộng Đồng)' },
    { value: 'MATRIX CONNECT', label: 'Matrix Connect (Liên Minh Doanh Nghiệp)' },
    { value: 'MATRIX VENTURES', label: 'Matrix Ventures (Nguồn Vốn & Ươm Tạo)' },
    { value: 'Hợp Tác Cấp Thể Chế', label: 'Hợp Tác Cấp Thể Chế' },
  ] : [
    { value: 'General Holding Inquiry', label: 'General Holding Inquiry' },
    { value: 'MATRIX NETWORK', label: 'Matrix Network (Talent & Communities)' },
    { value: 'MATRIX CONNECT', label: 'Matrix Connect (Enterprise Alliances)' },
    { value: 'MATRIX VENTURES', label: 'Matrix Ventures (Capital & Incubation)' },
    { value: 'Institutional Partnership', label: 'Institutional Partnership' },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 pb-20">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[600px] h-[400px] bg-[#00F0FF]/5 rounded-full blur-[150px] pointer-events-none" />

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: HERO & CONTACT DETAILS */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1117] border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
              {t.protocolTag}
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.2] sm:leading-[1.22]">
              <span className="block mb-2">{t.heroTitle1}</span>
              <span className="block text-[#00FF9D] py-1">
                {t.heroTitle2}
              </span>
            </h1>

            <p className="mt-8 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
              {t.heroDesc}
            </p>

            {/* Information Cards */}
            <div className="mt-12 space-y-6">
              {/* EMAIL */}
              <div className="p-5 rounded-2xl bg-[#0D1117] border border-white/10 hover:border-[#00F0FF]/40 transition-colors group">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#00F0FF] flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    {t.emailLabel}
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="text-zinc-500 hover:text-white p-1 transition-colors flex items-center gap-1 text-[11px] font-mono"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00FF9D]" />
                        <span className="text-[#00FF9D]">{t.copySuccess}</span>
                      </>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm sm:text-base font-mono text-white group-hover:text-[#00F0FF] transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* PHONE */}
              <div className="p-5 rounded-2xl bg-[#0D1117] border border-white/10 hover:border-[#00FF9D]/40 transition-colors group">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#00FF9D] flex items-center gap-2 mb-2">
                  <Phone className="w-3.5 h-3.5" />
                  {t.phoneLabel}
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-sm sm:text-base font-mono text-white group-hover:text-[#00FF9D] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* LOCATION */}
              <div className="p-5 rounded-2xl bg-[#0D1117] border border-white/10 hover:border-white/30 transition-colors">
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00F0FF]" />
                  {t.locationLabel}
                </div>
                <div className="text-sm text-white font-medium">
                  {addressText}
                </div>
                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>{t.coordinates}</span>
                  <span className="text-[#00FF9D]">{t.hanoiHub}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DARK CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#070A0F]/80 backdrop-blur-xl border border-white/10 relative overflow-hidden shadow-2xl">
              {/* Corner tech accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#00F0FF]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#00FF9D]" />

              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00F0FF]" />
                  <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">
                    {t.formTag}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.gatewayOnline}
                </span>
              </div>

              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D] flex items-center justify-center mb-4 text-[#00FF9D]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.dispatchedTitle}</h3>
                  <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
                    {t.dispatchedDesc}
                  </p>
                  <div className="mt-6 font-mono text-xs text-[#00F0FF] bg-[#00F0FF]/10 px-4 py-2 rounded border border-[#00F0FF]/30">
                    TRANSMISSION TOKEN: MTX-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        topic: defaultTopic,
                        message: '',
                      });
                    }}
                    className="mt-8 px-6 py-2.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                        {t.yourName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'vi' ? 'Nguyễn Văn A' : 'Nguyen Van A'}
                        className="w-full bg-transparent border border-white/15 focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                        {t.yourEmail}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@enterprise.com"
                        className="w-full bg-transparent border border-white/15 focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Phone and Topic */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                        {t.yourPhone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(+84) 9xx xxx xxx"
                        className="w-full bg-transparent border border-white/15 focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                        {t.topicLabel}
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full bg-[#0D1117] border border-white/15 focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] rounded-lg px-4 py-3 text-sm text-white outline-none transition-all font-sans cursor-pointer"
                      >
                        {topicOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0D1117] text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                      {t.messageLabel}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className="w-full bg-transparent border border-white/15 focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] rounded-lg p-4 text-sm text-white placeholder-zinc-600 outline-none transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-lg bg-[#00FF9D] text-black font-semibold text-xs font-mono tracking-widest uppercase hover:bg-[#00FF9D]/90 hover:shadow-[0_0_25px_rgba(0,255,157,0.35)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>{t.transmitting}</span>
                      ) : (
                        <>
                          <span>{t.dispatchBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
