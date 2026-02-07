"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Mouse STEAM Club has completely transformed how my son views technology. He's no longer just a consumer; he's a creator!",
    author: "Mrs. Ngozi Okeke",
    role: "Parent",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The hands-on projects here are incredible. I learned how to build my first robot in just two weeks!",
    author: "Tunde Williams",
    role: "Grade 8 Student",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "As an educator, I'm impressed by the curriculum. It's exactly what our kids need to be future-ready.",
    author: "Mr. Babatunde Adeyemi",
    role: "School Principal",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-blue font-bold tracking-wider uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl font-extrabold text-foreground">What Our <span className="text-secondary-purple">Community</span> Says</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-bg p-8 rounded-3xl border border-border-color shadow-xl shadow-primary-blue/5 relative"
            >
              <Quote className="text-primary-blue/10 absolute top-8 right-8" size={48} />
              <p className="text-foreground/70 leading-relaxed mb-8 relative z-10 italic">"{t.quote}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-primary-blue/20" />
                <div>
                  <div className="font-bold text-foreground">{t.author}</div>
                  <div className="text-sm text-foreground/50 font-medium">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
