'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  enableInView?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function FadeIn({ children, delay = 0, className, enableInView = false, direction = 'up' }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const initialAnimation = {
    opacity: 0,
    ...(direction === 'up' 
      ? { y: 20 }
      : direction === 'down'
        ? { y: -20 }
      : direction === 'right' 
        ? { x: 20 }
        : { x: -20 }
    )
  };

  const finalAnimation = {
    opacity: 1,
    ...(direction === 'up' || direction === 'down'
      ? { y: 0 } 
      : { x: 0 }
    )
  };

  return (
    <motion.div
      ref={ref}
      initial={initialAnimation}
      animate={enableInView ? (isInView ? finalAnimation : initialAnimation) : finalAnimation}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0, 0, 0.5, 1] // Cubic bezier curve for ease out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
