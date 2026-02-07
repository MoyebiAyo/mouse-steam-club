"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Users, Heart, ShieldCheck, PlayCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

const schoolsData = [
  {
    name: "Ilaje High School",
    location: "Igbokoda, Ondo State",
    impact: "200+ Students",
    description: "Our flagship rural outreach program where we established a mobile robotics lab and conducted intensive training for senior secondary students.",
    highlights: ["Robotics Fundamentals", "Solar Power Education", "Team Competitions"],
    image: "/outreach/ilaje.jpg",
    video: "https://drive.google.com/file/d/1Zgz-kZxaEU0cSd69F0n0z783YdA24aM1/preview"
  },
  {
    name: "Igbokoda Grammar School",
    location: "Igbokoda, Ondo State",
    impact: "150+ Students",
    description: "Focusing on sustainable engineering, we worked with students to build water filtration prototypes and simple mechanical systems.",
    highlights: ["Engineering Design", "Clean Water Projects", "Structural Basics"],
    image: "/outreach/igbokoda.jpg",
    video: "https://drive.google.com/file/d/1hh-YDnK0_Zab1qvBb-RZgbOMgKMuIxgb/preview"
  },
  {
    name: "Global Stand Nur/Pri School",
    location: "Rural Outreach",
    impact: "100+ Pupils",
    description: "Early childhood STEAM introduction through sensory play, basic logic puzzles, and simple science demonstrations.",
    highlights: ["Sensory Science", "Logic Games", "Creative Building"],
    image: "/outreach/global-stand.jpg",
    video: "https://drive.google.com/file/d/10j6peLXSVknauL7yiKQuUTWKITsXn3pB/preview"
  },
  {
    name: "RoyalBim International College",
    location: "Collaborative Hub",
    impact: "80+ Students",
    description: "Advanced workshops in digital design and creative technology, pushing the boundaries of art and science.",
    highlights: ["Digital Art", "3D Design Concepts", "Creative Coding"],
    image: "/outreach/royalbim.jpg",
    video: "https://drive.google.com/file/d/1jjOc1fP4e2K5T67u3ztF-EofmKZzCwXn/preview"
  }
];

export default function OutreachPage() {
  return (
    <div className="bg-background min-h-screen pb-24 transition-colors">
      {/* Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-circuit-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">Back to Home</span>
          </Link>
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <img src="/eu-logo.png" alt="EU Logo" className="h-12 w-auto" />
            <img src="/gym-logo.png" alt="GYM Logo" className="h-12 w-auto" />
          </div>
          <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-6">
            Our Outreach <span className="text-primary-blue">Impact</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Documenting our journey across Nigeria, bringing STEAM education to rural communities 
            with the support of the European Union and Global Youth Mobilization.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="space-y-24">
          {schoolsData.map((school, index) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Media Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border-color bg-card-bg">
                   <iframe
                      src={school.video}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-border-color">
                    <img src={school.image} alt={school.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-primary-blue rounded-2xl p-6 text-white flex flex-col justify-center">
                    <Users size={32} className="mb-2" />
                    <div className="text-2xl font-black">{school.impact}</div>
                    <div className="text-sm opacity-80 font-bold uppercase tracking-wider">Students Impacted</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center space-x-2 text-primary-blue font-bold mb-4">
                  <MapPin size={20} />
                  <span>{school.location}</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
                  {school.name}
                </h2>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  {school.description}
                </p>
                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-foreground flex items-center gap-2">
                    <ShieldCheck className="text-accent-teal" />
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {school.highlights.map((h, i) => (
                      <span key={i} className="px-4 py-2 bg-card-bg border border-border-color rounded-xl text-sm font-bold text-foreground/80">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-card-bg rounded-2xl border border-border-color border-l-4 border-l-primary-blue">
                   <p className="text-sm font-bold text-foreground/50 uppercase mb-2">Program Result</p>
                   <p className="text-foreground font-medium italic">"Successfully introduced sustainable learning modules that remain active within the school community today."</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <section className="mt-32 max-w-4xl mx-auto text-center px-4">
        <div className="p-12 rounded-[3rem] bg-card-bg border border-border-color shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-full blur-3xl" />
           <Heart className="mx-auto text-red-500 mb-6" size={48} fill="currentColor" />
           <h2 className="text-3xl font-black text-foreground mb-4">Help Us Reach More Schools</h2>
           <p className="text-foreground/70 mb-8">We are looking for partners to help us expand our rural STEAM initiatives across all 36 states of Nigeria.</p>
           <Link href="/#contact" className="inline-block bg-primary-blue text-white px-10 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary-blue/20">
             Partner with Us
           </Link>
        </div>
      </section>
    </div>
  );
}
