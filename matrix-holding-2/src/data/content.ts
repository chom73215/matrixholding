import type { Language } from '../context/LanguageContext';

export interface EcosystemItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyPillars: { title: string; desc: string }[];
  accentColor: string;
  metrics: { label: string; value: string }[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Ecosystem' | 'Ventures' | 'Network' | 'Insights';
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
  featured?: boolean;
}

export interface JobPosition {
  id: string;
  number: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface ValueItem {
  key: string;
  title: string;
  number: string;
  concept: string;
  desc: string;
}

export const COMPANY_INFO = {
  name: 'Matrix Holding',
  tagline: {
    en: 'Connecting People, Capital & Opportunities',
    vi: 'Kết Nối Con Người, Nguồn Vốn & Cơ Hội',
  },
  email: 'matrixholding.support@gmail.com',
  phone: '(+84) 964 243 026',
  address: {
    en: 'KDT Bac Linh Dam, Hoang Liet Ward, Hanoi',
    vi: 'KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội',
  },
  year: '2026',
};

export const getEcosystemData = (lang: Language): EcosystemItem[] => {
  if (lang === 'vi') {
    return [
      {
        id: 'matrix-network',
        number: '01',
        title: 'MATRIX NETWORK',
        tagline: 'Kết nối con người, cộng đồng và các cơ hội.',
        description: 'Hạ tầng số toàn cầu kết nối nguồn lực con người, các cộng đồng chuyên gia và mạng lưới tri thức giá trị cao. Chúng tôi xây dựng các giao thức tin cậy và kênh cộng tác trực tiếp xuyên biên giới.',
        accentColor: '#00F0FF',
        keyPillars: [
          { title: 'Giao Thức Nhân Tài Toàn Cầu', desc: 'Kết nối nhân tài chuyên sâu với các sáng kiến có tầm ảnh hưởng lớn.' },
          { title: 'Cộng Đồng Phân Tán', desc: 'Nuôi dưỡng các vòng tròn chuyên sâu về AI, kinh tế số và công nghệ mới.' },
          { title: 'Trao Đổi Tri Thức', desc: 'Truyền tải trực tiếp kinh nghiệm và chuyên môn không qua trung gian.' }
        ],
        metrics: [
          { label: 'Node Mạng Lưới', value: '10,000+' },
          { label: 'Cộng Đồng Hoạt Động', value: '45+' },
          { label: 'Quy Mô Tiếp Cận', value: 'Toàn Cầu' }
        ]
      },
      {
        id: 'matrix-connect',
        number: '02',
        title: 'MATRIX CONNECT',
        tagline: 'Xây dựng cầu nối giữa doanh nghiệp và các nguồn lực.',
        description: 'Mạch liên kết doanh nghiệp của Matrix Holding. Chúng tôi thúc đẩy các quan hệ đối tác chiến lược cấp tổ chức, khớp nối tài sản, tích hợp chuỗi cung ứng liên ngành và mở rộng quy mô vận hành.',
        accentColor: '#00FF9D',
        keyPillars: [
          { title: 'Đối Tác Chiến Lược', desc: 'Bắc cầu giữa các doanh nghiệp thương mại với nguồn lực tăng trưởng then chốt.' },
          { title: 'Khớp Nối Nguồn Lực & Tài Sản', desc: 'Tối ưu hóa phân bổ nguồn lực để đạt hệ số nhân vận hành tối đa.' },
          { title: 'Liên Minh Hệ Sinh Thái', desc: 'Các liên minh dài hạn mở khóa đòn bẩy tổ chức sinh lời kép.' }
        ],
        metrics: [
          { label: 'Đối Tác Doanh Nghiệp', value: '120+' },
          { label: 'Kênh Nguồn Lực', value: '35+' },
          { label: 'Hiệu Quả Hiệp Đồng', value: '99.4%' }
        ]
      },
      {
        id: 'matrix-ventures',
        number: '03',
        title: 'MATRIX VENTURES',
        tagline: 'Khám phá và phát triển những cơ hội mới.',
        description: 'Cánh tay đầu tư và ươm tạo mạo hiểm đón đầu tương lai. Chúng tôi nhận diện các chuyển dịch thị trường mang tính đột phá, triển khai nguồn vốn kiên nhẫn và ươm mầm các doanh nghiệp công nghệ tiên phong.',
        accentColor: '#38BDF8',
        keyPillars: [
          { title: 'Ươm Tạo Dự Án Mạo Hiểm', desc: 'Xác thực từ 0 đến 1 với hạ tầng kỹ thuật chung của hệ sinh thái.' },
          { title: 'Nguồn Vốn Chiến Lược', desc: 'Dòng vốn mục tiêu đồng hành cùng các bước ngoặt công nghệ thời đại.' },
          { title: 'Kiến Trúc Thị Trường', desc: 'Cấu trúc các mô hình kinh doanh mới định vị cho sự dẫn đầu bền vững.' }
        ],
        metrics: [
          { label: 'Trọng Tâm Danh Mục', value: 'Frontier Tech' },
          { label: 'Linh Hoạt Giai Đoạn', value: 'Seed to Growth' },
          { label: 'Mô Hình Hỗ Trợ', value: 'Đồng Hành Trực Tiếp' }
        ]
      }
    ];
  }

  // English fallback
  return [
    {
      id: 'matrix-network',
      number: '01',
      title: 'MATRIX NETWORK',
      tagline: 'Connecting people, communities and opportunities.',
      description: 'A global digital infrastructure linking human capital, specialist communities, and high-value knowledge networks. We build trust protocols and direct collaboration channels across borders.',
      accentColor: '#00F0FF',
      keyPillars: [
        { title: 'Global Talent Protocol', desc: 'Connecting specialized talent with high-impact initiatives.' },
        { title: 'Decentralized Communities', desc: 'Fostering niche circles in AI, digital economies, and emerging tech.' },
        { title: 'Knowledge Exchange', desc: 'Direct peer-to-peer transmission of insights and domain expertise.' }
      ],
      metrics: [
        { label: 'Network Nodes', value: '10,000+' },
        { label: 'Active Communities', value: '45+' },
        { label: 'Geographic Reach', value: 'Global' }
      ]
    },
    {
      id: 'matrix-connect',
      number: '02',
      title: 'MATRIX CONNECT',
      tagline: 'Building bridges between businesses and resources.',
      description: 'The enterprise connective tissue of Matrix Holding. We facilitate strategic institutional partnerships, asset matching, cross-industry supply integration, and operational scalability.',
      accentColor: '#00FF9D',
      keyPillars: [
        { title: 'Strategic Partnerships', desc: 'Bridging commercial enterprises with strategic growth resources.' },
        { title: 'Asset & Resource Matching', desc: 'Optimizing resource allocation for maximum operational multiplier.' },
        { title: 'Ecosystem Alliances', desc: 'Long-term consortiums unlocking compound institutional leverage.' }
      ],
      metrics: [
        { label: 'Enterprise Partners', value: '120+' },
        { label: 'Resource Pipelines', value: '35+' },
        { label: 'Synergy Efficiency', value: '99.4%' }
      ]
    },
    {
      id: 'matrix-ventures',
      number: '03',
      title: 'MATRIX VENTURES',
      tagline: 'Exploring and developing new opportunities.',
      description: 'The forward-looking investment and venture-building arm. We identify transformational market shifts, deploy patient capital, and incubate groundbreaking tech-enabled enterprises.',
      accentColor: '#38BDF8',
      keyPillars: [
        { title: 'Venture Incubation', desc: 'From zero-to-one validation with shared ecosystem engineering.' },
        { title: 'Strategic Capital', desc: 'Targeted funding aligned with generational technology shifts.' },
        { title: 'Market Architecture', desc: 'Structuring new business models positioned for sustainable leadership.' }
      ],
      metrics: [
        { label: 'Portfolio Focus', value: 'Frontier Tech' },
        { label: 'Stage Flexibility', value: 'Seed to Growth' },
        { label: 'Support Model', value: 'Hands-on Engine' }
      ]
    }
  ];
};

export const getNewsData = (lang: Language): NewsArticle[] => {
  if (lang === 'vi') {
    return [
      {
        id: 'future-of-interconnected-ecosystems',
        title: 'Kiến Trúc Tương Lai: Vì Sao Hệ Sinh Thái Số Liên Hoàn Vượt Trội Hơn Tập Đoàn Truyền Thống',
        category: 'Insights',
        date: '2026-03-20',
        readTime: '5 phút đọc',
        summary: 'Sự chuyển dịch từ các mô hình phân tầng khép kín sang các hệ sinh thái mạng lưới mở ra tính linh hoạt vượt trội, tốc độ luân chuyển dòng vốn và sự đổi mới phân tán.',
        content: `Các holding company truyền thống trong lịch sử dựa vào các hệ thống mệnh lệnh phân cấp cứng nhắc, dẫn đến ma sát vận hành và khả năng thích ứng thị trường chậm chạp. Matrix Holding tái định nghĩa mô hình này bằng cách thiết kế một kiến trúc mạng lưới ba chiều năng động.

Thông qua Matrix Network, Matrix Connect và Matrix Ventures, mỗi node hoạt động với sự tự chủ cao trong khi khuếch đại sức mạnh của toàn bộ hệ sinh thái. Khi công nghệ phát triển như vũ bão, các tổ chức thành công sẽ không chỉ đơn thuần sở hữu tài sản — họ phải làm chủ khả năng kết nối giữa con người, nguồn vốn và các cơ hội có tốc độ tăng trưởng cao.`,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        featured: true
      },
      {
        id: 'matrix-connect-enterprise-bridge',
        title: 'Matrix Connect Mở Rộng Hành Lang Nguồn Lực Chiến Lược Đến Các Trung Tâm Tăng Trưởng Trọng Điểm',
        category: 'Ecosystem',
        date: '2026-03-12',
        readTime: '3 phút đọc',
        summary: 'Kết nối các doanh nghiệp hiệu suất cao với nguồn lực thể chế thiết yếu và các đối tác chiến lược xuyên biên giới.',
        content: `Matrix Connect tiếp tục khẳng định vai trò là chất xúc tác tăng trưởng doanh nghiệp. Bằng cách hợp nhất các đường ống nguồn lực và xây dựng các hành lang trực tiếp giữa các nhà cung cấp giải pháp công nghệ với nguồn vốn tổ chức, chúng tôi xóa bỏ các rào cản vận hành và rút ngắn chu kỳ đổi mới sáng tạo.`,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'matrix-ventures-frontier-technology',
        title: 'Matrix Ventures: Định Hướng Làn Sóng Công Nghệ Tiên Phong Tiếp Theo',
        category: 'Ventures',
        date: '2026-02-28',
        readTime: '4 phút đọc',
        summary: 'Cách ươm tạo chiến lược và nguồn vốn hậu thuẫn từ hệ sinh thái trao quyền cho các nhà sáng lập bản lĩnh.',
        content: `Ươm tạo đầu tư không đơn thuần là cấp vốn; đó là việc mang lại cho các nhà sáng lập lợi thế cạnh tranh ngay tức thì từ mạng lưới có sẵn. Matrix Ventures kết hợp nguồn vốn kiên nhẫn với hạ tầng kỹ thuật chuyên sâu và mạng lưới phân phối thương mại trực tiếp sẵn có trong toàn bộ hệ sinh thái.`,
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'human-capital-as-network-nodes',
        title: 'Matrix Network: Chuyển Hóa Các Ốc Đảo Tri Thức Thành Các Node Phân Tán Thời Gian Thực',
        category: 'Network',
        date: '2026-02-15',
        readTime: '4 phút đọc',
        summary: 'Trao quyền cho nhân tài chuyên sâu và cộng đồng tiên phong tạo động lực cộng tác ở quy mô lớn.',
        content: `Nền kinh tế hiện đại đòi hỏi sự chuyển giao tri thức không ma sát. Matrix Network thiết lập các trung tâm chuyên biệt nơi các kỹ sư, nhà nghiên cứu và lãnh đạo chuyên ngành kết nối trực tiếp để thúc đẩy những sáng kiến đột phá vươn tầm.`,
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
      }
    ];
  }

  // English fallback
  return [
    {
      id: 'future-of-interconnected-ecosystems',
      title: 'Architecting the Future: Why Interconnected Digital Ecosystems Outpace Traditional Conglomerates',
      category: 'Insights',
      date: '2026-03-20',
      readTime: '5 min read',
      summary: 'The shift from siloed enterprise structures to dynamic, networked ecosystems unlocks unprecedented agility, capital velocity, and distributed innovation.',
      content: `Traditional holding companies historically relied on centralized command-and-control hierarchies, which introduced friction and slow market adaptation. Matrix Holding redefines this model by designing a dynamic three-dimensional network architecture.

Through Matrix Network, Matrix Connect, and Matrix Ventures, each node operates autonomously while compounding the strength of the entire ecosystem. As technology accelerates, the companies that succeed will not simply own assets — they will master the connectivity between people, capital, and high-velocity opportunities.`,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      featured: true
    },
    {
      id: 'matrix-connect-enterprise-bridge',
      title: 'Matrix Connect Expands Strategic Resource Networks Across Key Growth Hubs',
      category: 'Ecosystem',
      date: '2026-03-12',
      readTime: '3 min read',
      summary: 'Connecting high-performing enterprises with vital institutional resources and cross-border strategic partners.',
      content: `Matrix Connect continues to strengthen its role as an enterprise catalyst. By unifying resource pipelines and building direct corridors between technology providers and institutional capital, we eliminate operational roadblocks and compress innovation cycles.`,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'matrix-ventures-frontier-technology',
      title: 'Matrix Ventures: Navigating the Next Wave of Frontier Technologies',
      category: 'Ventures',
      date: '2026-02-28',
      readTime: '4 min read',
      summary: 'How strategic incubation and ecosystem-backed capital empower high-conviction founders building foundational systems.',
      content: `Venture building is not merely about funding; it is about providing founders with the immediate unfair advantage of a pre-existing network. Matrix Ventures pairs patient capital with deep technical infrastructure and immediate commercial distribution channels across our ecosystem.`,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'human-capital-as-network-nodes',
      title: 'Matrix Network: Transforming Knowledge Silos Into Real-Time Distributed Nodes',
      category: 'Network',
      date: '2026-02-15',
      readTime: '4 min read',
      summary: 'Empowering specialized talent and forward-looking communities to build collaborative momentum at scale.',
      content: `The modern economy requires frictionless knowledge transfer. Matrix Network establishes specialized hubs where engineers, researchers, and domain leaders connect without intermediaries to drive groundbreaking initiatives forward.`,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    }
  ];
};

export const getJobData = (lang: Language): JobPosition[] => {
  if (lang === 'vi') {
    return [
      {
        id: 'frontend-developer',
        number: '01',
        title: 'Kỹ Sư Frontend Cấp Cao',
        department: 'Hệ Thống Kỹ Thuật Số & Công Nghệ',
        location: 'Hà Nội / Hybrid',
        type: 'Toàn thời gian',
        description: 'Chỉ đạo kiến trúc và thực thi thiết kế các giao diện số hiệu năng cao, trải nghiệm tương lai trong toàn hệ sinh thái Matrix.',
        requirements: [
          'Chuyên môn vững chắc về React hiện đại, TypeScript, Next/Vite, Tailwind CSS và WebGL/Canvas.',
          'Gu thẩm mỹ tinh tế về Futuristic UI/UX, micro-interactions và tối ưu animation 60fps.',
          'Kinh nghiệm xây dựng Design System mô-đun và công cụ trực quan hóa dữ liệu mạng lưới.'
        ]
      },
      {
        id: 'business-development',
        number: '02',
        title: 'Trưởng Nhóm Phát Triển Kinh Doanh',
        department: 'Matrix Connect & Hợp Tác Chiến Lược',
        location: 'Hà Nội / Linh hoạt',
        type: 'Toàn thời gian',
        description: 'Thúc đẩy các liên minh doanh nghiệp tầm ảnh hưởng lớn, quan hệ đối tác nguồn lực liên ngành và cấu trúc thương vụ chiến lược.',
        requirements: [
          'Thành tích đã được chứng minh trong quan hệ đối tác B2B chiến lược hoặc liên minh đổi mới sáng tạo doanh nghiệp.',
          'Kỹ năng giao tiếp, đàm phán xuất sắc với các cấp lãnh đạo và đối tác tổ chức.',
          'Khả năng chuyển hóa năng lực hệ sinh thái thành các giải pháp thương mại thực tiễn.'
        ]
      },
      {
        id: 'marketing-lead',
        number: '03',
        title: 'Quản Lý Thương Hiệu & Tăng Trưởng',
        department: 'Truyền Thông Toàn Cầu',
        location: 'Hà Nội / Hybrid',
        type: 'Toàn thời gian',
        description: 'Định hình câu chuyện thương hiệu Matrix Holding trên trường quốc tế, phụ trách tư tưởng dẫn dắt, ấn phẩm phân tích và hiện diện cộng đồng.',
        requirements: [
          'Kinh nghiệm dẫn dắt truyền thông thương hiệu hoặc công nghệ cho các quỹ đầu tư hay tập đoàn công nghệ tiên tiến.',
          'Tư duy thẩm mỹ cao cấp cùng năng lực kể chuyện thuyết phục, sâu sắc.',
          'Chuyên môn vững vàng về phân phối nội dung số và tương tác với cộng đồng chuyên gia.'
        ]
      },
      {
        id: 'project-manager',
        number: '04',
        title: 'Quản Lý Dự Án Kỹ Thuật',
        department: 'Vận Hành & Chiến Lược',
        location: 'Hà Nội / Trực tiếp',
        type: 'Toàn thời gian',
        description: 'Điều phối triển khai liên phòng ban giữa các sáng kiến thuộc Matrix Network, Connect và Ventures.',
        requirements: [
          'Kinh nghiệm quản lý các dự án công nghệ và phát triển kinh doanh phức hợp, đa chức năng.',
          'Phương pháp luận Agile chuẩn mực, theo dõi cột mốc và gắn kết các bên liên quan.',
          'Nền tảng kỹ thuật vững vàng có khả năng kết nối giữa kỹ sư với mục tiêu thương mại.'
        ]
      },
      {
        id: 'venture-associate',
        number: '05',
        title: 'Chuyên Viên Đầu Tư Mạo Hiểm',
        department: 'Matrix Ventures',
        location: 'Hà Nội / Hybrid',
        type: 'Toàn thời gian',
        description: 'Đánh giá các biên giới công nghệ mới nổi, thực hiện phân tích thị trường chuyên sâu và hỗ trợ các công ty trong danh mục đầu tư.',
        requirements: [
          'Kinh nghiệm trong lĩnh vực quỹ đầu tư mạo hiểm công nghệ, quỹ đầu tư tư nhân hoặc venture studio.',
          'Khả năng mô hình hóa tài chính và phân tích định lượng xuất sắc.',
          'Niềm đam mê sâu sắc với AI, hạ tầng phi tập trung và hệ sinh thái kỹ thuật số.'
        ]
      }
    ];
  }

  // English fallback
  return [
    {
      id: 'frontend-developer',
      number: '01',
      title: 'Senior Frontend Developer',
      department: 'Digital Systems & Engineering',
      location: 'Hanoi / Hybrid',
      type: 'Full-time',
      description: 'Lead the architecture and design execution of high-performance digital interfaces across the Matrix ecosystem.',
      requirements: [
        'Strong expertise in modern React, TypeScript, Next/Vite, Tailwind CSS, and WebGL/Canvas.',
        'Deep appreciation for futuristic UI/UX, micro-interactions, and 60fps animations.',
        'Experience building modular design systems and data-rich network visualizers.'
      ]
    },
    {
      id: 'business-development',
      number: '02',
      title: 'Business Development Lead',
      department: 'Matrix Connect & Alliances',
      location: 'Hanoi / Remote Flexible',
      type: 'Full-time',
      description: 'Drive high-impact enterprise alliances, cross-industry resource partnerships, and strategic deal structuring.',
      requirements: [
        'Demonstrated track record in strategic B2B partnerships or corporate innovation alliances.',
        'Strong communication and negotiation skills with executives and enterprise leaders.',
        'Ability to translate strategic ecosystem capabilities into tangible commercial solutions.'
      ]
    },
    {
      id: 'marketing-lead',
      number: '03',
      title: 'Brand & Growth Marketing Manager',
      department: 'Global Communications',
      location: 'Hanoi / Hybrid',
      type: 'Full-time',
      description: 'Shape Matrix Holding brand narrative globally, managing thought leadership, editorial publications, and community presence.',
      requirements: [
        'Experience leading brand or tech communications for modern investment or tech holdings.',
        'Sophisticated aesthetic sense with compelling storytelling abilities.',
        'Proven expertise in data-driven digital dissemination and developer/executive engagement.'
      ]
    },
    {
      id: 'project-manager',
      number: '04',
      title: 'Technical Project Manager',
      department: 'Operations & Strategy',
      location: 'Hanoi / On-site',
      type: 'Full-time',
      description: 'Orchestrate cross-functional delivery between Matrix Network, Connect, and Ventures initiatives.',
      requirements: [
        'Proven experience managing complex cross-functional tech and venture development initiatives.',
        'Rigorous agile methodology, milestone tracking, and stakeholder alignment.',
        'Strong technical background capable of bridging engineering with commercial goals.'
      ]
    },
    {
      id: 'venture-associate',
      number: '05',
      title: 'Venture Investment Associate',
      department: 'Matrix Ventures',
      location: 'Hanoi / Hybrid',
      type: 'Full-time',
      description: 'Evaluate emerging technology frontiers, conduct deep-dive market intelligence, and support portfolio companies.',
      requirements: [
        'Background in tech venture capital, private equity, or early-stage venture studio.',
        'Strong financial modeling and quantitative analytical capabilities.',
        'Deep curiosity for AI, decentralized infrastructure, and digital ecosystems.'
      ]
    }
  ];
};

export const getValuesData = (lang: Language): ValueItem[] => {
  if (lang === 'vi') {
    return [
      {
        key: 'CONNECT',
        title: 'KẾT NỐI',
        number: '01',
        concept: 'Mạng Lưới Thay Vì Silo',
        desc: 'Chúng tôi thay thế các cấp bậc đóng kín bằng các cầu nối kỹ thuật số liền mạch. Mỗi tương tác đều mở rộng phạm vi và tính kiên cường của các đối tác.'
      },
      {
        key: 'CREATE',
        title: 'KIẾN TẠO',
        number: '02',
        concept: 'Tư Duy Nguyên Lý Đầu Tiên',
        desc: 'Chúng tôi không chạy theo các trào lưu bề nổi. Chúng tôi xây dựng hạ tầng nền móng, nền tảng công nghệ và các mô hình từ gốc rễ vững chắc.'
      },
      {
        key: 'GROW',
        title: 'TĂNG TRƯỞNG',
        number: '03',
        concept: 'Hiệp Đồng Sinh Lời Kép',
        desc: 'Tăng trưởng không phải phép cộng tuyến tính; đó là cấp số nhân. Mỗi dự án trong hệ sinh thái đều củng cố sức mạnh mạng lưới cho tất cả thành viên.'
      },
      {
        key: 'IMPACT',
        title: 'TÁC ĐỘNG',
        number: '04',
        concept: 'Tầm Nhìn Dài Hạn',
        desc: 'Chúng tôi đầu tư nguồn vốn kiên nhẫn và sự cống hiến bền bỉ vào những ý tưởng giải quyết các thách thức mang tính hệ thống cho các thế hệ tương lai.'
      }
    ];
  }

  return [
    {
      key: 'CONNECT',
      title: 'CONNECT',
      number: '01',
      concept: 'Nodes Over Silos',
      desc: 'We replace disconnected hierarchies with seamless digital bridges. Every interaction expands the reach and resilience of our partners.'
    },
    {
      key: 'CREATE',
      title: 'CREATE',
      number: '02',
      concept: 'First-Principles Engineering',
      desc: 'We do not follow incremental trends. We build foundational infrastructure, platforms, and models from the ground up.'
    },
    {
      key: 'GROW',
      title: 'GROW',
      number: '03',
      concept: 'Compounding Synergies',
      desc: 'Growth is not linear addition; it is exponential multiplication. Each venture strengthens the network for all participants.'
    },
    {
      key: 'IMPACT',
      title: 'IMPACT',
      number: '04',
      concept: 'Long-term Horizons',
      desc: 'We invest patient capital and enduring dedication into ideas that solve systemic challenges for generations to come.'
    }
  ];
};
