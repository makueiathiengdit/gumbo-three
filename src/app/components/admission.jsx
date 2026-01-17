import React from "react";

import { MapPin, Star, Heart, Mail } from "lucide-react";

const AdmissionsTimeline = () => {
  const steps = [
    {
      title: "Virtual Inquiry",
      desc: "Start by filling out our simple online form to express interest.",
      icon: <Mail />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Discovery Visit",
      desc: "Join us for a campus tour to see our creative spaces in action.",
      icon: <MapPin />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Engagement Session",
      desc: "A soft play-based assessment to help us get to know your child.",
      icon: <Heart />,
      color: "bg-rose-100 text-rose-600",
    },
    {
      title: "Secure Your Spot",
      desc: "Offers are sent out and final registration is completed.",
      icon: <Star />,
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Joining Our Family
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We've made our admissions process as friendly and transparent as
            possible for new parents.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-slate-50 -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="group relative">
              <div
                className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative bg-white ring-8 ring-white`}
              >
                {step.icon}
              </div>
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="md:hidden w-1 h-12 bg-slate-100 mx-auto my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionsTimeline;
