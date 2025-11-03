import React, { useCallback, useMemo, useState } from 'react';
import Hero3D from './components/Hero3D';
import MenuGrid from './components/MenuGrid';
import OrderCart from './components/OrderCart';
import Footer from './components/Footer';
import { CookingPot } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAdd = useCallback((dish) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === dish.id);
      if (exists) {
        return prev.map((i) => (i.id === dish.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...dish, qty: 1 }];
    });
  }, []);

  const handleInc = useCallback((id) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  }, []);

  const handleDec = useCallback((id) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i)));
  }, []);

  const handleRemove = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const itemsCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-rose-50 text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-20 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-white"><CookingPot size={18} /></span>
            Swad Bhavan
          </div>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#menu" className="hover:text-amber-600">Menu</a>
            <a href="#order" className="hover:text-amber-600">Order</a>
            <a href="#contact" className="hover:text-amber-600">Contact</a>
          </nav>
          <div className="text-sm text-gray-600">Items in cart: <span className="font-semibold">{itemsCount}</span></div>
        </div>
      </header>

      <Hero3D />

      <div id="menu" className="scroll-mt-24">
        <MenuGrid onAdd={handleAdd} />
      </div>

      <div id="order" className="scroll-mt-24">
        <OrderCart cart={cart} onInc={handleInc} onDec={handleDec} onRemove={handleRemove} />
      </div>

      <div id="contact" className="scroll-mt-24">
        <Footer />
      </div>
    </div>
  );
}
