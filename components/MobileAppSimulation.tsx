import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  ScanLine, 
  FileText, 
  MessageSquare, 
  Home, 
  Package, 
  Calendar, 
  User, 
  X,
  CheckCircle,
  QrCode,
  Battery
} from 'lucide-react';

const MobileAppSimulation: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(false);

  // Simula o processo de scan
  useEffect(() => {
    if (isScanning) {
      const timer = setTimeout(() => {
        setScanResult(true);
      }, 2500); // 2.5s para simular leitura
      return () => clearTimeout(timer);
    } else {
      setScanResult(false);
    }
  }, [isScanning]);

  const handleScanClick = () => {
    setIsScanning(true);
  };

  const handleCloseScan = () => {
    setIsScanning(false);
    setScanResult(false);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-100px)] p-8 bg-gray-50 animate-fade-in">
      
      {/* Phone Frame */}
      <div className="relative w-[360px] h-[780px] bg-black rounded-[50px] shadow-2xl border-8 border-black ring-4 ring-gray-200 overflow-hidden flex flex-col">
        
        {/* Notch / Status Bar Area */}
        <div className="h-8 bg-white flex items-center justify-between px-6 pt-2 shrink-0 z-20">
            <span className="text-[10px] font-bold text-black">14:32</span>
            <div className="w-24 h-5 bg-black rounded-b-xl absolute left-1/2 -translate-x-1/2 top-0"></div>
            <Battery size={14} className="text-black" />
        </div>

        {/* --- APP CONTENT --- */}
        <div className="flex-1 bg-[#F8F9FA] overflow-y-auto pb-20 relative scrollbar-hide">
          
          {/* 1. Header */}
          <header className="bg-white p-6 pb-4 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="text-xs text-gray-400 font-medium">Bem-vinda,</p>
                   <h2 className="text-lg font-bold text-ibrra-dark leading-none">Enf. Ana</h2>
                </div>
              </div>
              <button className="relative p-2 text-gray-500 hover:text-ibrra-coral">
                 <Bell size={24} />
                 <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
              </button>
            </div>

            {/* 2. Task Card (Context) */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-200 relative overflow-hidden mb-2">
               <div className="absolute -right-2 -bottom-6 opacity-20">
                  <Calendar size={100} />
               </div>
               <p className="text-blue-100 text-xs font-medium mb-1 uppercase tracking-wider">Próximo Procedimento</p>
               <h3 className="text-lg font-bold leading-tight mb-2">Coleta de Óvulos</h3>
               <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="bg-white/20 px-2 py-0.5 rounded">Sala 04</span>
                  <span>14:00</span>
               </div>
            </div>
          </header>

          {/* 3. Quick Actions */}
          <div className="p-6">
            <h3 className="text-sm font-bold text-gray-700 mb-4">Ações Rápidas</h3>
            <div className="grid grid-cols-2 gap-4">
               {/* SCAN BUTTON (Primary) */}
               <button 
                 onClick={handleScanClick}
                 className="col-span-2 bg-ibrra-coral active:bg-red-700 text-white p-5 rounded-2xl shadow-lg shadow-red-200 flex items-center justify-between group transition-transform active:scale-95"
               >
                 <div className="flex flex-col items-start">
                    <span className="font-bold text-lg">Bipar Saída</span>
                    <span className="text-red-100 text-xs">Ler código de barras</span>
                 </div>
                 <div className="size-12 bg-white/20 rounded-full flex items-center justify-center">
                    <ScanLine size={24} />
                 </div>
               </button>

               <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 active:bg-gray-50 active:scale-95 transition-all">
                  <div className="size-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
                     <FileText size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Ler POP</span>
               </button>

               <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 active:bg-gray-50 active:scale-95 transition-all relative">
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-1.5 rounded-full">2</div>
                  <div className="size-10 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center">
                     <MessageSquare size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Mensagens</span>
               </button>
            </div>
          </div>

          {/* 4. Recent List */}
          <div className="px-6 pb-6">
             <h3 className="text-sm font-bold text-gray-700 mb-4">Últimas Movimentações</h3>
             <div className="space-y-3">
               {[1,2,3].map(i => (
                 <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <div className="size-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                       <Package size={18} />
                    </div>
                    <div className="flex-1">
                       <p className="text-sm font-bold text-ibrra-dark">Luvas Estéreis</p>
                       <p className="text-xs text-gray-500">Há 15 min • Cirúrgico</p>
                    </div>
                    <span className="text-xs font-bold text-red-500">- 2 un</span>
                 </div>
               ))}
             </div>
          </div>

        </div>

        {/* 5. Bottom Navigation */}
        <nav className="absolute bottom-0 w-full h-20 bg-white border-t border-gray-100 flex items-start justify-around pt-3 px-2 z-10 pb-6">
           <button className="flex flex-col items-center gap-1 w-16 text-ibrra-coral">
              <Home size={24} fill="currentColor" className="opacity-20" />
              <Home size={24} className="absolute" />
              <span className="text-[10px] font-bold">Home</span>
           </button>
           <button className="flex flex-col items-center gap-1 w-16 text-gray-400 hover:text-ibrra-dark">
              <Package size={24} />
              <span className="text-[10px] font-medium">Estoque</span>
           </button>
           <button className="flex flex-col items-center gap-1 w-16 text-gray-400 hover:text-ibrra-dark">
              <Calendar size={24} />
              <span className="text-[10px] font-medium">Agenda</span>
           </button>
           <button className="flex flex-col items-center gap-1 w-16 text-gray-400 hover:text-ibrra-dark">
              <User size={24} />
              <span className="text-[10px] font-medium">Perfil</span>
           </button>
        </nav>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full z-20"></div>

        {/* --- SCANNER OVERLAY SIMULATION --- */}
        {isScanning && (
          <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col animate-fade-in">
            {/* Camera Header */}
            <div className="h-20 flex items-end justify-between px-6 pb-4">
               <span className="text-white font-medium text-lg">Escanear</span>
               <button onClick={handleCloseScan} className="bg-white/20 p-2 rounded-full text-white">
                 <X size={20} />
               </button>
            </div>

            {/* Camera Viewport */}
            <div className="flex-1 relative flex items-center justify-center">
               <div className="w-64 h-64 border-2 border-white/50 rounded-3xl relative overflow-hidden">
                  {/* Fake Camera Feed Background */}
                  <img 
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60" 
                    alt="Camera Feed"
                  />
                  
                  {/* Scanning Line Animation */}
                  {!scanResult && (
                    <div className="absolute left-0 right-0 h-0.5 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-[scan_2s_ease-in-out_infinite] top-0"></div>
                  )}

                  {/* Corner Markers */}
                  <div className="absolute top-0 left-0 size-6 border-l-4 border-t-4 border-white rounded-tl-xl"></div>
                  <div className="absolute top-0 right-0 size-6 border-r-4 border-t-4 border-white rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 size-6 border-l-4 border-b-4 border-white rounded-bl-xl"></div>
                  <div className="absolute bottom-0 right-0 size-6 border-r-4 border-b-4 border-white rounded-br-xl"></div>
               </div>

               {/* Instruction Text */}
               {!scanResult && (
                 <p className="absolute bottom-20 text-white/80 text-sm text-center px-8">
                   Aponte a câmera para o código de barras da embalagem.
                 </p>
               )}
            </div>

            {/* Result Card (Slide Up) */}
            {scanResult && (
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 pb-12 animate-[slideUp_0.3s_ease-out]">
                 <div className="flex items-start gap-4 mb-4">
                    <div className="size-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                       <CheckCircle size={28} />
                    </div>
                    <div>
                       <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">Medicamento Identificado</p>
                       <h3 className="text-xl font-bold text-ibrra-dark">Gonal F 900UI</h3>
                       <p className="text-sm text-gray-600">Lote: 99281 • Val: 12/2025</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-3">
                    <button 
                       onClick={handleCloseScan}
                       className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl"
                    >
                       Cancelar
                    </button>
                    <button 
                       onClick={() => {
                         alert("Saída registrada no sistema!");
                         handleCloseScan();
                       }}
                       className="flex-1 py-3 bg-ibrra-coral text-white font-bold rounded-xl shadow-lg shadow-red-200"
                    >
                       Confirmar Baixa
                    </button>
                 </div>
              </div>
            )}
          </div>
        )}

      </div>
      
      {/* Helper Text outside phone */}
      <div className="hidden md:block absolute bottom-8 text-center text-gray-400 text-sm">
        <p>Simulação IBRRA Connect v1.0</p>
        <p>Preview para iPhone 14 Pro</p>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default MobileAppSimulation;