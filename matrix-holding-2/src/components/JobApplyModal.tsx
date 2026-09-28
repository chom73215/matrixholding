import React, { useState } from 'react';
import { X, Send, CheckCircle2, User, Mail, Phone, Link2 } from 'lucide-react';
import type { JobPosition } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface JobApplyModalProps {
  job: JobPosition | null;
  onClose: () => void;
}

export const JobApplyModal: React.FC<JobApplyModalProps> = ({ job, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].careers;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    coverNote: '',
  });

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#070A0F] border border-[#00FF9D]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,255,157,0.12)] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D1117]/80">
          <div>
            <div className="text-[10px] font-mono text-[#00FF9D] uppercase tracking-widest flex items-center gap-1.5">
              <span>{t.applyModalTitle}</span>
              <span>•</span>
              <span>{job.number}</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mt-0.5">
              {job.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D] flex items-center justify-center mb-4 text-[#00FF9D]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{t.transmittedTitle}</h4>
            <p className="text-sm text-zinc-400 max-w-md">
              {t.transmittedDesc}
            </p>
            <div className="mt-6 font-mono text-xs text-[#00F0FF] bg-[#00F0FF]/10 px-4 py-2 rounded border border-[#00F0FF]/30">
              DISPATCH ID: MTX-TALENT-{Math.floor(100000 + Math.random() * 900000)}
            </div>
            <button
              onClick={onClose}
              className="mt-8 px-6 py-2.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-wider transition-colors"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300">
              <span className="font-semibold text-white">{t.department}:</span> {job.department} • <span className="font-semibold text-white">{t.location}:</span> {job.location} ({job.type})
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                  {t.fullName}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === 'vi' ? 'Nguyễn Văn A' : 'John Doe'}
                    className="w-full bg-[#0D1117] border border-white/10 focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                  {t.emailAddress}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="applicant@domain.com"
                    className="w-full bg-[#0D1117] border border-white/10 focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-all font-sans"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                  {t.phoneNum}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(+84) 9xx xxx xxx"
                    className="w-full bg-[#0D1117] border border-white/10 focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                  {t.portfolioLink}
                </label>
                <div className="relative">
                  <Link2 className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://linkedin.com/in/... or github.com/..."
                    className="w-full bg-[#0D1117] border border-white/10 focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-all font-sans"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                {t.statementImpact}
              </label>
              <textarea
                rows={3}
                value={formData.coverNote}
                onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                placeholder={t.statementPlaceholder}
                className="w-full bg-[#0D1117] border border-white/10 focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] rounded-lg p-3 text-sm text-white placeholder-zinc-600 outline-none transition-all font-sans resize-none"
              />
            </div>

            <div className="pt-3 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00FF9D] text-black font-semibold text-xs font-mono rounded hover:bg-[#00FF9D]/90 hover:shadow-[0_0_20px_rgba(0,255,157,0.3)] transition-all uppercase tracking-wider"
              >
                <span>{t.submitApp}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
