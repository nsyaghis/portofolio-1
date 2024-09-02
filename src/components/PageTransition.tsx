"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"


import { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
