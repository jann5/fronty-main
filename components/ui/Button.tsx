'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'underline' | 'ghost' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

export function Button({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    icon,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-sans transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
        primary: 'bg-primary-black text-primary-white hover:opacity-80',
        secondary: 'border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white',
        underline: 'bg-transparent text-primary-black underline underline-offset-4 hover:opacity-70',
        ghost: 'bg-transparent text-primary-black hover:bg-gray-light',
        white: 'bg-white text-black border border-white hover:bg-transparent hover:text-white',
    };

    const sizeStyles = {
        sm: 'px-4 py-2 text-xs uppercase tracking-wider',
        md: 'px-6 py-3 text-sm uppercase tracking-wider',
        lg: 'px-8 py-4 text-base uppercase tracking-wider'
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    return (
        <motion.button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
            whileHover={variant !== 'underline' ? { scale: 1.02 } : {}}
            whileTap={{ scale: 0.98 }}
            disabled={disabled}
            {...props}
        >
            {children}
            {icon && <span>{icon}</span>}
        </motion.button>
    );
}
