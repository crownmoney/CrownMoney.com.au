import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Calculator, ArrowRight, Info, TrendingUp, DollarSign, RefreshCw, BarChart as BarChartIcon, LineChart as LineChartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export const DebtRecycling = () => {
  // Strategy Inputs
  const [homeValue, setHomeValue] = useState(1200000);
  const [mortgageBalance, setMortgageBalance] = useState(750000);
  const [availableEquity, setAvailableEquity] = useState(250000);
  const [annualRecycleAmount, setAnnualRecycleAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(6.49);
  const [taxRate, setTaxRate] = useState(37);
  const [investmentReturn, setInvestmentReturn] = useState(7.5);
  const [years, setYears] = useState(10);

  const results = useMemo(() => {
    let currentNonDeductible = mortgageBalance;
    let currentDeductible = 0;
    let currentInvestmentValue = 0;
    const data = [];

    for (let i = 0; i <= years; i++) {
      data.push({
        year: `Year ${i}`,
        nonDeductible: Math.round(currentNonDeductible),
        deductible: Math.round(currentDeductible),
        investment: Math.round(currentInvestmentValue)
      });

      // Annual recycling
      const recycle = Math.min(currentNonDeductible, annualRecycleAmount);
      currentNonDeductible -= recycle;
      currentDeductible += recycle;
      
      // Investment growth
      currentInvestmentValue = (currentInvestmentValue + recycle) * (1 + investmentReturn / 100);
    }

    const annualInterestSaving = annualRecycleAmount * (interestRate / 100) * (taxRate / 100);
    const totalTaxSaving = (currentDeductible * (interestRate / 100) * (taxRate / 100)) * years / 2; // Rough avg

    return {
      data,
      annualInterestSaving,
      finalInvestment: currentInvestmentValue,
      finalDeductible: currentDeductible,
      finalNonDeductible: currentNonDeductible
    };
  }, [mortgageBalance, annualRecycleAmount, interestRate, taxRate, investmentReturn, years]);

  return (
    <div className="pt-0 pb-20">
      <Helmet>
        <title>Debt Recycling Calculator Australia | Tax-Deductible Debt Strategy | Crown Money</title>
        <meta name="description" content="Master debt recycling in Australia with our advanced calculator. Learn how to transform your non-deductible home loan into tax-deductible investment debt for faster wealth building and mortgage reduction." />
        <meta name="keywords" content="debt recycling calculator australia, tax deductible debt, home loan strategy, crown money tools, wealth building australia, mortgage reduction strategy, investment debt" />
        <link rel="canonical" href="https://crownmoney.com.au/tools/debt-recycling" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "Debt Recycling Calculator",
                "description": "Advanced financial strategy tool to calculate the impact of debt recycling on Australian home loans and investment portfolios.",
                "brand": {
                  "@type": "Organization",
                  "name": "Crown Money",
                  "url": "https://crownmoney.com.au"
                }
              },
              {
                "@type": "WebSite",
                "name": "Crown Money",
                "url": "https://crownmoney.com.au"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://crownmoney.com.au"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Tools",
                    "item": "https://crownmoney.com.au/tools"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Debt Recycling Calculator",
                    "item": "https://crownmoney.com.au/tools/debt-recycling"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Debt Recycling Calculator</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your non-deductible mortgage into tax-deductible wealth-building debt.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Inputs Column */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-xl font-display font-bold text-primary mb-6 flex items-center">
                  <RefreshCw className="text-gold mr-2" size={20} />
                  Strategy Setup
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Mortgage Balance ($)</label>
                    <input type="number" value={mortgageBalance} onChange={(e) => setMortgageBalance(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Annual Recycle Amount ($)</label>
                    <input type="number" value={annualRecycleAmount} onChange={(e) => setAnnualRecycleAmount(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Interest Rate (%)</label>
                      <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tax Rate (%)</label>
                      <input type="number" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h2 className="text-xl font-display font-bold text-primary mb-6 flex items-center">
                  <TrendingUp className="text-gold mr-2" size={20} />
                  Investment Outlook
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Expected Return (%)</label>
                    <input type="number" step="0.1" value={investmentReturn} onChange={(e) => setInvestmentReturn(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Strategy Duration (Years)</label>
                    <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-50 p-8 md:p-12">
                <h3 className="text-2xl font-display font-bold text-primary mb-8">Debt Transformation Projection</h3>
                <div className="h-80 w-full mb-12">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={results.data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="year" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                      <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                      <Legend />
                      <Bar dataKey="nonDeductible" name="Non-Deductible Debt" stackId="a" fill="#E5E7EB" />
                      <Bar dataKey="deductible" name="Deductible Debt" stackId="a" fill="#2A154B" />
                      <Bar dataKey="investment" name="Investment Value" fill="#D4AF37" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-accent/30 rounded-3xl p-8">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Benefit</p>
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-600 text-sm">Est. Annual Tax Saving</p>
                        <p className="text-3xl font-display font-bold text-primary">${Math.round(results.annualInterestSaving).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Final Investment Value</p>
                        <p className="text-3xl font-display font-bold text-gold">${Math.round(results.finalInvestment).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">Final Deductible Debt</p>
                      <p className="text-xl font-bold text-primary">${Math.round(results.finalDeductible).toLocaleString()}</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">Final Non-Deductible Debt</p>
                      <p className="text-xl font-bold text-primary">${Math.round(results.finalNonDeductible).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-primary rounded-3xl text-white text-center">
                  <h4 className="text-2xl font-display font-bold mb-4">Turn your home loan into a wealth machine.</h4>
                  <p className="text-gray-300 mb-8">Crown Money specialises in debt recycling strategies that help you pay off your home faster while building a multi-million dollar portfolio.</p>
                  <Link to="/contact" className="bg-gold text-primary px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl inline-block">
                    Book Your Free Strategy Session
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <Info className="text-gold mr-2" size={20} />
                  Important Strategy Notes
                </h3>
                <div className="text-sm text-gray-500 space-y-4 leading-relaxed">
                  <p>
                    <strong>What is Debt Recycling?</strong> It is the process of using equity in your home to invest, then using the investment income and tax savings to pay down your non-deductible home loan even faster.
                  </p>
                  <p>
                    <strong>Tax Deductibility:</strong> Interest is generally tax-deductible when the borrowed funds are used to acquire income-producing assets (like shares or property).
                  </p>
                  <p>
                    <strong>Risk Warning:</strong> Borrowing to invest (gearing) can magnify both gains and losses. If your investment value falls, you still owe the full loan amount. Professional advice is essential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
