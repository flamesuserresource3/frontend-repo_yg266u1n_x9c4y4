import React, { useMemo } from 'react';
import { ShoppingCart, Trash2, Minus, Plus, IndianRupee } from 'lucide-react';

export default function OrderCart({ cart, onInc, onDec, onRemove }) {
  const { subtotal, gst, service, total } = useMemo(() => {
    const sub = cart.reduce((s, it) => s + it.price * it.qty, 0);
    const gstAmt = sub * 0.05; // 5% GST
    const serviceAmt = sub * 0.05; // 5% service charge
    const t = sub + gstAmt + serviceAmt;
    return { subtotal: sub, gst: gstAmt, service: serviceAmt, total: t };
  }, [cart]);

  return (
    <aside className="sticky top-4 mx-auto max-w-6xl px-6 pb-12">
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-800">
            <ShoppingCart size={18} /> Your Order
          </div>
          <div className="text-sm text-gray-500">{cart.length} items</div>
        </div>

        {cart.length === 0 ? (
          <p className="rounded-xl bg-gray-50 p-6 text-center text-sm text-gray-600">
            Your cart is empty. Add some delicious dishes!
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-start justify-between rounded-xl border border-gray-100 p-4">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-gray-400 transition hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">₹{item.price} x {item.qty}</div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1">
                      <button onClick={() => onDec(item.id)} className="rounded-full p-1 hover:bg-gray-100">
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-sm">{item.qty}</span>
                      <button onClick={() => onInc(item.id)} className="rounded-full p-1 hover:bg-gray-100">
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="text-right font-semibold text-gray-900">₹{(item.price * item.qty).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6 space-y-2 rounded-2xl bg-gray-50 p-4 text-sm">
              <div className="flex justify-between text-gray-700"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-gray-700"><span>GST (5%)</span><span>₹{gst.toFixed(2)}</span></div>
              <div className="flex justify-between text-gray-700"><span>Service (5%)</span><span>₹{service.toFixed(2)}</span></div>
              <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-semibold text-gray-900">
                <span>Total</span>
                <span className="inline-flex items-center gap-1"><IndianRupee size={16} /> {total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full rounded-2xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700">
              Proceed to Billing & Payment
            </button>
            <p className="text-center text-xs text-gray-500">Pay at counter or online • UPI • Cards • Cash</p>
          </div>
        )}
      </div>
    </aside>
  );
}
