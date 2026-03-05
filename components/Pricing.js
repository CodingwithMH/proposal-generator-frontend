import React from "react";

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Simple Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-up" className="bg-white/5 border border-white/10 rounded-2xl p-10">
              <h3 className="text-2xl font-semibold mb-4">Free</h3>
              <p className="text-4xl font-bold mb-6">$0</p>
              <ul className="text-slate-400 space-y-3 mb-8">
                <li>5 Proposals / Day</li>
                <li>Basic AI</li>
                <li>Email Support</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition">
                Start Free
              </button>
            </div>

            <div data-aos="fade-up" className="bg-linear-to-b from-cyan-500/10 to-indigo-500/10 border border-cyan-400/40 rounded-2xl p-10 shadow-lg shadow-cyan-500/10">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Pro</h3>
              <p className="text-4xl font-bold mb-6">$19/mo</p>
              <ul className="text-slate-300 space-y-3 mb-8">
                <li>Unlimited Proposals</li>
                <li>Advanced AI</li>
                <li>Priority Support</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-linear-to-r from-cyan-500 to-indigo-500 font-semibold hover:scale-[1.02] transition">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
