import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Settings, LogOut, HeartPulse } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-20 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <aside 
        className={`fixed top-0 left-0 z-30 h-screen w-64 bg-white dark:bg-slate-800 border-r border-gray-100 dark:border-slate-700 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 lg:static shadow-soft dark:shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="size-10 bg-gradient-to-br from-ibrra-coral to-orange-400 rounded-lg flex items-center justify-center text-white shadow-lg shadow-ibrra-coral/30">
              <HeartPulse size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-ibrra-dark dark:text-white transition-colors">IBRRA 360</h1>
              <p className="text-xs text-gray-500 dark:text-slate-400 font-medium transition-colors">Admin System</p>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    if (window.innerWidth < 1024) onClose();
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                    ${isActive 
                      ? 'bg-red-50 dark:bg-slate-700/50 text-ibrra-coral shadow-sm font-semibold' 
                      : 'text-gray-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700/50 hover:text-ibrra-dark dark:hover:text-slate-100 font-medium'
                    }
                  `}
                >
                  <item.icon 
                    size={22} 
                    className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} 
                  />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-6 border-t border-gray-100 dark:border-slate-700 transition-colors">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-ibrra-dark dark:hover:text-slate-100 transition-all duration-200 group">
            <Settings size={22} className="group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-sm font-medium">Configurações</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 mt-1 rounded-xl text-gray-400 dark:text-slate-500 hover:text-red-500 hover:dark:text-red-400 transition-colors">
            <LogOut size={20} />
            <span className="text-sm">Sair</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;