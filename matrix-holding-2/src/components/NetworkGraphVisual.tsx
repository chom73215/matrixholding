import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, TrendingUp, Layers, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NetworkGraphVisualProps {
  onSelectEcosystem?: (id: string) => void;
  activeId?: string;
}

export const NetworkGraphVisual: React.FC<NetworkGraphVisualProps> = ({
  onSelectEcosystem,
  activeId,
}) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const { language } = useLanguage();

  const nodes = [
    {
      id: 'matrix-network',
      name: 'MATRIX NETWORK',
      number: '01',
      tagline: language === 'vi' ? 'Con Người & Cộng Đồng' : 'People & Communities',
      icon: Network,
      color: '#00F0FF',
      pos: 'md:translate-x-[-180px] md:translate-y-[-110px] lg:translate-x-[-260px] lg:translate-y-[-120px]',
      angle: '210deg',
      status: language === 'vi' ? 'ĐÃ ĐỒNG BỘ' : 'SYNCHRONIZED',
    },
    {
      id: 'matrix-connect',
      name: 'MATRIX CONNECT',
      number: '02',
      tagline: language === 'vi' ? 'Doanh Nghiệp & Cầu Nối' : 'Enterprises & Bridges',
      icon: Layers,
      color: '#00FF9D',
      pos: 'md:translate-x-[180px] md:translate-y-[-110px] lg:translate-x-[260px] lg:translate-y-[-120px]',
      angle: '330deg',
      status: language === 'vi' ? 'TỐC ĐỘ CAO' : 'HIGH VELOCITY',
    },
    {
      id: 'matrix-ventures',
      name: 'MATRIX VENTURES',
      number: '03',
      tagline: language === 'vi' ? 'Nguồn Vốn & Đổi Mới' : 'Capital & Innovation',
      icon: TrendingUp,
      color: '#38BDF8',
      pos: 'md:translate-x-[0px] md:translate-y-[150px] lg:translate-x-[0px] lg:translate-y-[180px]',
      angle: '90deg',
      status: language === 'vi' ? 'ĐANG ƯƠM TẠO' : 'INCUBATING',
    },
  ];

  const handleNodeClick = (id: string) => {
    if (onSelectEcosystem) {
      onSelectEcosystem(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-12 py-10 px-4 flex flex-col items-center justify-center min-h-[580px] select-none">
      {/* Background Matrix Target Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] lg:w-[620px] lg:h-[620px] rounded-full border border-white/5 animate-pulse-subtle" />
        <div className="absolute w-[240px] h-[240px] md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px] rounded-full border border-dashed border-[#00F0FF]/15 animate-spin" style={{ animationDuration: '60s' }} />
        <div className="absolute w-[160px] h-[160px] md:w-[260px] md:h-[260px] rounded-full border border-white/5" />
      </div>

      {/* SVG Connection Lines for desktop */}
      <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 600">
        <defs>
          <linearGradient id="lineGradNetwork" x1="50%" y1="50%" x2="24%" y2="28%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradConnect" x1="50%" y1="50%" x2="76%" y2="28%">
            <stop offset="0%" stopColor="#00FF9D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00FF9D" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradVentures" x1="50%" y1="50%" x2="50%" y2="82%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Line 1: Center to Network */}
        <line x1="500" y1="300" x2="240" y2="170" stroke="url(#lineGradNetwork)" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle r="3.5" fill="#00F0FF">
          <animateMotion path="M500,300 L240,170 M240,170 L500,300" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Line 2: Center to Connect */}
        <line x1="500" y1="300" x2="760" y2="170" stroke="url(#lineGradConnect)" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle r="3.5" fill="#00FF9D">
          <animateMotion path="M500,300 L760,170 M760,170 L500,300" dur="4.5s" repeatCount="indefinite" />
        </circle>

        {/* Line 3: Center to Ventures */}
        <line x1="500" y1="300" x2="500" y2="480" stroke="url(#lineGradVentures)" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle r="3.5" fill="#38BDF8">
          <animateMotion path="M500,300 L500,480 M500,480 L500,300" dur="3.8s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* CENTRAL CORE NODE: MATRIX HOLDING */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-[#070A0F]/95 border border-[#00F0FF]/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] group backdrop-blur-md cursor-pointer text-center max-w-[280px]"
        onClick={() => {
          const el = document.getElementById('ecosystem-overview');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {/* Corner tech accents */}
        <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00F0FF]" />
        <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00FF9D]" />

        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F0FF]/20 to-[#00FF9D]/10 border border-[#00F0FF]/40 flex items-center justify-center mb-3">
          <Zap className="w-6 h-6 text-[#00F0FF] animate-pulse" />
        </div>
        <div className="text-[10px] font-mono tracking-widest text-[#00F0FF] uppercase mb-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
          {language === 'vi' ? 'NODE LÕI TRUNG TÂM' : 'CENTRAL CORE NODE'}
        </div>
        <h3 className="text-xl md:text-2xl font-bold tracking-wider text-white">
          MATRIX <span className="text-[#00F0FF]">HOLDING</span>
        </h3>
        <p className="text-xs text-zinc-400 mt-1 font-mono">
          {language === 'vi' ? 'MA TRẬN NGUỒN VỐN & CÔNG NGHỆ' : 'UNIFIED CAPITAL & TECH MATRIX'}
        </p>
        <div className="mt-3 text-[10px] font-mono text-zinc-500 border-t border-white/10 pt-2 w-full flex justify-between">
          <span>PORTAL v2.6</span>
          <span className="text-[#00FF9D]">{language === 'vi' ? '3 KÊNH KẾT NỐI' : '3 CHANNELS'}</span>
        </div>
      </motion.div>

      {/* SATELLITE NODES */}
      <div className="w-full relative mt-8 md:mt-0 flex flex-col md:block items-center gap-4 z-20">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = activeId === node.id || hoveredNode === node.id;

          return (
            <motion.div
              key={node.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredNode(node.id)}
              onHoverEnd={() => setHoveredNode(null)}
              onClick={() => handleNodeClick(node.id)}
              className={`
                w-full max-w-[290px] md:w-[260px] lg:w-[280px] p-5 rounded-xl cursor-pointer transition-all duration-300
                bg-[#0D1117]/90 backdrop-blur-md border 
                ${isSelected 
                  ? 'border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.25)] translate-y-[-2px]' 
                  : 'border-white/10 hover:border-white/30'}
                md:absolute md:top-1/2 md:left-1/2 ${node.pos}
              `}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                  {node.number}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  {node.status}
                </span>
              </div>

              <div className="flex items-center gap-3 mt-1">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${node.color}15`,
                    borderColor: `${node.color}40`,
                    color: node.color,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base tracking-wide flex items-center gap-1 group-hover:text-[#00F0FF]">
                    {node.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {node.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 group-hover:text-white">
                <span className="text-[11px] font-mono text-zinc-400">
                  {language === 'vi' ? 'KHÁM PHÁ TRỤ CỘT' : 'EXPLORE PILLAR'}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-[#00F0FF]" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Visual Subtitle & Telemetry Bar */}
      <div className="mt-12 md:mt-24 text-center z-10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
          {language === 'vi' ? 'ĐỘ TRỄ: <1.2ms' : 'LATENCY: <1.2ms'}
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
          {language === 'vi' ? 'TÍNH LIÊN THÔNG: 100%' : 'INTERCONNECTIVITY: 100%'}
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
          {language === 'vi' ? '3 TRỤ CỘT ĐÃ ĐỒNG BỘ' : '3 PILLARS SYNCHRONIZED'}
        </span>
      </div>
    </div>
  );
};
