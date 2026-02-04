import React from 'react';
import { RECENT_ACTIVITY } from '../constants';
import { Package, Eye, UserPlus, CheckCircle, RefreshCcw } from 'lucide-react';

const ActivityFeed: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-soft dark:shadow-lg border border-gray-100 dark:border-slate-700 flex flex-col overflow-hidden h-full transition-colors">
      <div className="p-6 border-b border-gray-100 dark:border-slate-700 flex items-center justify-between bg-gray-50/50 dark:bg-slate-800">
        <h3 className="font-bold text-ibrra-dark dark:text-white transition-colors">Atividade Recente</h3>
        <button className="text-gray-400 dark:text-slate-500 hover:text-ibrra-coral dark:hover:text-ibrra-coral transition-colors p-1 rounded hover:bg-gray-200 dark:hover:bg-slate-700">
          <RefreshCcw size={16} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {RECENT_ACTIVITY.map((activity, index) => {
            let Icon = Package;
            let iconBg = 'bg-gray-100 dark:bg-slate-700';
            let iconColor = 'text-gray-600 dark:text-slate-300';

            switch (activity.type) {
              case 'inventory':
                Icon = Package;
                iconBg = 'bg-orange-100 dark:bg-orange-900/20';
                iconColor = 'text-orange-600 dark:text-orange-400';
                break;
              case 'security':
                Icon = Eye;
                iconBg = 'bg-red-100 dark:bg-red-900/20';
                iconColor = 'text-red-600 dark:text-red-400';
                break;
              case 'patient':
                Icon = UserPlus;
                iconBg = 'bg-blue-100 dark:bg-blue-900/20';
                iconColor = 'text-blue-600 dark:text-blue-400';
                break;
              case 'system':
                Icon = CheckCircle;
                iconBg = 'bg-green-100 dark:bg-green-900/20';
                iconColor = 'text-ibrra-green dark:text-green-400';
                break;
            }

            return (
              <div 
                key={activity.id} 
                className={`flex gap-4 p-5 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors relative group ${index !== RECENT_ACTIVITY.length - 1 ? 'border-b border-gray-50 dark:border-slate-700/50' : ''}`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-ibrra-coral transition-colors"></div>
                
                <div className={`shrink-0 size-10 rounded-full ${iconBg} ${iconColor} flex items-center justify-center transition-colors`}>
                  <Icon size={18} />
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-ibrra-dark dark:text-slate-200 leading-snug transition-colors">
                    <span className="font-semibold">{activity.user}</span> {activity.action} <span className="font-semibold">{activity.target}</span>
                  </p>
                  <span className="text-xs text-gray-500 dark:text-slate-500 font-medium transition-colors">
                    {activity.timestamp} • {activity.department}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-100 dark:border-slate-700 bg-gray-50/30 dark:bg-slate-800">
        <button className="w-full py-2 text-sm font-medium text-ibrra-coral hover:text-red-700 dark:hover:text-red-400 hover:underline text-center">
          Ver histórico completo
        </button>
      </div>
    </section>
  );
};

export default ActivityFeed;