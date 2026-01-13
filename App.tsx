
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Schemes from './pages/Schemes';
import Exams from './pages/Exams';
import Dashboard from './pages/Dashboard';
import { Category } from './types';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');
  const [navParams, setNavParams] = useState<any>(null);
  const [language, setLanguage] = useState('en');

  // Handle Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPath(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string, params?: any) => {
    setNavParams(params);
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (currentPath) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'schemes':
        return <Schemes initialFilter={navParams} />;
      case 'exams':
        return <Exams />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentPath={currentPath} 
        onNavigate={navigate} 
        language={language} 
        setLanguage={setLanguage} 
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <footer className="bg-slate-900 text-white py-12 px-4 border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-white p-1 rounded">
                  <div className="w-5 h-5 bg-blue-700 rounded-sm"></div>
               </div>
               <span className="font-bold text-xl">SarkarSeva</span>
            </div>
            <p className="text-slate-400 text-sm">Empowering every Indian citizen with knowledge and accessibility to government resources.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Services</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li className="hover:text-white cursor-pointer" onClick={() => navigate('schemes')}>Eligibility Checker</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigate('exams')}>Exam Alerts</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigate('schemes')}>State Schemes</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigate('schemes')}>Scholarship Finder</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Help & Support</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Rural Outreach Program</li>
              <li className="hover:text-white cursor-pointer">Feedback</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Disclaimer</h4>
            <p className="text-[10px] text-slate-500 leading-normal">
              SarkarSeva is a private initiative to aggregate government information. We are not an official government entity. Information is sourced from public government portals like India.gov.in and MyScheme.gov.in. Always verify on official websites before applying.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
          © 2024 SarkarSeva Portal. Built for Digital India.
        </div>
      </footer>
    </div>
  );
};

export default App;
