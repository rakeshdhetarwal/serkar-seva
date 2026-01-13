
import React, { useState, useMemo } from 'react';
import { schemes } from '../data/mockData';
// Added TrendingUp to the imports
import { Search, Filter, ExternalLink, ChevronRight, Info, ShieldCheck, FileText, Calendar, TrendingUp } from 'lucide-react';
import { Category, Scheme } from '../types';

interface SchemesProps {
  initialFilter?: { category?: Category; search?: string };
}

const Schemes: React.FC<SchemesProps> = ({ initialFilter }) => {
  const [activeCategory, setActiveCategory] = useState<Category>(initialFilter?.category || 'All');
  const [searchQuery, setSearchQuery] = useState(initialFilter?.search || '');
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);

  const categories: Category[] = ['All', 'Farmer', 'Women', 'Student', 'Health', 'Employment', 'Education', 'Rural Development', 'Urban Development'];

  const filteredSchemes = useMemo(() => {
    return schemes.filter(s => {
      const matchesCat = activeCategory === 'All' || s.category === activeCategory;
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Government Schemes</h1>
          <p className="text-slate-500">Discover various central and state government benefits</p>
        </div>
        <div className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Search schemes..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Search className="absolute left-3 top-3.5 text-slate-400" size={20} />
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors border ${activeCategory === cat ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSchemes.map(scheme => (
          <div 
            key={scheme.id} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedScheme(scheme)}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100 uppercase tracking-wide">
                {scheme.category}
              </span>
              {scheme.isCentral && <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold uppercase">Central Scheme</span>}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{scheme.name}</h3>
            <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-2">{scheme.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar size={14} /> Last Date: {scheme.lastDate}
              </span>
              <button className="text-blue-700 font-bold text-sm flex items-center gap-1 hover:underline">
                View Details <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <Info className="mx-auto text-slate-300 mb-4" size={48} />
          <h3 className="text-xl font-bold text-slate-800">No schemes found</h3>
          <p className="text-slate-500">Try adjusting your category or search keywords</p>
        </div>
      )}

      {/* Scheme Detail Modal */}
      {selectedScheme && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedScheme(null)}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full text-slate-400"
            >
              <ChevronRight className="rotate-90" />
            </button>
            
            <div className="p-8">
              <div className="mb-6">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-3 inline-block">
                  {selectedScheme.category}
                </span>
                <h2 className="text-2xl font-bold text-slate-900">{selectedScheme.name}</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-slate-600 leading-relaxed">{selectedScheme.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                      <ShieldCheck className="text-green-600" size={18} />
                      Who is eligible?
                    </h4>
                    <ul className="space-y-2">
                      {selectedScheme.eligibilityCriteria.map((c, i) => (
                        <li key={i} className="text-sm text-slate-600 flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    {/* Fixed missing import for TrendingUp */}
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                      <TrendingUp className="text-blue-600" size={18} />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {selectedScheme.benefits.map((b, i) => (
                        <li key={i} className="text-sm text-slate-600 flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-300 mt-2 shrink-0"></span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <FileText className="text-slate-600" size={18} />
                    Documents Required
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedScheme.requiredDocuments.map((d, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-xs font-medium">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedScheme.applyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-700 text-white font-bold py-4 rounded-xl text-center hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Apply on Official Portal <ExternalLink size={18} />
                  </a>
                  <button 
                    onClick={() => setSelectedScheme(null)}
                    className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schemes;
