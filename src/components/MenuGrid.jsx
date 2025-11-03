import React, { useMemo, useState } from 'react';
import { ChefHat, Star, Search, Leaf } from 'lucide-react';

const DISHES = [
  { id: 'paneer-tikka', name: 'Paneer Tikka', price: 280, veg: true, rating: 4.6, category: 'Starters', desc: 'Smoky tandoori cottage cheese with capsicum & onions.' },
  { id: 'chicken-tikka', name: 'Chicken Tikka', price: 340, veg: false, rating: 4.7, category: 'Starters', desc: 'Tender chicken marinated in yogurt & spices.' },
  { id: 'dal-makhani', name: 'Dal Makhani', price: 260, veg: true, rating: 4.8, category: 'Mains', desc: 'Slow-cooked black lentils finished with cream.' },
  { id: 'butter-chicken', name: 'Butter Chicken', price: 360, veg: false, rating: 4.9, category: 'Mains', desc: 'Iconic creamy tomato gravy with tandoori chicken.' },
  { id: 'veg-biryani', name: 'Veg Biryani', price: 300, veg: true, rating: 4.5, category: 'Rice', desc: 'Fragrant basmati rice layered with spiced veggies.' },
  { id: 'chicken-biryani', name: 'Chicken Biryani', price: 360, veg: false, rating: 4.6, category: 'Rice', desc: 'Dum-cooked biryani with juicy chicken pieces.' },
  { id: 'naan-butter', name: 'Butter Naan', price: 60, veg: true, rating: 4.7, category: 'Breads', desc: 'Tandoor-baked naan with butter glaze.' },
  { id: 'garlic-naan', name: 'Garlic Naan', price: 80, veg: true, rating: 4.7, category: 'Breads', desc: 'Naan with garlic and coriander.' },
  { id: 'gulab-jamun', name: 'Gulab Jamun', price: 160, veg: true, rating: 4.9, category: 'Desserts', desc: 'Warm milk-solid dumplings soaked in rose syrup.' },
  { id: 'lassi-sweet', name: 'Sweet Lassi', price: 120, veg: true, rating: 4.4, category: 'Beverages', desc: 'Refreshing yogurt-based drink from Punjab.' },
];

export default function MenuGrid({ onAdd }) {
  const [query, setQuery] = useState('');
  const [filterVeg, setFilterVeg] = useState(false);
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(DISHES.map((d) => d.category)))],
    []
  );

  const filtered = useMemo(() => {
    return DISHES.filter((d) =>
      (category === 'All' || d.category === category) &&
      (!filterVeg || d.veg) &&
      d.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, filterVeg, category]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-800">
            <ChefHat size={18} /> Our Menu
          </div>
          <div className="hidden h-6 w-px bg-gray-200 sm:block" />
          <div className="text-sm text-gray-600">Taste of India, made fresh daily</div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes..."
              className="w-56 rounded-full border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm outline-none ring-0 transition focus:border-amber-400"
            />
          </div>

          <button
            onClick={() => setFilterVeg((v) => !v)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${
              filterVeg ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 bg-white text-gray-700'
            }`}
          >
            <Leaf size={16} /> Veg Only
          </button>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-amber-400"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((dish) => (
          <article key={dish.id} className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{dish.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{dish.desc}</p>
                <div className="mt-2 flex items-center gap-3 text-xs text-gray-500">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 ${dish.veg ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>{dish.veg ? 'Veg' : 'Non-Veg'}</span>
                  <span className="inline-flex items-center gap-1"><Star size={14} className="text-amber-500" /> {dish.rating}</span>
                </div>
              </div>
              <div className="ml-3 shrink-0 rounded-xl bg-gradient-to-br from-amber-100 to-rose-100 p-3 text-amber-700">
                ₹{dish.price}
              </div>
            </div>

            <button
              onClick={() => onAdd(dish)}
              className="mt-4 w-full rounded-xl bg-amber-500 px-4 py-2 text-center font-medium text-white transition hover:bg-amber-600"
            >
              Add to Order
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
