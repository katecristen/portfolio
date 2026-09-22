import { forwardRef, useRef, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from 'react';
import { motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Github, Linkedin, Mail } from 'lucide-react';
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
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-ink">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">{title}</h2>
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
          ? 'bg-accent-strong text-on-accent shadow-soft hover:bg-accent-hover hover:shadow-soft-hover'
          : 'border border-line bg-surface text-text backdrop-blur-md hover:border-accent/40 hover:bg-surface-raised',
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
      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-text transition hover:border-accent/50 hover:bg-surface-raised"
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
    <div className="rounded-[28px] border border-line bg-surface p-5 shadow-soft backdrop-blur-sm transition duration-300 hover:border-accent/25 hover:bg-surface-raised">
      <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
        <h3 className="text-lg font-semibold text-text">{category}</h3>
        <BadgeCheck className="h-4 w-4 text-accent-ink" aria-hidden="true" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-surface-raised px-3 py-1.5 text-sm text-text transition hover:border-accent/40 hover:text-text"
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
  subtitle?: string;
  role: string;
  stack: readonly string[];
  details: readonly string[];
};

export function ProjectCard({ title, subtitle, role, stack, details }: ProjectCardProps) {
  return (
    <article className="rounded-[32px] border border-line bg-surface shadow-soft transition duration-300 hover:border-accent/35">
      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-text">{title}</h3>
          {subtitle && <p className="mt-2 text-sm leading-6 text-text">{subtitle}</p>}
          <p className="mt-3 text-sm font-medium text-accent-ink">{role}</p>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
          {details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-text">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

type TimelineItemProps = {
  year: string;
  title: string;
  organization: string;
  details: readonly string[];
};

export function TimelineItem({ year, title, organization, details }: TimelineItemProps) {
  return (
    <li className="relative pl-8">
      <span className="absolute left-[3px] top-2 h-4 w-4 rounded-full border border-accent/60 bg-bg shadow-[0_0_0_6px_rgb(var(--accent)/0.12)]" />
      <div className="rounded-[26px] border border-line bg-surface p-5 transition duration-300 hover:border-accent/25 hover:bg-surface-raised">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-ink">{year}</p>
        <h3 className="mt-3 text-xl font-semibold text-text">{title}</h3>
        <p className="mt-1 text-sm text-muted">{organization}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-text">
          {details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
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
    <article className="rounded-[28px] border border-line bg-surface p-6 shadow-soft transition duration-300 hover:border-accent/30 hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent-ink">
          <BadgeCheck className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text">{name}</h3>
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
          'w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-text placeholder:text-placeholder transition focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20',
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
          'min-h-[160px] w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-text placeholder:text-placeholder transition focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20',
          className,
        )}
        {...props}
      />
    </label>
  );
});
