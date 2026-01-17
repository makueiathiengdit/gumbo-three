import React from "react";

const QuickStats = () => {
  return (
    <div className="bg-blue-600 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-white mb-1">450+</p>
          <p className="text-blue-100 text-sm uppercase font-bold tracking-widest">
            Students
          </p>
        </div>
        <div>
          <p className="text-4xl font-bold text-white mb-1">1:12</p>
          <p className="text-blue-100 text-sm uppercase font-bold tracking-widest">
            Teacher Ratio
          </p>
        </div>
        <div>
          <p className="text-4xl font-bold text-white mb-1">25+</p>
          <p className="text-blue-100 text-sm uppercase font-bold tracking-widest">
            After-School Clubs
          </p>
        </div>
        <div>
          <p className="text-4xl font-bold text-white mb-1">98%</p>
          <p className="text-blue-100 text-sm uppercase font-bold tracking-widest">
            Parent Satisfaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
