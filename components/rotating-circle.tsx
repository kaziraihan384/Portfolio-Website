"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface RotatingCircleProps {
  imageUrl: string;
  altText: string;
}

export default function RotatingCircle({ imageUrl, altText }: RotatingCircleProps) {
  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      <div className="aspect-square relative">
        <svg 
          className="absolute inset-0 w-full h-full animate-spin"
          viewBox="0 0 500 500"
        >
          <circle
            cx="250"
            cy="250"
            r="248"
            className="stroke-primary fill-none"
            strokeWidth="2"
            strokeDasharray="40,40"
          />
        </svg>
        <div className="absolute inset-8 overflow-hidden rounded-full bg-background">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}