import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: boolean;
}

const Card = ({ 
  children, 
  padding = 'md', 
  shadow = true,
  className = '',
  ...props 
}: CardProps) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      className={`
        bg-white rounded-lg 
        ${shadow ? 'shadow-lg' : ''} 
        ${paddings[padding]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
