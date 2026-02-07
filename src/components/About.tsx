"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden transition-colors">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-blue font-bold tracking-wider uppercase text-sm mb-4">Our Mission</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              Empowering the Next Generation of <span className="text-primary-blue">Makers</span> and <span className="text-secondary-purple">Thinkers</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              At Mouse STEAM Club, we believe that every child is a natural innovator. Our mission is to provide a playful and inspiring environment where young minds can explore the intersection of Science, Technology, Engineering, Arts, and Mathematics through hands-on learning.
            </p>
            
            <div className="space-y-4">
              {[
                "Hands-on, project-based learning",
                "Fostering creativity and problem-solving",
                "Inclusive community for all skill levels",
                "Future-focused curriculum and tools"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent-teal" size={24} />
                  <span className="text-foreground/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-blue/20 to-secondary-purple/20 rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <div className="absolute inset-0 flex items-center justify-center text-primary-blue/20">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[url('/team.jpg')] bg-cover bg-center mix-blend-overlay opacity-80" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-yellow rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-teal rounded-full blur-3xl opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
