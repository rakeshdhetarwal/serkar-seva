
import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Send, CheckCircle } from 'lucide-react';
import { getSmartEligibilityCheck } from '../services/geminiService';

const EligibilityChecker: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    age: 18,
    gender: 'Male',
    category: 'General',
    income: 0,
    education: 'Secondary',
    residence: 'Rural',
    state: 'National'
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const aiResponse = await getSmartEligibilityCheck(profile);
    setResult(aiResponse);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <CheckCircle className="text-green-600" />
        Find Schemes for You
      </h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Age</label>
          <input 
            type="number" 
            value={profile.age}
            onChange={(e) => setProfile({...profile, age: parseInt(e.target.value)})}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Gender</label>
          <select 
            value={profile.gender}
            onChange={(e) => setProfile({...profile, gender: e.target.value as any})}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Category</label>
          <select 
            value={profile.category}
            onChange={(e) => setProfile({...profile, category: e.target.value as any})}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
          >
            <option>General</option>
            <option>SC</option>
            <option>ST</option>
            <option>OBC</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Annual Family Income (₹)</label>
          <input 
            type="number" 
            value={profile.income}
            onChange={(e) => setProfile({...profile, income: parseInt(e.target.value)})}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Residence</label>
          <div className="mt-2 flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                checked={profile.residence === 'Rural'} 
                onChange={() => setProfile({...profile, residence: 'Rural'})}
                className="mr-2"
              /> Rural
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                checked={profile.residence === 'Urban'} 
                onChange={() => setProfile({...profile, residence: 'Urban'})}
                className="mr-2"
              /> Urban
            </label>
          </div>
        </div>
        <div className="md:col-span-2">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors"
          >
            {loading ? 'Analyzing...' : <><Send size={18}/> Check Eligibility</>}
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 animate-in fade-in duration-500">
          <h4 className="font-bold text-blue-900 mb-2">Smart Analysis:</h4>
          <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </div>
  );
};

export default EligibilityChecker;
