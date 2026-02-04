import React from 'react';
import { Search, Bell, Menu, Moon, Sun } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user: User;
  onMenuClick: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onMenuClick, isDarkMode, toggleTheme }) => {
  return (
    <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 flex items-center justify-between px-4 md:px-8 shrink-0 sticky top-0 z-10 transition-colors duration-300">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg text-gray-600 dark:text-slate-300 transition-colors"
        >
          <Menu size={24} />
        </button>
        <div className="flex flex-col justify-center">
          <h2 className="text-lg md:text-xl font-bold text-ibrra-dark dark:text-white leading-tight transition-colors">
            Bom dia, {user.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400 hidden sm:block transition-colors">
            Aqui está o resumo da sua clínica hoje.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Search Bar - Hidden on Mobile */}
        <div className="hidden md:flex relative w-[300px] lg:w-[400px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Buscar medicamentos, POPs ou pacientes..." 
            className="w-full h-11 pl-12 pr-4 bg-gray-50 dark:bg-slate-800 border-none rounded-xl text-sm text-ibrra-dark dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-ibrra-coral/20 focus:bg-white dark:focus:bg-slate-700 transition-all outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-500 dark:text-slate-400 hover:text-ibrra-coral dark:hover:text-yellow-400 transition-colors"
            title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button className="relative p-2.5 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-500 dark:text-slate-400 hover:text-ibrra-coral transition-colors">
            <Bell size={22} />
            <span className="absolute top-2.5 right-2.5 size-2 bg-ibrra-coral rounded-full ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
          </button>
          
          <div className="h-8 w-px bg-gray-200 dark:bg-slate-700 mx-1 hidden md:block transition-colors"></div>
          
          <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
            <div className="text-right hidden lg:block">
              <p className="text-sm font-semibold text-ibrra-dark dark:text-slate-200">{user.name}</p>
              <p className="text-xs text-gray-500 dark:text-slate-500">{user.role}</p>
            </div>
            <div className="size-10 rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-700 shadow-sm">
              <img 
                src={user.avatarUrl} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;