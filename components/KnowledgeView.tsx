import React from 'react';
import { MOCK_WIKI, MOCK_TEAM, CURRENT_USER } from '../constants';
import { 
  FileText, 
  Video, 
  File, 
  Search, 
  BookOpen, 
  Download, 
  Plus, 
  AlertCircle, 
  PlayCircle, 
  Folder, 
  CheckCircle, 
  MessageCircle,
  Clock,
  Users
} from 'lucide-react';

const KnowledgeView: React.FC = () => {
  const pendingDocs = MOCK_WIKI.filter(item => item.isPending);
  const categories = [
    { name: 'Laboratório & FIV', color: 'bg-blue-100 text-blue-700' },
    { name: 'Enfermagem & Centro Cirúrgico', color: 'bg-green-100 text-green-700' },
    { name: 'Recepção & Atendimento', color: 'bg-purple-100 text-purple-700' },
    { name: 'RH & Administrativo', color: 'bg-orange-100 text-orange-700' }
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fade-in relative pb-20">
      
      {/* Header & Search */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-ibrra-dark flex items-center gap-2">
             <BookOpen className="text-ibrra-coral" size={28} />
             Base de Conhecimento
          </h1>
          <p className="text-gray-500">Procedimentos Operacionais Padrão (POPs) e Treinamentos.</p>
        </div>
        
        <div className="flex-1 w-full lg:max-w-2xl flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Pesquisar 'Protocolo de Descongelamento', 'Atendimento'..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-soft text-gray-700 focus:ring-2 focus:ring-ibrra-coral/20 outline-none transition-all"
            />
          </div>
          <button className="hidden sm:flex items-center gap-2 bg-ibrra-dark text-white px-5 py-3 rounded-xl font-medium shadow-lg hover:bg-black transition-colors shrink-0">
            <Plus size={20} />
            Novo Doc
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        
        {/* Main Content Area (Library) */}
        <div className="xl:col-span-3 space-y-8">
          
          {/* 1. Pending Readings (Gamification) */}
          {pendingDocs.length > 0 && (
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10 text-orange-600">
                  <AlertCircle size={120} />
               </div>
               
               <div className="relative z-10">
                 <h2 className="text-lg font-bold text-orange-900 mb-1 flex items-center gap-2">
                   <AlertCircle size={20} className="text-orange-600" />
                   Olá, {CURRENT_USER.name}. Você tem leituras pendentes.
                 </h2>
                 <p className="text-orange-700/80 text-sm mb-6 max-w-xl">
                   Mantenha a conformidade da clínica em dia. Estes documentos são obrigatórios para sua função.
                 </p>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {pendingDocs.map(doc => (
                     <div key={doc.id} className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 flex items-start gap-4">
                       <div className={`p-3 rounded-lg shrink-0 ${doc.type === 'video' ? 'bg-blue-50 text-blue-500' : 'bg-red-50 text-red-500'}`}>
                         {doc.type === 'video' ? <PlayCircle size={24} /> : <FileText size={24} />}
                       </div>
                       <div className="flex-1 min-w-0">
                         <h4 className="font-bold text-gray-800 text-sm truncate">{doc.title}</h4>
                         <p className="text-xs text-gray-500 mb-3">{doc.category} • {doc.updatedAt}</p>
                         <button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors shadow-md shadow-orange-500/20">
                           Ler e Confirmar
                         </button>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          )}

          {/* 2. Library Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, idx) => {
               // Filter docs for this category
               const categoryDocs = MOCK_WIKI.filter(d => d.category === cat.name && !d.isPending);

               return (
                 <div key={idx} className="space-y-4">
                   <div className="flex items-center gap-2">
                     <Folder className="text-gray-400" size={20} />
                     <h3 className="font-bold text-gray-700">{cat.name}</h3>
                   </div>
                   
                   <div className="grid grid-cols-1 gap-3">
                     {categoryDocs.length > 0 ? categoryDocs.map(doc => (
                       <div key={doc.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft hover:shadow-md transition-all group">
                         <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${doc.type === 'video' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                                {doc.type === 'video' ? <Video size={18} /> : <FileText size={18} />}
                              </div>
                              <span className="font-semibold text-gray-700 text-sm group-hover:text-ibrra-coral transition-colors">{doc.title}</span>
                            </div>
                         </div>
                         
                         {/* Team Progress */}
                         <div className="mt-3">
                           <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                             <span>Leitura da Equipe</span>
                             <span className={doc.readProgress === 100 ? 'text-green-600 font-bold' : ''}>{doc.readProgress}%</span>
                           </div>
                           <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                             <div 
                               className={`h-full rounded-full ${doc.readProgress === 100 ? 'bg-green-500' : 'bg-ibrra-cyan'}`} 
                               style={{ width: `${doc.readProgress}%` }}
                             ></div>
                           </div>
                         </div>
                       </div>
                     )) : (
                       <div className="p-4 border border-dashed border-gray-200 rounded-xl text-center text-sm text-gray-400">
                         Nenhum documento público nesta pasta.
                       </div>
                     )}
                   </div>
                 </div>
               );
            })}
          </div>

        </div>

        {/* Right Sidebar: Team Directory */}
        <aside className="xl:col-span-1">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 sticky top-24 overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-ibrra-dark flex items-center gap-2">
                <Users size={18} className="text-ibrra-coral" />
                Colaboradores
              </h3>
            </div>

            <div className="p-2">
              {MOCK_TEAM.map((member) => (
                <div key={member.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                  <div className="relative">
                    <img src={member.avatarUrl} alt={member.name} className="size-10 rounded-full object-cover border border-gray-100" />
                    <span className={`absolute bottom-0 right-0 size-3 border-2 border-white rounded-full
                      ${member.status === 'online' ? 'bg-green-500' : member.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-400'}
                    `}></span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-700 truncate">{member.name}</h4>
                    <p className="text-xs text-gray-500 truncate">{member.role}</p>
                    {member.statusText && (
                       <p className={`text-[10px] font-medium truncate mt-0.5
                         ${member.status === 'busy' ? 'text-yellow-600' : 'text-green-600'}
                       `}>
                         {member.statusText}
                       </p>
                    )}
                  </div>

                  <button className="p-2 text-gray-300 hover:text-ibrra-coral hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <MessageCircle size={18} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
              <button className="text-xs text-ibrra-coral font-bold hover:underline">
                Ver organograma completo
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default KnowledgeView;