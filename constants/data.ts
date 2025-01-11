export const personalData = {
  name: "Luke Coleman",
  role: "Software Developer",
  headline: "Hello I'm",
  description: "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
  image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/lukecoleman",
    linkedin: "https://linkedin.com/in/lukecoleman",
    youtube: "https://youtube.com/@lukecoleman",
    twitter: "https://twitter.com/lukecoleman"
  }
};

export const stats = [
  { value: "12", label: "Years of experience" },
  { value: "26", label: "Projects completed" },
  { value: "8", label: "Technologies mastered" },
  { value: "500", label: "Code commits" }
];

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Resume", href: "#resume" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
  { name: "Tutorials", href: "/tutorials" }
];

export const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Building modern, responsive websites and web applications using cutting-edge technologies and best practices.",
    icon: "ArrowDownRight",
    accent: true
  },
  {
    id: "02",
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.",
    icon: "ArrowDownRight"
  },
  {
    id: "03",
    title: "Logo Design",
    description: "Designing memorable and versatile logos that effectively communicate brand identity and values.",
    icon: "ArrowDownRight"
  },
  {
    id: "04",
    title: "SEO",
    description: "Optimizing websites for search engines to improve visibility and drive organic traffic growth.",
    icon: "ArrowDownRight"
  }
];

export const experience = [
  {
    period: "2020 - 2021",
    title: "Freelance Web Developer",
    company: "E-commerce Startup",
    description: "Led development of multiple e-commerce platforms using modern web technologies."
  },
  {
    period: "2019 - 2020",
    title: "Teaching Assistant",
    company: "Tech Academy",
    description: "Mentored students in web development fundamentals and modern frameworks."
  },
  {
    period: "2018 - 2019",
    title: "UI/UX Designer",
    company: "Digital Agency",
    description: "Designed user interfaces for various web and mobile applications."
  },
  {
    period: "2017 - 2018",
    title: "Junior Developer",
    company: "Software Development Firm",
    description: "Developed and maintained web applications using React and Node.js."
  }
];

export const projects = [
  {
    id: "01",
    title: "Frontend Project",
    description: "Modern e-commerce platform with seamless user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Html 5", "Css 3", "Javascript"],
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: "02",
    title: "Backend API",
    description: "Scalable REST API with comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2370&auto=format&fit=crop",
    tags: ["Node.js", "Express", "MongoDB"],
    links: {
      demo: "https://api.example.com",
      github: "https://github.com/example"
    }
  }
];

export const tutorials = [
  {
    id: "1",
    title: "Next.js 13 Crash Course",
    description: "Learn the basics of Next.js 13 and build a full-stack application",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example1",
    duration: "45:22",
    tags: ["Next.js", "React", "TypeScript"],
    content: {
      overview: "In this comprehensive tutorial, we'll dive deep into Next.js 13 and build a modern full-stack application from scratch.",
      topics: [
        "Setting up a Next.js 13 project",
        "Understanding the new App Router",
        "Server and Client Components",
        "Data Fetching Strategies",
        "API Routes and Backend Integration"
      ],
      prerequisites: [
        "Basic knowledge of React",
        "Familiarity with JavaScript/TypeScript",
        "Understanding of web development concepts"
      ],
      chapters: [
        {
          title: "Introduction to Next.js 13",
          duration: "10:15",
          description: "Overview of Next.js 13 features and project setup"
        },
        {
          title: "App Router Deep Dive",
          duration: "15:30",
          description: "Understanding the new file-system based router"
        },
        {
          title: "Building the Frontend",
          duration: "12:45",
          description: "Creating responsive UI components"
        },
        {
          title: "Backend Integration",
          duration: "07:52",
          description: "Implementing API routes and data fetching"
        }
      ]
    }
  },
  {
    id: "2",
    title: "Build a Portfolio with Framer Motion",
    description: "Create stunning animations with Framer Motion in React",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2370&auto=format&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example2",
    duration: "32:15",
    tags: ["React", "Framer Motion", "Animation"],
    content: {
      overview: "Learn how to create beautiful animations in React using Framer Motion. This tutorial covers everything from basic animations to complex gesture-based interactions.",
      topics: [
        "Basic animations with Framer Motion",
        "Gesture animations",
        "Page transitions",
        "Scroll-based animations",
        "Performance optimization"
      ],
      prerequisites: [
        "React fundamentals",
        "Basic CSS knowledge",
        "Understanding of animation concepts"
      ],
      chapters: [
        {
          title: "Getting Started with Framer Motion",
          duration: "08:20",
          description: "Introduction to animation fundamentals"
        },
        {
          title: "Basic Animations",
          duration: "10:45",
          description: "Creating simple animations with variants"
        },
        {
          title: "Advanced Techniques",
          duration: "13:10",
          description: "Complex animations and gestures"
        }
      ]
    }
  }
];