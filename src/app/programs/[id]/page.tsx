"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Beaker, Code, Wrench, Palette, Binary, CheckCircle2, Clock, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const programsData = {
  science: {
    title: "Science Experiments",
    icon: Beaker,
    color: "text-steam-science",
    bg: "bg-steam-science/10",
    description: "Dive into the fascinating world of chemistry, physics, and biology. Our science program encourages students to ask 'why' and find out through hands-on experimentation.",
    features: [
      "Explosive chemical reactions lab",
      "Physics of motion and energy",
      "Biological systems and microscopy",
      "Environmental science projects"
    ],
    schedule: "Every Monday & Wednesday, 4:00 PM - 6:00 PM",
    ageGroup: "Ages 8-14",
    curriculum: "Focused on scientific method, data collection, and analytical thinking."
  },
  coding: {
    title: "Coding & Robotics",
    icon: Code,
    color: "text-steam-tech",
    bg: "bg-steam-tech/10",
    description: "Learn the language of the future. From visual block coding to professional languages like Python, we teach kids how to build software and control hardware.",
    features: [
      "Scratch & Blockly for beginners",
      "Python programming fundamentals",
      "LEGO Mindstorms robotics",
      "Mobile app development basics"
    ],
    schedule: "Every Tuesday & Thursday, 4:00 PM - 6:00 PM",
    ageGroup: "Ages 10-16",
    curriculum: "Computational thinking, logic, algorithm design, and hardware integration."
  },
  engineering: {
    title: "Engineering Challenges",
    icon: Wrench,
    color: "text-steam-engineering",
    bg: "bg-steam-engineering/10",
    description: "Think like an engineer. Students design, build, and test solutions to real-world problems using structural, mechanical, and aerospace principles.",
    features: [
      "Bridge and tower building",
      "Aerodynamics and rocket design",
      "Renewable energy models",
      "Simple machines and mechanisms"
    ],
    schedule: "Fridays, 3:30 PM - 6:30 PM",
    ageGroup: "Ages 9-15",
    curriculum: "Engineering design process: Empathize, Define, Ideate, Prototype, and Test."
  },
  arts: {
    title: "Creative Arts & Design",
    icon: Palette,
    color: "text-steam-arts",
    bg: "bg-steam-arts/10",
    description: "Where technology meets creativity. Explore digital art, graphic design, and 3D modeling while learning how to use modern tools for artistic expression.",
    features: [
      "Digital painting and illustration",
      "3D modeling for printing",
      "Graphic design fundamentals",
      "Creative coding and generative art"
    ],
    schedule: "Saturdays, 10:00 AM - 1:00 PM",
    ageGroup: "Ages 7-18",
    curriculum: "Color theory, spatial awareness, digital tool proficiency, and creative expression."
  },
  math: {
    title: "Math Games & Logic",
    icon: Binary,
    color: "text-steam-math",
    bg: "bg-steam-math/10",
    description: "Make math fun through strategy and logic. We use games and puzzles to help students master mathematical concepts and develop critical thinking skills.",
    features: [
      "Strategic board games",
      "Cryptographic puzzles",
      "Pattern recognition challenges",
      "Probability and statistics games"
    ],
    schedule: "Every Wednesday, 4:00 PM - 5:30 PM",
    ageGroup: "Ages 6-12",
    curriculum: "Logic puzzles, mental math, geometry visualization, and strategic reasoning."
  }
};

export default function ProgramPage() {
  const { id } = useParams();
  const program = programsData[id as keyof typeof programsData] || programsData.science;

  return (
    <div className="bg-background min-h-screen pb-24 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#programs" className="inline-flex items-center space-x-2 text-foreground/60 hover:text-primary-blue transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back to Programs</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card-bg rounded-3xl p-8 lg:p-12 shadow-xl border border-border-color mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
              <div className={`p-6 rounded-3xl ${program.bg} ${program.color} shrink-0`}>
                <program.icon size={48} />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-black text-foreground mb-4">{program.title}</h1>
                <p className="text-xl text-foreground/70 leading-relaxed">{program.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border-color">
                <Clock className="text-primary-blue" size={24} />
                <div>
                  <div className="text-xs font-bold text-foreground/30 uppercase tracking-widest">Schedule</div>
                  <div className="font-bold text-foreground/80">{program.schedule}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border-color">
                <Users className="text-accent-teal" size={24} />
                <div>
                  <div className="text-xs font-bold text-foreground/30 uppercase tracking-widest">Age Group</div>
                  <div className="font-bold text-foreground/80">{program.ageGroup}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border-color">
                <BookOpen className="text-secondary-purple" size={24} />
                <div>
                  <div className="text-xs font-bold text-foreground/30 uppercase tracking-widest">Type</div>
                  <div className="font-bold text-foreground/80">Hands-on Lab</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">What Students Learn</h2>
                <div className="space-y-4">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="text-accent-teal mt-1 shrink-0" size={20} />
                      <span className="text-foreground/80 font-medium text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Curriculum Focus</h2>
                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                  {program.curriculum}
                </p>
                <Link href="/#contact" className="block w-full text-center bg-primary-blue text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-900/20 cursor-pointer">
                  Enroll in this Program
                </Link>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
