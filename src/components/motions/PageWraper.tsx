"use client";

import React, { ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface PageWrapperProps {
  children: ReactNode;
}


const pageVariants: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: 
  { opacity: 1, y: 0, x: 0,
  transition: { ease: 'easeInOut' } },
  exit: { opacity: 0, x: -100,transition: { ease: 'easeInOut' } },
  
};

const containerVariants = {
  hidden: { 
    opacity: 0, 
  },
  visible: { 
    opacity: 1, 
    transition: { delay: 1.5, duration: 2 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};
const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
  <>
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);

export default PageWrapper;
