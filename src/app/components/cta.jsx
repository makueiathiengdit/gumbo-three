import React from "react";

const CallToAction = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section className="py-20 bg-amber-400 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6">
            Ready to see our school in person?
          </h2>
          <p className="text-lg text-slate-800 mb-10 font-medium">
            Book a discovery morning and meet our Headteacher, teachers, and
            explore our learning environments.
          </p>
          <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl">
            Schedule Your Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
