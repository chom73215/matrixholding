import { useState } from 'react';
import { CAREERS_DATA, COMPANY_INFO, IMAGES } from '../data/content';
import type { CareerPosition } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import JobModal from '../components/JobModal';
import { ArrowUpRight } from 'lucide-react';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<CareerPosition | null>(null);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].careersPage;
  const isVi = language === 'vi';

  return (
    <div className="w-full bg-[#F5F3EE] text-[#111111] pt-28">
      {/* ========================================================
          1. HERO
          WORK WITH US.
          Subheading: "Build meaningful connections and create what's next."
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

          <div className="lg:max-w-md space-y-4">
            <p className="font-serif italic text-2xl sm:text-3xl font-light text-burgundy leading-snug">
              {t.subheading}
            </p>
            <p className="text-sm text-warm-700 font-sans leading-relaxed">
              {t.sub}
            </p>
          </div>
        </div>

        {/* Quiet Luxury Workspace Visual */}
        <div className="w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden bg-warm-200 border border-warm-300 relative">
          <img
            src={IMAGES.careers}
            alt="Matrix Holding Creative Studio & Workspace"
            className="w-full h-full object-cover filter grayscale contrast-115"
          />
          <div className="absolute bottom-4 left-4 bg-[#111111]/85 text-[#F5F3EE] px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase backdrop-blur-sm">
            FIG. ATELIER ENVIRONMENT &bull; {isVi ? 'TRỤ SỞ HÀ NỘI' : 'HANOI HEADQUARTERS'}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. OPEN POSITIONS SECTION
          Editorial list:
          01 FRONTEND DEVELOPER | TECH / FULL-TIME | HANOI →
          Hover: underline animation.
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-warm-300">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-warm-300 pb-8 mb-16 gap-4">
          <div>
            <p className="text-xs font-mono tracking-[0.35em] text-warm-600 uppercase mb-2">
              {t.dirTag}
            </p>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#111111] leading-none">
              {t.titleList1} <br />
              <span className="font-serif font-normal text-burgundy">{t.titleList2}</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-warm-600 tracking-wider">
            {CAREERS_DATA.length} {t.availableCount}
          </p>
        </div>

        {/* Editorial Job List with Underline Animation */}
        <div className="divide-y divide-warm-300 border-t border-b border-warm-300">
          {CAREERS_DATA.map((job) => {
            const title = isVi ? job.titleVi : job.title;
            const department = isVi ? job.departmentVi : job.department;
            const type = isVi ? job.typeVi : job.type;
            const location = isVi ? job.locationVi : job.location;
            const description = isVi ? job.descriptionVi : job.description;

            return (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="group cursor-pointer py-10 sm:py-12 px-2 sm:px-4 hover:bg-warm-200/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Number */}
                  <div className="lg:col-span-1 font-mono text-xl sm:text-2xl text-burgundy font-light">
                    {job.number}
                  </div>

                  {/* Title with hover underline animation */}
                  <div className="lg:col-span-6 space-y-1">
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#111111] inline-block relative">
                      <span className="group-hover:text-burgundy transition-colors">
                        {title}
                      </span>
                      {/* Hover Underline Animation */}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-burgundy group-hover:w-full transition-all duration-500 ease-out" />
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-600 font-sans line-clamp-1">
                      {description}
                    </p>
                  </div>

                  {/* Department / Type */}
                  <div className="lg:col-span-3 flex flex-wrap gap-2 text-xs font-mono tracking-wider text-warm-700">
                    <span className="bg-warm-200 px-2.5 py-1 border border-warm-300">
                      {department}
                    </span>
                    <span className="bg-warm-200 px-2.5 py-1 border border-warm-300">
                      {type}
                    </span>
                  </div>

                  {/* Location & Arrow */}
                  <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-6">
                    <span className="text-xs font-mono tracking-widest text-warm-600 uppercase">
                      {location}
                    </span>
                    <span className="w-10 h-10 rounded-full border border-warm-400 group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          3. CULTURAL TENETS
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-warm-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] text-burgundy font-semibold uppercase">
              {t.ethosTag}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#111111] leading-snug">
              {t.ethosTitle}
            </h3>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-warm-800">
            <div className="space-y-3 p-6 bg-warm-200/50 border border-warm-300">
              <span className="font-mono text-xs text-burgundy">
                {isVi ? '01 / TỰ CHỦ' : '01 / AUTONOMY'}
              </span>
              <h4 className="font-serif text-lg font-light text-[#111111]">
                {isVi ? 'Tự Do Kiến Trúc' : 'Architectural Freedom'}
              </h4>
              <p className="text-xs text-warm-600 leading-relaxed font-sans">
                {isVi
                  ? 'Chúng tôi trao quyền cho các nhà lãnh đạo đưa ra quyết định sắc bén trong các thông số quản trị chung.'
                  : 'We empower leaders to make decisive moves within clear, shared governance parameters.'}
              </p>
            </div>
            <div className="space-y-3 p-6 bg-warm-200/50 border border-warm-300">
              <span className="font-mono text-xs text-burgundy">
                {isVi ? '02 / TAY NGHỀ' : '02 / CRAFT'}
              </span>
              <h4 className="font-serif text-lg font-light text-[#111111]">
                {isVi ? 'Kỷ Luật Thẩm Mỹ' : 'Aesthetic Rigor'}
              </h4>
              <p className="text-xs text-warm-600 leading-relaxed font-sans">
                {isVi
                  ? 'Từ từng dòng code đến bản ghi nhớ nhà đầu tư, mọi sản phẩm bàn giao đều được chăm chút cẩn trọng.'
                  : 'From code lines to investor memorandums, every deliverable is crafted with uncompromising care.'}
              </p>
            </div>
            <div className="space-y-3 p-6 bg-warm-200/50 border border-warm-300">
              <span className="font-mono text-xs text-burgundy">
                {isVi ? '03 / KIÊN ĐỊNH' : '03 / PATIENCE'}
              </span>
              <h4 className="font-serif text-lg font-light text-[#111111]">
                {isVi ? 'Tầm Nhìn Thế Hệ' : 'Generational Horizon'}
              </h4>
              <p className="text-xs text-warm-600 leading-relaxed font-sans">
                {isVi
                  ? 'Chúng tôi thiết kế cho sự tích lũy nhiều thập kỷ, bảo vệ đội ngũ khỏi những áp lực ngắn hạn của thị trường.'
                  : 'We design for multi-decade compounding, insulating our teams from short-sighted market volatility.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spontaneous Application Banner */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-warm-600 uppercase block mb-1">
            {t.unsolicitedTag}
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
            {t.unsolicitedTitle}
          </span>
        </div>

        <a
          href={`mailto:${COMPANY_INFO.email}?subject=Unsolicited%20Candidacy%20-%20Matrix%20Holding`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-[#F5F3EE] hover:bg-burgundy text-xs tracking-[0.25em] font-medium uppercase transition-colors"
        >
          <span>{t.unsolicitedBtn}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </section>

      {/* Interactive Job Drawer Modal */}
      <JobModal
        position={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
}
