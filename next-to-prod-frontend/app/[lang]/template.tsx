'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  return (
      <AnimatePresence>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            exit={{ y: 0, opacity: 0 }}
            >
            {children}
        </motion.div>
      </AnimatePresence>
    
  );
};