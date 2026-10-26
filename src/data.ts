export type Project = { title: string; subtitle?: string; role: string; stack: string[]; details: string[]; liveDemo?: string; images?: { src: string; alt: string }[] };
export type Experience = { year: string; title: string; organization: string; details: string[] };

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
] as const;

export const highlights = [
  { value: '04', label: 'Software projects' },
  { value: '03', label: 'Organization roles' },
  { value: '02', label: 'Certiport credentials' },
] as const;

export const techStacks = [
  { category: 'Frontend', items: ['React.js', 'Vue.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Supabase', 'Firebase'] },
  { category: 'Mobile', items: ['Flutter', 'Dart', 'Android Studio'] },
  { category: 'Database & local development', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Figma', 'VS Code', 'Vercel', 'XAMPP', 'Adobe Photoshop', 'Canva'] },
  { category: 'Basic programming', items: ['Java', 'Python'] },
] as const;

export const projects: Project[] = [
  {
    title: 'OSCAFlow',
    subtitle: 'An OCR-Assisted Mobile and Intelligent Web System for CSWDO-OSCA Operations',
    role: 'Capstone Project · Project Manager & Developer',
    stack: ['Flutter', 'Vue.js'],
    details: [
      'Managed project planning, task assignments, development progress, and team coordination.',
      'Contributed to mobile and web application features based on project requirements.',
      'Collaborated throughout system design, development, testing, and implementation.',
    ],
    images: [
      { src: '/oscaflow-home.png', alt: 'OSCAFlow web landing page for the Dasmariñas City OSCA staff portal' },
      { src: '/oscaflow-mobile-landing.jpg', alt: 'OSCAFlow mobile landing page with staff sign in' },
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
    images: [{ src: '/nud-itso-id-tracker.png', alt: 'NU Dasmariñas ITSO ID Tracker home page with a student ID appointment call to action' }],
  },
  {
    title: 'IOS Rental by Maddy and Cassy',
    role: 'Project Leader & Backend Developer',
    stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Git/GitHub', 'Vercel'],
    details: [
      'Led development of an e-commerce rental platform for products, bookings, payments, and rental agreements.',
      'Developed backend functionality and database operations using Supabase and PostgreSQL.',
      'Managed version control using Git/GitHub and deployed the application through Vercel.',
    ],
    liveDemo: 'https://maddyandcassyrentals-nine.vercel.app/',
    images: [{ src: '/rental-home.png', alt: 'Maddy and Cassy camera and phone rental storefront' }],
  },
  {
    title: 'Yogee — Web-Based Event Reservation and Management System',
    subtitle: 'Event reservations, package selection, and reservation tracking',
    role: 'Backend Developer',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'PostgreSQL', 'Neon'],
    details: [
      'Developed backend functionality for event reservations, package selection, and customer authentication.',
      'Implemented document uploads and reservation tracking to support the event booking workflow.',
    ],
    images: [{ src: '/yogee-home.png', alt: 'Yogee event reservation and management system' }],
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

export type Credential = { name: string; organization?: string; organizer?: string; date?: string; preview?: string; file?: string; verification?: string; fileLabel?: string };

export const portrait: { src?: string; alt: string } = { src: '/kate-portrait-removebg-preview.png', alt: "Portrait of Kate Cristen Santos" };

export const certifications: Credential[] = [
  {
    "name": "IT Specialist - HTML and CSS",
    "organization": "Certiport, a Pearson VUE business",
    "date": "June 8, 2026",
    "preview": "/certificates/html-css-certificate.png",
    "file": "/certificates/html-css-certificate.pdf",
    "verification": "https://www.credly.com/badges/e7e7a0f2-0213-4d13-ae41-893ceb69da4a/public_url"
  },
  {
    "name": "IT Specialist - Databases",
    "organization": "Certiport, a Pearson VUE business",
    "date": "June 3, 2025",
    "preview": "/certificates/databases-certificate.png",
    "file": "/certificates/databases-certificate.pdf",
    "verification": "https://www.credly.com/badges/f4e0685a-b65f-4501-ae63-6078d4c31d66/public_url"
  }
];

export const seminars: Credential[] = [
  {
    "name": "Beyond Spreadsheets: Visualizing Data’s Story Through Analytics",
    "organizer": "NU Dasmariñas Computer Society",
    "date": "May 7, 2025",
    "preview": "/certificates/data-analytics.jpg",
    "file": "/certificates/data-analytics.pdf"
  },
  {
    "name": "From Code to Deployment: Streamlining Software Development with Microsoft Azure DevOps",
    "organizer": "NU Dasmariñas Computer Society",
    "date": "April 23, 2025",
    "preview": "/certificates/azure-devops.jpg",
    "file": "/certificates/azure-devops.pdf"
  },
  {
    "name": "Modern Web + AI (UI/UX)",
    "organizer": "NU Dasmariñas Computer Society",
    "date": "April 23, 2025",
    "preview": "/certificates/modern-web-ai.jpg",
    "file": "/certificates/modern-web-ai.pdf"
  },
  {
    "name": "Exploring the Tech World: Cloud Computing’s Role in Construction Management",
    "organizer": "INF234",
    "date": "February 24, 2025",
    "preview": "/certificates/exploring-tech.jpg",
    "file": "/certificates/exploring-tech.pdf"
  },
  {
    "name": "From Coding to C-Suite: Career Pathways for Women in Tech",
    "organizer": "CSP - SIG Women in Computing",
    "date": "February 21, 2025",
    "preview": "/certificates/women-in-computing.png",
    "file": "/certificates/women-in-computing.png"
  },
  {
    "name": "The Tech Frontier of Adobe: Pioneering New Solution for a Digital Age",
    "organizer": "PSITE CALABARZON Region",
    "date": "June 22, 2024",
    "preview": "/certificates/adobe.jpg",
    "file": "/certificates/adobe.pdf"
  },
  {
    "name": "Cybersecurity Orientation",
    "organizer": "DICT Region IV-A",
    "date": "May 17, 2024",
    "preview": "/certificates/cybersecurity.jpg",
    "file": "/certificates/cybersecurity.pdf"
  }
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/katecristen' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kate-cristen-santos-2927b8341/' },
  { label: 'Email', href: 'mailto:keytcristen26@gmail.com' },
] as const;

export const heroIntro = 'I build mobile and web applications, connect the backend systems behind them, and lead teams from the first requirements to the final implementation. A BSIT student with hands-on experience making software and projects work.';
export const aboutCopy = 'I develop mobile and web applications, coordinate project tasks, and work with teams from system design through implementation. My academic and organizational projects have given me practical experience with frontend and backend technologies, databases, development tools, and UI/UX design.';
