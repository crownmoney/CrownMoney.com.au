import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Calculator, ArrowRight, Info, TrendingUp, DollarSign, Home, BarChart as BarChartIcon, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts';

export const NegativeGearing = () => {
  // Property Inputs
  const [propertyPrice, setPropertyPrice] = useState(850000);
  const [loanAmount, setLoanAmount] = useState(680000);
  const [interestRate, setInterestRate] = useState(6.49);
  const [weeklyRent, setWeeklyRent] = useState(750);
  
  // Expenses
  const [propertyManagement, setPropertyManagement] = useState(7); // %
  const [rates, setRates] = useState(2500); // Annual
  const [insurance, setInsurance] = useState(1500); // Annual
  const [maintenance, setMaintenance] = useState(1200); // Annual
  const [depreciation, setDepreciation] = useState(15000); // Annual (Non-cash)
  
  // Tax
  const [annualIncome, setAnnualIncome] = useState(145000);

  const results = useMemo(() => {
    const annualRent = weeklyRent * 52;
    const annualInterest = loanAmount * (interestRate / 100);
    const managementFees = annualRent * (propertyManagement / 100);
    
    const cashExpenses = annualInterest + managementFees + rates + insurance + maintenance;
    const totalDeductions = cashExpenses + depreciation;
    
    const netCashPosition = annualRent - cashExpenses;
    const taxableProfitLoss = annualRent - totalDeductions;

    // 2024-25 Australian Resident Tax Rates (excluding Medicare Levy)
    const calculateTax = (income: number) => {
      if (income <= 18200) return 0;
      if (income <= 45000) return (income - 18200) * 0.16;
      if (income <= 135000) return 4288 + (income - 45000) * 0.30;
      if (income <= 190000) return 31288 + (income - 135000) * 0.37;
      return 51638 + (income - 190000) * 0.45;
    };

    const taxBefore = calculateTax(annualIncome);
    const taxAfter = calculateTax(Math.max(0, annualIncome + taxableProfitLoss));
    const taxSaving = taxBefore - taxAfter;

    return {
      annualRent,
      cashExpenses,
      netCashPosition,
      taxableProfitLoss,
      taxSaving,
      outOfPocket: netCashPosition + taxSaving,
      yield: (annualRent / propertyPrice) * 100
    };
  }, [propertyPrice, loanAmount, interestRate, weeklyRent, propertyManagement, rates, insurance, maintenance, depreciation, annualIncome]);

  const chartData = [
    { name: 'Rent Income', value: Math.round(results.annualRent) },
    { name: 'Cash Expenses', value: Math.round(results.cashExpenses) },
    { name: 'Tax Saving', value: Math.round(results.taxSaving > 0 ? results.taxSaving : 0) },
  ];

  return (
    <div className="pt-0 pb-20">
      <Helmet>
        <title>Negative Gearing Calculator Australia | Crown Money</title>
        <meta name="description" content="Calculate the tax benefits and cash flow of your investment property in Australia. Our negative gearing calculator includes depreciation and 2024-25 tax rates for precise financial planning." />
        <meta name="keywords" content="negative gearing calculator australia, investment property tax benefits, property investment cash flow, crown money tools" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "Negative Gearing Calculator",
                "description": "Advanced financial tool to calculate the tax benefits and cash flow impact of negative gearing on Australian investment properties.",
                "brand": {
                  "@type": "Organization",
                  "name": "Crown Money",
                  "url": "https://crown.money"
                }
              },
              {
                "@type": "WebSite",
                "name": "Crown Money",
                "url": "https://crown.money"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://crown.money"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Tools",
                    "item": "https://crown.money/tools"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Negative Gearing Calculator",
                    "item": "https://crown.money/tools/negative-gearing"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Negative Gearing Calculator</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understand the real cost of your investment property after tax benefits and non-cash deductions.
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
                  <Home className="text-gold mr-2" size={20} />
                  Property & Loan
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Property Price ($)</label>
                    <input type="number" value={propertyPrice} onChange={(e) => setPropertyPrice(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Loan Amount ($)</label>
                    <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Rate (%)</label>
                      <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Weekly Rent ($)</label>
                      <input type="number" value={weeklyRent} onChange={(e) => setWeeklyRent(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h2 className="text-xl font-display font-bold text-primary mb-6 flex items-center">
                  <Calculator className="text-gold mr-2" size={20} />
                  Expenses & Tax
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Mgt Fee (%)</label>
                      <input type="number" value={propertyManagement} onChange={(e) => setPropertyManagement(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Depreciation ($)</label>
                      <input type="number" value={depreciation} onChange={(e) => setDepreciation(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Rates ($)</label>
                      <input type="number" value={rates} onChange={(e) => setRates(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Insurance ($)</label>
                      <input type="number" value={insurance} onChange={(e) => setInsurance(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Maint. ($)</label>
                      <input type="number" value={maintenance} onChange={(e) => setMaintenance(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Annual Income ($)</label>
                    <input type="number" value={annualIncome} onChange={(e) => setAnnualIncome(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-50 p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-6">Annual Cash Flow</h3>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={100} />
                          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                          <Bar dataKey="value" fill="#2A154B" radius={[0, 8, 8, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="bg-accent/30 rounded-3xl p-8">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Cash Position</p>
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-600 text-sm">Pre-Tax Cash Flow</p>
                        <p className={`text-3xl font-display font-bold ${results.netCashPosition >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          ${Math.round(results.netCashPosition).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">After-Tax Cash Flow</p>
                        <p className={`text-3xl font-display font-bold ${results.outOfPocket >= 0 ? 'text-green-600' : 'text-gold'}`}>
                          ${Math.round(results.outOfPocket).toLocaleString()}
                        </p>
                      </div>
                      <div className="pt-6 border-t border-primary/10">
                        <p className="text-lg font-bold text-primary">
                          {results.taxableProfitLoss < 0 
                            ? `Negatively Geared by $${Math.abs(Math.round(results.taxableProfitLoss)).toLocaleString()}` 
                            : `Positively Geared by $${Math.round(results.taxableProfitLoss).toLocaleString()}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Gross Rental Yield</p>
                    <p className="text-xl font-bold text-primary">{results.yield.toFixed(2)}%</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Estimated Tax Saving</p>
                    <p className="text-xl font-bold text-primary">${Math.round(results.taxSaving).toLocaleString()}</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Total Deductions</p>
                    <p className="text-xl font-bold text-primary">${Math.round(results.cashExpenses + depreciation).toLocaleString()}</p>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-primary rounded-3xl text-white text-center">
                  <h4 className="text-2xl font-display font-bold mb-4">Maximize your investment returns.</h4>
                  <p className="text-gray-300 mb-8">Negative gearing is only one part of the puzzle. Our debt recycling strategies can help you turn non-deductible debt into tax-deductible wealth.</p>
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
                    <strong>Tax Rates:</strong> Calculations use 2024-25 Australian resident tax rates and exclude the Medicare Levy (typically 2%).
                  </p>
                  <p>
                    <strong>Depreciation:</strong> Non-cash deductions like depreciation can significantly impact your tax position. We recommend obtaining a professional depreciation schedule.
                  </p>
                  <p>
                    <strong>Financial Advice:</strong> This tool is for illustrative purposes. Property investment carries risks, and tax laws are subject to change. Always consult with a qualified accountant or financial advisor.
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
