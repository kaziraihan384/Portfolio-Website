"use client";

import { useState } from "react";
import PageTransition from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <PageTransition>
      <main className="container min-h-screen pt-24 pb-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Get in touch</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Let's discuss your project and bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@example.com" className="hover:text-primary">
                  hello@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Available for freelance work</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your name" required />
              <Input type="email" placeholder="Your email" required />
              <Textarea placeholder="Your message" className="min-h-[120px]" required />
              <Button type="submit" disabled={isSubmitting}>
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}