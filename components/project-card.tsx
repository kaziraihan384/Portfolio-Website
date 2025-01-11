"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function ProjectCard({ id, title, description, image, tags, links }: ProjectCardProps) {
  return (
    <motion.div
      custom={Number(id)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="group relative space-y-4"
    >
      <div className="text-xl sm:text-2xl font-mono text-muted-foreground">{id}</div>
      <motion.div 
        className="relative aspect-video overflow-hidden rounded-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </motion.div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="rounded-full bg-primary/10 px-2 sm:px-3 py-1 text-xs sm:text-sm text-primary"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="mt-4 flex gap-3 sm:gap-4">
          <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
            <a href={links.demo} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}