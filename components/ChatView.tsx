import React from 'react';
import { MOCK_CONTACTS, MOCK_MESSAGES, CURRENT_USER } from '../constants';
import { Send, Phone, Video, MoreVertical, Search, Paperclip, Smile } from 'lucide-react';

const ChatView: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-5rem)] bg-white overflow-hidden animate-fade-in">
      {/* Sidebar - Contacts */}
      <div className="w-full md:w-80 border-r border-gray-100 flex flex-col bg-gray-50/50">
        <div className="p-4 border-b border-gray-100 bg-white">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar conversas..." 
              className="w-full pl-9 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-ibrra-coral/20 outline-none transition-all"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {MOCK_CONTACTS.map((contact) => (
            <div 
              key={contact.id} 
              className={`flex items-center gap-3 p-4 hover:bg-white cursor-pointer transition-colors border-l-4 ${contact.id === 'c1' ? 'bg-white border-l-ibrra-coral shadow-sm' : 'border-l-transparent'}`}
            >
              <div className="relative">
                <img src={contact.avatarUrl} alt={contact.name} className="size-12 rounded-full object-cover border border-gray-200" />
                {contact.online && <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className={`text-sm font-semibold truncate ${contact.id === 'c1' ? 'text-ibrra-dark' : 'text-gray-700'}`}>{contact.name}</h4>
                  {contact.unreadCount ? (
                    <span className="bg-ibrra-coral text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center">{contact.unreadCount}</span>
                  ) : null}
                </div>
                <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[#F2F4F7] relative hidden md:flex">
        {/* Chat Header */}
        <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shadow-sm z-10">
          <div className="flex items-center gap-3">
            <img src={MOCK_CONTACTS[0].avatarUrl} alt="Chatbot" className="size-10 rounded-full object-cover border border-gray-200" />
            <div>
              <h3 className="font-bold text-ibrra-dark text-sm">{MOCK_CONTACTS[0].name}</h3>
              <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                <span className="size-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <button className="hover:text-ibrra-coral transition-colors"><Phone size={20} /></button>
            <button className="hover:text-ibrra-coral transition-colors"><Video size={20} /></button>
            <button className="hover:text-ibrra-dark transition-colors"><MoreVertical size={20} /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-center my-4">
             <span className="text-xs font-medium text-gray-400 bg-gray-200 px-3 py-1 rounded-full">Hoje</span>
          </div>
          
          {MOCK_MESSAGES.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[70%] px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed relative
                  ${msg.isMe 
                    ? 'bg-ibrra-coral text-white rounded-br-none' 
                    : 'bg-white text-gray-700 rounded-bl-none'
                  }`}
              >
                {msg.text}
                <span 
                  className={`text-[10px] absolute bottom-1 right-3 opacity-70 
                    ${msg.isMe ? 'text-white' : 'text-gray-400'}`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 focus-within:border-ibrra-coral/50 focus-within:ring-2 focus-within:ring-ibrra-coral/10 transition-all">
            <button className="text-gray-400 hover:text-ibrra-dark"><Paperclip size={20} /></button>
            <input 
              type="text" 
              placeholder="Digite sua mensagem..." 
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 h-10"
            />
            <button className="text-gray-400 hover:text-ibrra-dark"><Smile size={20} /></button>
            <button className="bg-ibrra-coral text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition-colors">
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-2">
            As mensagens são criptografadas e armazenadas conforme a LGPD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatView;