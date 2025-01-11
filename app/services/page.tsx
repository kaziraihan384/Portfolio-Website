"use client";

import PageTransition from "@/components/page-transition";
import ServiceCard from "@/components/service-card";
import { services } from "@/constants/data";

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="container min-h-screen pt-24 pb-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for your digital needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                accent={service.accent}
              />
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}