export type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  github: string;
  demo: string;
};

type TimelineEntry = {
  year: string;
  title: string;
  organization: string;
  description: string;
};

type Certification = {
  name: string;
  organization: string;
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export const highlights = [
  { value: '05+', label: 'Core technologies mastered' },
  { value: '04', label: 'Featured projects showcased' },
  { value: '02', label: 'Certiport certifications earned' },
] as const;

export const techStacks = [
  {
    category: 'Frontend',
    items: ['React.js', 'Vue.js', 'Next.js', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Supabase', 'Firebase'],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'Dart', 'Android Studio'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'Xampp', 'MongoDB', 'Supabase'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Figma', 'VS Code', 'Vercel', 'Adobe Photoshop', 'Canva'],
  },
] as const;

const makeSvgImage = (title: string, description: string, palette: string[]) => {
  const svg = `
    <svg width="1200" height="900" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
          <stop stop-color="${palette[0]}"/>
          <stop offset="1" stop-color="${palette[1]}"/>
        </linearGradient>
        <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(840 210) rotate(90) scale(260 360)">
          <stop stop-color="${palette[2]}" stop-opacity="0.95"/>
          <stop offset="1" stop-color="${palette[2]}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="900" rx="48" fill="url(#bg)"/>
      <rect x="96" y="104" width="1008" height="692" rx="36" fill="white" fill-opacity="0.04" stroke="white" stroke-opacity="0.12"/>
      <circle cx="845" cy="236" r="220" fill="url(#glow)"/>
      <rect x="168" y="204" width="420" height="18" rx="9" fill="white" fill-opacity="0.72"/>
      <rect x="168" y="244" width="302" height="18" rx="9" fill="white" fill-opacity="0.36"/>
      <rect x="168" y="324" width="360" height="18" rx="9" fill="white" fill-opacity="0.22"/>
      <rect x="168" y="364" width="480" height="18" rx="9" fill="white" fill-opacity="0.22"/>
      <rect x="168" y="404" width="420" height="18" rx="9" fill="white" fill-opacity="0.22"/>
      <rect x="168" y="520" width="238" height="74" rx="24" fill="${palette[2]}" fill-opacity="0.88"/>
      <rect x="420" y="520" width="210" height="74" rx="24" fill="white" fill-opacity="0.08" stroke="white" stroke-opacity="0.12"/>
      <rect x="700" y="194" width="300" height="360" rx="32" fill="white" fill-opacity="0.06" stroke="white" stroke-opacity="0.1"/>
      <rect x="744" y="242" width="212" height="18" rx="9" fill="white" fill-opacity="0.7"/>
      <rect x="744" y="286" width="150" height="18" rx="9" fill="white" fill-opacity="0.28"/>
      <rect x="744" y="352" width="220" height="110" rx="22" fill="${palette[2]}" fill-opacity="0.18" stroke="${palette[2]}" stroke-opacity="0.28"/>
      <rect x="744" y="480" width="180" height="18" rx="9" fill="white" fill-opacity="0.22"/>
      <text x="168" y="168" fill="white" fill-opacity="0.88" font-family="Poppins, Arial, sans-serif" font-size="28" font-weight="600">${title}</text>
      <text x="168" y="474" fill="white" fill-opacity="0.5" font-family="Poppins, Arial, sans-serif" font-size="24" font-weight="400">${description}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const projects: Project[] = [
  {
    title: 'ElderLink',
    description:
      'A senior citizen management system built with Flutter, Vue.js, and Supabase featuring authentication, notifications, analytics, and secure record management.',
    stack: ['Flutter', 'Vue.js', 'Supabase', 'Authentication', 'Analytics'],
    image: makeSvgImage('ElderLink', 'Senior citizen management system', ['#16141f', '#0b0b0f', '#a78bfa']),
    github: 'https://github.com/',
    demo: 'https://vercel.com/',
  },
  {
    title: 'E-Commerce Website',
    description:
      'A polished shopping experience with refined product discovery, responsive product cards, and a conversion-focused checkout flow.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    image: makeSvgImage('E-Commerce', 'Premium shopping experience', ['#17161d', '#0b0b0f', '#c4b5fd']),
    github: 'https://github.com/',
    demo: 'https://vercel.com/',
  },
  {
    title: 'Task Management App',
    description:
      'A focused productivity app for organizing tasks, deadlines, and priorities through a calm, minimal interface.',
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
    image: makeSvgImage('Task Manager', 'Minimal productivity workspace', ['#14131a', '#0b0b0f', '#a78bfa']),
    github: 'https://github.com/',
    demo: 'https://vercel.com/',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal brand website designed to communicate technical depth with editorial typography, motion, and elegant spacing.',
    stack: ['React', 'Framer Motion', 'Tailwind CSS', 'Lucide React'],
    image: makeSvgImage('Portfolio', 'Editorial personal brand site', ['#15151c', '#0b0b0f', '#ddd6fe']),
    github: 'https://github.com/',
    demo: 'https://vercel.com/',
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2026',
    title: 'BS Information Technology Student',
    organization: 'Mobile & Web Applications',
    description:
      'Building a strong foundation in software development while focusing on clean interfaces, accessibility, and practical product thinking.',
  },
  {
    year: '2025',
    title: 'Project Builder',
    organization: 'Academic and personal portfolio projects',
    description:
      'Created responsive web and mobile applications with modern tools such as React, Vue, Flutter, and Supabase.',
  },
  {
    year: '2024',
    title: 'UI-Focused Developer',
    organization: 'Design systems and frontend craft',
    description:
      'Refined visual hierarchy, motion, and component consistency to create interfaces that feel polished and trustworthy.',
  },
  {
    year: '2023',
    title: 'Foundations in Development',
    organization: 'HTML, CSS, JavaScript, and databases',
    description:
      'Strengthened core web fundamentals, database logic, and workflow habits across local and cloud-based tooling.',
  },
];

export const certifications: Certification[] = [
  { name: 'Certiport ITS Database Passer', organization: 'Certiport' },
  { name: 'Certiport ITS HTML CSS Passer', organization: 'Certiport' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Email', href: 'mailto:hello@katecristensantos.com' },
] as const;

export const heroIntro = 'Building secure, accessible, and modern digital experiences through thoughtful design and clean code.';
export const aboutCopy =
  'I am a BS Information Technology student specializing in Mobile and Web Applications. I enjoy creating beautiful, user-focused applications with modern technologies, careful interactions, and a calm, premium visual language.';
