"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Award, Quote } from "lucide-react";

export default function TeamLead() {
  return (
    <section id="lead" className="py-24 bg-background relative overflow-hidden transition-colors">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-purple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Creative Frame Background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-blue to-secondary-purple rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border-8 border-card-bg shadow-2xl">
                <img 
                  src="/team-lead.png" 
                  alt="Moyebi Ayodele - Team Lead" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Founder & Lead</p>
                  <p className="text-xl font-black">Moyebi Ayodele</p>
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 hidden md:block"
              >
                <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary-blue/30 flex items-center justify-center p-4">
                   <Award size={48} className="text-primary-blue/50" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card-bg rounded-full border border-border-color mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="text-sm font-bold text-foreground/60 uppercase tracking-widest">Visionary Leader</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-8 leading-tight">
              Driving Innovation with <span className="text-primary-blue">Purpose</span>
            </h2>

            <div className="relative mb-10">
              <Quote className="absolute -top-6 -left-6 text-primary-blue/10 w-20 h-20" />
              <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed italic relative z-10">
                "Our goal isn't just to teach kids how to code or build robots; it's to ignite a spark of curiosity that stays with them forever. We are building the next generation of African problem-solvers."
              </p>
            </div>

            <div className="space-y-6 text-lg text-foreground/70 mb-10">
              <p>
                Moyebi Ayodele is a passionate STEAM advocate and educator committed to bridging the digital divide in Nigeria. With years of experience in educational technology, he leads the Mouse STEAM Club with a focus on sustainable impact and rural empowerment.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:moyebiayodelesegun@gmail.com" 
                className="flex items-center space-x-2 bg-primary-blue text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-primary-blue/20 transition-all active:scale-95"
              >
                <Mail size={20} />
                <span>Get in Touch</span>
              </a>
              <div className="flex items-center space-x-3">
                <a href="https://linkedin.com/in/moyebiayodele" target="_blank" rel="noopener noreferrer" className="p-4 bg-card-bg rounded-2xl border border-border-color text-foreground/60 hover:text-primary-blue transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com/moyebiayodele" target="_blank" rel="noopener noreferrer" className="p-4 bg-card-bg rounded-2xl border border-border-color text-foreground/60 hover:text-primary-blue transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
