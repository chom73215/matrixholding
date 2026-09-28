import React, { useState, useEffect } from 'react';
import type { CareerPosition } from '../types';
import { COMPANY_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface JobModalProps {
  position: CareerPosition | null;
  onClose: () => void;
}

export default function JobModal({ position, onClose }: JobModalProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (position) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [position, onClose]);

  if (!position) return null;

  const isVi = language === 'vi';
  const title = isVi ? position.titleVi : position.title;
  const department = isVi ? position.departmentVi : position.department;
  const type = isVi ? position.typeVi : position.type;
  const location = isVi ? position.locationVi : position.location;
  const experience = isVi ? position.experienceVi : position.experience;
  const description = isVi ? position.descriptionVi : position.description;
  const responsibilities = isVi ? position.responsibilitiesVi : position.responsibilities;
  const requirements = isVi ? position.requirementsVi : position.requirements;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-12 animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-[#F5F3EE] text-[#111111] shadow-2xl my-8 border border-warm-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warm-300 bg-warm-200/50">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-warm-600">
            <span>NO. {position.number}</span>
            <span>&bull;</span>
            <span className="text-burgundy uppercase font-semibold">{department}</span>
            <span>&bull;</span>
            <span>{location}</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs tracking-widest text-warm-700 hover:text-black transition-colors px-2 py-1 border border-warm-300 hover:border-black"
          >
            <span>{isVi ? 'ĐÓNG' : 'CLOSE'}</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 sm:p-12 space-y-10">
          {/* Position Title & Metadata */}
          <div className="space-y-3">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] leading-tight">
              {title}
            </h1>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-warm-600">
              <span className="bg-warm-200 px-2.5 py-1 border border-warm-300">{type}</span>
              <span className="bg-warm-200 px-2.5 py-1 border border-warm-300">{location}</span>
              <span className="bg-warm-200 px-2.5 py-1 border border-warm-300">{experience}</span>
            </div>
            <p className="text-warm-700 font-sans text-base leading-relaxed pt-2">
              {description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="space-y-4 pt-4 border-t border-warm-300">
            <h2 className="text-xs font-mono tracking-[0.25em] text-warm-600 uppercase">
              {isVi ? 'TRÁCH NHIỆM CHÍNH • PHẠM VI CÔNG VIỆC' : 'RESPONSIBILITIES • SCOPE OF WORK'}
            </h2>
            <ul className="space-y-2.5 text-sm text-warm-800">
              {responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-burgundy pt-0.5">0{idx + 1}</span>
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="space-y-4 pt-4 border-t border-warm-300">
            <h2 className="text-xs font-mono tracking-[0.25em] text-warm-600 uppercase">
              {isVi ? 'YÊU CẦU NĂNG LỰC • CHÂN DUNG ỨNG VIÊN' : 'REQUIREMENTS • CANDIDATE PROFILE'}
            </h2>
            <ul className="space-y-2.5 text-sm text-warm-800">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-warm-500 pt-0.5">&bull;</span>
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Form */}
          <div className="pt-8 border-t border-warm-300">
            {submitted ? (
              <div className="p-8 bg-warm-200 border border-warm-300 text-center space-y-4">
                <CheckCircle className="w-10 h-10 text-burgundy mx-auto" />
                <h3 className="font-serif text-2xl font-light text-[#111111]">
                  {isVi ? 'Đã Tiếp Nhận Hồ Sơ' : 'Candidacy Registered'}
                </h3>
                <p className="text-sm text-warm-600 max-w-md mx-auto leading-relaxed">
                  {isVi
                    ? `Cảm ơn bạn đã quan tâm tới việc gia nhập Matrix Holding. Ban nhân sự sẽ xem xét hồ sơ và liên hệ với bạn qua email tại ${formData.email || 'địa chỉ của bạn'}.`
                    : `Thank you for your interest in joining Matrix Holding. Our talent committee will review your dossier and contact you via email at ${formData.email || 'your email'}.`}
                </p>
                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="text-xs tracking-[0.2em] font-medium border-b border-[#111111] pb-1 text-[#111111] hover:text-burgundy transition-colors"
                  >
                    {isVi ? 'TRỞ LẠI DANH SÁCH TUYỂN DỤNG →' : 'RETURN TO CAREERS LIST →'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-light text-[#111111] mb-1">
                    {isVi ? 'Gửi Hồ Sơ Ứng Tuyển' : 'Submit Your Dossier'}
                  </h2>
                  <p className="text-xs text-warm-600 font-sans">
                    {isVi ? 'Hoặc gửi CV và Portfolio trực tiếp tới ' : 'Alternatively, forward your CV and portfolio directly to '}
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-burgundy underline">
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-warm-600 uppercase mb-2">
                      {isVi ? 'HỌ VÀ TÊN *' : 'FULL NAME *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isVi ? 'vd: Nguyễn Minh Anh' : 'e.g. Nguyen Minh Anh'}
                      className="w-full bg-warm-50 border border-warm-300 px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-widest text-warm-600 uppercase mb-2">
                      {isVi ? 'ĐỊA CHỈ EMAIL *' : 'EMAIL ADDRESS *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@domain.com"
                      className="w-full bg-warm-50 border border-warm-300 px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] rounded-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-warm-600 uppercase mb-2">
                      {isVi ? 'SỐ ĐIỆN THOẠI *' : 'PHONE NUMBER *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(+84) 9XX XXX XXX"
                      className="w-full bg-warm-50 border border-warm-300 px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-widest text-warm-600 uppercase mb-2">
                      LINKEDIN / PORTFOLIO URL
                    </label>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://..."
                      className="w-full bg-warm-50 border border-warm-300 px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] rounded-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest text-warm-600 uppercase mb-2">
                    {isVi ? 'LỜI GIỚI THIỆU / THÔNG ĐIỆP BẢN THÂN' : 'INTRODUCTORY NOTE / STATEMENT'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder={
                      isVi
                        ? 'Nêu ngắn gọn lý do bạn phù hợp với tầm nhìn và văn hóa của Matrix Holding...'
                        : "Briefly state your alignment with Matrix Holding's vision..."
                    }
                    className="w-full bg-warm-50 border border-warm-300 px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] rounded-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#111111] text-[#F5F3EE] hover:bg-burgundy text-xs tracking-[0.25em] font-medium uppercase transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{isVi ? 'ĐANG XỬ LÝ HỒ SƠ...' : 'PROCESSING DOSSIER...'}</span>
                  ) : (
                    <>
                      <span>{isVi ? 'GỬI HỒ SƠ ỨNG TUYỂN' : 'TRANSMIT APPLICATION'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
