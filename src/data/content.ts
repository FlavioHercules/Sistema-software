import {
  Code2, Layers, Lightbulb, Cloud, type LucideIcon,
} from 'lucide-react';
import FlávioImg from '@/assets/Flavio.png';
import IsaacImg from '@/assets/Isaac.png';
import YankeImg from '@/assets/Yanke.png';
import SandesonImg from '@/assets/Sandeson.png';
import DavidLImg from '@/assets/DavidL.png';
import DavidSImg from '@/assets/DavidS.png';
import GestaoAmbientalImg from '@/assets/GestaoAmbiental.png';
import UrbanaImg from '@/assets/Urbana.png';
import MarketImg from '@/assets/Market.png';
import TelemetriaImg from '@/assets/Telemetria.png';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Desenvolvimento de Software Sob Medida',
    description:
      'Aplicações web e mobile construídas sob medida, com foco em performance, escalabilidade e experiência do usuário.',
    features: ['Web Apps', 'Mobile (iOS/Android)', 'PWAs', 'E-commerce'],
  },
  {
    icon: Layers,
    title: 'Arquitetura de Sistemas e Engenharia de Software',
    description:
      'Design de arquiteturas robustas, microsserviços e infraestrutura como código para sistemas de alto impacto.',
    features: ['Microsserviços', 'Domain-Driven Design', 'DevOps', 'Code Review'],
  },
  {
    icon: Lightbulb,
    title: 'Consultoria Tech e Transformação Digital',
    description:
      'Diagnóstico, estratégia e execução para modernizar processos e acelerar a transformação digital do seu negócio.',
    features: ['Tech Assessment', 'Roadmap', 'Migração', 'Automação'],
  },
  {
    icon: Cloud,
    title: 'Integrações de APIs e Soluções em Nuvem',
    description:
      'Integração de sistemas, APIs REST/GraphQL e arquiteturas cloud-native AWS, GCP e Azure com alta disponibilidade.',
    features: ['REST / GraphQL', 'AWS / GCP / Azure', 'Serverless', 'CI/CD'],
  },
];

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'Plataforma de Gestão Ambiental',
    category: 'Sustentabilidade',
    description:
      'SaaS para monitoramento de pegada de carbono e métricas ESG em tempo real para empresas do setor industrial.',
    image: GestaoAmbientalImg,
    tags: ['React', 'Node.js', 'AWS', 'IoT'],
  },
  {
    title: 'App de Mobilidade Urbana',
    category: 'Mobile',
    description:
      'Aplicativo mobile multiplataforma para otimização de rotas e transporte compartilhado em grandes cidades.',
    image: UrbanaImg,
    tags: ['React Native', 'GraphQL', 'Maps API'],
  },
  {
    title: 'Marketplace de Energia Renovável',
    category: 'E-commerce',
    description:
      'Marketplace B2B para comercialização de créditos de energia solar com pagamentos integrados e auditoria.',
    image: MarketImg,
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    title: 'Sistema de Telemetria Industrial',
    category: 'IoT / Cloud',
    description:
      'Plataforma cloud-native de telemetria para indústria 4.0 com dashboards em tempo real e alertas preditivos.',
    image: TelemetriaImg,
    tags: ['IoT', 'Kubernetes', 'TimescaleDB'],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin: string;
  github: string;
}

export const team: TeamMember[] = [
  {
    name: 'Flavio',
    role: 'Programador',
    bio: 'Desenvolvimento de software com foco em soluções inovadoras e eficientes.',
    avatar: FlávioImg,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Isaac',
    role: 'Gerente de Projetos',
    bio: 'Gerenciamento de projetos e entrega contínua de valor ao cliente.',
    avatar: IsaacImg,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Yanke',
    role: 'Design Gráfico',
    bio: 'Design gráfico e criação de identidade visual para marcas e produtos.',
    avatar: YankeImg,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Sandeson',
    role: 'Analista de Banco de Dados',
    bio: 'Gerenciamento e otimização de bancos de dados para alta performance e segurança.',
    avatar: SandesonImg,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'David L.',
    role: 'Analista de Requisitos',
    bio: 'Análise e documentação de requisitos funcionais e não funcionais.',
    avatar: DavidLImg,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'David S.',
    role: 'Analista de Negócios',
    bio: 'Análise de necessidades do mercado e desenvolvimento de soluções estratégicas.',
    avatar: DavidSImg,
    linkedin: '#',
    github: '#',
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
];
