import React, { useState } from 'react';
import { MOCK_VAULT, MOCK_VAULT_LOGS } from '../constants';
import { Eye, EyeOff, Copy, ShieldCheck, Lock, AlertTriangle, Plus, ChevronDown, Check } from 'lucide-react';

const VaultView: React.FC = () => {
  const [visiblePasswordId, setVisiblePasswordId] = useState<string | null>(null);
  const [auditLogs, setAuditLogs] = useState(MOCK_VAULT_LOGS);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Agrupando itens por categoria
  const groupedItems = MOCK_VAULT.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof MOCK_VAULT>);

  const togglePassword = (item: typeof MOCK_VAULT[0]) => {
    if (visiblePasswordId === item.id) {
      setVisiblePasswordId(null);
    } else {
      // Registrar log visualmente
      const newLog = {
        id: Date.now(),
        user: 'Você (Admin)',
        action: 'Visualizou senha',
        target: item.service,
        time: 'Agora',
        ip: '192.168.0.10'
      };
      setAuditLogs([newLog, ...auditLogs]);
      
      setVisiblePasswordId(item.id);
      // Auto-hide após 5 segundos
      setTimeout(() => setVisiblePasswordId(null), 5000);
    }
  };

  const copyToClipboard = (text: string, id: string, serviceName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);

    const newLog = {
        id: Date.now(),
        user: 'Você (Admin)',
        action: 'Copiou senha',
        target: serviceName,
        time: 'Agora',
        ip: '192.168.0.10'
      };
      setAuditLogs([newLog, ...auditLogs]);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fade-in pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-ibrra-dark flex items-center gap-3">
            <div className="p-2 bg-ibrra-dark text-white rounded-lg">
              <Lock size={24} />
            </div>
            Cofre de Credenciais
          </h1>
          
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm max-w-2xl">
            <AlertTriangle size={16} className="shrink-0" />
            <p>
              <span className="font-bold">Atenção:</span> Acesso restrito e monitorado. Todas as ações de visualização e cópia são registradas nos logs de auditoria.
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-ibrra-coral text-white px-5 py-3 rounded-xl font-medium shadow-lg shadow-ibrra-coral/20 hover:bg-red-600 transition-colors shrink-0">
          <Plus size={20} />
          Nova Credencial
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: Credentials List (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider pl-1">{category}</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {items.map((item) => {
                  const isVisible = visiblePasswordId === item.id;
                  const isCopied = copiedId === item.id;
                  
                  return (
                    <div 
                      key={item.id} 
                      className={`relative bg-white border rounded-xl p-4 transition-all duration-300 group
                        ${isVisible 
                          ? 'border-red-200 bg-red-50/30 shadow-md scale-[1.01]' 
                          : 'border-gray-100 shadow-soft hover:shadow-card hover:border-gray-200'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Service Icon */}
                        <div className="size-12 bg-white rounded-lg border border-gray-100 p-2 flex items-center justify-center shrink-0">
                          <img src={item.iconUrl} alt={item.service} className="w-full h-full object-contain" />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-ibrra-dark truncate">{item.service}</h4>
                          <p className="text-sm text-gray-500 truncate font-mono">{item.username}</p>
                        </div>

                        {/* Password Field */}
                        <div className="hidden sm:flex flex-col items-end mr-2">
                           <div className={`text-sm font-mono transition-all duration-200 ${isVisible ? 'text-red-600 font-bold bg-white px-2 py-0.5 rounded border border-red-100' : 'text-gray-400 text-lg tracking-widest'}`}>
                             {isVisible ? item.passwordHash : '••••••••••••'}
                           </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1 border-l border-gray-100 pl-3">
                          <button 
                            onClick={() => togglePassword(item)}
                            className={`p-2 rounded-lg transition-colors ${isVisible ? 'text-red-500 bg-red-100' : 'text-gray-400 hover:bg-gray-100 hover:text-ibrra-dark'}`}
                            title={isVisible ? "Ocultar" : "Visualizar (Auditado)"}
                          >
                            {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                          
                          <button 
                            onClick={() => copyToClipboard(item.passwordHash, item.id, item.service)}
                            className={`p-2 rounded-lg transition-colors ${isCopied ? 'text-green-600 bg-green-100' : 'text-gray-400 hover:bg-gray-100 hover:text-ibrra-dark'}`}
                            title="Copiar Senha"
                          >
                            {isCopied ? <Check size={18} /> : <Copy size={18} />}
                          </button>
                        </div>
                      </div>
                      
                      {/* Mobile Password View */}
                      <div className="sm:hidden mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs text-gray-400 uppercase">Senha</span>
                         <div className={`text-sm font-mono ${isVisible ? 'text-red-600 font-bold' : 'text-gray-400'}`}>
                             {isVisible ? item.passwordHash : '••••••••••••'}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Audit Log (1/3) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden sticky top-24">
            <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
              <ShieldCheck className="text-ibrra-green" size={20} />
              <h3 className="font-bold text-ibrra-dark text-sm">Registro de Acessos</h3>
            </div>
            
            <div className="p-5 max-h-[600px] overflow-y-auto">
              <div className="relative border-l-2 border-gray-100 ml-3 space-y-6">
                {auditLogs.map((log) => (
                  <div key={log.id} className="relative pl-6 animate-fade-in">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 size-4 bg-white border-2 border-gray-300 rounded-full"></div>
                    
                    <div className="flex items-start gap-3">
                      <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">
                         {log.user.substring(0,2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{log.time}</p>
                        <p className="text-sm text-ibrra-dark leading-snug">
                          <span className="font-semibold">{log.user}</span> {log.action.toLowerCase()} de <span className="font-semibold">{log.target}</span>.
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1 font-mono bg-gray-50 inline-block px-1 rounded">
                          IP: {log.ip}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
              <button className="text-xs text-ibrra-coral font-medium hover:underline">
                Ver logs completos (Admin)
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Security Footer Banner */}
      <div className="fixed bottom-0 left-0 lg:left-64 right-0 bg-ibrra-dark text-gray-400 py-3 px-6 flex items-center justify-between text-xs border-t border-gray-800 z-20">
        <div className="flex items-center gap-2">
          <Lock size={12} className="text-ibrra-green" />
          <span>Criptografia <strong>AES-256</strong> ativa. Ambiente seguro.</span>
        </div>
        <span className="hidden sm:inline">Conformidade LGPD & ISO 27001</span>
      </div>

    </div>
  );
};

export default VaultView;