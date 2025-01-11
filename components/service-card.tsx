"use client";

import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  accent?: boolean;
}

export default function ServiceCard({ id, title, description, accent }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Number(id) * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border p-6 sm:p-8",
        "hover:border-primary/50 transition-colors",
        accent && "border-primary"
      )}
    >
      <div className="mb-4 text-xl sm:text-2xl font-mono text-muted-foreground">{id}</div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        <ArrowDownRight 
          className={cn(
            "h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
            accent ? "text-primary" : "text-muted-foreground"
          )}
        />
      </div>
      <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
    </motion.div>
  );
}