import { useState } from "react";
import { X } from "lucide-react";

const categories = [
  "الكل",
  "تطوير الذات",
  "القلق",
  "الاكتئاب",
  "جودة الحياة",
  "العلاقات",
  "علم النفس",
];

const blogPosts = [
  {
    id: 1,
    title: "كيف تؤثر الراحة النفسية على جودة حياتك اليومية؟",
    excerpt: "خطوات بسيطة تساعدك على تقليل التوتر وتحسين الاستقرار النفسي.",
    category: "علم النفس",
    readTime: "4 دقائق",
    views: "502",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "كيف تبني عادات صحية تحسن حالتك النفسية؟",
    excerpt:
      "روتين يومي بسيط قادر على تغيير طريقة تفكيرك وشعورك بالكامل.",
    category: "تطوير الذات",
    readTime: "6 دقائق",
    views: "721",
    image:
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "كيف تحافظ على علاقات صحية ومتوازنة؟",
    excerpt:
      "التواصل الفعال والحدود الصحية من أهم أسرار العلاقات الناجحة.",
    category: "العلاقات",
    readTime: "3 دقائق",
    views: "338",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAppModal, setShowAppModal] = useState(false);
  const [showJourneyModal, setShowJourneyModal] = useState(false);

  // Detect device type and redirect to app store
  const handleDownloadApp = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href =
        "https://apps.apple.com/app/the-relax/id1234567890"; // Replace with your actual App Store link
    }
    // Android detection
    else if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.therelax.app"; // Replace with your actual Play Store link
    }
    // Fallback
    else {
      window.location.href =
        "https://apps.apple.com/app/the-relax/id1234567890";
    }
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "الكل" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 right-0 w-full z-50 bg-[#4064f7] border-b-2 border-white">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center flex-wrap">
          <div className="logo">
            <img
              src="logo.png"
              alt="The Relax Logo"
              className="w-20 h-auto"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <ul className="nav-links hidden lg:flex gap-5 items-center">
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-[#e19832] transition-colors"
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-[#e19832] transition-colors"
              >
                خدماتنا
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-[#e19832] transition-colors"
              >
                مكتبة
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-[#e19832] transition-colors"
              >
                تقييم وتشخيص
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-[#e19832] transition-colors"
              >
                من نحن
              </a>
            </li>
          </ul>

          <div className="nav-btn">
            <button
              onClick={() => setShowAppModal(true)}
              className="bg-white text-[#4064f7] px-4 py-2 rounded-full font-bold text-xs hover:bg-[#e19832] hover:text-white transition-all shadow-lg"
            >
              حمل التطبيق
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="library-hero relative pt-32 pb-20 bg-gradient-to-b from-[#4064f7] via-[#4973ff] to-white overflow-hidden">
        {/* Decorative blurs */}
        <div className="hero-blur blur1 absolute top-0 right-0 w-80 h-80 bg-[#49ccf0] rounded-full blur-3xl opacity-20"></div>
        <div className="hero-blur blur2 absolute bottom-0 left-0 w-64 h-64 bg-[#e19832] rounded-full blur-3xl opacity-20"></div>

        <div className="library-content relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Search Box */}
          <div className="search-box-library relative mb-8 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="ابحث عن مقالة أو موضوع نفسي..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-4 pr-16 rounded-full bg-[#5374f8] border-none text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <button className="search-btn absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-[#4064f7] rounded-full flex items-center justify-center hover:bg-[#e19832] hover:text-white transition-all">
                <i className="fas fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="top-categories flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cat px-5 py-3 rounded-full font-medium text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-white text-[#4064f7] font-bold"
                    : "bg-white/15 text-white backdrop-blur-md hover:bg-white hover:text-[#4064f7]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            مكتبة متخصصة بالصحة النفسية والتطوير الذاتي
          </h1>

          {/* Description */}
          <p className="text-xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto">
            دعنا نجد أفضل رحلة لك نحو راحة نفسية واستقرار داخلي، عبر مقالات
            ومواضيع تساعدك على فهم نفسك وتحسين حياتك.
          </p>

          {/* CTA Button */}
          <div className="hero-action">
            <button
              onClick={() => setShowJourneyModal(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#4064f7] rounded-2xl font-bold hover:bg-[#e19832] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
            >
              ابدأ رحلتك الآن
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-[#333] mb-4">
              أحدث المقالات
            </h2>
            <p className="text-lg text-gray-600">
              استكشف مجموعتنا من المقالات المختارة بعناية حول الصحة النفسية والتطوير الذاتي.
            </p>
          </div>

          {/* Filter Sidebar & Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <aside className="filter-box lg:col-span-1">
              <div className="bg-gradient-to-b from-[#4064f7]/5 to-[#e19832]/5 p-6 rounded-2xl sticky top-32">
                <h3 className="text-xl font-bold text-[#333] mb-6">
                  التصنيفات
                </h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div key={cat} className="filter-item flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={activeCategory === cat}
                        onChange={() => setActiveCategory(cat)}
                        className="w-5 h-5 rounded border-2 border-[#4064f7] accent-[#4064f7] cursor-pointer"
                      />
                      <label className="text-gray-700 cursor-pointer hover:text-[#4064f7] transition-colors">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Blog Cards Grid */}
            <div className="blogs-container lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="blog-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      {/* Image */}
                      <div className="blog-image relative h-48 overflow-hidden bg-gray-200">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="blog-tag absolute top-4 right-4 bg-[#4064f7] text-white px-4 py-2 rounded-full text-xs font-bold">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="blog-content p-6">
                        {/* Meta Info */}
                        <div className="blog-info flex gap-4 text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-2">
                            <i className="far fa-clock"></i>
                            {post.readTime}
                          </span>
                          <span className="flex items-center gap-2">
                            <i className="far fa-eye"></i>
                            {post.views}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-bold text-[#333] mb-3 line-clamp-2 group-hover:text-[#4064f7] transition-colors">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">
                    لم يتم العثور على مقالات تطابق بحثك.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* App Download Modal */}
      {showAppModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowAppModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-[#333] mb-4 text-right">
              تحميل التطبيق
            </h2>
            <p className="text-gray-600 mb-8 text-right">
              يرجى تحميل التطبيق للوصول إلى جميع الميزات والخدمات الكاملة.
            </p>

            <button
              onClick={() => {
                handleDownloadApp();
                setShowAppModal(false);
              }}
              className="w-full bg-[#4064f7] text-white py-3 rounded-lg font-bold hover:bg-[#e19832] transition-all mb-3"
            >
              حمل الآن
            </button>
            <button
              onClick={() => setShowAppModal(false)}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition-all"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* Start Journey Modal */}
      {showJourneyModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowJourneyModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-[#333] mb-4 text-right">
              ابدأ رحلتك
            </h2>
            <p className="text-gray-600 mb-8 text-right">
              يرجى تحميل التطبيق للبدء في رحلتك نحو الصحة النفسية والاستقرار
              الداخلي.
            </p>

            <button
              onClick={() => {
                handleDownloadApp();
                setShowJourneyModal(false);
              }}
              className="w-full bg-[#4064f7] text-white py-3 rounded-lg font-bold hover:bg-[#e19832] transition-all mb-3"
            >
              حمل الآن
            </button>
            <button
              onClick={() => setShowJourneyModal(false)}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition-all"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
