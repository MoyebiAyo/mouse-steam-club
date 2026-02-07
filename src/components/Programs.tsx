"use client";

import { motion } from "framer-motion";
import { Beaker, Code, Wrench, Palette, Binary, ArrowUpRight } from "lucide-react";

import Link from "next/link";

const programs = [
  {
    id: "science",
    title: "Science Experiments",
    description: "Uncover the mysteries of the natural world through explosive chemistry and physics.",
    icon: Beaker,
    color: "bg-steam-science",
    lightColor: "bg-steam-science/10",
  },
  {
    id: "coding",
    title: "Coding & Robotics",
    description: "Build intelligent machines and learn the language of the future with Scratch, Python, and LEGO.",
    icon: Code,
    color: "bg-steam-tech",
    lightColor: "bg-steam-tech/10",
  },
  {
    id: "engineering",
    title: "Engineering Challenges",
    description: "Design, build, and test structures from bridges to rockets using real-world principles.",
    icon: Wrench,
    color: "bg-steam-engineering",
    lightColor: "bg-steam-engineering/10",
  },
  {
    id: "arts",
    title: "Creative Arts & Design",
    description: "Merge technology with art to create digital masterpieces and 3D-printed sculptures.",
    icon: Palette,
    color: "bg-steam-arts",
    lightColor: "bg-steam-arts/10",
  },
  {
    id: "math",
    title: "Math Games & Logic",
    description: "Master the patterns of the universe through strategy games and puzzles.",
    icon: Binary,
    color: "bg-steam-math",
    lightColor: "bg-steam-math/10",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-blue font-bold tracking-wider uppercase text-sm mb-4">Our Programs</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">Discover Your <span className="text-primary-blue">Passion</span></h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From coding to chemistry, we offer a wide range of hands-on programs designed to spark curiosity and build confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-card-bg border border-border-color transition-all hover:shadow-2xl hover:shadow-primary-blue/5"
            >
              <div className={`inline-flex p-4 rounded-2xl ${program.lightColor} text-foreground mb-6 group-hover:scale-110 transition-transform`}>
                <program.icon className={`w-8 h-8 ${program.color.replace('bg-', 'text-')}`} />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">{program.title}</h4>
              <p className="text-foreground/70 leading-relaxed mb-8">{program.description}</p>
              
              <Link 
                href={`/programs/${program.id}`}
                className="flex items-center space-x-2 text-primary-blue font-bold hover:text-primary-blue/80 transition-colors"
              >
                <span>Learn More</span>
                <ArrowUpRight size={18} />
              </Link>

              <div className={`absolute bottom-0 left-0 h-1.5 w-0 ${program.color} transition-all duration-300 group-hover:w-full rounded-b-3xl`} />
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed border-border-color bg-card-bg/50"
          >
            <h4 className="text-xl font-bold text-foreground mb-2">And much more!</h4>
            <p className="text-foreground/70 text-center mb-6">We're constantly adding new workshops and challenges.</p>
            <Link 
              href="/#programs"
              className="bg-primary-blue text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg"
            >
              View All Programs
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
