"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  description: string;
  index: number;
}

const variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function ExperienceCard({ period, title, company, description, index }: ExperienceCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="relative pl-8 border-l border-primary/20 pb-12 last:pb-0"
    >
      <motion.div 
        className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-primary"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.2 }}
      />
      <time className="mb-1 text-xs sm:text-sm font-mono text-primary">{period}</time>
      <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground mb-2">{company}</p>
      <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
    </motion.div>
  );
}