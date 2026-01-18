import {
  Calendar,
  ChevronRight,
  ArrowRight,
  Newspaper,
  Share2,
} from "lucide-react";

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      date: "Jan 18, 2026",
      category: "Academic",
      title: "Gumbo Three Leads Regional Math Olympiad",
      excerpt:
        "Our P7 and P8 students secured the top three spots in the regional inter-school math challenge held last weekend...",
      image: "/news2.jpeg",
    },
    {
      id: 2,
      date: "Jan 15, 2026",
      category: "Campus",
      title: "New Interactive Science Lab Opens",
      excerpt:
        "We are thrilled to unveil our newly renovated science laboratory, equipped with digital microscopes and AR learning tools.",
      image: "/lab.jpg",
    },
    {
      id: 3,
      date: "Jan 10, 2026",
      category: "Sports",
      title: "Football Team Reaches Finals",
      excerpt:
        "The Gumbo Three Giants have secured their place in the District Cup finals after a thrilling 3-2 victory yesterday.",
      image: "/football.jpeg",
    },
    {
      id: 4,
      date: "Jan 05, 2026",
      category: "Events",
      title: "Parents' Association: Charity Gala",
      excerpt:
        "Join us this Friday for a night of music and fundraising to support our local community outreach program.",
      image: "/pta.jpeg",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold mb-6 ring-1 ring-blue-500/30">
            <Newspaper size={16} />
            News & Updates
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Stay Connected
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Latest stories, announcements, and celebrations from the Gumbo Three
            Primary community.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/2">
            <img
              src="/news1.jpeg"
              className="w-full h-full object-cover min-h-[400px]"
              alt="Featured"
            />
          </div>
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4">
              Spotlight Story
            </span>
            <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight">
              Headteacher's Welcome: Navigating the 2026 Academic Year
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              As we step into a new term, Mrs. Rose Adut shares her vision for
              student well-being and the introduction of our new digital
              literacy program.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
                Read Full Story
                <ArrowRight size={20} />
              </button>
              <button className="p-4 rounded-2xl border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-2xl font-black text-slate-900">
            Recent Headlines
          </h3>
          <div className="flex gap-2">
            {["All", "Academic", "Sports", "Campus"].map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-bold bg-white border border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 group hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500"
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  src={news.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={news.title}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider text-blue-600">
                  {news.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-4">
                  <Calendar size={14} />
                  {news.date}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {news.excerpt}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all">
                  Read More
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Get the Newsletter</h2>
            <p className="text-blue-100 mb-8 max-w-md mx-auto">
              Receive weekly updates on school activities and parent reminders
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-2xl bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
              />
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default NewsPage;
