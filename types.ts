import { LucideIcon } from 'lucide-react';

export enum UserRole {
  ADMIN = 'Admin',
  COLLABORATOR = 'Colaborador'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatarUrl: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

export interface KPI {
  id: string;
  title: string;
  value: string;
  subtext: string;
  trend: 'up' | 'down' | 'neutral';
  status: 'critical' | 'warning' | 'stable' | 'info';
  icon: LucideIcon;
}

export interface ActivityLog {
  id: string;
  user: string;
  action: string;
  target: string; // "2 caixas de Luvas", "Senha do Instagram"
  timestamp: string;
  department: string;
  type: 'inventory' | 'security' | 'patient' | 'system';
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  color: 'blue' | 'purple' | 'green';
}

// Novos Tipos para os Módulos

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  maxQuantity: number; // Para barra de progresso
  minQuantity: number;
  batchNumber: string; // Lote
  expiryDate: string;
  status: 'critical' | 'warning' | 'ok';
  value: number; // Valor unitário
  imageUrl?: string;
}

export interface AssetItem {
  id: string;
  patrimonyNumber: string; // ID interno (Etiqueta)
  name: string;
  category: 'TI' | 'Médico' | 'Mobiliário';
  serialNumber: string;
  status: 'in_use' | 'maintenance' | 'available';
  responsible?: string; // Quem está com o equipamento
  purchaseDate: string;
  value: number;
}

export interface VaultItem {
  id: string;
  service: string;
  username: string;
  passwordHash: string; // Nunca expor a senha real diretamente no objeto principal em produção real
  category: string;
  lastAccess: string;
  iconUrl?: string;
}

export interface WikiItem {
  id: string;
  title: string;
  category: string;
  updatedAt: string;
  author: string;
  type: 'pdf' | 'video' | 'doc';
  readProgress?: number; // Porcentagem da equipe que leu (0-100)
  isPending?: boolean; // Se o usuário logado precisa ler
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  status: 'online' | 'busy' | 'offline';
  statusText?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface ChatContact {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  online: boolean;
  lastMessage?: string;
  unreadCount?: number;
}