"use client";
import React, { useState } from "react";
import { X, Menu, BookOpen } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl rotate-3 flex items-center justify-center shadow-lg shadow-blue-200">
              <BookOpen className="text-white w-6 h-6 -rotate-3" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Gumbo Three<span className="text-blue-600">Primary</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#"
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Our School
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Learning
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Admissions
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Parents
            </a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-100 transition-all active:scale-95">
              Apply Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#" className="block text-slate-600 font-medium text-lg">
            Our School
          </a>
          <a href="#" className="block text-slate-600 font-medium text-lg">
            Learning
          </a>
          <a href="#" className="block text-slate-600 font-medium text-lg">
            Admissions
          </a>
          <a href="#" className="block text-slate-600 font-medium text-lg">
            Parents
          </a>
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold">
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
