import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
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

export const WithdrawalImpact = () => {
  // Current Loan Details
  const [principal, setPrincipal] = useState(450000);
  const [interestRate, setInterestRate] = useState(6.15);
  const [remainingTerm, setRemainingTerm] = useState(22);
  const [currentRepayment, setCurrentRepayment] = useState(0); // 0 means auto-calculate
  const [currentAge, setCurrentAge] = useState(35);

  // Withdrawal Details
  const [withdrawalReason, setWithdrawalReason] = useState('Lifestyle Purchase');
  const [withdrawalAmount, setWithdrawalAmount] = useState(45000);
  const [additionalCosts, setAdditionalCosts] = useState(0); 
  const [ongoingCost, setOngoingCost] = useState(0); 

  // Tooltips state
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem('crown_withdrawal_calc_data');
    if (saved && saved !== "undefined") {
      try {
        const data = JSON.parse(saved);
        setPrincipal(data.principal || 450000);
        setInterestRate(data.interestRate || 6.15);
        setRemainingTerm(data.remainingTerm || 22);
        setCurrentAge(data.currentAge || 35);
        setWithdrawalReason(data.withdrawalReason || 'Lifestyle Purchase');
        setWithdrawalAmount(data.withdrawalAmount || 45000);
      } catch (e) {
        console.error("Failed to load saved data", e);
      }
    }
  }, []);

  // Save data
  useEffect(() => {
    const data = { principal, interestRate, remainingTerm, currentAge, withdrawalReason, withdrawalAmount };
    localStorage.setItem('crown_withdrawal_calc_data', JSON.stringify(data));
  }, [principal, interestRate, remainingTerm, currentAge, withdrawalReason, withdrawalAmount]);

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
    const totalWithdrawal = withdrawalAmount + additionalCosts;
    const newPrincipal = principal + totalWithdrawal;
    
    // Calculate new term with same repayment
    let newMonths = 0;
    let neverPaidOff = false;

    if (newPrincipal * monthlyRate >= actualRepayment) {
      neverPaidOff = true;
      newMonths = 999; 
    } else {
      newMonths = -Math.log(1 - (newPrincipal * monthlyRate) / actualRepayment) / Math.log(1 + monthlyRate);
    }

    const newTermYears = neverPaidOff ? 99 : Math.ceil(newMonths / 12);
    const newTotalInterest = neverPaidOff ? Infinity : (actualRepayment * newMonths) - newPrincipal;
    const newPayoffAge = currentAge + newTermYears;

    // 4. Comparison
    const interestImpact = neverPaidOff ? Infinity : newTotalInterest - currentTotalInterest;
    const termImpactYears = neverPaidOff ? 99 : newTermYears - remainingTerm;

    // 5. Opportunity Cost of Ongoing Costs (if invested instead of spent)
    const investmentRate = 0.05 / 12;
    const totalOngoingSpent = ongoingCost * remainingTerm;
    const ongoingOpportunityCost = ongoingCost > 0 ? (ongoingCost / 12 * (Math.pow(1 + investmentRate, currentMonths) - 1) / investmentRate) : 0;

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
      neverPaidOff,
      totalOngoingSpent,
      ongoingOpportunityCost,
      totalWithdrawal
    };
  }, [principal, interestRate, remainingTerm, currentRepayment, currentAge, withdrawalAmount, additionalCosts, ongoingCost]);

  const chartData = [
    {
      name: 'Current',
      Interest: Math.round(results.currentTotalInterest),
      Principal: Math.round(principal),
    },
    {
      name: 'After Withdrawal',
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
              Understand the long-term consequences of withdrawing funds from your mortgage. See how a small withdrawal today can cost you thousands in interest and years of extra work.
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
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Current Balance Owing ($)</label>
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
                  </div>
                </div>
              </div>

              {/* Withdrawal Details */}
              <div className="bg-accent/10 rounded-3xl p-8 border border-accent/20">
                <h2 className="text-xl font-display font-bold text-primary mb-6 flex items-center">
                  <DollarSign className="text-primary mr-2" size={20} />
                  Withdrawal Details
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Reason for Withdrawal</label>
                    <input 
                      type="text" 
                      value={withdrawalReason} 
                      onChange={(e) => setWithdrawalReason(e.target.value)} 
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Withdrawal Amount ($)</label>
                    <input 
                      type="number" 
                      value={withdrawalAmount} 
                      onChange={(e) => setWithdrawalAmount(Number(e.target.value))} 
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Ongoing Annual Cost ($)</label>
                    <input 
                      type="number" 
                      value={ongoingCost} 
                      onChange={(e) => setOngoingCost(Number(e.target.value))} 
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-primary" 
                    />
                    <p className="text-[10px] text-gray-400 mt-1 italic">e.g. Maintenance, insurance, or running costs.</p>
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
                      <h3 className="text-3xl font-display font-bold text-primary mb-2">The Real Cost of your Withdrawal</h3>
                      <p className="text-gray-500">Comparing your current path vs the impact of withdrawing funds.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Extra Interest Paid</p>
                      <p className="text-3xl font-display font-bold text-primary">
                        {results.neverPaidOff ? 'Infinite' : `$${Math.round(results.interestImpact).toLocaleString()}`}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Extra Loan Time</p>
                      <p className="text-3xl font-display font-bold text-primary">
                        {results.neverPaidOff ? 'Forever' : `${results.termImpactYears} Years`}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">New Payoff Age</p>
                      <p className="text-3xl font-display font-bold text-gold">
                        {results.neverPaidOff ? '99+' : results.newPayoffAge}
                      </p>
                    </div>
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-primary flex items-center">
                        <BarChartIcon className="text-gold mr-2" size={18} />
                        Interest Comparison
                      </h4>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData} layout="vertical" margin={{ left: 40, right: 40 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={100} />
                            <Tooltip cursor={{ fill: 'transparent' }} />
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
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plain Language Explanation */}
                <div className="bg-primary p-8 md:p-12 text-white">
                  <h4 className="text-2xl font-display font-bold mb-6">The True Cost of Convenience</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        Withdrawing <span className="text-white font-bold">${results.totalWithdrawal.toLocaleString()}</span> today might seem small, but it adds <span className="text-gold font-bold">${Math.round(results.interestImpact).toLocaleString()}</span> in interest over the life of your loan.
                      </p>
                    </div>
                    {ongoingCost > 0 && (
                      <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                        <h5 className="font-bold mb-4 flex items-center">
                          <TrendingUp className="text-gold mr-2" size={18} />
                          Ongoing Opportunity Cost
                        </h5>
                        <p className="text-sm text-gray-300">
                          If you invested your annual ongoing cost of <span className="text-white font-bold">${ongoingCost.toLocaleString()}</span> at 5% instead, you could have <span className="text-gold font-bold">${Math.round(results.ongoingOpportunityCost).toLocaleString()}</span> extra by the time your loan is paid off.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Need a smarter mortgage strategy?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Don't let redraw and offset withdrawals derail your financial future. Let's build a plan that works for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl">
              Book Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
