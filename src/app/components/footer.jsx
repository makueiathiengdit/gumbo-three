import React from "react";

import { BookOpen, Phone, Mail, MapPin } from "lucide-react";
const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 text-white mb-8">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Gumbo Three Primary School
            </span>
          </div>
          <p className="text-lg max-w-sm mb-8">
            Empowering the next generation of thinkers, makers, and dreamers
            through a holistic primary education.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
            >
              <Phone size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
            >
              <MapPin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Our Curriculum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Term Dates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                School Lunch
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Uniform Shop
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <p className="mb-4">
            Gumbo,
            <br />
            Juba, South Sudan
          </p>
          <p className="text-blue-400 font-bold">+211 9123 111 111</p>
          <p>hello@gumbothreeprimary.edu</p>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2026 Gumbo Three Primary School. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Safeguarding
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
