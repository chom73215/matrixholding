import type { EcosystemUnit, NewsArticle, CareerPosition, ValueItem } from '../types';

export const COMPANY_INFO = {
  name: 'Matrix Holding',
  tagline: 'The Art of Connection',
  taglineVi: 'Nghệ Thuật Kết Nối',
  email: 'matrixholding.support@gmail.com',
  phone: '(+84) 964 243 026',
  address: 'KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội',
  addressEn: 'Bac Linh Dam Urban Area, Hoang Liet Ward, Hanoi, Vietnam',
  year: '2026',
  concept: 'Concept 03 — The Art of Connection',
  conceptVi: 'Concept 03 — Nghệ Thuật Kết Nối',
  coordinates: '20.9705° N, 105.8342° E',
};

// Carefully selected monochrome / architectural / high-fashion visuals
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
  heroAlt: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
  network: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
  connect: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=85',
  ventures: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1600&q=85',
  aboutHero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85',
  aboutPhilosophy: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85',
  statement: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=85',
  careers: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85',
  contact: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=85',
  newsFeatured: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85',
  news1: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=85',
  news2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
  news3: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=85',
  news4: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85',
};

export const ECOSYSTEM_DATA: EcosystemUnit[] = [
  {
    id: 'matrix-network',
    number: '01',
    name: 'MATRIX NETWORK',
    subtitle: 'The Architectural Infrastructure of Synergy',
    subtitleVi: 'Hạ Tầng Kiến Trúc Của Sự Cộng Hưởng',
    category: 'INFRASTRUCTURE & OPERATIONS',
    categoryVi: 'HẠ TẦNG & VẬN HÀNH ĐỒNG BỘ',
    tagline: 'Connecting operational systems, enterprise channels, and shared execution foundations.',
    taglineVi: 'Kết nối hệ thống vận hành, kênh doanh nghiệp và nền tảng thực thi dùng chung.',
    description: 'Matrix Network builds the foundational bridges that unify specialized operating entities under a disciplined, cohesive framework. Rather than forcing conformity, it establishes shared intelligence, cross-functional logistics, and operational gravity.',
    descriptionVi: 'Matrix Network xây dựng các nhịp cầu nền tảng thống nhất các đơn vị vận hành chuyên biệt dưới một kỷ luật chặt chẽ. Thay vì ép buộc sự rập khuôn, mạng lưới kiến tạo tri thức dùng chung, logistics liên phòng ban và lực hút vận hành tổng thể.',
    detailedOverview: 'Matrix Network functions as the connective spine of our holding. By designing synchronized operational backbones, it allows distinct companies to maintain autonomous vigor while drawing upon collective structural efficiency. Through proprietary protocol alignment and unified strategic resources, Matrix Network turns discrete market participants into an integrated, mutually reinforcing alliance.',
    detailedOverviewVi: 'Matrix Network đóng vai trò là xương sống kết nối của toàn tập đoàn. Bằng việc thiết kế hệ thống vận hành đồng bộ, đơn vị cho phép từng công ty thành viên giữ vững sự nhạy bén tự chủ, đồng thời thừa hưởng hiệu suất cấu trúc tập thể vững vàng.',
    pillars: [
      'Institutional Shared Platforms & Operational Governance',
      'Synergistic Cross-Channel Logistics & Supply Orchestration',
      'Enterprise Digital Foundations & Real-Time Intelligence',
      'Cohesive Risk Mitigation & Unified Treasury Frameworks'
    ],
    pillarsVi: [
      'Nền tảng chia sẻ định chế & Quản trị vận hành chuẩn mực',
      'Logistics liên kênh & Điều phối chuỗi cung ứng cộng hưởng',
      'Nền tảng số hóa doanh nghiệp & Trí tuệ thời gian thực',
      'Quản trị rủi ro toàn diện & Khung quản lý ngân quỹ thống nhất'
    ],
    metrics: [
      { label: 'Network Multiplier', labelVi: 'Hệ Số Nhân Mạng Lưới', value: '3.4x' },
      { label: 'Unified Frameworks', labelVi: 'Khung Quy Chuẩn Đồng Bộ', value: '100%' },
      { label: 'Operational Nodes', labelVi: 'Điểm Nút Vận Hành', value: '18+' }
    ],
    image: IMAGES.network,
    caption: 'Interlocking structural pillars forming an unwavering collective foundation.',
    captionVi: 'Các trụ cột kiến trúc đan cài tạo nên nền móng tập thể vững chãi.',
  },
  {
    id: 'matrix-connect',
    number: '02',
    name: 'MATRIX CONNECT',
    subtitle: 'The Human & Strategic Relationship Fabric',
    subtitleVi: 'Cấu Trúc Quan Hệ Con Người & Liên Minh Chiến Lược',
    category: 'PARTNERSHIPS & ALLIANCES',
    categoryVi: 'ĐỐI TÁC & LIÊN MINH CHIẾN LƯỢC',
    tagline: 'Bridging leaders, visionary thinkers, institutional partners, and global strategic alliances.',
    taglineVi: 'Cầu nối giữa các nhà lãnh đạo, bộ óc viễn kiến, đối tác định chế và liên minh quốc tế.',
    description: 'Matrix Connect is the relationship catalyst of the holding. We believe that groundbreaking value is conceived at the intersections where visionary minds, cultural architects, and institutional capital converse with mutual trust.',
    descriptionVi: 'Matrix Connect là chất xúc tác quan hệ của tập đoàn. Chúng tôi tin rằng giá trị mang tính đột phá được nảy nở tại các giao điểm nơi những bộ óc nhìn xa trông rộng, kiến trúc sư văn hóa và nguồn vốn định chế đối thoại trên nền tảng niềm tin song phương.',
    detailedOverview: 'Connection is not a passive state—it is an art form. Matrix Connect curates high-trust ecosystems linking founders, sovereign and institutional partners, policy specialists, and creative leaders. By curating confidential forums, bilateral exchanges, and cross-sector dialogues, it reveals non-obvious partnerships that unlock unprecedented competitive vantage points.',
    detailedOverviewVi: 'Kết nối không phải là một trạng thái thụ động—đó là một bộ môn nghệ thuật. Matrix Connect tuyển chọn hệ sinh thái tín nhiệm cao gắn kết các nhà sáng lập, đối tác định chế, chuyên gia chính sách và nhà lãnh đạo sáng tạo, mở ra những thế cờ cạnh tranh vượt trội.',
    pillars: [
      'Curated Executive & Strategic Peer Exchanges',
      'Cross-Border Institutional & Sovereign Alliances',
      'Collaborative Venture Summits & Cultural Roundtables',
      'High-Trust Advisory Councils & Domain Thinkers'
    ],
    pillarsVi: [
      'Diễn đàn trao đổi kín giữa các nhà điều hành cấp cao',
      'Liên minh định chế & đối tác chiến lược xuyên biên giới',
      'Hội nghị thượng đỉnh khởi nghiệp & Bàn tròn văn hóa',
      'Hội đồng cố vấn tín nhiệm cao & Chuyên gia đầu ngành'
    ],
    metrics: [
      { label: 'Alliance Network', labelVi: 'Mạng Lưới Đối Tác', value: '45+' },
      { label: 'Cross-Sector Forums', labelVi: 'Diễn Đàn Liên Ngành', value: 'Quarterly' },
      { label: 'Trust Index', labelVi: 'Chỉ Số Tín Nhiệm', value: 'Top 1%' }
    ],
    image: IMAGES.connect,
    caption: 'Cantilevered architectural bridges creating passage between disparate domains.',
    captionVi: 'Nhịp cầu kiến trúc vươn dài nối liền các lĩnh vực độc lập.',
  },
  {
    id: 'matrix-ventures',
    number: '03',
    name: 'MATRIX VENTURES',
    subtitle: 'The Catalyst of Long-Horizon Capital & Creation',
    subtitleVi: 'Chất Xúc Tác Của Nguồn Vốn Kiên Định & Khởi Tạo Giá Trị',
    category: 'INVESTMENT & INCUBATION',
    categoryVi: 'ĐẦU TƯ CHIẾN LƯỢC & ƯƠM MẦM DOANH NGHIỆP',
    tagline: 'Cultivating transformative enterprises, high-conviction capital, and next-generation market catalysts.',
    taglineVi: 'Bồi đắp doanh nghiệp chuyển đổi, nguồn vốn kiên định và chất xúc tác thị trường tương lai.',
    description: 'Matrix Ventures provides strategic patient capital, incubation rigor, and structural backing to founders redefining their domains. We champion high conviction over volume, offering enduring stewardship from inception to global scale.',
    descriptionVi: 'Matrix Ventures cung cấp nguồn vốn kiên định dài hạn, quy trình ươm mầm kỷ luật và bệ đỡ cấu trúc vững chắc cho các nhà sáng lập đang tái định hình lĩnh vực của họ. Chúng tôi đề cao niềm tin sắc bén hơn số lượng dàn trải.',
    detailedOverview: 'Matrix Ventures represents the forward-looking arm of Matrix Holding. We invest in asymmetric opportunities where technological mastery meets enduring human utility. Unlike conventional venture models driven by short-cycle exits, our approach combines patient, multi-decade capital with direct access to the operational leverage of Matrix Network and the relationship depth of Matrix Connect.',
    detailedOverviewVi: 'Matrix Ventures đại diện cho tầm nhìn tương lai của Matrix Holding. Khác với các quỹ đầu tư mạo hiểm thông thường tìm kiếm thoái vốn ngắn hạn, chúng tôi kết hợp nguồn vốn kiên định kéo dài nhiều thập kỷ với đòn bẩy vận hành trực tiếp từ Matrix Network và chiều sâu quan hệ từ Matrix Connect.',
    pillars: [
      'High-Conviction Early & Growth Strategic Capital',
      'In-House Incubation & Conceptual Prototyping',
      'Global Scale Orchestration & Follow-On Syndication',
      'Value-Creation Playbooks with Ecosystem Synergies'
    ],
    pillarsVi: [
      'Nguồn vốn chiến lược giai đoạn sớm & tăng trưởng',
      'Ươm mầm nội bộ & Thử nghiệm mô hình ý niệm mới',
      'Điều phối mở rộng quy mô & Đồng đầu tư định chế',
      'Cẩm nang tạo dựng giá trị với sức mạnh cộng hưởng'
    ],
    metrics: [
      { label: 'Target Horizon', labelVi: 'Tầm Nhìn Mục Tiêu', value: '10+ Years' },
      { label: 'Conviction Ratio', labelVi: 'Tỷ Lệ Chọn Lọc', value: 'Selective' },
      { label: 'Strategic Alignment', labelVi: 'Sự Hòa Hợp Chiến Lược', value: 'Symbiotic' }
    ],
    image: IMAGES.ventures,
    caption: 'Ascending monolithic geometry expressing long-term vertical ambition.',
    captionVi: 'Hình khối đá nguyên khối vươn cao biểu đạt khát vọng tăng trưởng bền vững.',
  },
];

export const VALUES_DATA: ValueItem[] = [
  {
    number: '01',
    title: 'CONNECTION',
    titleVi: 'KẾT NỐI',
    subtitle: 'Resonance between complementary forces',
    subtitleVi: 'Sự cộng hưởng giữa những nguồn lực tương hỗ',
    description: 'True strength is not derived from isolated dominance, but from the intentional, harmonious alignment of disparate elements. We build conduits between talent, ideas, and strategic capital.',
    descriptionVi: 'Sức mạnh đích thực không đến từ sự thống trị biệt lập, mà từ sự sắp đặt hài hòa có chủ đích giữa các yếu tố tương hỗ. Chúng tôi xây dựng những mạch nối giữa nhân tài, ý tưởng và nguồn vốn chiến lược.',
  },
  {
    number: '02',
    title: 'CREATION',
    titleVi: 'KHỞI TẠO',
    subtitle: 'Originality sculpted with architectural discipline',
    subtitleVi: 'Tính nguyên bản được tạc khắc bằng kỷ luật kiến trúc',
    description: 'We do not passively manage assets; we sculpt distinctive solutions and cultivate new models of collaborative commerce that set enduring industry benchmarks.',
    descriptionVi: 'Chúng tôi không quản lý tài sản một cách thụ động; chúng tôi tạc nên những giải pháp đặc sắc và bồi đắp những mô hình thương mại hợp tác thiết lập chuẩn mực lâu dài cho ngành.',
  },
  {
    number: '03',
    title: 'GROWTH',
    titleVi: 'TĂNG TRƯỞNG',
    subtitle: 'Compounded, patient progression',
    subtitleVi: 'Tiến trình tích lũy kiên định, bền bỉ qua thời gian',
    description: 'We reject transient hype in favor of deliberate, compounding momentum. Every milestone is engineered to reinforce the stability and longevity of our entire collective.',
    descriptionVi: 'Chúng tôi khước từ những làn sóng sốt dẻo nhất thời để kiên định với đà tiến lũy tiến bền bỉ. Mỗi cột mốc đều được tính toán để củng cố sự vững chắc và trường tồn của cả tập thể.',
  },
  {
    number: '04',
    title: 'IMPACT',
    titleVi: 'TÁC ĐỘNG',
    subtitle: 'A lasting imprint upon culture and commerce',
    subtitleVi: 'Dấu ấn sâu sắc lên diện mạo văn hóa và thương mại',
    description: 'Our standard of success extends beyond balance sheets to include the ethical, intellectual, and economic elevation of the communities and ecosystems we touch.',
    descriptionVi: 'Thước đo thành công của chúng tôi vượt ra ngoài các báo cáo tài chính, hướng tới sự nâng tầm chuẩn mực đạo đức, tri thức và vị thế kinh tế của cộng đồng nơi chúng tôi hiện diện.',
  },
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'architecture-of-synergy',
    number: '01',
    date: '24.08.2026',
    category: 'EDITORIAL',
    categoryVi: 'XÃ LUẬN',
    title: 'The Architecture of Synergy: Why Modern Holdings Must Transcend Traditional Conglomerates',
    titleVi: 'Kiến Trúc Của Sự Cộng Hưởng: Vì Sao Holding Hiện Đại Cần Vượt Qua Mô Hình Tập Đoàn Cũ',
    excerpt: 'Examining the evolution of multi-entity governance from rigid parent hierarchies to decentralized, symbiotic ecosystems that foster autonomy while unlocking compounding scale.',
    excerptVi: 'Phân tích sự tiến hóa của quản trị đa thực thể từ cấu trúc phân cấp cứng nhắc sang hệ sinh thái cộng sinh phi tập trung giúp giữ vững quyền tự chủ đồng thời khai phóng quy mô tích lũy.',
    readTime: '6 MIN READ',
    readTimeVi: '6 PHÚT ĐỌC',
    featured: true,
    image: IMAGES.newsFeatured,
    author: 'Editorial Board',
    authorVi: 'Ban Biên Tập Chiến Lược',
    content: [
      'The 20th-century conglomerate was defined by centralization: monolithic headquarters directing subsidiary satellites with heavy administrative friction. In contrast, the modern holding company operates not as an empire of control, but as an architectural network of connection.',
      'At Matrix Holding, we view our role as master architects of synergy. We curate the conditions under which high-performing organizations retain their sovereign creative velocity while benefiting from mutual gravitational pull.',
      'When operational infrastructure (Matrix Network), human relationship capital (Matrix Connect), and forward-looking patient capital (Matrix Ventures) are harmoniously linked, the resulting entity creates value that exceeds the sum of its balance sheets.'
    ],
    contentVi: [
      'Mô hình tập đoàn thế kỷ 20 được định nghĩa bởi sự tập quyền cao độ: một tổng hành dinh nguyên khối chỉ đạo các công ty con vệ tinh với lực cản hành chính nặng nề. Ngược lại, công ty holding hiện đại không vận hành như một đế chế kiểm soát, mà như một mạng lưới kiến trúc của sự kết nối.',
      'Tại Matrix Holding, chúng tôi định vị vai trò của mình như những kiến trúc sư trưởng của sự cộng hưởng. Chúng tôi tạo dựng các điều kiện để những tổ chức tinh hoa duy trì vận tốc sáng tạo độc lập, đồng thời thụ hưởng lực hút trọng trường chung của cả tập thể.',
      'Khi hạ tầng vận hành (Matrix Network), nguồn vốn quan hệ con người (Matrix Connect) và nguồn vốn kiên định nhìn xa (Matrix Ventures) được gắn kết hài hòa, thực thể kiến tạo nên giá trị vượt trội hơn rất nhiều tổng tài sản trên sổ sách.'
    ]
  },
  {
    id: 'beyond-capital-networks',
    number: '02',
    date: '12.08.2026',
    category: 'VENTURES',
    categoryVi: 'ĐẦU TƯ',
    title: 'Beyond Capital: How Curated Networks Accelerate Venture Velocity',
    titleVi: 'Vượt Lên Nguồn Vốn: Mạng Lưới Chọn Lọc Giúp Tăng Tốc Doanh Nghiệp Ra Sao',
    excerpt: 'Capital has become commoditized. What transformative founders truly seek is high-trust access to complementary minds, institutional validation, and architectural stability.',
    excerptVi: 'Vốn thuần túy đã trở thành một yếu tố đại trà. Điều mà các nhà sáng lập chuyển đổi thực sự khao khát là quyền tiếp cận với sự tín nhiệm cao tới các bộ óc tương hỗ, sự chứng thực định chế và bệ đỡ cấu trúc ổn định.',
    readTime: '4 MIN READ',
    readTimeVi: '4 PHÚT ĐỌC',
    image: IMAGES.news1,
    author: 'Matrix Ventures Research',
    authorVi: 'Nhóm Nghiên Cứu Matrix Ventures',
    content: [
      'Money alone cannot solve structural complexity. In an era saturated with liquid funding, capital without context is inert.',
      'Our venture philosophy centers on the deliberate orchestration of ecosystem advantages. When a nascent venture is granted organic access to established distribution channels and seasoned operators, the typical incubation timeline compresses exponentially.'
    ],
    contentVi: [
      'Tiền bạc đơn thuần không thể tháo gỡ sự phức tạp về mặt cấu trúc. Trong kỷ nguyên thanh khoản dồi dào, nguồn vốn thiếu đi ngữ cảnh chiến lược sẽ trở nên trơ lì vô hiệu.',
      'Triết lý đầu tư của chúng tôi tập trung vào việc điều phối có chủ đích các lợi thế hệ sinh thái. Khi một doanh nghiệp non trẻ được trao quyền tiếp cận tự nhiên vào các kênh phân phối đã vững vàng và đội ngũ điều hành dạn dày kinh nghiệm, lộ trình ươm tạo sẽ được rút ngắn vượt bậc.'
    ]
  },
  {
    id: 'minimalism-in-governance',
    number: '03',
    date: '29.07.2026',
    category: 'PERSPECTIVES',
    categoryVi: 'GÓC NHÌN',
    title: 'Minimalism in Governance: Designing Agile Ecosystems for Unpredictable Decades',
    titleVi: 'Tối Giản Trong Quản Trị: Thiết Kế Hệ Sinh Thái Linh Hoạt Cho Những Thập Kỷ Biến Động',
    excerpt: 'How stripping unnecessary bureaucratic layers creates an organizational clarity capable of navigating geopolitical and technological flux with poise.',
    excerptVi: 'Cách thức lược bỏ các tầng nấc quan liêu dư thừa kiến tạo nên sự minh triết tổ chức có khả năng vượt qua những biến động địa chính trị và công nghệ với sự điềm tĩnh.',
    readTime: '5 MIN READ',
    readTimeVi: '5 PHÚT ĐỌC',
    image: IMAGES.news2,
    author: 'Strategic Office',
    authorVi: 'Văn Phòng Chiến Lược',
    content: [
      'Minimalism is frequently misunderstood as mere aesthetic restraint. In organizational design, minimalism is the relentless elimination of decorative governance.',
      'By establishing clear, non-negotiable architectural principles while leaving tactical execution fluid, we afford our business leaders maximum agility without compromising collective integrity.'
    ],
    contentVi: [
      'Chủ nghĩa tối giản thường bị hiểu lầm là sự kiềm chế về mặt thẩm mỹ bề nổi. Trong thiết kế tổ chức, tối giản chính là sự kiên quyết loại bỏ những tầng nấc quản trị mang tính trang trí thừa thãi.',
      'Bằng việc xác lập các nguyên tắc kiến trúc cốt lõi bất di bất dịch trong khi trao quyền thực thi linh hoạt, chúng tôi mang lại cho các nhà lãnh đạo doanh nghiệp sự nhạy bén tối đa mà không làm tổn hại đến tính toàn vẹn của tập thể.'
    ]
  },
  {
    id: 'cross-disciplinary-convergence',
    number: '04',
    date: '15.07.2026',
    category: 'EDITORIAL',
    categoryVi: 'XÃ LUẬN',
    title: 'Cross-Disciplinary Convergence: When Art Direction Meets Enterprise Scale',
    titleVi: 'Sự Hội Tụ Liên Ngành: Khi Chỉ Đạo Nghệ Thuật Gặp Gỡ Quy Mô Doanh Nghiệp',
    excerpt: 'Exploring why the highest echelons of modern business are taking cues from architectural studios, haute horlogerie, and fine art curatorship.',
    excerptVi: 'Khám phá lý do vì sao tầng lớp doanh nghiệp tinh hoa đương đại đang tiếp nhận cảm hứng từ các xưởng kiến trúc, nghệ thuật chế tác đồng hồ và giám tuyển nghệ thuật.',
    readTime: '7 MIN READ',
    readTimeVi: '7 PHÚT ĐỌC',
    image: IMAGES.news3,
    author: 'Creative Direction',
    authorVi: 'Bộ Phận Chỉ Đạo Sáng Tạo',
    content: [
      'The boundaries separating luxury art direction from institutional corporate strategy have dissolved. Discerning partners and consumers no longer tolerate generic corporate templates.',
      'Every interaction—from an annual report to an executive boardroom exchange—is an act of cultural storytelling. Matrix Holding treats every touchpoint as a deliberate artistic expression of our foundational philosophy.'
    ],
    contentVi: [
      'Ranh giới phân tách giữa chỉ đạo nghệ thuật cao cấp và chiến lược tập đoàn định chế đã hoàn toàn tan biến. Những đối tác và khách hàng tinh tế ngày nay không còn hứng thú với những khuôn mẫu doanh nghiệp chung chung vô cảm.',
      'Mỗi tương tác—từ một báo cáo thường niên đến một cuộc họp hội đồng quản trị—đều là một tuyên ngôn văn hóa. Matrix Holding trân trọng từng điểm chạm như một sự biểu đạt nghệ thuật có chủ đích của triết lý cốt lõi.'
    ]
  },
  {
    id: 'the-human-vector',
    number: '05',
    date: '02.07.2026',
    category: 'ECOSYSTEM',
    categoryVi: 'HỆ SINH THÁI',
    title: 'The Human Vector: Re-Centering Relationship Capital in Strategic Mergers',
    titleVi: 'Nhân Tố Con Người: Đặt Nguồn Vốn Quan Hệ Vào Trung Tâm Các Thương Vụ Sáp Nhập',
    excerpt: 'Behind every financial algorithm and balance sheet consolidation lies the intangible chemistry of human conviction and collective alignment.',
    excerptVi: 'Đằng sau mọi thuật toán tài chính và hợp nhất sổ sách kế toán là chất xúc tác vô hình của niềm tin con người và sự đồng thuận tập thể.',
    readTime: '5 MIN READ',
    readTimeVi: '5 PHÚT ĐỌC',
    image: IMAGES.news4,
    author: 'Matrix Connect Advisory',
    authorVi: 'Hội Đồng Cố Vấn Matrix Connect',
    content: [
      'Mergers and alliances frequently fail not from mathematical discrepancies, but from emotional divergence. The intangible resonance between leadership teams dictates ultimate success.',
      'Through Matrix Connect, we place interpersonal trust, shared philosophical values, and open dialogue at the forefront of every transaction.'
    ],
    contentVi: [
      'Các thương vụ sáp nhập và liên minh thất bại phần lớn không xuất phát từ sai lệch con số trên giấy, mà từ sự phân rã cảm xúc và thiếu gắn kết tầm nhìn. Sự đồng điệu vô hình giữa các đội ngũ lãnh đạo mới là yếu tố quyết định thành bại sau cùng.',
      'Thông qua Matrix Connect, chúng tôi đặt sự tín nhiệm cá nhân, các giá trị triết học chung và tinh thần đối thoại cởi mở lên vị trí ưu tiên hàng đầu trong mọi giao dịch.'
    ]
  }
];

export const CAREERS_DATA: CareerPosition[] = [
  {
    id: 'frontend-developer',
    number: '01',
    title: 'FRONTEND DEVELOPER',
    titleVi: 'KỸ SƯ LẬP TRÌNH FRONTEND',
    department: 'TECH',
    departmentVi: 'CÔNG NGHỆ',
    type: 'FULL-TIME',
    typeVi: 'TOÀN THỜI GIAN',
    location: 'HANOI',
    locationVi: 'HÀ NỘI',
    experience: '3+ YEARS',
    experienceVi: '3+ NĂM KINH NGHIỆM',
    description: 'We are seeking an exceptional Frontend Developer with an immaculate eye for typography, micro-interactions, and high-performance web craftsmanship to elevate our digital presence across Matrix Holding.',
    descriptionVi: 'Chúng tôi tìm kiếm một Kỹ sư Frontend xuất sắc với gu thẩm mỹ tinh tế về typography, vi tương tác mượt mà và kỹ nghệ lập trình chuẩn xác cao để nâng tầm trải nghiệm số của Matrix Holding.',
    responsibilities: [
      'Architect and build high-performance web interfaces with strict attention to typography, spacing, and editorial layout.',
      'Collaborate directly with our Art Director and product teams to translate minimalist design concepts into buttery-smooth code.',
      'Optimize web vitals, accessibility, and cross-device responsiveness across modern viewports.',
      'Maintain modular, scalable design systems and reusable component architectures.'
    ],
    responsibilitiesVi: [
      'Thiết kế kiến trúc và phát triển giao diện web hiệu năng cao với sự chú trọng tuyệt đối tới typography, tỷ lệ khoảng cách và bố cục ấn phẩm.',
      'Làm việc trực tiếp cùng Giám đốc Nghệ thuật để chuyển hóa các ý niệm thiết kế tối giản thành những dòng mã mượt mà.',
      'Tối ưu hóa các chỉ số web vitals, chuẩn truy cập accessibility và tính tương thích trên mọi màn hình thiết bị.',
      'Xây dựng và chuẩn hóa hệ thống thiết kế (Design System) theo dạng module hóa mở rộng.'
    ],
    requirements: [
      'Demonstrated mastery of modern JavaScript/TypeScript, React, Tailwind CSS, and CSS animation principles.',
      'Deep appreciation for editorial typography, whitespace harmony, and luxury brand aesthetics.',
      'Experience in building fluid, responsive, and cross-browser compliant applications.',
      'Ability to collaborate thoughtfully in a fast-evolving, high-standard environment.'
    ],
    requirementsVi: [
      'Thành thạo chuyên sâu JavaScript/TypeScript hiện đại, React, Tailwind CSS và các kỹ thuật chuyển động CSS tinh tế.',
      'Cảm quan sâu sắc về nghệ thuật chữ editorial, sự hài hòa của khoảng trắng và tính thẩm mỹ của thương hiệu cao cấp.',
      'Kinh nghiệm thực tiễn xây dựng ứng dụng mượt mà, responsive chuẩn xác trên nhiều trình duyệt.',
      'Khả năng hợp tác chu đáo trong môi trường đòi hỏi tiêu chuẩn hoàn thiện khắt khe.'
    ]
  },
  {
    id: 'business-development',
    number: '02',
    title: 'BUSINESS DEVELOPMENT',
    titleVi: 'GIÁM ĐỐC PHÁT TRIỂN KINH DOANH',
    department: 'BUSINESS',
    departmentVi: 'CHIẾN LƯỢC KINH DOANH',
    type: 'FULL-TIME',
    typeVi: 'TOÀN THỜI GIAN',
    location: 'HANOI',
    locationVi: 'HÀ NỘI',
    experience: '4+ YEARS',
    experienceVi: '4+ NĂM KINH NGHIỆM',
    description: 'Drive high-level strategic partnerships, identify synergistic growth opportunities, and forge cross-sector alliances across Vietnam and the broader Southeast Asian region.',
    descriptionVi: 'Dẫn dắt các mối quan hệ đối tác chiến lược cấp cao, nhận diện cơ hội tăng trưởng cộng hưởng và kiến tạo các liên minh liên ngành tại Việt Nam và khu vực Đông Nam Á.',
    responsibilities: [
      'Originate, structure, and nurture strategic commercial relationships for Matrix Network and Matrix Connect.',
      'Analyze market trends, identify prospective enterprise partners, and craft bespoke partnership proposals.',
      'Represent Matrix Holding at executive symposiums, industry roundtables, and high-level bilateral summits.',
      'Work alongside the holding leadership team to shape commercial expansion playbooks.'
    ],
    responsibilitiesVi: [
      'Khởi tạo, cấu trúc và nuôi dưỡng các quan hệ thương mại chiến lược cho Matrix Network và Matrix Connect.',
      'Phân tích xu hướng thị trường, xác định đối tác doanh nghiệp tiềm năng và soạn thảo đề án hợp tác may đo.',
      'Đại diện cho Matrix Holding tại các hội nghị điều hành, bàn tròn chuyên ngành và các hội nghị thượng đỉnh song phương.',
      'Phối hợp cùng ban lãnh đạo tập đoàn định hình cẩm nang mở rộng thị trường.'
    ],
    requirements: [
      'Proven track record in corporate business development, investment banking, or high-tier consulting.',
      'Exceptional interpersonal, negotiation, and bilateral communication capabilities.',
      'Deep network within regional enterprise ecosystems and institutional circles.',
      'Fluency in Vietnamese and English with refined commercial acumen.'
    ],
    requirementsVi: [
      'Bề dày thành tích đã được kiểm chứng trong phát triển kinh doanh doanh nghiệp, ngân hàng đầu tư hoặc tư vấn chiến lược.',
      'Kỹ năng đàm phán, giao tiếp song phương và xây dựng quan hệ xuất chúng.',
      'Mạng lưới quan hệ sâu rộng trong cộng đồng doanh nghiệp và giới định chế khu vực.',
      'Thành thạo tiếng Việt và tiếng Anh với sự nhạy bén thương mại sắc sảo.'
    ]
  },
  {
    id: 'marketing-executive',
    number: '03',
    title: 'MARKETING EXECUTIVE',
    titleVi: 'CHUYÊN VIÊN TRUYỀN THÔNG THƯƠNG HIỆU',
    department: 'MARKETING',
    departmentVi: 'TRUYỀN THÔNG & TIẾP THỊ',
    type: 'FULL-TIME',
    typeVi: 'TOÀN THỜI GIAN',
    location: 'HANOI',
    locationVi: 'HÀ NỘI',
    experience: '2-4 YEARS',
    experienceVi: '2-4 NĂM KINH NGHIỆM',
    description: 'Curate the public narrative and brand prestige of Matrix Holding through editorial publications, digital channels, and exclusive private engagement initiatives.',
    descriptionVi: 'Giám tuyển câu chuyện thương hiệu và uy tín định chế của Matrix Holding qua các ấn phẩm chuyên khảo, kênh truyền thông số và các sự kiện kết nối đối tác chọn lọc.',
    responsibilities: [
      'Execute multi-channel brand campaigns aligned with our luxury editorial aesthetic and minimal art direction.',
      'Oversee content creation for our digital magazine, thought leadership pieces, and corporate communications.',
      'Coordinate private brand salons, investor showcases, and strategic ecosystem events.',
      'Monitor brand sentiment, engagement analytics, and institutional perception.'
    ],
    responsibilitiesVi: [
      'Triển khai các chiến dịch thương hiệu đa kênh bám sát tính thẩm mỹ cao cấp và định hướng nghệ thuật tối giản.',
      'Quản lý khâu sáng tạo nội dung cho tạp chí điện tử, các bài viết tư tưởng dẫn dắt và thông cáo doanh nghiệp.',
      'Điều phối các buổi salon thương hiệu kín, tọa đàm nhà đầu tư và sự kiện hệ sinh thái chiến lược.',
      'Theo dõi chỉ số cảm nhận thương hiệu và mức độ tương tác của giới định chế.'
    ],
    requirements: [
      'Background in luxury, architecture, high-end agency, or tier-one corporate brand management.',
      'Impeccable editorial writing skills in both Vietnamese and English.',
      'Nuanced aesthetic sensibility aligned with minimalist and typography-driven design.',
      'Strong organizational skills and meticulous attention to detail.'
    ],
    requirementsVi: [
      'Kinh nghiệm trong ngành hàng xa xỉ, kiến trúc, agency sáng tạo hàng đầu hoặc quản trị thương hiệu tập đoàn lớn.',
      'Kỹ năng viết lách chuẩn mực editorial xuất sắc bằng cả tiếng Việt và tiếng Anh.',
      'Gu thẩm mỹ tinh tế, đồng điệu với thiết kế tối giản lấy chữ làm trọng tâm.',
      'Kỹ năng tổ chức công việc mạch lạc và sự tỉ mỉ tới từng chi tiết nhỏ.'
    ]
  },
  {
    id: 'investment-associate',
    number: '04',
    title: 'INVESTMENT ASSOCIATE',
    titleVi: 'CHUYÊN VIÊN PHÂN TÍCH ĐẦU TƯ',
    department: 'VENTURES',
    departmentVi: 'QUỸ ĐẦU TƯ VENTURES',
    type: 'FULL-TIME',
    typeVi: 'TOÀN THỜI GIAN',
    location: 'HANOI',
    locationVi: 'HÀ NỘI',
    experience: '3+ YEARS',
    experienceVi: '3+ NĂM KINH NGHIỆM',
    description: 'Support Matrix Ventures in sourcing, evaluating, and executing high-conviction strategic investments in transformative businesses and technological frontiers.',
    descriptionVi: 'Đồng hành cùng Matrix Ventures trong việc tìm kiếm, thẩm định và triển khai các khoản đầu tư chiến lược có niềm tin cao vào các doanh nghiệp chuyển đổi và biên giới công nghệ.',
    responsibilities: [
      'Conduct rigorous commercial, financial, and strategic due diligence on prospective portfolio companies.',
      'Build comprehensive financial models, valuation analyses, and investment memorandums.',
      'Provide ongoing strategic and operational support to existing portfolio founders.',
      'Synthesize industry landscapes and formulate thematic investment theses.'
    ],
    responsibilitiesVi: [
      'Thực hiện thẩm định thương mại, tài chính và chiến lược toàn diện đối với các công ty mục tiêu.',
      'Xây dựng mô hình tài chính chuyên sâu, định giá doanh nghiệp và soạn thảo bản trình bày đầu tư.',
      'Hỗ trợ chiến lược và vận hành liên tục cho các nhà sáng lập thuộc danh mục đầu tư hiện hữu.',
      'Tổng hợp bức tranh toàn cảnh ngành và xây dựng luận điểm đầu tư theo chủ đề.'
    ],
    requirements: [
      'Experience in venture capital, private equity, corporate development, or transaction advisory.',
      'Strong financial acumen, analytical rigor, and critical thinking capabilities.',
      'Passion for emerging technologies, sustainable models, and transformative entrepreneurship.',
      'Bachelor’s or Master’s degree in Finance, Economics, Engineering, or related disciplines.'
    ],
    requirementsVi: [
      'Kinh nghiệm làm việc tại các quỹ đầu tư mạo hiểm (VC), quỹ đầu tư tư nhân (PE), ban phát triển doanh nghiệp hoặc tư vấn tài chính.',
      'Tư duy tài chính sắc bén, kỷ luật phân tích logic và kỹ năng tư duy phản biện cao.',
      'Đam mê với các mô hình bền vững và tinh thần khởi nghiệp chuyển đổi.',
      'Tốt nghiệp Cử nhân hoặc Thạc sĩ các ngành Tài chính, Kinh tế, Kỹ thuật hoặc lĩnh vực liên quan.'
    ]
  },
  {
    id: 'art-director',
    number: '05',
    title: 'ART DIRECTOR & BRAND STRATEGIST',
    titleVi: 'GIÁM ĐỐC NGHỆ THUẬT & CHIẾN LƯỢC THƯƠNG HIỆU',
    department: 'CREATIVE',
    departmentVi: 'SÁNG TẠO NGHỆ THUẬT',
    type: 'FULL-TIME',
    typeVi: 'TOÀN THỜI GIAN',
    location: 'HANOI',
    locationVi: 'HÀ NỘI',
    experience: '5+ YEARS',
    experienceVi: '5+ NĂM KINH NGHIỆM',
    description: 'Set the visual paradigm, editorial identity, and design excellence across all physical and digital expressions of Matrix Holding.',
    descriptionVi: 'Xác lập chuẩn mực thị giác, nhận diện editorial và định hình vẻ đẹp thiết kế xuyên suốt mọi điểm chạm vật lý lẫn kỹ thuật số của Matrix Holding.',
    responsibilities: [
      'Direct the visual language, typography guidelines, and spatial branding across all holding entities.',
      'Lead the conceptualization and production of monographs, annual publications, and digital experiences.',
      'Oversee photography, architectural documentation, and artistic commissions.',
      'Ensure absolute coherence and uncompromising aesthetic quality across every brand touchpoint.'
    ],
    responsibilitiesVi: [
      'Chỉ đạo ngôn ngữ thị giác, quy chuẩn typography và nhận diện không gian trên toàn bộ các đơn vị trực thuộc.',
      'Chủ trì ý niệm và quy trình xuất bản các ấn phẩm chuyên khảo, báo cáo thường niên và trải nghiệm số.',
      'Giám sát công tác nhiếp ảnh, tư liệu hóa kiến trúc và các đơn đặt hàng nghệ thuật đặc biệt.',
      'Bảo đảm tính nhất quán tuyệt đối và chuẩn mực thẩm mỹ không nhân nhượng trên mọi ấn phẩm.'
    ],
    requirements: [
      'Stunning portfolio demonstrating high-end editorial, architectural, or luxury brand direction.',
      'Expertise in typography systems, grid architectures, and physical print production.',
      'Proficiency in design tools and modern interactive design frameworks.',
      'Visionary mindset with the ability to articulate artistic concepts to executive leadership.'
    ],
    requirementsVi: [
      'Portfolio ấn tượng chứng minh năng lực chỉ đạo nghệ thuật cho các thương hiệu xa xỉ, kiến trúc hoặc editorial cao cấp.',
      'Am hiểu sâu sắc về hệ thống typography, cấu trúc lưới đồ họa và kỹ thuật in ấn mỹ thuật.',
      'Làm chủ các công cụ thiết kế chuyên sâu và các khung thiết kế tương tác đương đại.',
      'Tư duy nhìn xa với khả năng truyền đạt thuyết phục các ý niệm nghệ thuật tới ban lãnh đạo.'
    ]
  }
];
