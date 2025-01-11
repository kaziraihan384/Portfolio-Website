"use client";

import PageTransition from "@/components/page-transition";
import ProjectCard from "@/components/project-card";
import { projects } from "@/constants/data";

export default function WorkPage() {
  return (
    <PageTransition>
      <main className="container min-h-screen pt-24 pb-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Work</h1>
            <p className="text-lg text-muted-foreground mt-2">
              A collection of projects I've worked on
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}