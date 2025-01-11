"use client";

import { Github, Linkedin, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/page-transition";
import Counter from "@/components/counter";
import { personalData, stats, services, experience, projects } from "@/constants/data";
import ServiceCard from "@/components/service-card";
import ExperienceCard from "@/components/experience-card";
import ProjectCard from "@/components/project-card";
import ContactForm from "@/components/contact-form";
import RotatingCircle from "@/components/rotating-circle";
import SectionTransition from "@/components/section-transition";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-4rem)] pt-16 sm:pt-20 flex items-center">
          <div className="container flex flex-col items-center lg:flex-row lg:items-center justify-center gap-8 sm:gap-16 px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <p className="text-base sm:text-lg text-muted-foreground">
                {personalData.role}
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold">
                {personalData.headline}{" "}
                <span className="text-primary block text-4xl sm:text-7xl mt-2 text-cyan-300">
                  {personalData.name}
                </span>
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                {personalData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
                <Button size="lg" className="w-full sm:w-auto px-8 bg-cyan-300">
                  Download CV
                </Button>
                <div className="flex gap-6 justify-center">
                  {Object.entries(personalData.socialLinks).map(([platform, url]) => {
                    const Icon = {
                      github: Github,
                      linkedin: Linkedin,
                      youtube: Youtube,
                      twitter: Twitter
                    }[platform];
                    
                    return (
                      Icon && (
                        <a 
                          key={platform}
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </a>
                      )
                    );
                  })}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full sm:w-2/3 lg:w-1/2 max-w-[400px] lg:max-w-[500px] -mt-8 sm:mt-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <RotatingCircle 
                imageUrl={personalData.image}
                altText={personalData.name}
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <SectionTransition 
                  key={stat.label}
                  direction="up"
                  delay={index * 0.1}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary">
                    <Counter value={Number(stat.value)} />
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-2">{stat.label}</div>
                </SectionTransition>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-20 bg-secondary/30">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
              <SectionTransition direction="left" className="space-y-2 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Services</h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Comprehensive solutions for your digital needs
                </p>
              </SectionTransition>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <SectionTransition 
                    key={service.id}
                    direction="left"
                    delay={index * 0.1}
                  >
                    <ServiceCard
                      id={service.id}
                      title={service.title}
                      description={service.description}
                      accent={service.accent}
                    />
                  </SectionTransition>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16 sm:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <SectionTransition direction="right" className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Why hire me?</h2>
                  <p className="text-base sm:text-lg text-muted-foreground mt-2">
                    A passionate developer with a proven track record of delivering exceptional results.
                  </p>
                </div>
                <Button size="lg" className="w-full sm:w-auto bg-cyan-300">
                  Download CV
                </Button>
              </SectionTransition>

              <div className="space-y-4">
                <SectionTransition direction="right">
                  <h3 className="text-xl sm:text-2xl font-bold text-center sm:text-left">Experience</h3>
                </SectionTransition>
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <SectionTransition 
                      key={item.period}
                      direction="right"
                      delay={index * 0.1}
                    >
                      <ExperienceCard {...item} index={index} />
                    </SectionTransition>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-16 sm:py-20 bg-secondary/30">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
              <SectionTransition direction="left" className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">My Work</h2>
                <p className="text-base sm:text-lg text-muted-foreground mt-2">
                  A collection of projects I've worked on
                </p>
              </SectionTransition>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                {projects.map((project, index) => (
                  <SectionTransition 
                    key={project.id}
                    direction="left"
                    delay={index * 0.1}
                  >
                    <ProjectCard {...project} />
                  </SectionTransition>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto space-y-8">
              <SectionTransition direction="right" className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Get in touch</h2>
                <p className="text-base sm:text-lg text-muted-foreground mt-2">
                  Let's discuss your project and bring your ideas to life
                </p>
              </SectionTransition>
              <SectionTransition direction="right" delay={0.2}>
                <ContactForm />
              </SectionTransition>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}