import React, { useState, useMemo } from 'react';
import { motion } from '../../utils/motion';
import { Helmet } from 'react-helmet-async';
import { Calculator, ArrowRight, Info, TrendingUp, DollarSign, PieChart as PieChartIcon, Wallet, Landmark, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export const NetWorth = () => {
  const [assets, setAssets] = useState<Record<string, number>>({
    home: 950000,
    investmentProperty: 0,
    super: 185000,
    shares: 45000,
    cash: 25000,
    vehicles: 40000,
    other: 10000
  });

  const [liabilities, setLiabilities] = useState<Record<string, number>>({
    mortgage: 620000,
    investmentLoan: 0,
    carLoan: 25000,
    creditCard: 4500,
    hecs: 15000,
    other: 0
  });

  const results = useMemo(() => {
    const totalAssets = (Object.values(assets) as number[]).reduce((a, b) => a + b, 0);
    const totalLiabilities = (Object.values(liabilities) as number[]).reduce((a, b) => a + b, 0);
    const netWorth = totalAssets - totalLiabilities;

    const assetData = (Object.entries(assets) as [string, number][])
      .filter(([_, value]) => value > 0)
      .map(([name, value]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1'),
        value
      }));

    return {
      totalAssets,
      totalLiabilities,
      netWorth,
      assetData
    };
  }, [assets, liabilities]);

  const COLORS = ['#2A154B', '#D4AF37', '#F27D26', '#10B981', '#3B82F6', '#6366F1', '#EC4899'];

  return (
    <div className="pt-0 pb-20">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "Net Worth Calculator",
                "description": "Comprehensive financial tool to calculate total net worth and visualise asset allocation for Australian households.",
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
                    "name": "Net Worth Calculator",
                    "item": "https://crownmoney.com.au/tools/net-worth"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Net Worth Calculator</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a 360-degree view of your financial world and track your journey to true wealth.
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
                  <Wallet className="text-gold mr-2" size={20} />
                  Assets
                </h2>
                <div className="space-y-4">
                  {Object.keys(assets).map((key) => (
                    <div key={key}>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        {key.replace(/([A-Z])/g, ' $1')} ($)
                      </label>
                      <input aria-label={`${key.replace(/([A-Z])/g, ' $1')} ($)`} 
                        type="number" 
                        value={assets[key]} 
                        onChange={(e) => setAssets({...assets, [key]: Number(e.target.value)})} 
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h2 className="text-xl font-display font-bold text-primary mb-6 flex items-center">
                  <CreditCard className="text-gold mr-2" size={20} />
                  Liabilities
                </h2>
                <div className="space-y-4">
                  {Object.keys(liabilities).map((key) => (
                    <div key={key}>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        {key.replace(/([A-Z])/g, ' $1')} ($)
                      </label>
                      <input aria-label={`${key.replace(/([A-Z])/g, ' $1')} ($)`} 
                        type="number" 
                        value={liabilities[key]} 
                        onChange={(e) => setLiabilities({...liabilities, [key]: Number(e.target.value)})} 
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-50 p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-6">Asset Allocation</h3>
                    <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={results.assetData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {results.assetData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                          <Legend verticalAlign="bottom" height={36}/>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="bg-accent/30 rounded-3xl p-8">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Your Position</p>
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-600 text-sm">Total Assets</p>
                        <p className="text-3xl font-display font-bold text-primary">${results.totalAssets.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Total Liabilities</p>
                        <p className="text-3xl font-display font-bold text-red-600">${results.totalLiabilities.toLocaleString()}</p>
                      </div>
                      <div className="pt-6 border-t border-primary/10">
                        <p className="text-sm text-gray-600 mb-1">Net Worth</p>
                        <p className="text-4xl font-display font-bold text-gold-dark">${results.netWorth.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-primary rounded-3xl text-white text-center">
                  <h4 className="text-2xl font-display font-bold mb-4">Grow your net worth, faster.</h4>
                  <p className="text-gray-300 mb-8">The secret to high net worth isn't just earning more—it's managing your debt efficiently. Crown Money clients pay off their homes in record time, freeing up cash flow for massive wealth building.</p>
                  <Link to="/contact" className="bg-gold text-primary px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl inline-block">
                    Book Your Free Strategy Session
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <Info className="text-gold mr-2" size={20} />
                  Understanding Net Worth
                </h3>
                <div className="text-sm text-gray-500 space-y-4 leading-relaxed">
                  <p>
                    <strong>What is Net Worth?</strong> It is the total value of everything you own (assets) minus everything you owe (liabilities). It is the single most important metric for tracking your financial progress.
                  </p>
                  <p>
                    <strong>Asset Valuation:</strong> Use conservative, current market values for your home and vehicles. For superannuation and investments, use your most recent statement balance.
                  </p>
                  <p>
                    <strong>Liability Tracking:</strong> Include all debts, including HECS/HELP, personal loans, and credit card balances, even if you pay them off monthly.
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
