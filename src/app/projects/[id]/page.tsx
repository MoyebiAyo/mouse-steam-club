"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, User, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const projectsData = [
  { 
    id: "1", 
    title: "Autonomous Rover", 
    category: "Robotics", 
    student: "Chidi Okoro",
    date: "Jan 12, 2026",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1200",
    description: "A self-navigating rover designed to detect obstacles and map its environment using ultrasonic sensors and Arduino.",
    challenge: "Developing a reliable algorithm for real-time obstacle avoidance in complex indoor environments.",
    solution: "We implemented a weighted decision-making tree that prioritizes safety while maintaining a path toward the goal.",
    videoUrl: "https://www.youtube.com/embed/Ml52O3miJKw"
  },
  { 
    id: "2", 
    title: "Eco-City Model", 
    category: "Engineering", 
    student: "Amina Yusuf",
    date: "Dec 05, 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "A sustainable city prototype featuring vertical gardens, solar-powered transportation, and waste-to-energy systems.",
    challenge: "Balancing energy production with urban space efficiency while maintaining aesthetic appeal.",
    solution: "Used modular 3D-printed building blocks with integrated solar cells and multi-level green spaces.",
    videoUrl: "https://www.youtube.com/embed/G2i90vO3nCk"
  },
  { 
    id: "3", 
    title: "Digital Portrait", 
    category: "Arts", 
    student: "Oluwaseun Adeyemi",
    date: "Nov 20, 2025",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=1200",
    description: "An expressive digital painting exploring the intersection of identity and technology in the 21st century.",
    challenge: "Learning complex digital layering techniques to achieve a traditional oil painting texture.",
    solution: "Experimented with custom brush engines and lighting effects in Procreate.",
    videoUrl: "https://www.youtube.com/embed/WljuwpfSpiw"
  },
  { 
    id: "4", 
    title: "Water Filter System", 
    category: "Science", 
    student: "Ifeanyi Obi",
    date: "Oct 15, 2025",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200",
    description: "A multi-stage biological water filtration system designed for rural communities to provide clean drinking water.",
    challenge: "Finding low-cost, locally available materials that effectively remove micro-impurities.",
    solution: "Used a combination of activated charcoal, sand, and fine gravel layers optimized for high-flow filtration.",
    videoUrl: "https://www.youtube.com/embed/MgoHEhYt7cc"
  },
  { 
    id: "5", 
    title: "Python Game Lab", 
    category: "Coding", 
    student: "Zainab Lawal",
    date: "Sep 28, 2025",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
    description: "An arcade-style space shooter game built entirely in Python using the Pygame library, featuring multiple levels and power-ups.",
    challenge: "Implementing smooth sprite collisions and managing the game's frame rate during high-action sequences.",
    solution: "Optimized the game loop and used collision masks for pixel-perfect accuracy.",
    videoUrl: "https://www.youtube.com/embed/WljuwpfSpiw"
  },
  { 
    id: "6", 
    title: "Geometry in Art", 
    category: "Math", 
    student: "Emeka Nwosu",
    date: "Aug 10, 2025",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1200",
    description: "An investigation into how mathematical patterns and geometric shapes form the basis of architectural design and classical art.",
    challenge: "Visualizing complex 3D geometric transformations in a 2D canvas format.",
    solution: "Applied the Golden Ratio and Fibonacci sequences to create balanced, aesthetically pleasing compositions.",
    videoUrl: "https://www.youtube.com/embed/G2i90vO3nCk"
  },
  { 
    id: "7", 
    title: "Outreach at Ilaje High", 
    category: "Outreach", 
    student: "Mouse STEAM Team",
    date: "June 2025",
    image: "/outreach/ilaje.jpg",
    description: "A transformative outreach project at Ilaje High School, Igbokoda, where we introduced hundreds of students to the basics of robotics and electronics.",
    challenge: "Managing large groups of students in a rural school setting with limited power supply.",
    solution: "We designed battery-powered learning kits and used a peer-to-peer mentoring system to ensure every student got hands-on experience.",
    videoUrl: "https://drive.google.com/file/d/1Zgz-kZxaEU0cSd69F0n0z783YdA24aM1/preview"
  },
  { 
    id: "8", 
    title: "RoyalBim Workshop", 
    category: "Outreach", 
    student: "Mouse STEAM Team",
    date: "July 2025",
    image: "/outreach/royalbim.jpg",
    description: "Advanced STEAM workshop at RoyalBim International College focusing on 3D design and creative problem solving.",
    challenge: "Encouraging students to think outside the box and use technology for artistic expression.",
    solution: "Implemented a series of creative design challenges where students had to solve local environmental problems using digital tools.",
    videoUrl: "https://drive.google.com/file/d/1jjOc1fP4e2K5T67u3ztF-EofmKZzCwXn/preview"
  },
  { 
    id: "9", 
    title: "Global Stand STEAM Day", 
    category: "Outreach", 
    student: "Mouse STEAM Team",
    date: "August 2025",
    image: "/outreach/global-stand.jpg",
    description: "A full day of STEAM activities for the younger learners at Global Stand Nur/Pri School, focusing on sensory science and basic logic.",
    challenge: "Adapting complex scientific concepts for primary school pupils.",
    solution: "Used gamified science experiments and interactive storytelling to teach fundamental principles of physics and chemistry.",
    videoUrl: "https://drive.google.com/file/d/10j6peLXSVknauL7yiKQuUTWKITsXn3pB/preview"
  },
];

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id) || projectsData[0];

  return (
    <div className="bg-background min-h-screen pb-24 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#projects" className="inline-flex items-center space-x-2 text-foreground/60 hover:text-primary-blue transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back to Projects</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue font-bold text-sm uppercase tracking-wider">
              {project.category}
            </span>
            <div className="flex items-center space-x-2 text-foreground/50 text-sm font-medium">
              <Calendar size={16} />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-foreground/50 text-sm font-medium">
              <User size={16} />
              <span>By {project.student}</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-8 leading-tight">
            {project.title}
          </h1>

          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-card-bg mb-12 border border-border-color">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-card-bg rounded-3xl border border-border-color shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-3 text-secondary-purple">The Challenge</h3>
                  <p className="text-foreground/70 leading-relaxed">{project.challenge}</p>
                </div>
                <div className="p-8 bg-card-bg rounded-3xl border border-border-color shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-3 text-accent-teal">Our Solution</h3>
                  <p className="text-foreground/70 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {project.videoUrl && (
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
                    <PlayCircle className="text-primary-blue" />
                    <span>Watch it in Action</span>
                  </h2>
                  <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl bg-black border border-border-color">
                    <iframe
                      src={project.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </section>
              )}
            </div>

            <aside className="space-y-8">
              <div className="bg-primary-blue rounded-3xl p-8 text-white shadow-xl shadow-primary-blue/20">
                <h3 className="text-xl font-bold mb-4 italic">"This project taught me that coding isn't just about math, it's about solving real-world puzzles."</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/20" />
                  <div>
                    <div className="font-bold">{project.student}</div>
                    <div className="text-sm opacity-80">Grade 10 Student</div>
                  </div>
                </div>
              </div>

              <div className="bg-card-bg rounded-3xl p-8 border border-border-color shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4">Interested in building things like this?</h3>
                <Link href="/#contact" className="block w-full text-center bg-primary-blue text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all cursor-pointer">
                  Enroll in Robotics
                </Link>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
