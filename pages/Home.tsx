
import React, { useState } from 'react';
import { Search, TrendingUp, Users, Tractor, HeartPulse, Briefcase, GraduationCap, Building2, Map, Sparkles } from 'lucide-react';
import { Category } from '../types';
import EligibilityChecker from '../components/EligibilityChecker';
import { getSchemeRecommendation } from '../services/geminiService';

interface HomeProps {
  onNavigate: (path: string, params?: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const categories: { label: Category; icon: React.ReactNode; color: string }[] = [
    { label: 'Farmer', icon: <Tractor />, color: 'bg-green-100 text-green-700 border-green-200' },
    { label: 'Women', icon: <Users />, color: 'bg-pink-100 text-pink-700 border-pink-200' },
    { label: 'Student', icon: <GraduationCap />, color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { label: 'Health', icon: <HeartPulse />, color: 'bg-red-100 text-red-700 border-red-200' },
    { label: 'Employment', icon: <Briefcase />, color: 'bg-orange-100 text-orange-700 border-orange-200' },
    { label: 'Rural Development', icon: <Map />, color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    { label: 'Urban Development', icon: <Building2 />, color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
    { label: 'Education', icon: <GraduationCap />, color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  ];

  const handleAiSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    const suggestion = await getSchemeRecommendation(searchQuery);
    setAiSuggestion(suggestion);
    setIsSearching(false);
  };

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white pt-12 pb-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(48)].map((_, i) => <div key={i} className="border border-white/20 h-24 w-full"></div>)}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Connecting You to Your Rights & Benefits
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover government schemes, check eligibility, and stay updated on career opportunities – all in one place.
          </p>

          <div className="relative max-w-2xl mx-auto mb-4">
            <input 
              type="text" 
              placeholder="Ask anything: 'I am a woman starting a business' or 'Schemes for farmers in Bihar'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-slate-900 shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400 text-lg pr-16"
              onKeyDown={(e) => e.key === 'Enter' && handleAiSearch()}
            />
            <button 
              onClick={handleAiSearch}
              disabled={isSearching}
              className="absolute right-2 top-2 bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg disabled:opacity-50"
            >
              <Search size={24} />
            </button>
          </div>
          
          <p className="text-xs text-blue-200 flex items-center justify-center gap-1">
            <Sparkles size={14} className="text-orange-300" />
            Powered by AI to find the most relevant schemes for you
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        {aiSuggestion && (
          <div className="bg-white border-2 border-orange-400 rounded-2xl shadow-2xl p-6 mb-8 animate-in slide-in-from-bottom duration-500">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-orange-500" size={20} />
              <h3 className="font-bold text-slate-800">AI Assistant's Response</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">{aiSuggestion}</p>
            <div className="mt-4 flex gap-2">
              <button 
                onClick={() => onNavigate('schemes', { search: searchQuery })}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold"
              >
                View Relevant Schemes
              </button>
              <button onClick={() => setAiSuggestion(null)} className="text-slate-400 text-sm hover:underline">Dismiss</button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Eligibility Checker */}
          <div className="lg:col-span-2 space-y-8">
            <EligibilityChecker />
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <TrendingUp className="text-orange-500" />
                  Explore by Category
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {categories.map((cat) => (
                  <button 
                    key={cat.label}
                    onClick={() => onNavigate('schemes', { category: cat.label })}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all hover:shadow-md group ${cat.color}`}
                  >
                    <div className="mb-2 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <span className="text-xs font-bold text-center">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Updates Side Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-orange-500 p-4 text-white">
                <h3 className="font-bold flex items-center gap-2">
                  <GraduationCap size={20} />
                  Latest Exams
                </h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="border-b pb-3">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">UPSC</span>
                  <h4 className="font-semibold text-sm">Civil Services Prelims 2024</h4>
                  <p className="text-xs text-slate-500">Last Date: 5th March</p>
                </div>
                <div className="border-b pb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">SSC</span>
                  <h4 className="font-semibold text-sm">CGL Tier-I Notification</h4>
                  <p className="text-xs text-slate-500">Vacancies: 17,000+</p>
                </div>
                <div className="pb-1">
                  <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Banking</span>
                  <h4 className="font-semibold text-sm">IBPS PO Mains Result</h4>
                  <p className="text-xs text-slate-500">Check Scorecard online</p>
                </div>
                <button 
                  onClick={() => onNavigate('exams')}
                  className="w-full text-center text-blue-700 text-sm font-bold hover:underline"
                >
                  View All Notifications
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm border border-green-200 p-6">
              <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <Building2 size={18} />
                Rural Development
              </h3>
              <p className="text-xs text-green-700 mb-4">Are you living in a village? Check special benefits for Gram Panchayats.</p>
              <button 
                 onClick={() => onNavigate('schemes', { category: 'Rural Development' })}
                 className="bg-green-700 text-white px-4 py-2 rounded text-xs font-bold"
              >
                Explore Village Schemes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
