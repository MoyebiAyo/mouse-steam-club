"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Filter } from "lucide-react";

import Link from "next/link";

const projects = [
  { id: "1", title: "Autonomous Rover", category: "Robotics", image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=600" },
  { id: "7", title: "Outreach at Ilaje High", category: "Outreach", image: "/outreach/ilaje.jpg" },
  { id: "2", title: "Eco-City Model", category: "Engineering", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" },
  { id: "8", title: "RoyalBim Workshop", category: "Outreach", image: "/outreach/royalbim.jpg" },
  { id: "3", title: "Digital Portrait", category: "Arts", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=600" },
  { id: "9", title: "Global Stand STEAM Day", category: "Outreach", image: "/outreach/global-stand.jpg" },
  { id: "4", title: "Water Filter System", category: "Science", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600" },
  { id: "5", title: "Python Game Lab", category: "Coding", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600" },
  { id: "6", title: "Geometry in Art", category: "Math", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600" },
];

const categories = ["All", "Outreach", "Science", "Coding", "Robotics", "Engineering", "Arts", "Math"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-primary-blue font-bold tracking-wider uppercase text-sm mb-4">Student Gallery</h2>
            <h3 className="text-4xl font-extrabold text-foreground leading-tight">Innovation in <span className="text-primary-blue">Action</span></h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                  filter === cat 
                    ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/20" 
                    : "bg-card-bg text-foreground/60 hover:bg-primary-blue/10 border border-border-color"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 shadow-xl"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-110"
              />
              <Link 
                href={`/projects/${project.id}`}
                className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 lg:p-8"
              >
                <span className="text-primary-blue font-bold text-xs lg:text-sm mb-1 lg:mb-2 uppercase tracking-widest">{project.category}</span>
                <h4 className="text-white text-xl lg:text-2xl font-bold leading-tight">{project.title}</h4>
                <div className="mt-4 w-fit bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold hover:bg-white/30 transition-all">
                  View Project Details
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
