'use client';

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useEffect } from 'react';

interface IntroProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroProps) {
  useEffect(() => {
    // Esconde a animação inicial após 1.8 segundos
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-tech-950">
      <motion.div
        // O layoutId precisa ser IGUAL ao do ícone no Header
        layoutId="leaf-logo"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 2.5, rotate: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1], // Curva de animação suave
        }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-eco-500 to-eco-700 shadow-2xl shadow-eco-500/50"
      >
        <Leaf className="h-8 w-8 text-white" strokeWidth={2.5} />
      </motion.div>
    </div>
  );
}