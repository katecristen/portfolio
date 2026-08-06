import { forwardRef, useRef, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from 'react';
import { motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { ArrowRight, BadgeCheck, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from './lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-muted md:text-base">{description}</p> : null}
    </div>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  'aria-label'?: string;
};

export function MagneticButton({ href, children, variant = 'primary', icon, className, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  const handleMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion) return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    x.set((event.clientX - centerX) * 0.12);
    y.set((event.clientY - centerY) * 0.12);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onFocus={reset}
      style={{ x, y }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        variant === 'primary'
          ? 'bg-accent text-bg shadow-glow hover:bg-accent-hover hover:shadow-[0_0_0_1px_rgba(196,181,253,0.28),0_18px_50px_rgba(167,139,250,0.25)]'
          : 'border border-white/12 bg-white/5 text-white backdrop-blur-md hover:border-accent/40 hover:bg-white/10',
        className,
      )}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      {...props}
    >
      {children}
      {icon ?? <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </motion.a>
  );
}

type SocialButtonProps = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
};

export function SocialButton({ label, href, icon }: SocialButtonProps) {
  const iconMap = {
    github: <Github className="h-4 w-4" aria-hidden="true" />,
    linkedin: <Linkedin className="h-4 w-4" aria-hidden="true" />,
    mail: <Mail className="h-4 w-4" aria-hidden="true" />,
  } as const;

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent/50 hover:bg-white/10"
    >
      {iconMap[icon]}
      {label}
    </a>
  );
}

type StackGroupProps = {
  category: string;
  items: readonly string[];
};

export function StackGroup({ category, items }: StackGroupProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-300 hover:border-accent/25 hover:bg-white/[0.05]">
      <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
        <h3 className="text-lg font-semibold text-white">{category}</h3>
        <BadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-[#191921] px-3 py-1.5 text-sm text-[#E7E7EF] transition hover:border-accent/40 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  stack: readonly string[];
  image: string;
  github: string;
  demo: string;
};

export function ProjectCard({ title, description, stack, image, github, demo }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#121219] shadow-[0_24px_70px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-2 hover:border-accent/35 hover:shadow-[0_26px_90px_rgba(0,0,0,0.5)]">
      <div className="relative overflow-hidden border-b border-white/8 bg-white/5">
        <img
          src={image}
          alt={`${title} project preview`}
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#DEDEF0]">
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={github}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent/40 hover:bg-white/10"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href={demo}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition hover:bg-accent-hover"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

type TimelineItemProps = {
  year: string;
  title: string;
  organization: string;
  description: string;
};

export function TimelineItem({ year, title, organization, description }: TimelineItemProps) {
  return (
    <li className="relative pl-8">
      <span className="absolute left-[3px] top-2 h-4 w-4 rounded-full border border-accent/60 bg-bg shadow-[0_0_0_6px_rgba(167,139,250,0.12)]" />
      <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-accent/25 hover:bg-white/[0.05]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">{year}</p>
        <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-muted">{organization}</p>
        <p className="mt-4 text-sm leading-7 text-[#D4D4DD]">{description}</p>
      </div>
    </li>
  );
}

type CertificationCardProps = {
  name: string;
  organization: string;
};

export function CertificationCard({ name, organization }: CertificationCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:border-accent/30 hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
          <BadgeCheck className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-muted">{organization}</p>
        </div>
      </div>
    </article>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, className, ...props }, ref) {
  return (
    <label className="space-y-2 text-sm text-muted">
      <span>{label}</span>
      <input
        ref={ref}
        className={cn(
          'w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20',
          className,
        )}
        {...props}
      />
    </label>
  );
});

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ label, className, ...props }, ref) {
  return (
    <label className="space-y-2 text-sm text-muted">
      <span>{label}</span>
      <textarea
        ref={ref}
        className={cn(
          'min-h-[160px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20',
          className,
        )}
        {...props}
      />
    </label>
  );
});
