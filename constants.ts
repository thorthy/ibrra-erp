import { 
  LayoutDashboard, 
  Package, 
  Lock, 
  BookOpen, 
  Users, 
  MessageSquare, 
  Settings,
  AlertTriangle,
  Ticket,
  MonitorSmartphone,
  CheckCircle,
  Eye,
  UserPlus,
  Smartphone
} from 'lucide-react';
import { KPI, ActivityLog, ScheduleItem, User, UserRole, NavItem, InventoryItem, AssetItem, VaultItem, WikiItem, TeamMember, ChatContact, ChatMessage } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'Dr. Bruno',
  role: UserRole.ADMIN,
  avatarUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200'
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { id: 'inventory', label: 'Estoque', icon: Package, path: '/inventory' },
  { id: 'vault', label: 'Cofre de Senhas', icon: Lock, path: '/vault' },
  { id: 'pops', label: 'POPs/Wiki', icon: BookOpen, path: '/pops' },
  { id: 'chat', label: 'Comunicação', icon: MessageSquare, path: '/chat' },
  { id: 'mobile', label: 'App Mobile', icon: Smartphone, path: '/mobile' },
];

export const MOCK_KPIS: KPI[] = [
  {
    id: 'kpi1',
    title: 'Estoque Crítico',
    value: '12',
    subtext: 'itens abaixo do mínimo',
    trend: 'down',
    status: 'critical',
    icon: AlertTriangle
  },
  {
    id: 'kpi2',
    title: 'Chamados Abertos',
    value: '05',
    subtext: 'ativos no momento',
    trend: 'neutral',
    status: 'info',
    icon: Ticket
  },
  {
    id: 'kpi3',
    title: 'Patrimônio em Uso',
    value: '24',
    subtext: '+2 esta semana',
    trend: 'up',
    status: 'stable',
    icon: MonitorSmartphone
  }
];

export const RECENT_ACTIVITY: ActivityLog[] = [
  {
    id: 'a1',
    user: 'Ana Paula',
    action: 'retirou',
    target: '2 caixas de Luvas',
    timestamp: 'Há 10 min',
    department: 'Estoque Cirúrgico',
    type: 'inventory'
  },
  {
    id: 'a2',
    user: 'Admin',
    action: 'visualizou senha',
    target: 'Instagram Institucional',
    timestamp: 'Há 1 hora',
    department: 'Cofre de Senhas',
    type: 'security'
  },
  {
    id: 'a3',
    user: 'Recepção',
    action: 'cadastrou',
    target: 'Mariana Costa',
    timestamp: 'Há 2 horas',
    department: 'Recepção',
    type: 'patient'
  },
  {
    id: 'a4',
    user: 'Qualidade',
    action: 'aprovou',
    target: 'POP Higienização 02',
    timestamp: 'Há 3 horas',
    department: 'Gestão da Qualidade',
    type: 'system'
  }
];

export const TODAY_SCHEDULE: ScheduleItem[] = [
  {
    id: 's1',
    time: '09:00',
    title: 'Coleta de Óvulos - Paciente M. Silva',
    subtitle: 'Sala 02 • Dr. Bruno',
    status: 'confirmed',
    color: 'blue'
  },
  {
    id: 's2',
    time: '14:30',
    title: 'Transferência Embrionária - Paciente A. Souza',
    subtitle: 'Sala 01 • Dra. Carla',
    status: 'pending',
    color: 'purple'
  }
];

// Mock Data for MVP Modules

export const MOCK_INVENTORY: InventoryItem[] = [
  { id: 'i1', name: 'Cateter de Transferência', category: 'Cirúrgico', quantity: 5, maxQuantity: 50, minQuantity: 10, batchNumber: 'L-2023-X9', expiryDate: '2024-05-20', status: 'critical', value: 450.00, imageUrl: 'https://cdn-icons-png.flaticon.com/512/2866/2866321.png' },
  { id: 'i2', name: 'Luvas Nitrílicas M', category: 'EPI', quantity: 45, maxQuantity: 100, minQuantity: 20, batchNumber: 'L-9988-AB', expiryDate: '2025-01-10', status: 'ok', value: 35.50, imageUrl: 'https://cdn-icons-png.flaticon.com/512/2983/2983796.png' },
  { id: 'i3', name: 'Meio de Cultura G1', category: 'Laboratório', quantity: 8, maxQuantity: 30, minQuantity: 15, batchNumber: 'L-CULT-01', expiryDate: '2024-06-01', status: 'warning', value: 1200.00, imageUrl: 'https://cdn-icons-png.flaticon.com/512/123/123392.png' },
  { id: 'i4', name: 'Seringa 5ml', category: 'Enfermaria', quantity: 150, maxQuantity: 200, minQuantity: 50, batchNumber: 'L-SRG-55', expiryDate: '2026-03-15', status: 'ok', value: 2.50, imageUrl: 'https://cdn-icons-png.flaticon.com/512/902/902006.png' },
  { id: 'i5', name: 'Agulha de Punção', category: 'Cirúrgico', quantity: 12, maxQuantity: 40, minQuantity: 12, batchNumber: 'L-PUN-22', expiryDate: '2024-08-10', status: 'warning', value: 89.90, imageUrl: 'https://cdn-icons-png.flaticon.com/512/4006/4006184.png' },
];

export const MOCK_ASSETS: AssetItem[] = [
  { id: 'a1', patrimonyNumber: '0045', name: 'Notebook Dell XPS', category: 'TI', serialNumber: 'BR-DELL-9921', status: 'in_use', responsible: 'Dr. Bruno', purchaseDate: '2023-01-15', value: 8500.00 },
  { id: 'a2', patrimonyNumber: '0102', name: 'Ultrassom Portátil GE', category: 'Médico', serialNumber: 'GE-US-5542', status: 'maintenance', responsible: 'Manutenção', purchaseDate: '2022-05-20', value: 45000.00 },
  { id: 'a3', patrimonyNumber: '0088', name: 'iPad Pro 12"', category: 'TI', serialNumber: 'AP-IPAD-3321', status: 'available', purchaseDate: '2023-11-10', value: 6500.00 },
  { id: 'a4', patrimonyNumber: '0210', name: 'Cadeira Ergonômica Herman', category: 'Mobiliário', serialNumber: 'HM-CD-1100', status: 'in_use', responsible: 'Recepção', purchaseDate: '2021-08-05', value: 3200.00 },
];

export const MOCK_VAULT: VaultItem[] = [
  { id: 'v1', service: 'Instagram IBRRA', username: '@ibrra_oficial', passwordHash: 'Mkt@2024#', category: 'Redes Sociais', lastAccess: 'Hoje, 10:00', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' },
  { id: 'v2', service: 'Facebook Ads', username: 'marketing@ibrra.com.br', passwordHash: 'MetaAds$99', category: 'Redes Sociais', lastAccess: 'Ontem, 14:00', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png' },
  
  { id: 'v3', service: 'Prontuário Cloud', username: 'admin_master', passwordHash: 'S3nh4Sup3rF0rt3', category: 'Portais Médicos', lastAccess: 'Ontem, 18:30', iconUrl: 'https://cdn-icons-png.flaticon.com/512/270/270023.png' },
  { id: 'v4', service: 'Portal Unimed', username: 'faturamento_ibrra', passwordHash: 'Unimed@2024', category: 'Portais Médicos', lastAccess: '12/05/2024', iconUrl: 'https://seeklogo.com/images/U/unimed-logo-F597274095-seeklogo.com.png' },
  
  { id: 'v5', service: 'E-mail Diretoria', username: 'diretoria@ibrra.com.br', passwordHash: 'V3ryS3cur3!', category: 'Infraestrutura', lastAccess: '10/05/2024', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png' },
  { id: 'v6', service: 'Servidor AWS', username: 'devops-ibrra', passwordHash: 'AWS-Key-9921', category: 'Infraestrutura', lastAccess: '01/05/2024', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png' },
];

export const MOCK_VAULT_LOGS = [
  { id: 1, user: 'Dr. Bruno', action: 'Visualizou senha', target: 'Instagram IBRRA', time: 'Agora', ip: '192.168.1.12' },
  { id: 2, user: 'Ana Paula', action: 'Copiou senha', target: 'Portal Unimed', time: 'Há 15 min', ip: '192.168.1.45' },
  { id: 3, user: 'Admin', action: 'Alterou credencial', target: 'Prontuário Cloud', time: 'Há 2h', ip: '10.0.0.5' },
  { id: 4, user: 'Suporte TI', action: 'Visualizou senha', target: 'Servidor AWS', time: 'Há 1 dia', ip: 'VPN-Secure' },
];

export const MOCK_WIKI: WikiItem[] = [
  // Pendentes
  { id: 'w1', title: 'POP-01: Higienização de Incubadoras', category: 'Laboratório & FIV', updatedAt: '12/05/2024', author: 'Dra. Carla', type: 'pdf', readProgress: 95, isPending: false },
  { id: 'w2', title: 'Protocolo de Emergência Clínica', category: 'Enfermagem & Centro Cirúrgico', updatedAt: 'Hoje', author: 'Dr. Bruno', type: 'doc', readProgress: 45, isPending: true },
  { id: 'w3', title: 'Treinamento: Novo Ultrassom GE', category: 'Enfermagem & Centro Cirúrgico', updatedAt: '05/05/2024', author: 'Fabricante', type: 'video', readProgress: 80, isPending: true },
  
  // Biblioteca
  { id: 'w4', title: 'Script de Atendimento WhatsApp', category: 'Recepção & Atendimento', updatedAt: '10/05/2024', author: 'Gerência', type: 'doc', readProgress: 100, isPending: false },
  { id: 'w5', title: 'Código de Cultura e Ética', category: 'RH & Administrativo', updatedAt: '01/01/2024', author: 'RH', type: 'pdf', readProgress: 98, isPending: false },
  { id: 'w6', title: 'Manual de Identidade Visual', category: 'RH & Administrativo', updatedAt: '01/03/2024', author: 'Marketing', type: 'pdf', readProgress: 60, isPending: false },
];

export const MOCK_TEAM: TeamMember[] = [
  { id: 't1', name: 'Dra. Rafaela', role: 'Diretora de Lab', avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200', status: 'busy', statusText: 'Em procedimento' },
  { id: 't2', name: 'Dr. Carlos', role: 'Anestesista', avatarUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200', status: 'online', statusText: 'Disponível' },
  { id: 't3', name: 'Mariana Costa', role: 'Head de Recepção', avatarUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200', status: 'busy', statusText: 'Em reunião' },
  { id: 't4', name: 'Enf. Juliana', role: 'Centro Cirúrgico', avatarUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200', status: 'online', statusText: 'Disponível' },
  { id: 't5', name: 'Pedro Alves', role: 'Suporte TI', avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200', status: 'offline' },
];

export const MOCK_CONTACTS: ChatContact[] = [
  { id: 'c1', name: 'Chatbot Triagem', role: 'IA Assistant', avatarUrl: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png', online: true, lastMessage: 'Nova paciente iniciou triagem via WhatsApp.', unreadCount: 2 },
  { id: 'c2', name: 'Dra. Carla', role: 'Embriologista', avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200', online: true, lastMessage: 'Os meios de cultura chegaram?', unreadCount: 0 },
  { id: 'c3', name: 'Recepção Central', role: 'Equipe', avatarUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200', online: false, lastMessage: 'Agenda do Dr. Bruno confirmada.', unreadCount: 0 },
];

export const MOCK_MESSAGES: ChatMessage[] = [
  { id: 'm1', senderId: 'c1', text: 'Olá! Uma nova paciente, Júlia, acabou de responder o questionário inicial.', timestamp: '10:30', isMe: false },
  { id: 'm2', senderId: 'c1', text: 'Ela demonstrou interesse em Congelamento de Óvulos. Deseja assumir o atendimento?', timestamp: '10:31', isMe: false },
  { id: 'm3', senderId: 'u1', text: 'Sim, vou verificar o prontuário provisório.', timestamp: '10:32', isMe: true },
];