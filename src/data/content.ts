import {
  Code2,
  Layers,
  Lightbulb,
  Cloud,
  type LucideIcon,
} from 'lucide-react';

import FlávioImg from '@/assets/Flavio.png';
import IsaacImg from '@/assets/Isaac.png';
import YankeImg from '@/assets/Yanke.png';
import SandesonImg from '@/assets/Sandeson.png';
import DavidLImg from '@/assets/DavidL.png';
import DavidSImg from '@/assets/DavidS.png';
import BarbeariaImg from '@/assets/barbearia.jpg';
import JogoImg from '@/assets/jogo.jpg';
import LivrariaImg from '@/assets/livraria.jpg';
import RestauranteImg from '@/assets/restaurante.jpg';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Sites institucionais e landing pages',
    description:
      'Presença digital profissional para empresas que precisam transmitir confiança, autoridade e clareza.',
    features: ['Estrutura moderna', 'UX focada em conversão', 'SEO técnico'],
  },
  {
    icon: Layers,
    title: 'Sistemas e plataformas web',
    description:
      'Aplicações robustas para automação de processos, gestão e relacionamento com clientes.',
    features: ['Dashboards', 'Painel administrativo', 'Integrações'],
  },
  {
    icon: Lightbulb,
    title: 'Consultoria e estratégia digital',
    description:
      'Diagnóstico, planejamento e execução para transformar a experiência digital da sua marca.',
    features: ['Posicionamento', 'Roadmap', 'MVP'],
  },
  {
    icon: Cloud,
    title: 'Loja virtual e e-commerce',
    description:
      'Loja online com experiência premium para vender com mais clareza, velocidade e segurança.',
    features: ['Catálogo', 'Carrinho', 'Pagamento'],
  },
];

export interface Project {
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}

export const projects: Project[] = [
  {
    name: 'Restaurante',
    category: 'Site institucional',
    description:
      'Apresentação elegante do restaurante com cardápio, ambiente e proposta gastronômica.',
    image: RestauranteImg,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    url: 'https://restaurante-theta-five.vercel.app/',
  },
  {
    name: 'Barbearia',
    category: 'Landing page',
    description:
      'Estrutura moderna para mostrar serviços, diferenciais e conversão por WhatsApp.',
    image: BarbeariaImg,
    technologies: ['React', 'Tailwind', 'Responsive'],
    url: 'https://site-barbearia-indol.vercel.app/',
  },
  {
    name: 'Livraria',
    category: 'E-commerce',
    description:
      'Loja com catálogo, foco em conversão e apresentação premium dos produtos.',
    image: LivrariaImg,
    technologies: ['React', 'CSS', 'UX', 'E-commerce'],
    url: 'https://loja-virtual-ten-xi.vercel.app/',
  },
  {
    name: 'Jogo',
    category: 'Site para marca',
    description:
      'Presença digital para apresentar o jogo, sua proposta, mecânicas e chamada para comunidade.',
    image: JogoImg,
    technologies: ['React', 'Design System', 'Mobile'],
    url: 'https://teste-site-six-eosin.vercel.app/',
  },
  // Ajuste a imagem do projeto aqui: substitua o arquivo SVG por um .png real em public/images/projetos/
  // Exemplo: '/images/projetos/restaurante.png'
  // Basta trocar o valor da propriedade 'image' para o novo arquivo sem mexer na estrutura do card.
];

export const ecoTechWhatsAppNumber = '557488651620';

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
  { label: 'Início', href: '/' },
  { label: 'Sobre nós', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Solicitar orçamento', href: '/orcamento' },
  { label: 'Contato', href: '/contato' },
];
