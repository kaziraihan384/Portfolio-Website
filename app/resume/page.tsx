"use client";

import PageTransition from "@/components/page-transition";
import ExperienceCard from "@/components/experience-card";
import { experience } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function ResumePage() {
  return (
    <PageTransition>
      <main className="container min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Why hire me?</h1>
              <p className="text-lg text-muted-foreground mt-2">
                A passionate developer with a proven track record of delivering exceptional results.
              </p>
            </div>
            <Button>
              <FileDown className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <ExperienceCard key={item.period} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}