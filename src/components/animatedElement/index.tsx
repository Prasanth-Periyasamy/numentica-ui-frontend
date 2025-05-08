import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Component to animate elements when they come into view
export const AnimatedElement = ({ children }: { children: React.ReactNode }) => {
  const elementRef = useRef(null);
  const isElementInView = useInView(elementRef, { once: true });

  return (
    <motion.div
      ref={elementRef}
      initial={{ translateY: '100px', opacity: 0 }}
      animate={{
        translateY: isElementInView ? '0px' : '100px',
        opacity: isElementInView ? 1 : 0,
      }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};
