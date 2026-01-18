import {
  Calendar,
  Clock,
  Users,
  Star,
  GraduationCap,
  Music,
  CheckCircle2,
} from "lucide-react";

const LearningPage = () => {
  const terms = [
    {
      name: "Term 1",
      duration: "1st Feb - 15th May",
      focus: "Foundations & Exploration",
      status: "Upcoming",
    },
    {
      name: "Term 2",
      duration: "25th May - 20th Aug",
      focus: "Creative Growth & Mid-Year Review",
      status: "Planning",
    },
    {
      name: "Term 3",
      duration: "30th Aug - 15th Nov",
      focus: "Exams & Transitions",
      status: "Planning",
    },
  ];

  const classes = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-blue-600 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-bold mb-6 backdrop-blur-md">
            <GraduationCap size={16} />
            Academic Year 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Our Academic Journey
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            At Gumbo Three, we offer a comprehensive primary education from P1
            to P8, focusing on excellence, character, and holistic growth.
          </p>
        </div>
      </section>

      {/* Class Levels Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            Class Levels
          </h2>
          <p className="text-slate-500">
            We cater to students across eight primary stages
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {classes.map((cls) => (
            <div
              key={cls}
              className="aspect-square flex flex-col items-center justify-center bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50 transition-all group cursor-default"
            >
              <span className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                {cls}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">
                Primary
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Term Dates Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl shadow-sm">
              <Calendar size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              2026 Term Schedule
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {terms.map((term, i) => (
              <div
                key={i}
                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-6">
                  {term.status}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {term.name}
                </h3>
                <p className="text-blue-600 font-bold text-lg mb-6">
                  {term.duration}
                </p>
                <div className="h-px bg-slate-100 w-full mb-6"></div>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{term.focus}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* P8 Special Focus */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
          <div className="p-12 lg:p-16 lg:w-3/5 text-white">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500 text-xs font-black mb-6 uppercase">
              The Final Frontier
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Primary 8: PLE Preparation
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our P8 class is dedicated to preparing students for the Primary
              Leaving Exams (PLE). We provide an intensive, supportive
              environment that focuses on exam techniques, core subject mastery,
              and leadership development.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Extended Study Hours",
                "Mock Exam Series",
                "1-on-1 Tutoring",
                "Transition Counseling",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-emerald-400" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-2/5 relative min-h-[300px]">
            <img
              src="/p8.jpeg"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              alt="Students studying"
            />
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-8">
              Essential Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                    <Clock size={20} />
                  </div>
                  <span className="font-bold">Standard School Day</span>
                </div>
                <span className="text-slate-500 font-bold text-sm">
                  08:00 AM - 03:30 PM
                </span>
              </div>
              <div className="flex justify-between items-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                    <Users size={20} />
                  </div>
                  <span className="font-bold">Lunch Break</span>
                </div>
                <span className="text-slate-500 font-bold text-sm">
                  12:30 PM - 01:30 PM
                </span>
              </div>
              <div className="flex justify-between items-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-amber-600 shadow-sm">
                    <Music size={20} />
                  </div>
                  <span className="font-bold">Extra-Curriculars</span>
                </div>
                <span className="text-slate-500 font-bold text-sm">
                  03:45 PM - 05:00 PM
                </span>
              </div>
            </div>
          </div>
          <div className="relative p-8 bg-blue-50 rounded-[3rem]">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Star className="text-amber-400" fill="currentColor" />
                Learning Resources
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                All students from P1 to P8 have access to our digital library,
                science labs, and the modern sports complex.
              </p>
              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all">
                Download Student Handbook
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPage;
