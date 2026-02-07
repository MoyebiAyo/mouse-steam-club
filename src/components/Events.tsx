"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

import Link from "next/link";

const events = [
  {
    id: "1",
    title: "Weekend Robotics Sprint",
    date: "Feb 15, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Innovation Hub, Room 4B",
    category: "Workshop",
    color: "text-steam-tech"
  },
  {
    id: "2",
    title: "Young Scientist Expo",
    date: "Mar 1, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "City Convention Center",
    category: "Exhibition",
    color: "text-steam-science"
  },
  {
    id: "3",
    title: "Creative Arts Night",
    date: "Mar 12, 2026",
    time: "6:00 PM - 8:30 PM",
    location: "Mouse STEAM Club Studio",
    category: "Community",
    color: "text-steam-arts"
  }
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-primary-blue font-bold tracking-wider uppercase text-sm mb-4">Upcoming Events</h2>
            <h3 className="text-4xl font-extrabold text-foreground">Join Our Next <span className="text-secondary-purple">Adventure</span></h3>
          </div>
          <Link 
            href="#events" 
            className="flex items-center space-x-2 bg-card-bg text-foreground/70 px-6 py-3 rounded-xl font-bold border border-border-color hover:text-primary-blue transition-all"
          >
            <span>Full Calendar</span>
            <Calendar size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card-bg border border-border-color rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary-blue/5 transition-all relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`px-4 py-1 rounded-full bg-background border border-border-color text-xs font-bold uppercase tracking-widest ${event.color}`}>
                  {event.category}
                </span>
                <div className="text-right">
                  <div className="text-2xl font-black text-foreground">{event.date.split(',')[0].split(' ')[1]}</div>
                  <div className="text-sm font-bold text-foreground/50 uppercase">{event.date.split(',')[0].split(' ')[0]}</div>
                </div>
              </div>

              <Link href={`/events/${event.id}`}>
                <h4 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary-blue transition-colors">
                  {event.title}
                </h4>
              </Link>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-foreground/70">
                  <Clock size={18} className="text-foreground/40" />
                  <span className="text-sm font-medium">{event.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/70">
                  <MapPin size={18} className="text-foreground/40" />
                  <span className="text-sm font-medium">{event.location}</span>
                </div>
              </div>

              <Link 
                href={`/events/${event.id}`}
                className="w-full flex items-center justify-center space-x-2 bg-background border-2 border-border-color text-foreground py-3 rounded-2xl font-bold hover:bg-primary-blue hover:border-primary-blue hover:text-white transition-all"
              >
                <span>Register Now</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
