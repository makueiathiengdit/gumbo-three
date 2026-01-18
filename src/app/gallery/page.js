"use client";

import React, { useState } from "react";

import { Camera, Layers } from "lucide-react";
const GalleryPage = () => {
  const categories = ["All", "Classroom", "Sports", "Arts", "Science Fair"];
  const [activeTab, setActiveTab] = useState("All");

  const images = [
    {
      url: "/lab.jpg",
      cat: "Classroom",
      title: "Creative Science",
    },
    {
      url: "/assembly.jpeg",
      cat: "Assembly",
      title: "Morning Assembly",
    },

    {
      url: "/football.jpeg",
      cat: "Sports",
      title: "InterSchool Games",
    },
    {
      url: "/culture.jpeg",
      cat: "Cultural Day",
      title: "Cultural Day",
    },
    {
      url: "/debate.jpeg",
      cat: "Debate",
      title: "Interclass Debate",
    },
    {
      url: "/media-team.jpeg",
      cat: "Media",
      title: "Student Journalism Club",
    },
    {
      url: "/basketball.jpeg",
      cat: "Sports",
      title: "Our Baseketball Team",
    },
  ];

  const filteredImages =
    activeTab === "All"
      ? images
      : images.filter((img) => img.cat === activeTab);

  return (
    <div className="bg-white min-h-screen">
      {/* Gallery Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6">
            <Camera size={16} />
            Capturing Memories
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 italic">
            Life at Gumbo Three
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A glimpse into the daily adventures, achievements, and creative
            sparks of our students.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-20 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex justify-center gap-2 min-w-max pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeTab === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-[2rem] bg-slate-100 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
                    {img.cat}
                  </span>
                  <h3 className="text-white text-xl font-bold">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <Layers size={48} className="mx-auto text-slate-200 mb-4" />
              <p className="text-slate-400 font-medium">
                No photos found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
