
import React, { useState } from 'react';
import { exams } from '../data/mockData';
import { Search, MapPin, Users, Calendar, ArrowUpRight, GraduationCap } from 'lucide-react';

const Exams: React.FC = () => {
  const [activeOrg, setActiveOrg] = useState<string>('All');
  const orgs = ['All', 'SSC', 'UPSC', 'RRB', 'Banking', 'State', 'Other'];

  const filteredExams = exams.filter(e => activeOrg === 'All' || e.organization === activeOrg);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Government Job Notifications</h1>
        <p className="text-slate-500">Stay updated with the latest recruitment cycles across central and state bodies.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {orgs.map(org => (
          <button
            key={org}
            onClick={() => setActiveOrg(org)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeOrg === org ? 'bg-orange-500 text-white shadow-lg scale-105' : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300'}`}
          >
            {org}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredExams.map(exam => (
          <div key={exam.id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <GraduationCap size={24} />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{exam.organization}</span>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{exam.title}</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Users size={16} className="text-slate-400" />
                <span>{exam.vacancyCount.toLocaleString()} Vacancies</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Calendar size={16} className="text-slate-400" />
                <span>Last Date: <span className="font-semibold text-red-500">{exam.lastDate}</span></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={16} className="text-slate-400" />
                <span>Eligibility: {exam.eligibility}</span>
              </div>
            </div>

            <a 
              href={exam.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
            >
              Apply Online <ArrowUpRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;
