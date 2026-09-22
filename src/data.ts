export type Project = { title: string; subtitle?: string; role: string; stack: string[]; details: string[] };
export type Experience = { year: string; title: string; organization: string; details: string[] };

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

export const highlights = [
  { value: '03', label: 'Academic projects' },
  { value: '03', label: 'Organization roles' },
  { value: '02', label: 'Certiport credentials' },
] as const;

export const techStacks = [
  { category: 'Frontend', items: ['React.js', 'Vue.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Supabase', 'Firebase'] },
  { category: 'Mobile', items: ['Flutter', 'Dart', 'Android Studio'] },
  { category: 'Database & local development', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'XAMPP'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Figma', 'VS Code', 'Vercel', 'Adobe Photoshop', 'Canva'] },
  { category: 'Basic programming', items: ['Java', 'Python'] },
] as const;

export const projects: Project[] = [
  {
    title: 'OSCAFlow',
    subtitle: 'An OCR-Assisted Mobile and Intelligent Web System for CSWDO-OSCA Operations',
    role: 'Capstone Project · Project Manager & Developer',
    stack: ['Flutter', 'Vue.js', 'XAMPP'],
    details: [
      'Managed project planning, task assignments, development progress, and team coordination.',
      'Contributed to mobile and web application features based on project requirements.',
      'Collaborated throughout system design, development, testing, and implementation.',
    ],
  },
  {
    title: 'NUD ITSO ID Tracker',
    role: 'Project Manager & Web Developer',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Google APIs'],
    details: [
      'Managed development tasks and coordination among team members.',
      'Contributed to ID appointment management, tracking, notifications, and Google Calendar integration.',
      'Participated in system testing, implementation, and feature refinement.',
    ],
  },
  {
    title: 'BeautiVerse Digi',
    role: 'Web Developer · Advanced Security course project',
    stack: ['PHP', 'XAMPP', 'JavaScript', 'React.js', 'CSS', 'HTML'],
    details: [
      'Developed a web application for an Advanced Security course project.',
      'Implemented assigned features and applied web development and security concepts.',
    ],
  },
];

export const experience: Experience[] = [
  {
    year: '2024–2025',
    title: 'Secretary',
    organization: 'NU Dasmariñas Computer Society',
    details: ['Managed organizational records, announcements, and schedules.', 'Collaborated with officers and members to plan and run technology events and activities.'],
  },
  {
    year: '2023–2024',
    title: 'Event Planner / Coordinator',
    organization: 'NU Dasmariñas Computer Society',
    details: ['Planned technology events, programs, and logistics.', 'Coordinated schedules, participants, and committee work during event execution.'],
  },
  {
    year: '2023–2024',
    title: 'Secretary',
    organization: 'Sigma Esports',
    details: ['Managed organizational records and administrative tasks.', 'Helped coordinate activities and communicate with members.'],
  },
];

export const education = [
  { school: 'National University – Dasmariñas', program: 'Bachelor of Science in Information Technology', detail: 'Specialization in Mobile and Web Applications', period: '2023–Present' },
  { school: 'Philippine Christian University – Dasmariñas', program: 'Senior High School · STEM Strand', detail: 'Graduated with Honors', period: '2022–2023' },
] as const;

export const certifications = [
  { name: 'Information Technology Specialist (ITS) – HTML and CSS Passer', organization: 'Certiport' },
  { name: 'Information Technology Specialist (ITS) – Database Passer', organization: 'Certiport' },
] as const;

export const seminars = [
  { name: 'Beyond Spreadsheets: Visualizing Data’s Story Through Analytics', organizer: 'NU Dasmariñas Computer Society', date: 'May 2025' },
  { name: 'Development with Microsoft Azure DevOps', organizer: 'NU Dasmariñas Computer Society', date: 'April 2025' },
  { name: 'Modern Web, AI, UI/UX', organizer: 'NU Dasmariñas Computer Society', date: 'April 2025' },
  { name: 'Exploring the Tech World: Cloud Computing’s Role in Construction Management', organizer: 'INF234', date: 'February 2025' },
  { name: 'Women in Computing Webinar Series: From Coding to C-Suite – Career Pathways for Women in Tech', organizer: 'Women in Computing', date: 'February 2025' },
  { name: 'The Tech Frontier of Adobe: Pioneering New Solutions for a Digital Age', organizer: 'PSITE CALABARZON Region', date: 'June 2024' },
  { name: 'Cybersecurity Orientation', organizer: 'DICT Region IV-A', date: 'May 2024' },
] as const;

export const socials = [
  { label: 'GitHub', href: 'https://github.com/katecristen' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kate-cristen-santos-2927b8341/' },
  { label: 'Email', href: 'mailto:hello@katecristensantos.com' },
] as const;

export const heroIntro = 'BSIT student specializing in mobile and web applications, with hands-on experience in development, project management, and technical leadership.';
export const aboutCopy = 'I develop web and mobile applications, coordinate project tasks, and work with teams from system design through implementation. My academic and organizational projects have given me practical experience with frontend and backend technologies, databases, development tools, and UI/UX design.';
