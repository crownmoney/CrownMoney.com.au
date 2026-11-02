import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Home, Calculator, ArrowRight, Info, TrendingUp, DollarSign, PieChart, BarChart as BarChartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export const RentVsBuy = () => {
  // User Inputs
  const [rent, setRent] = useState(650);
  const [rentIncrease, setRentIncrease] = useState(3.0);
  const [propertyPrice, setPropertyPrice] = useState(850000);
  const [deposit, setDeposit] = useState(170000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [growthRate, setGrowthRate] = useState(4.5);
  const [years, setYears] = useState(10);
  
  // Advanced Inputs
  const [maintenance, setMaintenance] = useState(1.0); // % of property value per year
  const [rates, setRates] = useState(2500); // Annual
  const [insurance, setInsurance] = useState(1500); // Annual
  const [opportunityCostRate, setOpportunityCostRate] = useState(5.0); // % return if deposit was invested
  const [stampDuty, setStampDuty] = useState(35000); // Initial costs

  const results = useMemo(() => {
    const loanAmount = propertyPrice - deposit;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = 30 * 12;
    const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    let totalRent = 0;
    let currentRent = rent * 52;
    for (let i = 0; i < years; i++) {
      totalRent += currentRent;
      currentRent *= (1 + rentIncrease / 100);
    }

    const totalMortgage = monthlyMortgage * 12 * years;
    const propertyValue = propertyPrice * Math.pow(1 + growthRate / 100, years);
    
    // Simplified principal payoff
    const remainingLoan = loanAmount * (Math.pow(1 + monthlyRate, numPayments) - Math.pow(1 + monthlyRate, years * 12)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const equity = propertyValue - remainingLoan;

    const totalMaintenance = (propertyPrice * (maintenance / 100)) * years;
    const totalRates = rates * years;
    const totalInsurance = insurance * years;
    const buyingCosts = totalMortgage + totalMaintenance + totalRates + totalInsurance + deposit + stampDuty;

    const opportunityCost = (deposit + stampDuty) * (Math.pow(1 + opportunityCostRate / 100, years) - 1);
    const rentingCosts = totalRent + opportunityCost;

    return {
      totalRent,
      totalMortgage,
      propertyValue,
      equity,
      buyingCosts,
      rentingCosts,
      netWealthBuy: equity - remainingLoan, // Simplified
      netWealthRent: opportunityCost + deposit + stampDuty, // Simplified
      yearsSaved: 0 // Placeholder
    };
  }, [rent, rentIncrease, propertyPrice, deposit, interestRate, growthRate, years, maintenance, rates, insurance, opportunityCostRate, stampDuty]);

  const chartData = [
    { name: 'Renting', cost: Math.round(results.rentingCosts), wealth: Math.round(results.netWealthRent) },
    { name: 'Buying', cost: Math.round(results.buyingCosts), wealth: Math.round(results.equity) },
  ];

  return (
    <div className="pt-0 pb-20">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "Rent vs Buy Calculator",
                "description": "Advanced financial tool to compare the long-term wealth impact of renting versus buying property in Australia.",
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
                    "name": "Rent vs Buy Calculator",
                    "item": "https://crownmoney.com.au/tools/rent-vs-buy"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Rent vs Buy Calculator</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive comparison of renting versus buying in the Australian property market.
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
                  <Calculator className="text-gold mr-2" size={20} />
                  Core Assumptions
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Weekly Rent ($)</label>
                    <input type="number" value={rent} onChange={(e) => setRent(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Property Price ($)</label>
                    <input type="number" value={propertyPrice} onChange={(e) => setPropertyPrice(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Deposit ($)</label>
                    <input type="number" value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Stamp Duty & Initial Costs ($)</label>
                    <input type="number" value={stampDuty} onChange={(e) => setStampDuty(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Interest Rate (%)</label>
                      <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Growth Rate (%)</label>
                      <input type="number" step="0.1" value={growthRate} onChange={(e) => setGrowthRate(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h2 className="text-xl font-display font-bold text-primary mb-6 flex items-center">
                  <Info className="text-gold mr-2" size={20} />
                  Advanced Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Annual Maintenance (%)</label>
                    <input type="number" step="0.1" value={maintenance} onChange={(e) => setMaintenance(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Annual Rates ($)</label>
                    <input type="number" value={rates} onChange={(e) => setRates(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Opportunity Cost (%)</label>
                    <input type="number" step="0.1" value={opportunityCostRate} onChange={(e) => setOpportunityCostRate(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Comparison Period: {years} Years</label>
                    <input type="range" min="1" max="30" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-gold" />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-50 p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-6">Long-term Wealth Projection</h3>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                          <Bar dataKey="wealth" name="Net Wealth Position" fill="#2A154B" radius={[8, 8, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="bg-accent/30 rounded-3xl p-8">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Verdict</p>
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-600 text-sm">Estimated Equity (Buying)</p>
                        <p className="text-3xl font-display font-bold text-primary">${Math.round(results.equity).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Estimated Wealth (Renting)</p>
                        <p className="text-3xl font-display font-bold text-gold">${Math.round(results.netWealthRent).toLocaleString()}</p>
                      </div>
                      <div className="pt-6 border-t border-primary/10">
                        <p className="text-lg font-bold text-primary">
                          {results.equity > results.netWealthRent 
                            ? `Buying is ahead by $${Math.round(results.equity - results.netWealthRent).toLocaleString()}` 
                            : `Renting is ahead by $${Math.round(results.netWealthRent - results.equity).toLocaleString()}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Total Rent Paid</p>
                    <p className="text-xl font-bold text-primary">${Math.round(results.totalRent).toLocaleString()}</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Total Buying Costs</p>
                    <p className="text-xl font-bold text-primary">${Math.round(results.buyingCosts).toLocaleString()}</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Property Value</p>
                    <p className="text-xl font-bold text-gold">${Math.round(results.propertyValue).toLocaleString()}</p>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-primary rounded-3xl text-white text-center">
                  <h4 className="text-2xl font-display font-bold mb-4">Don't leave your future to chance.</h4>
                  <p className="text-gray-300 mb-8">Our experts can help you navigate the complexities of the Australian property market and build a strategy that works for you.</p>
                  <Link to="/contact" className="bg-gold text-primary px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl inline-block">
                    Book Your Free Strategy Session
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <Info className="text-gold mr-2" size={20} />
                  Important Disclaimers
                </h3>
                <div className="text-sm text-gray-500 space-y-4 leading-relaxed">
                  <p>
                    <strong>General Information:</strong> This calculator is for illustrative purposes only and does not constitute financial advice. The results are estimates based on the information you provide and various assumptions.
                  </p>
                  <p>
                    <strong>Assumptions:</strong> Calculations assume constant interest rates, growth rates, and expenses over the entire period. In reality, these factors fluctuate significantly. Maintenance is estimated at {maintenance}% of property value annually.
                  </p>
                  <p>
                    <strong>Opportunity Cost:</strong> This model accounts for the potential returns you could have earned if your deposit and buying costs were invested at {opportunityCostRate}% p.a. instead.
                  </p>
                  <p>
                    <strong>Taxation:</strong> This calculator does not account for capital gains tax, land tax, or potential tax deductions related to investment properties. Please consult with a qualified tax professional.
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
