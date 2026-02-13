import React from 'react';
import { cn } from './cn';

type TypographyVariant = 'display' | 'h1' | 'h2' | 'h3' | 'body' | 'caption';

type TypographyProps = {
  as?: React.ElementType;
  variant?: TypographyVariant;
  className?: string;
  children: React.ReactNode;
} & Record<string, unknown>;

const variantMap: Record<TypographyVariant, string> = {
  display: 'ardela-800 text-5xl md:text-7xl tracking-tight uppercase',
  h1: 'text-4xl md:text-6xl font-bold tracking-tight uppercase',
  h2: 'text-3xl md:text-5xl font-bold tracking-tight uppercase',
  h3: 'text-2xl md:text-3xl font-bold',
  body: 'text-base md:text-lg leading-relaxed text-brand-muted inter-400',
  caption: 'text-sm text-brand-muted inter-400'
};

export default function Typography({
  as,
  variant = 'body',
  className,
  children,
  ...props
}: TypographyProps) {
  const element = as ?? 'p';

  return React.createElement(
    element,
    {
      className: cn(variantMap[variant], className),
      ...(props as object)
    },
    children
  );
}
