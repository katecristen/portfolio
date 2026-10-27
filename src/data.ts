export type Project = { title: string; subtitle: string; role: string; stack: string[]; details: string[]; liveDemo?: string; video?: string; images: { src: string; alt: string }[] };
export type Experience = { year: string; title: string; organization: string; details: string[] };

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
] as const;

export const highlights = [
  { value: '05', label: 'Software projects' },
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
    title: 'Maddy & Cassy Rentals',
    subtitle: 'E-Commerce Rental Platform',
    role: 'Project Leader · Backend Developer',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'React Hook Form', 'Zod', 'pdf-lib', 'react-signature-canvas', 'GSAP'],
    details: ['E-commerce rental platform for products, bookings, payments, and rental agreements.', 'Led the project and developed backend functionality with Supabase and PostgreSQL.'],
    liveDemo: 'https://maddyandcassyrentals-nine.vercel.app/',
    images: [{ src: '/rental-home.png', alt: 'Maddy & Cassy Rentals storefront' }],
  },
  {
    title: 'OSCAFlow',
    subtitle: 'OCR-Assisted Mobile & Web System',
    role: 'Project Manager · Developer',
    stack: ['Flutter', 'Vue.js', 'Laravel', 'MariaDB', 'Microsoft Azure AI'],
    details: [
      'OSCAFlow is an OCR-assisted mobile and web system that digitizes senior citizen records and streamlines CSWDO-OSCA administrative processes—from registration and duplicate checking to benefits, certificates, reports, and record management.',
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
    subtitle: 'ID Appointment & Tracking System',
    role: 'Project Manager · Web Developer',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'React Router', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Google Calendar API', 'Nodemailer', 'QR codes'],
    details: [
      'NUD ITSO ID Tracker is a student ID appointment and tracking system developed for the NU Dasmariñas IT Services Office (ITSO). The system streamlines the ID application process by allowing students to schedule appointments, monitor the status of their requests, and receive updates throughout the process until their IDs are ready for pickup.',
      'Managed development tasks and coordination among team members.',
      'Contributed to ID appointment management, tracking, notifications, and Google Calendar integration.',
      'Participated in system testing, implementation, and feature refinement.',
    ],
    video: '/nud-itso-id-tracker-walkthrough.mp4',
    images: [{ src: '/nud-itso-id-tracker.png', alt: 'NU Dasmariñas ITSO ID Tracker home page with a student ID appointment call to action' }],
  },
  {
    title: 'Yogee',
    subtitle: 'Web-Based Event Reservation & Management System',
    role: 'Backend Developer',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'PostgreSQL', 'Neon'],
    details: [
      'A web-based event reservation and management system for Yogee that allows users to select available dates, make reservations, and manage their event bookings.',
      'Developed backend functionality for event reservations, package selection, and customer authentication.',
      'Implemented document uploads and reservation tracking to support the event booking workflow.',
    ],
    video: '/yogee-nav.mp4',
    images: [{ src: '/yogee-home.png', alt: 'Yogee event reservation and management system' }],
  },
  {
    title: 'BeautiVerse Digi',
    subtitle: 'Beauty Product Ordering & Management System',
    role: 'Web Developer',
    stack: ['React 19', 'Vite', 'Recharts', 'PHP', 'MySQL'],
    details: [
      'A web-based beauty product platform where customers can browse products and place orders, while employees and administrators manage products and track orders from pending to completed.',
      'Developed for an Advanced Security course project, with product browsing, ordering, and order management features.',
      'Applied web development and security concepts throughout the system.',
    ],
    video: '/beautiverse-nav.mp4',
    images: [{ src: '/beautiverse-dashboard.png', alt: 'BeautiVerse Digi employee dashboard and customer sign-in screens' }],
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

export const heroIntro = 'I’m a BSIT student at NU Dasmariñas with hands-on experience in developing web and mobile applications, building backend systems, and leading projects from initial requirements to final implementation. I enjoy turning ideas into functional and user-focused software.';
export const aboutCopy = [
  'I originally wanted to pursue medicine and chose STEM in senior high school with the goal of becoming a doctor. But during our senior high school capstone, I became curious about a project that used a verified ID to unlock a locker. Seeing the code behind something I could actually interact with sparked my interest in technology.',
  'That curiosity led me to IT, where I discovered that I enjoy solving problems, understanding how things work, and turning ideas into something people can actually use.',
] as const;
