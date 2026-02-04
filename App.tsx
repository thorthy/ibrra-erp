import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import InventoryView from './components/InventoryView';
import VaultView from './components/VaultView';
import KnowledgeView from './components/KnowledgeView';
import ChatView from './components/ChatView';
import MobileAppSimulation from './components/MobileAppSimulation';
import { CURRENT_USER } from './constants';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efeito para aplicar a classe 'dark' no elemento HTML
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventory':
        return <InventoryView />;
      case 'vault':
        return <VaultView />;
      case 'pops':
        return <KnowledgeView />;
      case 'chat':
        return <ChatView />;
      case 'mobile':
        return <MobileAppSimulation />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center p-8">
            <div className="bg-white dark:bg-slate-800 p-12 rounded-2xl shadow-soft max-w-lg transition-colors">
              <h2 className="text-2xl font-bold text-ibrra-dark dark:text-white mb-4">Em Breve</h2>
              <p className="text-gray-500 dark:text-slate-400 mb-8">
                O módulo <span className="font-semibold text-ibrra-coral">{activeTab}</span> está no roadmap para a próxima sprint.
              </p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="px-6 py-3 bg-ibrra-coral text-white rounded-xl font-medium shadow-lg shadow-ibrra-coral/20 hover:bg-red-600 transition-all"
              >
                Voltar ao Dashboard
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`flex h-screen w-full overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-[#F8F9FA] text-[#333333]'}`}>
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header 
          user={CURRENT_USER} 
          onMenuClick={() => setIsSidebarOpen(true)}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;