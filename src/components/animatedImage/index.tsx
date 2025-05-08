import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedImageProps } from '@/types';

const AnimatedImage = ({ src, alt }: AnimatedImageProps) => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });

  return (
    <motion.img
      ref={imageRef}
      src={src}
      alt={alt}
      initial={{ translateX: '-200px', opacity: 0 }}
      animate={{
        translateX: isImageInView ? '0px' : '-200px',
        opacity: isImageInView ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', height: 'auto' }}
    />
  );
};
