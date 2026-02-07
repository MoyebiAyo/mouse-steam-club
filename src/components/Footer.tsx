import Link from "next/link";
import { MousePointer2, Mail, MapPin, Phone, Instagram, Twitter, Facebook, Github } from "lucide-react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Mouse STEAM Club Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering the next generation of innovators through hands-on STEAM education. Where young minds meet innovation.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary-blue hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#about" className="hover:text-primary-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#programs" className="hover:text-primary-blue transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-primary-blue transition-colors">
                  Student Gallery
                </Link>
              </li>
              <li>
                <Link href="/#events" className="hover:text-primary-blue transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="hover:text-primary-blue transition-colors">
                  Learning Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-blue mt-0.5" />
                <span>Farin-Gada, Jos, Plateau State, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-blue" />
                <span>+2347033087604</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-blue" />
                <span>mousesteamng@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Get the latest STEAM tips and club news delivered to your inbox.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-primary-blue transition-colors"
              />
              <button className="w-full bg-primary-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Mouse STEAM Club. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
