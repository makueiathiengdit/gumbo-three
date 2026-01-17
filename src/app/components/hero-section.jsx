import React from "react";

import { Star, ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px]" />
    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-amber-200/30 rounded-full blur-[80px]" />

    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8 ring-1 ring-blue-100 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Enrollment Open for Sept 2026
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
          Where <span className="text-blue-600">Learning</span> is a Great{" "}
          <span className="relative inline-block">
            Adventure
            <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-400/30 -z-10 rounded-full"></span>
          </span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          At Gumbo Three Primary, we nurture curiosity through play,
          exploration, and a creative curriculum that prepares children for a
          bright future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="group px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-slate-200">
            Book a School Tour
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="px-8 py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            View Our Values
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400 to-emerald-400 rounded-[3rem] opacity-20 blur-2xl"></div>
        <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl rotate-1">
          <img
            src="https://www.unicef.org/southsudan/sites/unicef.org.southsudan/files/styles/hero_extended/public/Oyere%20Primary%20School.webp?itok=bsI6TkAF"
            alt="School children collaborating"
            className="rounded-[2rem] w-full object-cover aspect-[4/3]"
          />
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <Star fill="currentColor" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Ofsted Rated</p>
              <p className="text-sm text-slate-500">Outstanding School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default HeroSection;
