import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Home, 
  Calculator, 
  ArrowRight, 
  Info, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  BarChart as BarChartIcon, 
  Clock, 
  ShoppingCart, 
  AlertTriangle,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  Cell,
  ComposedChart,
  Line,
  Area
} from 'recharts';

export const WishlistImpact = () => {
  // Current Loan Details
  const [principal, setPrincipal] = useState(450000);
  const [interestRate, setInterestRate] = useState(6.15);
  const [remainingTerm, setRemainingTerm] = useState(22);
  const [currentRepayment, setCurrentRepayment] = useState(0); // 0 means auto-calculate
  const [currentAge, setCurrentAge] = useState(35);

  // Wishlist Details
  const [itemName, setItemName] = useState('New Boat');
  const [purchaseCost, setPurchaseCost] = useState(45000);
  const [additionalCosts, setAdditionalCosts] = useState(2500); // Insurance, rego, etc.
  const [maintenanceCost, setMaintenanceCost] = useState(1500); // Annual maintenance

  // Tooltips state
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem('crown_wishlist_calc_data');
    if (saved && saved !== "undefined") {
      try {
        const data = JSON.parse(saved);
        setPrincipal(data.principal || 450000);
        setInterestRate(data.interestRate || 6.15);
        setRemainingTerm(data.remainingTerm || 22);
        setCurrentAge(data.currentAge || 35);
        setItemName(data.itemName || 'New Boat');
        setPurchaseCost(data.purchaseCost || 45000);
      } catch (e) {
        console.error("Failed to load saved data", e);
      }
    }
  }, []);

  // Save data
  useEffect(() => {
    const data = { principal, interestRate, remainingTerm, currentAge, itemName, purchaseCost };
    localStorage.setItem('crown_wishlist_calc_data', JSON.stringify(data));
  }, [principal, interestRate, remainingTerm, currentAge, itemName, purchaseCost]);

  const results = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const currentMonths = remainingTerm * 12;
    
    // 1. Calculate standard repayment if not provided or if it's too low
    const minRepayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, currentMonths)) / (Math.pow(1 + monthlyRate, currentMonths) - 1);
    const actualRepayment = currentRepayment > minRepayment ? currentRepayment : minRepayment;

    // 2. Current Scenario Totals
    const currentTotalInterest = (actualRepayment * currentMonths) - principal;
    const currentPayoffAge = currentAge + remainingTerm;

    // 3. Impact Scenario
    const withdrawalAmount = purchaseCost + additionalCosts;
    const newPrincipal = principal + withdrawalAmount;
    
    // Calculate new term with same repayment
    // n = -log(1 - (P * i) / M) / log(1 + i)
    let newMonths = 0;
    let neverPaidOff = false;

    if (newPrincipal * monthlyRate >= actualRepayment) {
      neverPaidOff = true;
      newMonths = 999; // Represents infinity in this context
    } else {
      newMonths = -Math.log(1 - (newPrincipal * monthlyRate) / actualRepayment) / Math.log(1 + monthlyRate);
    }

    const newTermYears = neverPaidOff ? 99 : Math.ceil(newMonths / 12);
    const newTotalInterest = neverPaidOff ? Infinity : (actualRepayment * newMonths) - newPrincipal;
    const newPayoffAge = currentAge + newTermYears;

    // 4. Comparison
    const interestImpact = neverPaidOff ? Infinity : newTotalInterest - currentTotalInterest;
    const termImpactYears = neverPaidOff ? 99 : newTermYears - remainingTerm;
    const ageImpact = termImpactYears;

    // 5. Opportunity Cost of Maintenance (if invested instead of spent)
    // Assuming 5% return over the remaining term
    const investmentRate = 0.05 / 12;
    const totalMaintenanceSpent = maintenanceCost * remainingTerm;
    const maintenanceOpportunityCost = maintenanceCost / 12 * (Math.pow(1 + investmentRate, currentMonths) - 1) / investmentRate;

    return {
      actualRepayment,
      currentTotalInterest,
      currentPayoffAge,
      newPrincipal,
      newTermYears,
      newTotalInterest,
      newPayoffAge,
      interestImpact,
      termImpactYears,
      ageImpact,
      neverPaidOff,
      totalMaintenanceSpent,
      maintenanceOpportunityCost,
      withdrawalAmount
    };
  }, [principal, interestRate, remainingTerm, currentRepayment, currentAge, purchaseCost, additionalCosts, maintenanceCost]);

  const chartData = [
    {
      name: 'Current',
      Interest: Math.round(results.currentTotalInterest),
      Principal: Math.round(principal),
    },
    {
      name: `With ${itemName}`,
      Interest: results.neverPaidOff ? Math.round(results.currentTotalInterest * 3) : Math.round(results.newTotalInterest),
      Principal: Math.round(results.newPrincipal),
    }
  ];

  const ageData = [
    { name: 'Current Payoff', age: results.currentPayoffAge, color: '#2A154B' },
    { name: 'New Payoff', age: results.newPayoffAge, color: '#D4AF37' }
  ];

  return (
    <div className="pt-0 pb-20">
      <Helmet>
        <title>Home Loan Withdrawal Impact Calculator | Mortgage Equity Cost | Crown Money</title>
        <meta name="description" content="Calculate the real cost of withdrawing home loan equity for lifestyle purchases like boats or cars. See the impact on your loan term, total interest, and payoff age. Make informed financial decisions with Crown Money." />
        <meta name="keywords" content="home loan withdrawal calculator, mortgage equity withdrawal impact, redraw impact calculator, boat finance vs mortgage, car finance vs mortgage australia, cost of lifestyle debt" />
        <link rel="canonical" href="https://crownmoney.com.au/tools/wishlist-impact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "Home Loan Withdrawal Impact Calculator",
                "description": "An interactive tool to visualise the long-term financial consequences of using home loan equity for lifestyle purchases.",
                "brand": {
                  "@type": "Organization",
                  "name": "Crown Money",
                  "url": "https://crownmoney.com.au"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://crownmoney.com.au" },
                  { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://crownmoney.com.au/tools" },
                  { "@type": "ListItem", "position": 3, "name": "Wishlist Impact Calculator", "item": "https://crownmoney.com.au/tools/wishlist-impact" }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Home Loan Withdrawal Impact Calculator</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See the true cost of "wants" vs "needs". Calculate how using your home loan to buy lifestyle items affects your financial freedom.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Inputs Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Current Loan Details */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-xl font-display font-bold text-primary mb-6 flex items-center">
                  <Home className="text-gold mr-2" size={20} />
                  Current Home Loan
                </h2>
                <div className="space-y-5">
                  <div className="relative">
                    <label className="flex items-center text-xs font-bold text-gray-500 uppercase mb-1">
                      Current Amount Owing ($)
                      <button onMouseEnter={() => setActiveTooltip('principal')} onMouseLeave={() => setActiveTooltip(null)} className="ml-1 text-gray-400">
                        <HelpCircle size={12} />
                      </button>
                    </label>
                    {activeTooltip === 'principal' && (
                      <div className="absolute z-20 bottom-full left-0 mb-2 p-2 bg-gray-800 text-white text-[10px] rounded shadow-lg w-48">
                        The current principal balance remaining on your home loan.
                      </div>
                    )}
                    <input 
                      type="number" 
                      value={principal} 
                      onChange={(e) => setPrincipal(Number(e.target.value))} 
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Interest Rate (%)</label>
                      <input 
                        type="number" 
                        step="0.01" 
                        value={interestRate} 
                        onChange={(e) => setInterestRate(Number(e.target.value))} 
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Remaining Term (Yrs)</label>
                      <input 
                        type="number" 
                        value={remainingTerm} 
                        onChange={(e) => setRemainingTerm(Number(e.target.value))} 
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Your Current Age</label>
                    <input 
                      type="number" 
                      value={currentAge} 
                      onChange={(e) => setCurrentAge(Number(e.target.value))} 
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Monthly Repayment ($)</label>
                    <input 
                      type="number" 
                      placeholder={`Min: $${Math.round(results.actualRepayment)}`}
                      value={currentRepayment || ''} 
                      onChange={(e) => setCurrentRepayment(Number(e.target.value))} 
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary placeholder:font-normal" 
                    />
                    <p className="text-[10px] text-gray-400 mt-1 italic">Leave blank to use minimum required repayment.</p>
                  </div>
                </div>
              </div>

              {/* Wishlist Details */}
              <div className="bg-accent/10 rounded-3xl p-8 border border-accent/20">
                <h2 className="text-xl font-display font-bold text-primary mb-6 flex items-center">
                  <ShoppingCart className="text-primary mr-2" size={20} />
                  The Wishlist Item
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Item Name</label>
                    <input 
                      type="text" 
                      value={itemName} 
                      onChange={(e) => setItemName(e.target.value)} 
                      placeholder="e.g. New Boat, Luxury Car"
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Purchase Price ($)</label>
                    <input 
                      type="number" 
                      value={purchaseCost} 
                      onChange={(e) => setPurchaseCost(Number(e.target.value))} 
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Initial Extras ($)</label>
                      <input 
                        type="number" 
                        value={additionalCosts} 
                        onChange={(e) => setAdditionalCosts(Number(e.target.value))} 
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Annual Upkeep ($)</label>
                      <input 
                        type="number" 
                        value={maintenanceCost} 
                        onChange={(e) => setMaintenanceCost(Number(e.target.value))} 
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Main Impact Summary */}
              <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-50 overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                      <h3 className="text-3xl font-display font-bold text-primary mb-2">The Real Cost of your {itemName}</h3>
                      <p className="text-gray-500">Comparing your current loan path vs adding lifestyle debt.</p>
                    </div>
                    <div className="bg-red-50 text-red-600 px-6 py-3 rounded-2xl flex items-center font-bold">
                      <AlertTriangle size={20} className="mr-2" />
                      Financial Impact Detected
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100">
                      <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="text-primary" size={24} />
                      </div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Extra Interest Paid</p>
                      <p className="text-3xl font-display font-bold text-primary">
                        {results.neverPaidOff ? 'Infinite' : `$${Math.round(results.interestImpact).toLocaleString()}`}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-2">Over the life of the loan</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100">
                      <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="text-primary" size={24} />
                      </div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Extra Loan Time</p>
                      <p className="text-3xl font-display font-bold text-primary">
                        {results.neverPaidOff ? 'Forever' : `${results.termImpactYears} Years`}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-2">Added to your mortgage</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100">
                      <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="text-primary" size={24} />
                      </div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">New Payoff Age</p>
                      <p className="text-3xl font-display font-bold text-gold">
                        {results.neverPaidOff ? '99+' : results.newPayoffAge}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-2">vs current age {results.currentPayoffAge}</p>
                    </div>
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-primary flex items-center">
                        <BarChartIcon className="text-gold mr-2" size={18} />
                        Total Interest Comparison
                      </h4>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData} layout="vertical" margin={{ left: 40, right: 40 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={100} />
                            <Tooltip 
                              cursor={{ fill: 'transparent' }}
                              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                            />
                            <Bar dataKey="Interest" name="Total Interest" radius={[0, 8, 8, 0]}>
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 0 ? '#2A154B' : '#D4AF37'} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-primary flex items-center">
                        <Clock className="text-gold mr-2" size={18} />
                        Payoff Age Timeline
                      </h4>
                      <div className="space-y-8 pt-4">
                        {ageData.map((item, idx) => (
                          <div key={idx} className="relative">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-bold text-gray-600">{item.name}</span>
                              <span className="text-sm font-bold text-primary">Age {item.age}</span>
                            </div>
                            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${(item.age / 100) * 100}%` }}
                                transition={{ duration: 1, delay: idx * 0.2 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: item.color }}
                              />
                            </div>
                          </div>
                        ))}
                        <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                          <span>Age {currentAge}</span>
                          <span>Age 100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plain Language Explanation */}
                <div className="bg-primary p-8 md:p-12 text-white">
                  <h4 className="text-2xl font-display font-bold mb-6">What does this actually mean?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        By withdrawing <span className="text-white font-bold">${results.withdrawalAmount.toLocaleString()}</span> from your home loan to buy a <span className="text-white font-bold">{itemName}</span>, you aren't just paying for the item. You are paying interest on that money at your home loan rate for the next <span className="text-white font-bold">{results.newTermYears} years</span>.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        This decision effectively costs you <span className="text-gold font-bold">${Math.round(results.interestImpact).toLocaleString()}</span> in extra interest. That's money that could have been your retirement savings or your children's education fund.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                      <h5 className="font-bold mb-4 flex items-center">
                        <TrendingUp className="text-gold mr-2" size={18} />
                        The "Hidden" Maintenance Cost
                      </h5>
                      <p className="text-sm text-gray-300 mb-4">
                        Your annual maintenance of <span className="text-white font-bold">${maintenanceCost.toLocaleString()}</span> adds up to <span className="text-white font-bold">${results.totalMaintenanceSpent.toLocaleString()}</span> over the remaining loan term.
                      </p>
                      <p className="text-sm text-gray-300">
                        If you invested that maintenance money at 5% instead of spending it, you could have an extra <span className="text-gold font-bold">${Math.round(results.maintenanceOpportunityCost).toLocaleString()}</span> by the time your loan is paid off.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
                    <div className="text-center md:text-left">
                      <p className="text-xl font-bold mb-2">Ready to pay off your loan faster instead?</p>
                      <p className="text-gray-400 text-sm">Our strategy sessions help you find the balance between living now and building wealth.</p>
                    </div>
                    <Link to="/contact" className="bg-gold text-primary px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl whitespace-nowrap">
                      Book Free Strategy Session
                    </Link>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown Table */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-50">
                  <h3 className="text-xl font-display font-bold text-primary">Detailed Comparison</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase">Metric</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase">Current Path</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase">With {itemName}</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase">Difference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <tr>
                        <td className="p-4 text-sm font-medium text-gray-600">Loan Principal</td>
                        <td className="p-4 text-sm font-bold text-primary">${principal.toLocaleString()}</td>
                        <td className="p-4 text-sm font-bold text-primary">${results.newPrincipal.toLocaleString()}</td>
                        <td className="p-4 text-sm font-bold text-red-600">+${results.withdrawalAmount.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-sm font-medium text-gray-600">Total Interest</td>
                        <td className="p-4 text-sm font-bold text-primary">${Math.round(results.currentTotalInterest).toLocaleString()}</td>
                        <td className="p-4 text-sm font-bold text-primary">
                          {results.neverPaidOff ? 'N/A' : `$${Math.round(results.newTotalInterest).toLocaleString()}`}
                        </td>
                        <td className="p-4 text-sm font-bold text-red-600">
                          {results.neverPaidOff ? 'N/A' : `+$${Math.round(results.interestImpact).toLocaleString()}`}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 text-sm font-medium text-gray-600">Payoff Age</td>
                        <td className="p-4 text-sm font-bold text-primary">{results.currentPayoffAge}</td>
                        <td className="p-4 text-sm font-bold text-primary">{results.neverPaidOff ? '99+' : results.newPayoffAge}</td>
                        <td className="p-4 text-sm font-bold text-red-600">+{results.termImpactYears} Years</td>
                      </tr>
                      <tr className="bg-gold/5">
                        <td className="p-4 text-sm font-bold text-primary">Total Cost of Item</td>
                        <td className="p-4 text-sm text-gray-400">-</td>
                        <td className="p-4 text-sm font-bold text-primary" colSpan={2}>
                          ${Math.round(results.withdrawalAmount + results.interestImpact).toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <Info className="text-gold mr-2" size={20} />
                  Important Disclaimers
                </h3>
                <div className="text-sm text-gray-500 space-y-4 leading-relaxed">
                  <p>
                    <strong>Calculation Basis:</strong> This calculator assumes your monthly repayment remains constant after the withdrawal. If you increase your repayments to cover the new debt, the impact on your loan term will be reduced, but your monthly cash flow will be tighter.
                  </p>
                  <p>
                    <strong>Interest Rates:</strong> Calculations assume the interest rate remains constant at {interestRate}% for the entire remaining term. In reality, variable rates will fluctuate, which can significantly change the total interest paid.
                  </p>
                  <p>
                    <strong>Amortisation:</strong> This tool uses standard monthly compounding amortisation formulas. It does not account for offset accounts, redraw fees, or specific bank calculation methods which may vary slightly.
                  </p>
                  <p>
                    <strong>Non-Essential Items:</strong> This tool is designed to highlight the cost of lifestyle assets (boats, cars, holidays) which typically depreciate in value. It does not account for the potential capital growth of the item purchased.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Want to buy the boat AND pay off the house?</h2>
          <p className="text-xl text-gray-600 mb-10">
            It's not about saying "no" to everything. It's about having a strategy that allows for lifestyle while ensuring your mortgage is disappearing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl">
              Book Strategy Session
            </Link>
            <Link to="/tools" className="bg-white text-primary border-2 border-primary/10 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
              Explore More Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
