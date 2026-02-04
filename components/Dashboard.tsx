import React from 'react';
import { MOCK_KPIS, TODAY_SCHEDULE } from '../constants';
import { 
  TrendingDown, 
  TrendingUp, 
  Minus, 
  Receipt, 
  Search, 
  QrCode, 
  ChevronRight,
  Calendar
} from 'lucide-react';
import ActivityFeed from './ActivityFeed';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto flex flex-col gap-8 animate-fade-in">
      
      {/* KPI Cards */}
      <section aria-label="Key Performance Indicators">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_KPIS.map((kpi) => {
            const isCritical = kpi.status === 'critical';
            const isInfo = kpi.status === 'info';
            const isStable = kpi.status === 'stable';

            // Dark Mode Logic: Adjust background shades
            let iconBg = 'bg-gray-100 dark:bg-slate-700';
            let iconColor = 'text-gray-600 dark:text-slate-300';
            let badgeBg = 'bg-gray-100 dark:bg-slate-700';
            let badgeText = 'text-gray-600 dark:text-slate-300';
            let trendColor = 'text-gray-600 dark:text-slate-400';

            if (isCritical) {
              iconBg = 'bg-red-50 dark:bg-red-900/30';
              iconColor = 'text-ibrra-coral dark:text-red-400';
              badgeBg = 'bg-red-100 dark:bg-red-900/40';
              badgeText = 'text-red-700 dark:text-red-300';
              trendColor = 'text-ibrra-coral dark:text-red-400';
            } else if (isInfo) {
              iconBg = 'bg-cyan-50 dark:bg-cyan-900/30';
              iconColor = 'text-ibrra-cyan dark:text-cyan-400';
              badgeBg = 'bg-cyan-100 dark:bg-cyan-900/40';
              badgeText = 'text-cyan-700 dark:text-cyan-300';
              trendColor = 'text-ibrra-cyan dark:text-cyan-400';
            } else if (isStable) {
              trendColor = 'text-ibrra-green dark:text-green-400';
            }

            return (
              <div key={kpi.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-soft dark:shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all relative overflow-hidden group">
                <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500`}>
                  <kpi.icon size={100} className={iconColor} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${iconBg} ${iconColor} transition-colors`}>
                      <kpi.icon size={24} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeBg} ${badgeText} capitalize transition-colors`}>
                      {kpi.status === 'critical' ? 'Ação Necessária' : kpi.status === 'info' ? 'Atualizações' : 'Estável'}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-slate-400 font-medium mb-1 transition-colors">{kpi.title}</p>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-4xl font-bold text-ibrra-dark dark:text-white transition-colors">{kpi.value}</h3>
                      <span className={`text-sm font-medium flex items-center ${trendColor} transition-colors`}>
                        {kpi.trend === 'down' && <TrendingDown size={16} className="mr-1" />}
                        {kpi.trend === 'up' && <TrendingUp size={16} className="mr-1" />}
                        {kpi.trend === 'neutral' && <Minus size={16} className="mr-1" />}
                        {kpi.subtext}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Grid: Quick Access & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Quick Access Actions */}
          <section>
            <h3 className="text-lg font-bold text-ibrra-dark dark:text-white flex items-center gap-2 mb-4 transition-colors">
              <span className="text-ibrra-coral">⚡</span>
              Acesso Rápido
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center gap-4 p-6 bg-ibrra-coral hover:bg-red-600 text-white rounded-2xl shadow-lg shadow-ibrra-coral/20 transition-all group h-40">
                <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                  <Receipt size={32} />
                </div>
                <span className="font-semibold text-center">Nova Entrada<br/>de Nota</span>
              </button>
              
              <button className="flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-ibrra-dark dark:text-white border border-gray-100 dark:border-slate-700 rounded-2xl shadow-soft dark:shadow-lg transition-all group h-40">
                <div className="p-3 bg-red-50 dark:bg-slate-700 rounded-full text-ibrra-coral group-hover:scale-110 transition-transform">
                  <Search size={32} />
                </div>
                <span className="font-semibold text-center">Buscar<br/>POP</span>
              </button>
              
              <button className="flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-ibrra-dark dark:text-white border border-gray-100 dark:border-slate-700 rounded-2xl shadow-soft dark:shadow-lg transition-all group h-40">
                <div className="p-3 bg-red-50 dark:bg-slate-700 rounded-full text-ibrra-coral group-hover:scale-110 transition-transform">
                  <QrCode size={32} />
                </div>
                <span className="font-semibold text-center">Check-in<br/>Patrimônio</span>
              </button>
            </div>
          </section>

          {/* Schedule Preview */}
          <section className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-soft dark:shadow-lg transition-colors">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-ibrra-dark dark:text-white flex items-center gap-2 transition-colors">
                <Calendar className="text-gray-400 dark:text-slate-500" size={20} />
                Agenda do Centro Cirúrgico
              </h4>
              <button className="text-sm text-ibrra-coral font-medium hover:underline flex items-center">
                Ver tudo <ChevronRight size={16} />
              </button>
            </div>
            <div className="space-y-4">
              {TODAY_SCHEDULE.map((item) => (
                <div 
                  key={item.id} 
                  className={`flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors border-l-4 
                    ${item.color === 'blue' 
                      ? 'border-l-blue-400 bg-blue-50/30 dark:bg-blue-900/10' 
                      : 'border-l-purple-400 bg-purple-50/30 dark:bg-purple-900/10'}`}
                >
                  <div className={`flex flex-col items-center justify-center w-14 ${item.color === 'blue' ? 'text-blue-800 dark:text-blue-400' : 'text-purple-800 dark:text-purple-400'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Hoje</span>
                    <span className="text-lg font-bold">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-ibrra-dark dark:text-slate-100">{item.title}</p>
                    <p className="text-sm text-gray-500 dark:text-slate-400">{item.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-700 text-gray-600 dark:text-slate-300 rounded border border-gray-200 dark:border-slate-600 shadow-sm capitalize">
                    {item.status === 'confirmed' ? 'Confirmado' : 'Aguardando'}
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Activity Feed */}
        <div className="lg:col-span-1">
           <ActivityFeed />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;