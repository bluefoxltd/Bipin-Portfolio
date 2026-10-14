import React, { useState } from 'react';
import { Check, Star, MessageCircle, ExternalLink, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA, SmmPlan } from '../../data/portfolioData';

export const SMMPackagesWindow: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'NPR' | 'USD'>('NPR');
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const plans = PORTFOLIO_DATA.smmPackages;

  const handleOrder = (plan: SmmPlan) => {
    const text = encodeURIComponent(
      `Hello Bipin! I saw your Social Media Packages on your macOS portfolio and I would like to order the ${plan.name} Package (${plan.price}${plan.period}). Let's discuss starting our brand campaign!`
    );
    window.open(`https://wa.me/9779742290123?text=${text}`, '_blank');
  };

  return (
    <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 min-h-full text-slate-800 dark:text-slate-100 font-sans">
      {/* Top Banner / Heading */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-blue-200 dark:border-blue-900">
          <Sparkles size={12} />
          SUBSCRIPTION PLAN
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Social Media Packages
        </h1>
        <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400 font-normal">
          Choose the right social media package to grow your brand and engage your audience. Direct campaign setup by Bipin Chapagain & Blue Fox team.
        </p>

        {/* Contact reassurance banner */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <TrendingUp size={13} className="text-emerald-500" /> Proven Growth Strategy
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck size={13} className="text-blue-500" /> Ad Budget Included in Plans
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={13} className="text-green-500" /> Instant Order via WhatsApp (+977-9742290123)
          </span>
        </div>
      </div>

      {/* 4 Pricing Cards Grid matching SMM.png */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
        {plans.map((plan) => {
          const isBasic = plan.isPopular || plan.id === 'basic';

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl transition-all duration-200 ${
                isBasic
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/25 ring-2 ring-blue-500 transform lg:-translate-y-2'
                  : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700/80 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Best Value Badge for Basic */}
              {isBasic && (
                <div className="bg-blue-100 text-blue-700 font-bold text-[11px] py-1 text-center rounded-t-2xl flex items-center justify-center gap-1 uppercase tracking-wider">
                  <Star size={11} className="fill-blue-700" />
                  Best Value
                </div>
              )}

              {/* Card Header */}
              <div className="p-6 pb-4 border-b border-black/5 dark:border-white/10 text-center">
                <h3 className={`text-xl font-bold tracking-tight ${isBasic ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mt-1 min-h-[32px] line-clamp-2 ${isBasic ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className={`text-3xl font-extrabold tracking-tight ${isBasic ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs font-medium ${isBasic ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Feature List */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <ul className="space-y-2.5 text-xs">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${isBasic ? 'bg-blue-500 text-white' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'}`}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span className={`leading-relaxed ${isBasic ? 'text-blue-50 font-medium' : 'text-slate-600 dark:text-slate-300'}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10">
                  <button
                    onClick={() => handleOrder(plan)}
                    className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm ${
                      isBasic
                        ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-md'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <MessageCircle size={14} />
                    Select Plan
                  </button>
                  <p className={`text-[10px] text-center mt-2 ${isBasic ? 'text-blue-100' : 'text-slate-400'}`}>
                    Redirects to WhatsApp for instant kickoff
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Requirement / Enterprise Consultation Card */}
      <div className="mt-10 max-w-4xl mx-auto rounded-2xl p-6 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-indigo-900/10 dark:from-slate-800 dark:to-slate-800/60 border border-blue-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Need a Custom Brand Campaign or Web + SMM Bundle?
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            Have multiple brands, international ad spend, or require a dedicated Framer website alongside monthly creative content? We create tailored quotes tailored to your business goals.
          </p>
        </div>
        <a
          href="https://wa.me/9779742290123?text=Hi%20Bipin,%20I%20need%20a%20custom%20SMM%20and%20Web%20design%20consultation!"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all shrink-0"
        >
          <MessageCircle size={15} />
          Talk on WhatsApp (+977-9742290123)
        </a>
      </div>
    </div>
  );
};
