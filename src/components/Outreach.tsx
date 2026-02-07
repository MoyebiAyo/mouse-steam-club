"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, Heart, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const schools = [
  "Ilaje High School, Igbokoda, Ondo State",
  "Igbokoda Grammar School, Ondo State",
  "Global Stand Nur/Pri School",
  "RoyalBim International College"
];

export default function Outreach() {
  return (
    <section id="outreach" className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-blue font-bold tracking-wider uppercase text-sm mb-4 flex items-center gap-2">
              <Globe size={18} />
              Community Outreach
            </h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              STEAM in <span className="text-primary-blue">Rural Nigeria</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              We are committed to bringing hands-on innovation to every corner of Nigeria. 
              Through our specialized outreach programs, we've successfully reached over 
              <strong> 500 students</strong> in rural communities, fostering a culture of 
              scientific curiosity and technological empowerment.
            </p>

            <div className="bg-card-bg p-8 rounded-3xl border border-border-color mb-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex flex-col items-center gap-2">
                  <img src="/eu-logo.png" alt="European Union Logo" className="h-10 w-auto object-contain" />
                  <span className="text-[10px] font-bold text-foreground/40 uppercase">Co-funded by EU</span>
                </div>
                <div className="h-10 w-px bg-border-color" />
                <div className="flex flex-col items-center gap-2">
                  <img src="/gym-logo.png" alt="Global Youth Mobilization Logo" className="h-10 w-auto object-contain" />
                  <span className="text-[10px] font-bold text-foreground/40 uppercase">GYM Initiative</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-blue/10 text-primary-blue rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Global Partnership</h4>
                  <p className="text-sm text-foreground/60">Empowering Youth Across Nigeria</p>
                </div>
              </div>
              <p className="text-foreground/70 text-sm italic">
                "Supported through the Global Youth Mobilization and co-funded by the European Union, empowering us to build 
                sustainable STEAM labs in underserved areas."
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="text-secondary-purple" />
                Partner Schools
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {schools.map((school, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 bg-card-bg rounded-xl border border-border-color">
                    <div className="w-2 h-2 rounded-full bg-accent-teal" />
                    <span className="text-foreground/80 text-sm font-medium">{school}</span>
                  </div>
                ))}
              </div>
              <Link 
                href="/outreach" 
                className="inline-flex items-center space-x-2 bg-primary-blue text-white px-8 py-3 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary-blue/20 cursor-pointer"
              >
                <span>View Full Outreach Report</span>
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative border border-border-color">
              <img 
                src="/outreach/main-outreach.jpg" 
                alt="Students working on STEAM projects at Ilaje High School" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-xl">
                  <Heart className="text-red-500 mb-2" fill="currentColor" />
                  <p className="font-bold text-lg text-white">Impacting 500+ Lives</p>
                  <p className="text-sm text-white">Building the next generation of Nigerian innovators.</p>
                </div>
              </div>
            </div>
            {/* Decorative EU/GYM badge */}
            <div className="absolute -top-6 -right-6 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-border-color flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs text-center p-1">
                EU Funded
              </div>
              <div className="text-[10px] font-bold text-foreground/50 uppercase tracking-tighter">GYM Initiative</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
