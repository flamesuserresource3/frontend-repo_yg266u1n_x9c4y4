import React from 'react';
import Spline from '@splinetool/react-spline';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8NkcX1g3z6a-8w8S/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-4 inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm backdrop-blur">
          🍽️ Authentic Indian Family Restaurant
        </span>
        <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Swad Bhara Khana, <span className="text-amber-300">Ghar Jaisa Pyaar</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
          From tandoor to thali – enjoy timeless flavors crafted with love, fresh ingredients, and family traditions.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/90">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
            <MapPin size={16} /> Jaipur, Rajasthan
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
            <Clock size={16} /> 11:00 AM – 11:00 PM
          </div>
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 font-medium text-black transition hover:bg-amber-300"
          >
            <Phone size={16} /> Call to Reserve
          </a>
        </div>
      </div>
    </section>
  );
}
