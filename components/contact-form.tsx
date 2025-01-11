"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4 text-center md:text-left">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <Mail className="h-5 w-5 text-cyan-400" />
          <a href="mailto:thecoffecoder@gmail" className="hover:text-primary">
            thecoffecoder@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <MessageSquare className="h-5 w-5 text-cyan-400" />
          <span>Available for freelance work</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input placeholder="Your name" required />
        <Input type="email" placeholder="Your email" required />
        <Textarea placeholder="Your message" className="min-h-[120px]" required />
        <Button type="submit" disabled={isSubmitting} className="w-full bg-cyan-300">
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}