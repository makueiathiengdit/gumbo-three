import {
  MapPin,
  Star,
  Phone,
  Mail,
  GraduationCap,
  CheckCircle2,
  FileText,
  ShieldCheck,
  CreditCard,
  Info,
} from "lucide-react";

const AdmissionsPage = () => {
  const steps = [
    {
      number: "01",
      title: "Online Application",
      desc: "Complete the digital application form and upload the required identity documents.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "School Visit",
      desc: "Join us for a campus tour and a meeting with our Admissions Coordinator.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Assessment",
      desc: "A friendly age-appropriate assessment to understand your child's learning style.",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Enrollment",
      desc: "Receive an offer letter and secure your place by paying the registration fee.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  const requirements = [
    {
      title: "Age Criteria",
      detail:
        "Child must be 6 years old by September 1st for Primary 1 enrollment.",
    },
    {
      title: "Academic Records",
      detail:
        "Previous two years of school reports (if applicable) and a conduct certificate.",
    },
    {
      title: "Identification",
      detail:
        "Birth Certificate and passport-sized photos of the child and both parents.",
    },
    {
      title: "Health Records",
      detail:
        "Up-to-date immunization card and a basic medical fitness report.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-indigo-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-bold mb-6 ring-1 ring-indigo-500/30">
            <GraduationCap size={16} />
            Join Our Community
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Start Your Journey
          </h1>
          <p className="text-xl text-indigo-200/80 max-w-2xl leading-relaxed">
            We are excited to welcome new families to Gumbo Three Primary.
            Discover our enrollment process and secure your child's future
            today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Process */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200 border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
                The Admission Process
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-white rounded-2xl text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {step.icon}
                      </div>
                      <span className="text-3xl font-black text-slate-200 group-hover:text-blue-100">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200 border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-emerald-500 rounded-full" />
                Requirements
              </h2>
              <div className="space-y-4">
                {requirements.map((req, idx) => (
                  <div
                    key={idx}
                    className="flex gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {req.title}
                      </h4>
                      <p className="text-slate-500 text-sm">{req.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            {/* Fees Box */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CreditCard size={80} />
              </div>
              <h3 className="text-xl font-bold mb-6">Fee Structure</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-slate-400">Application Fee</span>
                  <span className="font-bold">SSP 15,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-slate-400">Development Fee</span>
                  <span className="font-bold">SSP 5,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-400">Tuition (Per Term)</span>
                  <span className="font-bold text-blue-400">SSP 120,000</span>
                </div>
              </div>
              <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-blue-50 transition-all text-sm mb-4">
                Download Fee Policy
              </button>
              <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                <Info size={12} />
                Sibling discounts available upon request
              </p>
            </div>

            {/* Quick Contact */}
            <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                Our admissions team is here to guide you through every step.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold text-sm">+211 9123 111 111</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span className="font-bold text-sm">
                    apply@gumbothree.edu
                  </span>
                </div>
              </div>
            </div>

            {/* Application Card */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-lg">
              <h3 className="text-lg font-black mb-4">Ready to Apply?</h3>
              <p className="text-slate-500 text-xs mb-6">
                Applications for the September 2026 session are now being
                processed.
              </p>
              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                Start Online Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
