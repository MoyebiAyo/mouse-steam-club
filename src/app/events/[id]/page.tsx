"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const eventsData = [
  {
    id: "1",
    title: "Weekend Robotics Sprint",
    date: "Feb 15, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Innovation Hub, Room 4B",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=1200",
    description: "An intensive one-day workshop where students work in teams to build and program a battle-bot. No prior experience required!",
    highlights: [
      "Introduction to motor controls and sensor logic",
      "Hands-on assembly of custom robot chassis",
      "Team-based strategy and competition",
      "Prizes for most innovative design"
    ],
    price: "$45 per student"
  },
  {
    id: "2",
    title: "Young Scientist Expo",
    date: "Mar 1, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "City Convention Center",
    category: "Exhibition",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
    description: "Our annual showcase where Mouse STEAM Club students present their research and experiments to the public and professional judges.",
    highlights: [
      "Over 100 student projects on display",
      "Interactive demonstration booths",
      "Guest speakers from NASA and Google",
      "Community awards ceremony"
    ],
    price: "Free Entry"
  },
  {
    id: "3",
    title: "Creative Arts Night",
    date: "Mar 12, 2026",
    time: "6:00 PM - 8:30 PM",
    location: "Mouse STEAM Club Studio, Jos",
    category: "Community",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200",
    description: "A night dedicated to the 'A' in STEAM. Join us for a celebration of digital art, 3D printing, and creative technology exhibits.",
    highlights: [
      "Digital art showcase by local students",
      "Live 3D printing demonstrations",
      "Interactive light and sound installations",
      "Networking with local tech-artists"
    ],
    price: "Free Admission"
  },
];

export default function EventPage() {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === id) || eventsData[0];

  return (
    <div className="bg-background min-h-screen pb-24 transition-colors">
      {/* Header Image */}
      <div className="relative h-[40vh] lg:h-[60vh] overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 lg:pb-20">
            <Link href="/#events" className="inline-flex items-center space-x-2 text-foreground/80 hover:text-primary-blue transition-colors mb-6 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold">Back to Events</span>
            </Link>
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <span className="px-4 py-1.5 rounded-full bg-primary-blue text-white font-bold text-sm uppercase tracking-wider">
                {event.category}
              </span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-black text-foreground leading-tight">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-card-bg rounded-3xl p-8 lg:p-12 shadow-xl border border-border-color">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">About the Event</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  {event.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start space-x-3 p-4 bg-background rounded-2xl border border-border-color">
                      <CheckCircle className="text-accent-teal mt-1 shrink-0" size={20} />
                      <span className="text-foreground/80 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Location</h2>
                <div className="aspect-[21/9] w-full bg-background rounded-3xl overflow-hidden border border-border-color flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-primary-blue mx-auto mb-2" size={32} />
                    <p className="font-bold text-foreground">{event.location}</p>
                    <button className="mt-4 text-primary-blue font-bold text-sm hover:underline cursor-pointer">Open in Google Maps</button>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Event Details</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl text-primary-blue">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-bold uppercase tracking-widest">Date</div>
                    <div className="font-bold">{event.date}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl text-accent-teal">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-bold uppercase tracking-widest">Time</div>
                    <div className="font-bold">{event.time}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl text-secondary-purple">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-bold uppercase tracking-widest">Capacity</div>
                    <div className="font-bold">25 Students Max</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-white/60">Ticket Price</span>
                  <span className="text-3xl font-black text-accent-yellow">{event.price}</span>
                </div>
                <button className="w-full bg-primary-blue text-white py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98] shadow-xl shadow-blue-900/50 cursor-pointer">
                  Register for Event
                </button>
              </div>
            </div>

            <div className="bg-accent-yellow rounded-3xl p-8 shadow-xl">
              <h4 className="font-black text-slate-900 text-xl mb-4">Have Questions?</h4>
              <p className="text-slate-800 font-medium mb-6">Reach out to our event coordinators at events@mousesteam.club</p>
              <Link href="/#contact" className="inline-flex items-center space-x-2 font-bold text-slate-900 hover:translate-x-1 transition-transform">
                <span>Contact Us</span>
                <ArrowLeft className="rotate-180" size={20} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
