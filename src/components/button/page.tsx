import React from 'react';
import { ButtonProps } from '@/types';
import { motion } from 'framer-motion';
import './style.css';

const Button: React.FC<ButtonProps> = ({ btnName, type, handleClick, className }) => {
  return (
    <motion.button
      className={`font-secondary text-nowrap rounded-2xl bg-btn-color px-11 py-2 font-bold transition-transform  duration-100 ease-linear hover:scale-105 sm:w-full sm:px-6 ${className}  ${
        type === 'secondary'
          ? 'get-started-btn w-fit border-[1.5px] border-solid border-secondaryBorder bg-white text-black'
          : 'btn  draw-border border border-solid border-primaryBorder text-white'
      } `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onClick={handleClick}
    >
      {btnName}
    </motion.button>
  );
};

export default Button;
