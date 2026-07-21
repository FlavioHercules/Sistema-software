import DavidsImg from '../assets/DavidS.png';
import DavidlImg from '../assets/DavidL.png';
import SandesonImg from '../assets/Sandeson.png';
import IsaacImg from '../assets/Isaac.png';
import FlavioImg from '../assets/Flavio.png';
import YankeImg from '../assets/Yanke.png';

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
    name: 'DavidS',
    role: 'CEO & Founder',
    bio: 'Liderando a visão inovadora da EcoTech no mercado de desenvolvimento de software.',
    avatar: DavidsImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'DavidL',
    role: 'CTO & Lead Architect',
    bio: 'Especialista em arquitetura de sistemas, segurança e computação em nuvem.',
    avatar: DavidlImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Sandeson',
    role: 'UI/UX Product Designer',
    bio: 'Focado em criar interfaces intuitivas, modernas e centradas na experiência do usuário.',
    avatar: SandesonImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Isaac',
    role: 'Full Stack Developer',
    bio: 'Desenvolvendo aplicações robustas, escaláveis e de alta performance.',
    avatar: IsaacImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Flavio',
    role: 'Head of Product',
    bio: 'Estrategista em inovação e na entrega de soluções digitais de alto impacto.',
    avatar: FlavioImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Yanke',
    role: 'Scrum Master & Project Manager',
    bio: 'Garantindo agilidade, organização e excelência nas entregas do time.',
    avatar: YankeImg,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
];