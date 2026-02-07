"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    interest: "Enroll a Child",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:mousesteamng@gmail.com?subject=${encodeURIComponent(formData.interest + " - " + formData.parentName)}&body=${encodeURIComponent(
      `Parent Name: ${formData.parentName}
Email: ${formData.email}
Interest: ${formData.interest}

Message:
${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-circuit-pattern pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-blue font-bold tracking-wider uppercase text-sm mb-4">Enrollment & Contact</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">Ready to Start Your <span className="text-accent-yellow">STEAM Journey?</span></h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Whether you're a parent looking to enroll a child, a school interested in a partnership, or just curious about what we do, we'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-slate-800 rounded-2xl text-primary-blue">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email Us</div>
                  <div className="text-xl font-bold">mousesteamng@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-slate-800 rounded-2xl text-accent-teal">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Call Us</div>
                  <div className="text-xl font-bold">+2347033087604</div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="p-4 bg-slate-800 rounded-2xl text-secondary-purple">
                  <MapPin size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Visit Us</div>
                  <div className="text-xl font-bold">Farin-Gada, Jos, Plateau State</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card-bg rounded-3xl p-8 lg:p-12 text-foreground shadow-2xl border border-border-color"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 ml-1">Parent Name</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 bg-background border border-border-color rounded-2xl focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/5 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@example.com"
                    className="w-full px-5 py-4 bg-background border border-border-color rounded-2xl focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/5 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-1">Interest</label>
                <select 
                  className="w-full px-5 py-4 bg-background border border-border-color rounded-2xl focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/5 transition-all appearance-none"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                >
                  <option>Enroll a Child</option>
                  <option>School Partnership</option>
                  <option>Volunteer Opportunities</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-1">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your interests..."
                  rows={4}
                  className="w-full px-5 py-4 bg-background border border-border-color rounded-2xl focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/5 transition-all resize-none"
                />
              </div>

              <button type="submit" className="w-full flex items-center justify-center space-x-3 bg-primary-blue text-white py-5 rounded-2xl font-bold text-lg hover:opacity-90 shadow-xl shadow-primary-blue/20 transition-all active:scale-[0.98] cursor-pointer">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
