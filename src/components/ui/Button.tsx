import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
    size?: 'sm' | 'md' | 'lg' | 'full';
}

const variantStyles = {
    primary: "bg-brand-green text-brand-ivory hover:bg-brand-green/90 shadow-md",
    secondary: "bg-brand-charcoal text-brand-ivory hover:bg-brand-charcoal/90",
    outline: "border border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-ivory",
    ghost: "text-brand-green hover:bg-brand-green/10",
    gold: "bg-brand-gold text-brand-charcoal hover:bg-brand-gold/90 font-bold shadow-lg"
};

const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    full: "w-full py-4 text-lg"
};

const baseStyles = "inline-flex items-center justify-center rounded-sm font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none tracking-wide cursor-pointer";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

// Helper to get button classes for use on <Link> or <a> elements
export function buttonVariants({
    variant = 'primary',
    size = 'md',
    className = '',
}: {
    variant?: keyof typeof variantStyles;
    size?: keyof typeof sizeStyles;
    className?: string;
} = {}) {
    return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}
