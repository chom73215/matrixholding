import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Briefcase, MapPin, Sparkles, Terminal } from 'lucide-react';
import { getJobData } from '../data/content';
import type { JobPosition } from '../data/content';
import { JobApplyModal } from '../components/JobApplyModal';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].careers;
  const jobList = getJobData(language);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 pb-20">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[400px] bg-[#00FF9D]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* 1. HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-white/5">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1117] border border-white/10 text-xs font-mono text-[#00FF9D] uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {t.tag}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.2] sm:leading-[1.22]">
            <span className="block mb-2">{t.heroTitle1}</span>
            <span className="block text-[#00FF9D] py-1">
              {t.heroTitle2}
            </span>
          </h1>

          <p className="mt-8 text-base sm:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
            {t.heroDesc}
          </p>

          <div className="mt-10 flex items-center gap-8 text-xs font-mono text-zinc-500">
            <div>
              <span className="text-white font-bold text-sm block">{t.hybridFlex}</span>
              <span>{t.workEnv}</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <span className="text-[#00FF9D] font-bold text-sm block">{t.globalTalent}</span>
              <span>{t.networkEco}</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <span className="text-[#00F0FF] font-bold text-sm block">{t.equityImpact}</span>
              <span>{t.longHorizon}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPEN POSITIONS TABLE / LIST */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-2 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              {t.openPositionsTag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {t.openPositionsTitle}
            </h2>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            {jobList.length} {t.rolesCount}
          </div>
        </div>

        {/* High-tech List Row Structure */}
        <div className="space-y-4">
          {jobList.map((job) => (
            <motion.div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              whileHover={{ x: 6 }}
              className="group cursor-pointer p-6 sm:p-7 rounded-2xl bg-[#0D1117] border border-white/10 hover:border-[#00FF9D]/50 hover:shadow-[0_0_30px_rgba(0,255,157,0.12)] transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-mono text-2xl sm:text-3xl font-light text-zinc-600 group-hover:text-[#00FF9D] transition-colors">
                    {job.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="md:col-span-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00FF9D] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    {job.description}
                  </p>
                </div>

                {/* Department */}
                <div className="md:col-span-3">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">{t.department}</div>
                  <div className="text-xs sm:text-sm font-mono text-zinc-300 mt-0.5">
                    {job.department}
                  </div>
                </div>

                {/* Location & Type */}
                <div className="md:col-span-2">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">{t.location}</div>
                  <div className="text-xs sm:text-sm font-mono text-zinc-300 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#00F0FF]" />
                    {job.location}
                  </div>
                </div>

                {/* Action Arrow */}
                <div className="md:col-span-1 flex items-center justify-end">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00FF9D] group-hover:bg-[#00FF9D] flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Application Note */}
        <div className="mt-14 p-8 rounded-2xl bg-[#070A0F] border border-white/10 text-center max-w-2xl mx-auto">
          <Terminal className="w-6 h-6 text-[#00F0FF] mx-auto mb-3" />
          <h4 className="text-base font-bold text-white uppercase">
            {t.dontSeeRole}
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light">
            {t.dontSeeRoleDesc}
          </p>
          <div className="mt-5">
            <a
              href="mailto:matrixholding.support@gmail.com?subject=Open%20Talent%20Inquiry%20-%20Matrix%20Holding"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-wider transition-colors"
            >
              <span>{t.sendOpenApp}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Application Drawer / Modal */}
      <JobApplyModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
};
