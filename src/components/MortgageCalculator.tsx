import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, Calendar, Percent, TrendingDown } from 'lucide-react';

export const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(6.0);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  useEffect(() => {
    const principal = loanAmount;
    const calculatedInterest = interestRate / 100 / 12;
    const calculatedPayments = loanTerm * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      setMonthlyPayment(monthly);
      setTotalRepayment(monthly * calculatedPayments);
      setTotalInterest(monthly * calculatedPayments - principal);
    }
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Inputs */}
        <div className="p-8 md:p-12 bg-gray-50">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-primary p-3 rounded-2xl text-white">
              <Calculator size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary">Mortgage Calculator</h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700 flex items-center">
                  <DollarSign size={16} className="mr-2 text-gold" />
                  Loan Amount
                </label>
                <span className="text-primary font-bold">{formatCurrency(loanAmount)}</span>
              </div>
              <input 
                type="range" 
                min="50000" 
                max="2000000" 
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700 flex items-center">
                  <Percent size={16} className="mr-2 text-gold" />
                  Interest Rate
                </label>
                <span className="text-primary font-bold">{interestRate}%</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="15" 
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700 flex items-center">
                  <Calendar size={16} className="mr-2 text-gold" />
                  Loan Term
                </label>
                <span className="text-primary font-bold">{loanTerm} Years</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="30" 
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-8 md:p-12 bg-primary text-white flex flex-col justify-between">
          <div className="space-y-10">
            <div>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Estimated Monthly Payment</p>
              <p className="text-5xl md:text-6xl font-display font-bold text-gold">{formatCurrency(monthlyPayment)}</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Interest</p>
                <p className="text-xl font-bold">{formatCurrency(totalInterest)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Repayment</p>
                <p className="text-xl font-bold">{formatCurrency(totalRepayment)}</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start space-x-4">
              <TrendingDown className="text-gold shrink-0" size={24} />
              <p className="text-sm text-gray-300 leading-relaxed">
                With Crown Money's strategy, you could potentially save over <span className="text-white font-bold">$150,000</span> in interest and pay off this loan <span className="text-white font-bold">10-15 years faster</span>.
              </p>
            </div>
          </div>

          <button className="mt-12 w-full bg-gold text-white py-5 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl">
            Get My Personalised Strategy
          </button>
        </div>
      </div>
    </div>
  );
};
