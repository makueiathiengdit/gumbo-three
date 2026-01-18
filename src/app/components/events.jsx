import { Clock, ChevronRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      day: "12",
      month: "FEB",
      title: "Sports Day",
      category: "Sports",
      time: "10:30 AM",
    },
    {
      day: "18",
      month: "JUN",
      title: "Year 1 Science Fair",
      category: "Academic",
      time: "09:00 AM",
    },
    {
      day: "24",
      month: "OCT",
      title: "PTA Meeting",
      category: "Community",
      time: "02:00 PM",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 italic">
              Upcoming Moments
            </h2>
            <p className="text-slate-500">
              Exciting events happening this term across our school.
            </p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold group">
            Full Calendar
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex items-center gap-6"
            >
              <div className="flex-shrink-0 w-20 h-24 bg-blue-600 rounded-2xl flex flex-col items-center justify-center text-white font-bold">
                <span className="text-2xl">{event.day}</span>
                <span className="text-sm opacity-80 uppercase tracking-tighter">
                  {event.month}
                </span>
              </div>
              <div>
                <span className="inline-block py-0.5 px-3 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase mb-2">
                  {event.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                  <Clock size={14} />
                  {event.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
