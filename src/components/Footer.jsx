import React from 'react';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 bg-neutral-950 text-neutral-200">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Swad Bhavan</h3>
          <p className="mt-2 text-sm text-neutral-400">
            A family restaurant serving authentic Indian flavors with love and warmth.
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm text-neutral-400">
            <MapPin size={16} /> 21, Pink City Rd, Jaipur, Rajasthan
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Timings</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li>Mon–Fri: 11:00 AM – 11:00 PM</li>
            <li>Sat–Sun: 10:00 AM – 11:30 PM</li>
            <li>Open on public holidays</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
          <div className="mt-3 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Facebook size={18} /></a>
            <a href="mailto:hello@swadbhavan.in" aria-label="Email" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Mail size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Swad Bhavan. All rights reserved.
      </div>
    </footer>
  );
}
