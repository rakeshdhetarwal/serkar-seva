
import React from 'react';
import { User, Bookmark, Bell, Settings, LogOut, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
            <div className="w-24 h-24 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={48} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Rajesh Kumar</h2>
            <p className="text-sm text-slate-500 mb-6">Gaya, Bihar • Rural</p>
            <button className="w-full py-2 bg-slate-50 text-slate-700 font-bold rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors text-sm">
              Edit Profile
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <button className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 border-b transition-colors">
              <Bookmark size={18} className="text-slate-400" />
              <span className="text-sm font-semibold">Saved Schemes</span>
              <span className="ml-auto bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">12</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 border-b transition-colors">
              <Bell size={18} className="text-slate-400" />
              <span className="text-sm font-semibold">Alerts</span>
              <span className="ml-auto bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">3</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 border-b transition-colors">
              <Settings size={18} className="text-slate-400" />
              <span className="text-sm font-semibold">Account Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 hover:bg-red-50 text-red-600 transition-colors">
              <LogOut size={18} />
              <span className="text-sm font-semibold">Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {/* Notifications */}
          <section>
            <h3 className="text-lg font-bold mb-4">Recent Alerts</h3>
            <div className="space-y-3">
              <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex gap-4">
                <div className="shrink-0 p-2 bg-white rounded-full text-orange-500 h-fit">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-orange-900">Deadline Approaching!</h4>
                  <p className="text-xs text-orange-700 mt-0.5">Application for SSC CGL 2024 closes in 3 days. Complete your registration.</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex gap-4">
                <div className="shrink-0 p-2 bg-white rounded-full text-green-500 h-fit">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-green-900">New Scheme Match Found</h4>
                  <p className="text-xs text-green-700 mt-0.5">Based on your farmer profile, 'Kisan Solar Pump Subsidy' is now available in your district.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity */}
          <section>
            <div className="flex items-center justify-between mb-4">
               <h3 className="text-lg font-bold">Application History</h3>
               <button className="text-blue-700 text-sm font-bold flex items-center gap-1 hover:underline">
                 View History <ChevronRight size={16} />
               </button>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b text-xs font-bold text-slate-500 uppercase">
                  <tr>
                    <th className="px-6 py-4">Service Name</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  <tr>
                    <td className="px-6 py-4 font-semibold">PM Kisan Samman Nidhi</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Active</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">12 Feb 2024</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">UPSC Prelims 2024</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Submitted</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">01 Mar 2024</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Aadhar Update Request</td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">In Progress</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">28 Feb 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
