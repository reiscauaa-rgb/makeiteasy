import Link from 'next/link';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  variant  = 'primary',
  size     = 'md',
  href,
  onClick,
  className = '',
  type      = 'button',
  disabled  = false,
  external  = false,
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    size !== 'md' ? styles[size] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
