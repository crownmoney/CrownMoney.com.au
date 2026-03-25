import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Calculator, ArrowRight, Info, TrendingUp, DollarSign, Car, BarChart as BarChartIcon, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts';

export const CarLeaseVsBuy = () => {
  // User Inputs
  const [carPrice, setCarPrice] = useState(55000);
  const [loanTerm, setLoanTerm] = useState(5);
  const [interestRate, setInterestRate] = useState(7.9);
  const [deposit, setDeposit] = useState(5000);
  
  // Lease Inputs
  const [leasePayment, setLeasePayment] = useState(950);
  const [residualValue, setResidualValue] = useState(22000);
  const [isNovated, setIsNovated] = useState(false);
  
  // Running Costs
  const [fuel, setFuel] = useState(2500); // Annual
  const [maintenance, setMaintenance] = useState(1200); // Annual
  const [insurance, setInsurance] = useState(1800); // Annual
  const [taxRate, setTaxRate] = useState(32.5); // %

  const results = useMemo(() => {
    const loanAmount = carPrice - deposit;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const monthlyLoan = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const totalLoanRepayments = monthlyLoan * numPayments;
    const totalRunningCosts = (fuel + maintenance + insurance) * loanTerm;
    const totalBuyCost = totalLoanRepayments + totalRunningCosts + deposit;

    // Lease calculation (simplified)
    // If novated, some costs are pre-tax
    const leaseTaxSaving = isNovated ? (leasePayment * 12 * (taxRate / 100)) * loanTerm : 0;
    const totalLeaseCost = (leasePayment * numPayments) + residualValue - leaseTaxSaving;

    return {
      monthlyLoan,
      totalBuyCost,
      totalLeaseCost,
      difference: totalLeaseCost - totalBuyCost,
      totalRunningCosts,
      leaseTaxSaving
    };
  }, [carPrice, loanTerm, interestRate, deposit, leasePayment, residualValue, isNovated, fuel, maintenance, insurance, taxRate]);

  const chartData = [
    { name: 'Buying (Loan)', cost: Math.round(results.totalBuyCost) },
    { name: 'Leasing', cost: Math.round(results.totalLeaseCost) },
  ];

  return (
    <div className="pt-0 pb-20">
      <Helmet>
        <title>Car Lease vs Buy Calculator Australia | Novated Lease Comparison | Crown Money</title>
        <meta name="description" content="Decide between leasing or buying your next car in Australia. Our calculator compares total ownership costs, novated lease tax benefits, and running expenses for smarter vehicle financing and mortgage reduction." />
        <meta name="keywords" content="car lease vs buy calculator, novated lease vs car loan australia, car finance comparison australia, crown money tools, vehicle financing australia, car loan calculator" />
        <link rel="canonical" href="https://crown.money/tools/car-lease-vs-buy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "Car Lease vs Buy Calculator",
                "description": "Financial tool to compare the total cost of ownership between car leasing and traditional buying in Australia.",
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
                    "name": "Car Lease vs Buy Calculator",
                    "item": "https://crown.money/tools/car-lease-vs-buy"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Car Lease vs Buy Calculator</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare the total cost of ownership for your next vehicle across different financing options.
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
                  <Car className="text-gold mr-2" size={20} />
                  Vehicle & Loan
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Car Price ($)</label>
                    <input type="number" value={carPrice} onChange={(e) => setCarPrice(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Loan Term (Yrs)</label>
                      <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Rate (%)</label>
                      <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Deposit ($)</label>
                    <input type="number" value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h2 className="text-xl font-display font-bold text-primary mb-6 flex items-center">
                  <Calculator className="text-gold mr-2" size={20} />
                  Lease Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Monthly Lease ($)</label>
                    <input type="number" value={leasePayment} onChange={(e) => setLeasePayment(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Residual Value ($)</label>
                    <input type="number" value={residualValue} onChange={(e) => setResidualValue(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                  </div>
                  <label className="flex items-center space-x-3 cursor-pointer p-3 bg-white rounded-xl border border-gray-100">
                    <input type="checkbox" checked={isNovated} onChange={(e) => setIsNovated(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="text-sm font-bold text-gray-700">Novated Lease?</span>
                  </label>
                  {isNovated && (
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Marginal Tax Rate (%)</label>
                      <input type="number" step="0.1" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-50 p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-6">Total Cost Comparison</h3>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                          <Bar dataKey="cost" name="Total Cost of Ownership" fill="#2A154B" radius={[8, 8, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="bg-accent/30 rounded-3xl p-8">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Verdict</p>
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-600 text-sm">Total Cost (Buying)</p>
                        <p className="text-3xl font-display font-bold text-primary">${Math.round(results.totalBuyCost).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Total Cost (Leasing)</p>
                        <p className="text-3xl font-display font-bold text-gold">${Math.round(results.totalLeaseCost).toLocaleString()}</p>
                      </div>
                      <div className="pt-6 border-t border-primary/10">
                        <p className="text-lg font-bold text-primary">
                          {results.totalBuyCost < results.totalLeaseCost 
                            ? `Buying is cheaper by $${Math.round(results.totalLeaseCost - results.totalBuyCost).toLocaleString()}` 
                            : `Leasing is cheaper by $${Math.round(results.totalBuyCost - results.totalLeaseCost).toLocaleString()}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Monthly Loan Payment</p>
                    <p className="text-xl font-bold text-primary">${Math.round(results.monthlyLoan).toLocaleString()}</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Total Running Costs</p>
                    <p className="text-xl font-bold text-primary">${Math.round(results.totalRunningCosts).toLocaleString()}</p>
                  </div>
                  {isNovated && (
                    <div className="p-6 bg-gold/10 rounded-2xl border border-gold/20">
                      <p className="text-xs font-bold text-gold uppercase mb-1">Est. Tax Saving</p>
                      <p className="text-xl font-bold text-primary">${Math.round(results.leaseTaxSaving).toLocaleString()}</p>
                    </div>
                  )}
                </div>

                <div className="mt-12 p-8 bg-primary rounded-3xl text-white text-center">
                  <h4 className="text-2xl font-display font-bold mb-4">Finance your car, the smart way.</h4>
                  <p className="text-gray-300 mb-8">Don't let car finance slow down your mortgage reduction. Our experts can help you structure your debt for maximum efficiency.</p>
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
                    <strong>General Information:</strong> This calculator is for illustrative purposes only and does not constitute financial or tax advice.
                  </p>
                  <p>
                    <strong>Novated Leasing:</strong> Tax savings from novated leasing are highly dependent on your specific salary, FBT (Fringe Benefits Tax) treatment, and the vehicle type (e.g., Electric Vehicles may have different FBT exemptions).
                  </p>
                  <p>
                    <strong>Residual Value:</strong> The residual value (balloon payment) at the end of a lease is a significant cost that must be paid to own the vehicle outright.
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
