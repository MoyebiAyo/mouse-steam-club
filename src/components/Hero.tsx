"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-background transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-purple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-card-bg rounded-full border border-border-color shadow-sm mb-8"
          >
            <Sparkles className="text-accent-yellow" size={20} />
            <span className="text-sm font-semibold text-foreground/70">Where young minds meet innovation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            Inspiring Young <span className="text-primary-blue">Innovators</span> Through <span className="text-secondary-purple">STEAM</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-foreground/70 mb-10 leading-relaxed"
          >
            Join Mouse STEAM Club, a vibrant learning community where kids and teens explore science, technology, engineering, arts, and math through hands-on projects and creative play.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary-blue text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all hover:shadow-xl active:scale-95"
            >
              <span>Enroll a Child</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#programs"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-card-bg text-foreground/80 border-2 border-border-color px-8 py-4 rounded-2xl font-bold text-lg hover:border-primary-blue hover:text-primary-blue transition-all active:scale-95"
            >
              <span>Explore Programs</span>
            </Link>
          </motion.div>
        </div>

        {/* Floating elements for visual flair */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute top-20 left-10 p-4 bg-card-bg rounded-3xl shadow-2xl text-primary-blue border border-border-color"
        >
          <Rocket size={40} />
        </motion.div>
        <motion.div className="hidden lg:block absolute bottom-20 right-10">
          {/* Wire */}
          <motion.div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-border-color to-secondary-purple origin-bottom" animate={{ scaleY: [1, 0.98, 1], opacity: [0.6, 0.8, 0.6] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          
          {/* Bulb Container with Circular Text */}
          <motion.div 
            className="relative"
            animate={{ y: [0, 20, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            {/* Circular rotating text */}
            <motion.div
              className="absolute inset-0 -m-12"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              whileHover={{ 
                rotate: [0, 10, -10, 0],
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" }
              }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <text className="text-[11px] font-bold fill-primary-blue uppercase tracking-wider">
                  <textPath href="#circlePath" startOffset="0%">
                    {theme === "dark" ? "✨ Click me to turn on the light ✨ " : "💡 Click me to turn off the light 💡 "}
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Bulb */}
            <motion.div 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
              className="relative p-4 bg-card-bg rounded-3xl shadow-2xl text-secondary-purple border border-border-color cursor-pointer"
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, -5, 5, -5, 0],
                boxShadow: "0 0 40px rgba(251, 146, 60, 0.8)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9, rotate: 180 }}
            >
              <div className="rotate-180"><Lightbulb size={40} /></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
