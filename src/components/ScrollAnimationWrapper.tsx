'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up';
  className?: string;
  delay?: number;
}

export default function ScrollAnimationWrapper({
  children,
  animation = 'slide-up',
  className = '',
  delay = 0,
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClass = animation === 'fade-in' ? 'scroll-fade-in' : 'scroll-slide-up';
  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClass : 'opacity-0'} ${className}`}
      style={isVisible ? delayStyle : { opacity: 0 }}
    >
      {children}
    </div>
  );
}
