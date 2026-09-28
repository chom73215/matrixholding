import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  return (
    <div className="w-full min-h-[80vh] bg-[#F5F3EE] text-[#111111] flex flex-col justify-center items-center px-6 pt-32 pb-20 text-center">
      <div className="max-w-xl space-y-6">
        <span className="text-xs font-mono tracking-[0.4em] text-burgundy font-semibold uppercase">
          ERROR &bull; 404
        </span>
        <h1 className="font-serif text-6xl sm:text-8xl font-light text-[#111111] leading-none">
          {isVi ? (
            <>
              TỌA ĐỘ <br />
              <span className="font-serif font-normal text-burgundy">CHƯA XÁC ĐỊNH</span>
            </>
          ) : (
            <>
              UNMAPPED <br />
              <span className="font-serif font-normal text-burgundy">COORDINATE</span>
            </>
          )}
        </h1>
        <p className="text-sm text-warm-700 font-sans leading-relaxed">
          {isVi
            ? 'Trang hoặc hồ sơ lưu trữ bạn đang tìm kiếm không tồn tại trong cấu trúc hoạt động của Matrix Holding.'
            : "The requested page or archival record does not exist within Matrix Holding's active architecture."}
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#111111] text-[#F5F3EE] hover:bg-burgundy text-xs tracking-[0.25em] font-medium uppercase transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isVi ? 'TRỞ VỀ TRANG CHỦ' : 'RETURN TO SANCTUARY'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
