import React, { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from './cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  containerClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, error, className, containerClassName, ...props },
  ref
) {
  const reactId = useId();
  const inputId = id ?? `input-${reactId.replace(/[:]/g, '')}`;
  const describedBy = error ? `${inputId}-error` : undefined;

  return (
    <div className={cn('space-y-2', containerClassName)}>
      {label ? (
        <label htmlFor={inputId} className="text-sm font-semibold uppercase tracking-widest text-brand">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        ref={ref}
        className={cn('ui-input', className)}
        data-invalid={Boolean(error)}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        {...props}
      />
      {error ? (
        <p id={describedBy} className="text-sm text-brand-muted">
          {error}
        </p>
      ) : null}
    </div>
  );
});

export default Input;
