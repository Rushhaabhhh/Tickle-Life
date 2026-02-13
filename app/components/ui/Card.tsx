import React from 'react';
import { cn } from './cn';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export default function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'ui-card p-8',
        interactive && 'transition-all duration-ui ease-ui hover:shadow-ui-lg',
        className
      )}
      {...props}
    />
  );
}
