"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Calendar, Award } from "lucide-react";

const stats = [
  { id: 1, name: "Students Reached", value: "500+", icon: Users, color: "bg-primary-blue" },
  { id: 2, name: "Schools Partnered", value: "4", icon: Briefcase, color: "bg-secondary-purple" },
  { id: 3, name: "Workshops Held", value: "20+", icon: Calendar, color: "bg-accent-teal" },
  { id: 4, name: "Impact Areas", value: "Ondo State", icon: Award, color: "bg-accent-yellow" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-card-bg border border-border-color hover:shadow-xl hover:shadow-primary-blue/5 transition-all group"
            >
              <div className={`inline-flex p-3 rounded-2xl ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <h3 className="text-4xl font-extrabold text-foreground mb-2">{stat.value}</h3>
              <p className="text-foreground/60 font-medium">{stat.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
