"use client";

import { useParams } from "next/navigation";
import { tutorials } from "@/constants/data";
import PageTransition from "@/components/page-transition";
import SectionTransition from "@/components/section-transition";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TutorialPage() {
  const { id } = useParams();
  const tutorial = tutorials.find(t => t.id === id);

  if (!tutorial) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Tutorial not found</h1>
          <Button asChild>
            <Link href="/tutorials">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tutorials
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <main className="container min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" asChild>
              <Link href="/tutorials">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tutorials
              </Link>
            </Button>
            <Button asChild>
              <a href={tutorial.videoUrl} target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-4 w-4" />
                Watch on YouTube
              </a>
            </Button>
          </div>

          <SectionTransition direction="up">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={tutorial.thumbnail}
                alt={tutorial.title}
                fill
                className="object-cover"
              />
            </div>
          </SectionTransition>

          <SectionTransition direction="up" delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{tutorial.duration}</span>
              </div>
              <h1 className="text-4xl font-bold">{tutorial.title}</h1>
              <p className="text-xl text-muted-foreground">{tutorial.description}</p>
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
          </SectionTransition>

          <SectionTransition direction="up" delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-muted-foreground">{tutorial.content.overview}</p>
            </div>
          </SectionTransition>

          <SectionTransition direction="up" delay={0.3}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">What You'll Learn</h2>
              <ul className="space-y-2">
                {tutorial.content.topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </SectionTransition>

          <SectionTransition direction="up" delay={0.4}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Prerequisites</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {tutorial.content.prerequisites.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </ul>
            </div>
          </SectionTransition>

          <SectionTransition direction="up" delay={0.5}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Course Content</h2>
              <div className="space-y-4">
                {tutorial.content.chapters.map((chapter, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold">{chapter.title}</h3>
                      <span className="text-sm text-muted-foreground">{chapter.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{chapter.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionTransition>
        </div>
      </main>
    </PageTransition>
  );
}