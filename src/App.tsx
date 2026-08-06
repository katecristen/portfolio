import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowRight, MoveUpRight, Send, Sparkles } from 'lucide-react';
import {
  aboutCopy,
  certifications,
  highlights,
  heroIntro,
  navLinks,
  projects,
  socials,
  techStacks,
  timeline,
} from './data';
import {
  CertificationCard,
  Input,
  MagneticButton,
  ProjectCard,
  Reveal,
  SectionHeading,
  SocialButton,
  StackGroup,
  Textarea,
  TimelineItem,
} from './components';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  message: '',
};

function CursorGlow() {
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches) return;

    const handleMove = (event: PointerEvent) => {
      setVisible(true);
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerleave', handleLeave);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.22)_0%,rgba(167,139,250,0.14)_35%,rgba(167,139,250,0)_72%)] blur-3xl"
      animate={{ x: position.x - 144, y: position.y - 144, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 16, mass: 0.45 }}
    />
  );
}

function App() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const { scrollYProgress } = useScroll();

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    return `mailto:hello@katecristensantos.com?subject=${subject}&body=${body}`;
  }, [form.email, form.message, form.name]);

  const handleChange =
    (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
    setStatus('sent');
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-white selection:bg-accent/30 selection:text-white">
      <CursorGlow />
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed left-0 top-0 z-50 h-px w-full origin-left bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(196,181,253,0.12),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_86%)]" />
        <motion.div
          className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[-80px] top-[28rem] h-96 w-96 rounded-full bg-[#c4b5fd]/10 blur-3xl"
          animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/8 bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="group inline-flex items-center gap-3 text-sm font-semibold tracking-[0.28em] text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent transition group-hover:border-accent/30 group-hover:bg-white/10">
              K
            </span>
            <span className="hidden sm:inline">KATE CRISTEN SANTOS</span>
          </a>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent/35 hover:bg-white/10">
            Let’s Talk
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section id="hero" className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 md:pb-28 md:pt-20 lg:px-8 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-10">
            <Reveal>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-muted backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                  Minimal. Premium. Built with intention.
                </div>

                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">Mobile & Web Developer</p>
                  <h1 className="max-w-4xl text-5xl font-bold leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.9rem]">
                    Kate Cristen Santos
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl">{heroIntro}</p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <MagneticButton href="#projects" icon={<MoveUpRight className="h-4 w-4" aria-hidden="true" />}>
                    View Projects
                  </MagneticButton>
                  <MagneticButton href="/resume.pdf" variant="secondary" icon={<Send className="h-4 w-4" aria-hidden="true" />}>
                    Download Resume
                  </MagneticButton>
                </div>

                <ul className="grid gap-4 pt-2 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <li
                      key={item.label}
                      className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md transition duration-300 hover:border-accent/25 hover:bg-white/[0.055]"
                    >
                      <p className="text-2xl font-bold text-white">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-accent/15 blur-3xl" />
                <div className="absolute right-0 top-24 h-40 w-40 rounded-full bg-[#c4b5fd]/15 blur-3xl" />
                <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.2),transparent_28%),linear-gradient(135deg,transparent,rgba(255,255,255,0.03),transparent)]" />
                  <div className="relative grid gap-4">
                    <div className="flex items-center justify-between rounded-[28px] border border-white/10 bg-[#111118]/80 p-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-muted">Focus</p>
                        <p className="mt-2 text-xl font-semibold text-white">Secure product interfaces</p>
                      </div>
                      <div className="rounded-2xl border border-accent/25 bg-accent/10 px-4 py-3 text-right">
                        <p className="text-xs text-accent">Currently</p>
                        <p className="mt-1 text-sm text-white">Building with React, Flutter, and Supabase</p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-sm text-muted">Style direction</p>
                        <p className="mt-3 text-lg font-semibold text-white">Minimal, editorial, and calm</p>
                        <p className="mt-3 text-sm leading-7 text-muted">Lavender accents, generous spacing, and quiet motion shape the visual language.</p>
                      </div>
                      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-sm text-muted">Design lens</p>
                        <p className="mt-3 text-lg font-semibold text-white">Woman in Tech sophistication</p>
                        <p className="mt-3 text-sm leading-7 text-muted">Elegant, polished, and professional without leaning into overly decorative motifs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="About" title="A thoughtful developer with a calm, premium point of view." description={aboutCopy} />
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.34em] text-accent/80">Professional introduction</p>
                <p className="mt-5 text-lg leading-8 text-[#E7E7EE]">
                  I build interfaces that feel refined, reliable, and easy to use. My work centers on strong visual structure, accessibility, and practical development habits that help ideas become polished digital products.
                </p>
                <p className="mt-5 text-lg leading-8 text-[#E7E7EE]">
                  From mobile apps to responsive websites, I like creating experiences that balance technical clarity with subtle elegance.
                </p>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(167,139,250,0.14),rgba(255,255,255,0.03))] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.34em] text-accent/80">What I value</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {['Accessibility first', 'Clean architecture', 'Modern UI systems', 'Fast loading experiences'].map((item) => (
                    <div key={item} className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-5 text-sm text-white">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[24px] border border-accent/20 bg-accent/10 p-5 text-sm leading-7 text-[#ECEAFE]">
                  I enjoy designing for people first, then translating that intent into production-ready code with a visual language that feels calm, premium, and memorable.
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="tech-stack" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="Tech Stack" title="A focused toolkit for web, mobile, backend, and design." description="The stack is presented as elegant, readable groups so the visual system stays clean while still communicating breadth." />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {techStacks.map((group, index) => (
              <Reveal key={group.category} delay={index * 0.05}>
                <StackGroup category={group.category} items={group.items} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="Featured Projects" title="Selected work presented with premium, hover-rich cards." description="Each project card pairs a strong visual preview with concise copy, tech tags, and direct action links." />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="Experience Timeline" title="A clean vertical narrative of growth and craft." description="The timeline keeps the page editorial and easy to scan while still giving room for motion and hierarchy." />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <p className="text-sm uppercase tracking-[0.34em] text-accent/80">Selected focus areas</p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
                <p>• Accessible UI development across mobile and web platforms</p>
                <p>• Component-driven design systems with careful spacing and motion</p>
                <p>• Modern backend services with Supabase, Firebase, Node.js, and Express</p>
                <p>• Product thinking that keeps user trust and clarity at the center</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ol className="relative border-l border-white/10 pl-6">
                {timeline.map((entry) => (
                  <TimelineItem key={`${entry.year}-${entry.title}`} {...entry} />
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section id="certifications" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="Certifications" title="Proof of technical foundations, presented with restraint." description="The cards stay clean and premium so the certifications feel like part of the overall editorial system." />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <Reveal key={cert.name} delay={index * 0.05}>
                <CertificationCard {...cert} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="Contact" title="Minimal contact, direct and easy to use." description="The form is lightweight and the social links give a clear path to connect without visual noise." />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <Reveal>
              <form onSubmit={handleSubmit} className="rounded-[32px] border border-white/10 bg-white/[0.035] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input label="Name" name="name" value={form.name} onChange={handleChange('name')} placeholder="Your name" autoComplete="name" />
                  <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange('email')} placeholder="Your email" autoComplete="email" />
                </div>
                <div className="mt-4">
                  <Textarea label="Message" name="message" value={form.message} onChange={handleChange('message')} placeholder="Tell me about your project or collaboration idea" />
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    Send Message
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <p className="text-sm text-muted">{status === 'sent' ? 'Your email client is opening.' : 'This form opens a prefilled email draft for quick contact.'}</p>
                </div>
              </form>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(167,139,250,0.12),rgba(255,255,255,0.03))] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.34em] text-accent/80">Social Links</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <SocialButton label="GitHub" href={socials[0].href} icon="github" />
                  <SocialButton label="LinkedIn" href={socials[1].href} icon="linkedin" />
                  <SocialButton label="Email" href={socials[2].href} icon="mail" />
                </div>
                <div className="mt-8 rounded-[26px] border border-white/10 bg-black/20 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-muted">Why this works</p>
                  <p className="mt-4 text-sm leading-7 text-[#E7E7EE]">
                    The layout emphasizes clarity, whitespace, and subtle lavender highlights so the site feels confident, feminine, and professional without losing the minimalist edge.
                  </p>
                </div>
                <a
                  href={socials[2].href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-accent-hover"
                >
                  Open email <MoveUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-bg/80">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Designed &amp; Developed by Kate Cristen Santos</p>
          <p className="text-white/65">Premium dark-mode portfolio with a refined lavender accent system.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;