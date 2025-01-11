"use client";

import PageTransition from "@/components/page-transition";
import { tutorials } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";

export default function TutorialsPage() {
  return (
    <PageTransition>
      <main className="container min-h-screen pt-24 pb-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Video Tutorials</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Learn web development through my comprehensive video tutorials
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border hover:border-primary/50 transition-colors"
              >
                <Link href={tutorial.videoUrl} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {tutorial.title}
                    </h2>
                    <p className="text-muted-foreground">{tutorial.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tutorial.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}