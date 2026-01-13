
import React, { useState } from 'react';
import { Menu, X, Bell, User, Globe, Home, Search, BookOpen, GraduationCap } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: 'home', icon: <Home size={18} /> },
    { label: 'Schemes', path: 'schemes', icon: <Search size={18} /> },
    { label: 'Exams', path: 'exams', icon: <GraduationCap size={18} /> },
    { label: 'Dashboard', path: 'dashboard', icon: <User size={18} /> },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'bn', label: 'বাংলা' }
  ];

  return (
    <nav className="bg-blue-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-white p-1 rounded-md">
              <BookOpen className="text-blue-700" size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight">SarkarSeva</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`flex items-center gap-1.5 hover:text-orange-300 transition-colors ${currentPath === item.path ? 'text-orange-400 font-semibold' : ''}`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-blue-800 text-white text-sm border-none rounded px-2 py-1 outline-none"
            >
              {languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
            <button className="relative p-1.5 hover:bg-blue-600 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-blue-700"></span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button className="p-1.5 hover:bg-blue-600 rounded-full">
               <Bell size={20} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1.5 hover:bg-blue-600 rounded-full">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => { onNavigate(item.path); setIsMenuOpen(false); }}
                className="flex items-center gap-3 w-full px-3 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
          <div className="p-4 border-t border-blue-600 flex justify-between items-center">
             <div className="flex items-center gap-2">
                <Globe size={18} />
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-white text-sm outline-none"
                >
                  {languages.map(l => <option key={l.code} value={l.code} className="bg-blue-800">{l.label}</option>)}
                </select>
             </div>
             <button onClick={() => onNavigate('dashboard')} className="bg-orange-500 px-4 py-2 rounded font-bold text-sm">
               Sign In
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
