import { Link } from 'react-router-dom';
import { COMPANY_INFO, IMAGES, VALUES_DATA } from '../data/content';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].about;
  const isVi = language === 'vi';

  return (
    <div className="w-full bg-[#F5F3EE] text-[#111111] pt-28">
      {/* ========================================================
          1. ABOUT HERO
          ABOUT THE HOLDING + One large architectural image
          ======================================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16 md:pb-24 border-b border-warm-300">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-warm-300 pb-8 mb-12 gap-6">
          <div>
            <p className="text-xs font-mono tracking-[0.35em] text-warm-600 uppercase mb-3">
              {t.tag}
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#111111] leading-[0.9] tracking-tight">
              {t.title1} <br />
              <span className="font-serif font-normal text-burgundy">{t.title2}</span>
            </h1>
          </div>

          <div className="text-xs font-mono text-warm-600 space-y-1">
            <p className="tracking-widest">MATRIX HOLDING CORP.</p>
            <p className="text-warm-500">{t.est}</p>
            <p className="text-burgundy font-semibold">{t.concept}</p>
          </div>
        </div>

        {/* Large Architectural Image */}
        <div className="w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden bg-warm-200 border border-warm-300 relative">
          <img
            src={IMAGES.aboutHero}
            alt="Matrix Holding Architectural Space"
            className="w-full h-full object-cover filter grayscale contrast-115"
          />
          <div className="absolute bottom-4 left-4 bg-[#111111]/85 text-[#F5F3EE] px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase backdrop-blur-sm">
            FIG. ARCHITECTURAL SANCTUARY &bull; {isVi ? 'TRỤ SỞ HÀ NỘI' : 'HANOI HEADQUARTERS'}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECTION: WHO WE ARE
          Text width ~600-700px for pure editorial feeling.
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-warm-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-mono tracking-[0.3em] text-burgundy font-semibold uppercase">
              {t.whoTag}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#111111] leading-snug">
              {t.whoHeading}
            </h2>
            <div className="h-px w-16 bg-warm-400 pt-px" />
            <p className="text-xs text-warm-600 font-sans tracking-wide">
              {isVi
                ? `Đặt trụ sở tại ${COMPANY_INFO.address}, chúng tôi kết nối bản sắc địa phương với kỷ luật quản trị toàn cầu.`
                : `Headquartered at ${COMPANY_INFO.addressEn}, we bridge regional heritage with global structural rigor.`}
            </p>
          </div>

          {/* Strict 600-700px editorial column */}
          <div className="lg:col-span-8 max-w-[680px] space-y-8 font-sans text-base sm:text-lg text-warm-800 leading-relaxed">
            {isVi ? (
              <>
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:text-[#111111]">
                  Matrix Holding được thành lập trên một tiền đề cốt lõi: mô hình tập đoàn kinh doanh truyền thống đang bộc lộ những giới hạn rõ rệt. Sự tập quyền nặng nề và những sức ép cộng hưởng hình thức thường làm triệt tiêu tính sáng tạo hơn là nuôi dưỡng nó.
                </p>
                <p>
                  Thay vào đó, chúng tôi định hình một hệ sinh thái được chỉ đạo theo tư duy nghệ thuật kiến trúc. Chúng tôi không vận hành như một thực thể chi phối áp đặt, mà là một nền tảng bệ đỡ kết nối bốn chiều kích quan trọng: <strong>con người</strong>, <strong>ý tưởng</strong>, <strong>doanh nghiệp</strong> và <strong>những vận hội dài hạn</strong>.
                </p>
                <p>
                  Bằng cách tách biệt quyền tự chủ vận hành khỏi sức mạnh chia sẻ cấu trúc, các doanh nghiệp thành viên của Matrix Holding giữ trọn được tính nhạy bén của các studio tinh hoa, đồng thời commanding được khả năng phục hồi tài chính và mạng lưới liên minh của một holding định chế.
                </p>
              </>
            ) : (
              <>
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:text-[#111111]">
                  Matrix Holding was conceived on a singular premise: that the traditional corporate conglomerate is fundamentally obsolete. Heavy centralization and generic synergies stifle entrepreneurship rather than elevate it.
                </p>
                <p>
                  In its place, we have engineered an art-directed ecosystem. We operate not as an oppressive parent entity, but as a deliberate architectural platform connecting four vital dimensions: <strong>people</strong>, <strong>ideas</strong>, <strong>businesses</strong>, and <strong>generational opportunities</strong>.
                </p>
                <p>
                  By decoupling operational autonomy from shared structural leverage, our companies retain the swiftness of boutique creative studios while commanding the balance-sheet resilience and distribution power of an institutional holding.
                </p>
              </>
            )}

            <div className="pt-6 border-t border-warm-300 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-warm-600">
              <div>
                <span className="block text-burgundy font-bold text-lg font-serif">03</span>
                <span>{isVi ? 'ĐƠN VỊ CỐT LÕI' : 'CORE UNITS'}</span>
              </div>
              <div>
                <span className="block text-[#111111] font-bold text-lg font-serif">100%</span>
                <span>{isVi ? 'QUYỀN TỰ CHỦ' : 'INDEPENDENCE'}</span>
              </div>
              <div>
                <span className="block text-[#111111] font-bold text-lg font-serif">
                  {isVi ? 'DÀI HẠN' : 'LONG'}
                </span>
                <span>{isVi ? 'NGUỒN VỐN KIÊN ĐỊNH' : 'HORIZON CAPITAL'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECTION: VISION (Heading cực lớn)
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-warm-300">
        <div className="space-y-8">
          <p className="text-xs font-mono tracking-[0.35em] text-warm-600 uppercase">
            {t.visionTag}
          </p>

          <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light text-[#111111] leading-none tracking-tight">
            {t.visionHeading}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-warm-300">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-warm-600 uppercase tracking-widest">
                {isVi ? 'TẦM NHÌN CHIẾN LƯỢC' : 'STRATEGIC HORIZON'}
              </span>
            </div>
            <div className="lg:col-span-8 max-w-[720px]">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#111111] leading-snug">
                {t.visionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SECTION: MISSION (Heading cực lớn)
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-warm-300 bg-warm-200/40">
        <div className="space-y-8">
          <p className="text-xs font-mono tracking-[0.35em] text-warm-600 uppercase">
            {t.missionTag}
          </p>

          <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light text-[#111111] leading-none tracking-tight">
            {t.missionHeading}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-warm-300">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-warm-600 uppercase tracking-widest">
                {isVi ? 'NGUYÊN TẮC HÀNH ĐỘNG' : 'EXECUTION TENET'}
              </span>
            </div>
            <div className="lg:col-span-8 max-w-[720px]">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#111111] leading-snug">
                {t.missionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SECTION: VALUES
          4 giá trị: CONNECTION, CREATION, GROWTH, IMPACT
          KHÔNG sử dụng icon card. DÙNG TYPOGRAPHY + HORIZONTAL LINES.
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-warm-300">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.35em] text-warm-600 uppercase mb-3">
            {t.valuesTag}
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#111111] leading-none">
            {t.valuesTitle}
          </h2>
          <p className="text-xs font-mono text-warm-600 tracking-widest mt-2 uppercase">
            {t.valuesSub}
          </p>
        </div>

        {/* Editorial Typography List with Horizontal Lines (NO icon cards!) */}
        <div className="divide-y divide-warm-300 border-t border-b border-warm-300">
          {VALUES_DATA.map((value) => {
            const title = isVi ? value.titleVi : value.title;
            const subtitle = isVi ? value.subtitleVi : value.subtitle;
            const description = isVi ? value.descriptionVi : value.description;

            return (
              <div
                key={value.number}
                className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group hover:bg-warm-200/30 transition-colors px-2 sm:px-4"
              >
                {/* Number */}
                <div className="lg:col-span-2 font-mono text-xs sm:text-sm text-burgundy tracking-widest">
                  {value.number} / 04
                </div>

                {/* Title in large typography */}
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] group-hover:text-burgundy transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs font-mono text-warm-600 uppercase tracking-widest mt-1">
                    {subtitle}
                  </p>
                </div>

                {/* Editorial Description */}
                <div className="lg:col-span-6 max-w-xl">
                  <p className="text-sm sm:text-base text-warm-700 font-sans leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Navigation to Ecosystem */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-warm-600 uppercase block mb-1">
            {isVi ? 'TIẾP TỤC KHÁM PHÁ' : 'CONTINUE EXPLORING'}
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
            {t.ctaNext}
          </span>
        </div>

        <Link
          to="/ecosystem"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-[#F5F3EE] hover:bg-burgundy text-xs tracking-[0.25em] font-medium uppercase transition-colors"
        >
          <span>{t.ctaBtn}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
