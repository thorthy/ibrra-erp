import React, { useState } from 'react';
import { MOCK_INVENTORY, MOCK_ASSETS, MOCK_TEAM } from '../constants';
import { InventoryItem } from '../types';
import { 
  Plus, 
  Download, 
  Search, 
  Filter, 
  AlertTriangle, 
  CheckCircle, 
  MoreVertical, 
  DollarSign, 
  CalendarClock, 
  Briefcase, 
  Pill, 
  Laptop, 
  Minus,
  Edit2,
  X,
  Save,
  Tag
} from 'lucide-react';

const InventoryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pharmacy' | 'assets'>('pharmacy');
  
  // States for Checkout Modal
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  // States for New Item Modal
  const [newItemModalOpen, setNewItemModalOpen] = useState(false);
  const [newItemType, setNewItemType] = useState<'pharmacy' | 'asset'>('asset'); // Default to asset as per request focus

  const openCheckout = (item: InventoryItem) => {
    setSelectedItem(item);
    setCheckoutModalOpen(true);
  };

  const closeCheckout = () => {
    setCheckoutModalOpen(false);
    setSelectedItem(null);
  };

  const openNewItemModal = () => {
    // Tenta abrir na aba correspondente à visualização atual, mas com preferência lógica
    setNewItemType(activeTab === 'pharmacy' ? 'pharmacy' : 'asset');
    setNewItemModalOpen(true);
  };

  // Helper para formatar moeda
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fade-in relative pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ibrra-dark dark:text-white transition-colors">Gestão de Estoque</h1>
          <p className="text-gray-500 dark:text-slate-400 transition-colors">Controle inteligente de insumos e rastreabilidade patrimonial.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 text-gray-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            <Download size={18} />
            <span className="hidden sm:inline">Exportar Relatório</span>
          </button>
          <button 
            onClick={openNewItemModal}
            className="flex items-center gap-2 bg-ibrra-coral text-white px-5 py-2.5 rounded-xl font-medium shadow-lg shadow-ibrra-coral/20 hover:bg-red-600 transition-colors"
          >
            <Plus size={20} />
            Novo Item
          </button>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-soft dark:shadow-lg flex items-center gap-4 transition-colors">
          <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">Valor Total em Estoque</p>
            <h3 className="text-2xl font-bold text-ibrra-dark dark:text-white">R$ 450.230,00</h3>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-soft dark:shadow-lg flex items-center gap-4 transition-colors">
          <div className="p-3 bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400 rounded-xl">
            <CalendarClock size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">Vencendo em 30 dias</p>
            <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">12 Itens</h3>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-soft dark:shadow-lg flex items-center gap-4 transition-colors">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 rounded-xl">
            <Briefcase size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">Empréstimos Ativos</p>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">08 Ativos</h3>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 dark:border-slate-700">
        <div className="flex gap-8">
          <button 
            onClick={() => setActiveTab('pharmacy')}
            className={`flex items-center gap-2 pb-4 text-sm font-semibold transition-all relative
              ${activeTab === 'pharmacy' ? 'text-ibrra-coral dark:text-ibrra-coral' : 'text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200'}`}
          >
            <Pill size={18} />
            Farmácia & Insumos
            {activeTab === 'pharmacy' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ibrra-coral rounded-t-full"></span>
            )}
          </button>
          <button 
            onClick={() => setActiveTab('assets')}
            className={`flex items-center gap-2 pb-4 text-sm font-semibold transition-all relative
              ${activeTab === 'assets' ? 'text-ibrra-coral dark:text-ibrra-coral' : 'text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200'}`}
          >
            <Laptop size={18} />
            Patrimônio & TI
            {activeTab === 'assets' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ibrra-coral rounded-t-full"></span>
            )}
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-soft dark:shadow-lg border border-gray-100 dark:border-slate-700 flex flex-col md:flex-row gap-4 transition-colors">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder={activeTab === 'pharmacy' ? "Buscar por nome, lote ou princípio ativo..." : "Buscar por serial number, modelo ou responsável..."}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-700 border-none rounded-lg text-sm text-gray-700 dark:text-slate-200 focus:ring-2 focus:ring-ibrra-coral/20 outline-none transition-all placeholder-gray-400 dark:placeholder-slate-500"
          />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1 md:pb-0">
          <select className="px-4 py-2.5 bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-slate-300 rounded-lg text-sm font-medium outline-none cursor-pointer border-r-8 border-transparent hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
            <option>Categoria: Todas</option>
            <option>Cirúrgico</option>
            <option>Medicamentos</option>
            <option>Escritório</option>
          </select>
          <select className="px-4 py-2.5 bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-slate-300 rounded-lg text-sm font-medium outline-none cursor-pointer border-r-8 border-transparent hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
            <option>Status: Todos</option>
            <option>Estoque Baixo</option>
            <option>Vencido</option>
            <option>OK</option>
          </select>
        </div>
      </div>

      {/* Content Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-soft dark:shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          {activeTab === 'pharmacy' ? (
            /* --- PHARMACY TABLE --- */
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-700/50 border-b border-gray-100 dark:border-slate-700 text-xs uppercase text-gray-500 dark:text-slate-400 font-semibold tracking-wider">
                  <th className="p-4 pl-6">Produto</th>
                  <th className="p-4">Categoria</th>
                  <th className="p-4">Lote / Validade</th>
                  <th className="p-4 w-48">Qtd. Atual</th>
                  <th className="p-4 text-center">Status</th>
                  <th className="p-4 text-right pr-6">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-slate-700">
                {MOCK_INVENTORY.map((item) => {
                  const percentage = (item.quantity / item.maxQuantity) * 100;
                  const isCritical = item.status === 'critical';
                  
                  return (
                    <tr key={item.id} className="hover:bg-gray-50/50 dark:hover:bg-slate-700/30 transition-colors group">
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-lg bg-gray-100 dark:bg-slate-700 p-1.5 shrink-0 border border-gray-200 dark:border-slate-600">
                             <img src={item.imageUrl} alt="" className="w-full h-full object-contain opacity-80" />
                          </div>
                          <div>
                            <p className="font-semibold text-ibrra-dark dark:text-slate-200 text-sm">{item.name}</p>
                            <p className="text-xs text-gray-500 dark:text-slate-500">{formatCurrency(item.value)}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 px-2 py-1 rounded-md border border-gray-200 dark:border-slate-600">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col text-sm">
                          <span className="text-gray-700 dark:text-slate-300 font-mono text-xs">{item.batchNumber}</span>
                          <span className={`${isCritical ? 'text-red-600 dark:text-red-400 font-bold' : 'text-gray-500 dark:text-slate-500'}`}>
                            {item.expiryDate}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-bold text-gray-700 dark:text-slate-300">{item.quantity} un</span>
                          <span className="text-gray-400 dark:text-slate-500">de {item.maxQuantity}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${isCritical ? 'bg-red-500' : item.status === 'warning' ? 'bg-orange-400' : 'bg-green-500'}`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </td>
                      <td className="p-4 text-center">
                         {isCritical ? (
                           <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold border border-red-100 dark:border-red-800">
                             Crítico
                           </span>
                         ) : item.status === 'warning' ? (
                           <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-bold border border-orange-100 dark:border-orange-800">
                             Atenção
                           </span>
                         ) : (
                           <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-800">
                             OK
                           </span>
                         )}
                      </td>
                      <td className="p-4 text-right pr-6">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => openCheckout(item)}
                            className="p-2 text-gray-400 dark:text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors border border-transparent hover:border-red-100 dark:hover:border-red-800"
                            title="Dar Baixa"
                          >
                            <Minus size={16} />
                          </button>
                          <button 
                            className="p-2 text-gray-400 dark:text-slate-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors border border-transparent hover:border-blue-100 dark:hover:border-blue-800"
                            title="Editar"
                          >
                            <Edit2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
             /* --- ASSETS TABLE --- */
             <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-700/50 border-b border-gray-100 dark:border-slate-700 text-xs uppercase text-gray-500 dark:text-slate-400 font-semibold tracking-wider">
                  <th className="p-4 pl-6">Equipamento</th>
                  <th className="p-4">Serial Number</th>
                  <th className="p-4">Responsável Atual</th>
                  <th className="p-4">Aquisição</th>
                  <th className="p-4 text-center">Status</th>
                  <th className="p-4 text-right pr-6">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-slate-700">
                {MOCK_ASSETS.map((asset) => {
                  return (
                    <tr key={asset.id} className="hover:bg-gray-50/50 dark:hover:bg-slate-700/30 transition-colors">
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                             <Laptop size={18} />
                           </div>
                           <div>
                             <p className="font-semibold text-ibrra-dark dark:text-slate-200 text-sm">{asset.name}</p>
                             <div className="flex items-center gap-2 mt-0.5">
                               <span className="text-[10px] font-bold bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 px-1.5 py-0.5 rounded border border-gray-200 dark:border-slate-600">
                                 Pat: {asset.patrimonyNumber}
                               </span>
                               <span className="text-xs text-gray-500 dark:text-slate-500">{asset.category}</span>
                             </div>
                           </div>
                        </div>
                      </td>
                      <td className="p-4">
                         <span className="font-mono text-xs bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded text-gray-600 dark:text-slate-300">
                           {asset.serialNumber}
                         </span>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-slate-300">
                        {asset.responsible || '-'}
                      </td>
                      <td className="p-4 text-sm text-gray-500 dark:text-slate-400">
                        {asset.purchaseDate}
                      </td>
                      <td className="p-4 text-center">
                        {asset.status === 'in_use' && (
                          <span className="inline-flex px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-100 dark:border-blue-800">
                            Em Uso
                          </span>
                        )}
                        {asset.status === 'available' && (
                          <span className="inline-flex px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-semibold border border-green-100 dark:border-green-800">
                            Disponível
                          </span>
                        )}
                        {asset.status === 'maintenance' && (
                          <span className="inline-flex px-2 py-0.5 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-xs font-semibold border border-yellow-100 dark:border-yellow-800">
                            Manutenção
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right pr-6">
                         <button className="p-2 text-gray-400 dark:text-slate-500 hover:text-ibrra-dark dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                            <MoreVertical size={18} />
                          </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
             </table>
          )}
        </div>
      </div>

      {/* Checkout Modal (Dar Baixa) */}
      {checkoutModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeCheckout}></div>
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-in border border-gray-100 dark:border-slate-700 transition-colors">
            <button 
              onClick={closeCheckout}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <div className="size-12 rounded-full bg-red-50 dark:bg-red-900/20 text-ibrra-coral flex items-center justify-center mb-4">
                <Minus size={24} />
              </div>
              <h3 className="text-xl font-bold text-ibrra-dark dark:text-white">Registrar Saída de Estoque</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">Você está retirando itens do almoxarifado.</p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-xl mb-6 border border-gray-100 dark:border-slate-600">
              <p className="text-sm font-semibold text-gray-700 dark:text-slate-200">{selectedItem.name}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-gray-500 dark:text-slate-400">Lote: {selectedItem.batchNumber}</p>
                <p className="text-xs text-gray-500 dark:text-slate-400">Atual: <span className="font-bold">{selectedItem.quantity}</span></p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Quantidade a retirar</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="number" 
                    defaultValue={1}
                    min={1}
                    max={selectedItem.quantity}
                    className="flex-1 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-ibrra-dark dark:text-white rounded-lg px-3 py-2 text-center text-lg font-bold focus:ring-2 focus:ring-ibrra-coral/20 focus:border-ibrra-coral outline-none transition-colors"
                  />
                  <span className="text-sm text-gray-500 dark:text-slate-400">unidades</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Destino / Motivo</label>
                <select className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-ibrra-dark dark:text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-ibrra-coral/20 focus:border-ibrra-coral outline-none transition-colors">
                  <option>Centro Cirúrgico</option>
                  <option>Consultório 01</option>
                  <option>Laboratório</option>
                  <option>Descarte / Avaria</option>
                </select>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => {
                    alert("Saída registrada com sucesso! (Simulação)");
                    closeCheckout();
                  }}
                  className="w-full py-3 bg-ibrra-coral text-white rounded-xl font-bold hover:bg-red-600 transition-all shadow-lg shadow-ibrra-coral/20"
                >
                  Confirmar Retirada
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* New Item Modal (Cadastro) */}
      {newItemModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setNewItemModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-fade-in border border-gray-100 dark:border-slate-700 transition-colors flex flex-col max-h-[90vh] overflow-y-auto custom-scrollbar">
            
            <button 
              onClick={() => setNewItemModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-ibrra-dark dark:text-white">Cadastrar Novo Item</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">Adicione insumos ou equipamentos ao inventário.</p>
            </div>

            {/* Tabs Switcher */}
            <div className="bg-gray-100 dark:bg-slate-700 p-1 rounded-xl flex mb-6">
              <button
                onClick={() => setNewItemType('pharmacy')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg transition-all
                  ${newItemType === 'pharmacy' 
                    ? 'bg-white dark:bg-slate-600 text-ibrra-coral shadow-sm' 
                    : 'text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300'
                  }`}
              >
                <Pill size={16} />
                Insumo / Med
              </button>
              <button
                onClick={() => setNewItemType('asset')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg transition-all
                  ${newItemType === 'asset' 
                    ? 'bg-white dark:bg-slate-600 text-ibrra-coral shadow-sm' 
                    : 'text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300'
                  }`}
              >
                <Laptop size={16} />
                Patrimônio
              </button>
            </div>

            {/* FORM BODY */}
            <div className="space-y-4">
              
              {newItemType === 'asset' ? (
                <>
                  {/* --- ASSET FORM FOCUS --- */}
                  
                  {/* Campo de Identificação (Destaque) */}
                  <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
                     <label className="block text-sm font-bold text-ibrra-coral mb-1 flex items-center gap-2">
                       <Tag size={16} />
                       Nº Patrimônio (Etiqueta Interna)
                     </label>
                     <input 
                       type="text" 
                       placeholder="Ex: 0001, 0002..." 
                       className="w-full bg-white dark:bg-slate-900 border-2 border-red-100 dark:border-red-900/30 focus:border-ibrra-coral dark:focus:border-ibrra-coral rounded-lg px-4 py-3 text-lg font-bold text-gray-700 dark:text-white placeholder-gray-300 outline-none transition-colors"
                       autoFocus
                     />
                     <p className="text-[10px] text-gray-500 dark:text-red-300/70 mt-1">Este é o código único de controle do IBRRA.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Nome do Equipamento</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Notebook Dell Latitude" 
                      className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-ibrra-dark dark:text-white focus:ring-2 focus:ring-ibrra-coral/20 outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Categoria</label>
                        <select className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-ibrra-dark dark:text-white focus:ring-2 focus:ring-ibrra-coral/20 outline-none transition-colors">
                           <option>TI & Periféricos</option>
                           <option>Mobiliário</option>
                           <option>Médico / Hospitalar</option>
                        </select>
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Nº Série (Fabricante)</label>
                        <input 
                          type="text" 
                          placeholder="S/N (Opcional)" 
                          className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-ibrra-dark dark:text-white focus:ring-2 focus:ring-ibrra-coral/20 outline-none transition-colors"
                        />
                     </div>
                  </div>

                  <div className="border-t border-gray-100 dark:border-slate-700 pt-2 mt-2">
                     <p className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase mb-3">Alocação Inicial</p>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Responsável</label>
                           <select className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-ibrra-dark dark:text-white focus:ring-2 focus:ring-ibrra-coral/20 outline-none transition-colors">
                              <option value="">Selecione...</option>
                              {MOCK_TEAM.map(member => (
                                <option key={member.id}>{member.name}</option>
                              ))}
                           </select>
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Localização</label>
                           <input 
                             type="text" 
                             placeholder="Ex: Sala 04" 
                             className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-ibrra-dark dark:text-white focus:ring-2 focus:ring-ibrra-coral/20 outline-none transition-colors"
                           />
                        </div>
                     </div>
                  </div>

                </>
              ) : (
                <>
                  {/* --- PHARMACY FORM (Simplified) --- */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Nome do Insumo</label>
                    <input type="text" className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-ibrra-dark dark:text-white focus:ring-2 focus:ring-ibrra-coral/20 outline-none transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Lote</label>
                        <input type="text" className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-ibrra-dark dark:text-white outline-none" />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Validade</label>
                        <input type="date" className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-ibrra-dark dark:text-white outline-none" />
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Quantidade</label>
                        <input type="number" className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-ibrra-dark dark:text-white outline-none" />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Categoria</label>
                         <select className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-ibrra-dark dark:text-white outline-none">
                           <option>Medicamentos</option>
                           <option>EPI</option>
                        </select>
                     </div>
                  </div>
                </>
              )}

            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
               <button 
                  onClick={() => setNewItemModalOpen(false)}
                  className="flex-1 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-200 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
               >
                  Cancelar
               </button>
               <button 
                  onClick={() => {
                     alert("Item cadastrado com sucesso! (Simulação)");
                     setNewItemModalOpen(false);
                  }}
                  className="flex-1 py-3 bg-ibrra-coral text-white font-bold rounded-xl shadow-lg shadow-ibrra-coral/20 hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
               >
                  <Save size={18} />
                  Salvar Item
               </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default InventoryView;