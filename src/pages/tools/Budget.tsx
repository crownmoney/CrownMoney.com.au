import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Calculator, ArrowRight, Info, TrendingUp, DollarSign, PieChart as PieChartIcon, Wallet, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface BudgetItem {
  id: string;
  name: string;
  amount: number;
  category: string;
}

export const Budget = () => {
  const [income, setIncome] = useState(8500);
  const [expenses, setExpenses] = useState<BudgetItem[]>([
    { id: '1', name: 'Mortgage/Rent', amount: 3200, category: 'Housing' },
    { id: '2', name: 'Groceries', amount: 800, category: 'Living' },
    { id: '3', name: 'Utilities', amount: 300, category: 'Housing' },
    { id: '4', name: 'Transport', amount: 400, category: 'Living' },
    { id: '5', name: 'Entertainment', amount: 500, category: 'Lifestyle' },
    { id: '6', name: 'Insurance', amount: 250, category: 'Living' },
  ]);

  const [newItem, setNewItem] = useState({ name: '', amount: 0, category: 'Living' });

  const addExpense = () => {
    if (newItem.name && newItem.amount > 0) {
      setExpenses([...expenses, { ...newItem, id: Date.now().toString() }]);
      setNewItem({ name: '', amount: 0, category: 'Living' });
    }
  };

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const results = useMemo(() => {
    const totalExpenses = expenses.reduce((a, b) => a + b.amount, 0);
    const surplus = income - totalExpenses;
    const savingsRate = (surplus / income) * 100;

    const categoryData = expenses.reduce((acc: { name: string; value: number }[], item) => {
      const existing = acc.find(i => i.name === item.category);
      if (existing) {
        existing.value += item.amount;
      } else {
        acc.push({ name: item.category, value: item.amount });
      }
      return acc;
    }, []);

    if (surplus > 0) {
      categoryData.push({ name: 'Surplus', value: surplus });
    }

    return {
      totalExpenses,
      surplus,
      savingsRate,
      categoryData
    };
  }, [income, expenses]);

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
                "name": "Budget Planner",
                "description": "Interactive monthly budget planning tool for Australian households to track income, expenses, and savings rates.",
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
                    "name": "Budget Planner",
                    "item": "https://crownmoney.com.au/tools/budget"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Budget Planner</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master your cash flow. Find the hidden money in your budget to accelerate your mortgage reduction.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Inputs Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-display font-bold text-primary flex items-center">
                    <DollarSign className="text-gold mr-2" size={24} />
                    Monthly Income
                  </h2>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                    <input 
                      aria-label="Monthly income"
                      type="number" 
                      value={income} 
                      onChange={(e) => setIncome(Number(e.target.value))}
                      className="pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-bold text-xl w-40"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-primary mb-6">Monthly Expenses</h3>
                <div className="space-y-4 mb-8">
                  {expenses.map((expense) => (
                    <div key={expense.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl group">
                      <div className="flex-1">
                        <p className="font-bold text-primary">{expense.name}</p>
                        <p className="text-xs text-gray-500 uppercase font-bold">{expense.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">${expense.amount.toLocaleString()}</p>
                      </div>
                      <button 
                        onClick={() => removeExpense(expense.id)}
                        aria-label={`Remove ${expense.name}`}
                        className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/20 p-6 rounded-3xl">
                  <h4 className="font-bold text-primary mb-4">Add New Expense</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input 
                      aria-label="Expense name"
                      type="text" 
                      placeholder="Expense Name"
                      value={newItem.name}
                      onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                      className="p-3 rounded-xl border border-gray-200 outline-none"
                    />
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                      <input 
                        aria-label="Expense amount"
                        type="number" 
                        placeholder="Amount"
                        value={newItem.amount || ''}
                        onChange={(e) => setNewItem({...newItem, amount: Number(e.target.value)})}
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 outline-none"
                      />
                    </div>
                    <select 
                      aria-label="Expense category"
                      value={newItem.category}
                      onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                      className="p-3 rounded-xl border border-gray-200 outline-none bg-white"
                    >
                      <option value="Housing">Housing</option>
                      <option value="Living">Living</option>
                      <option value="Lifestyle">Lifestyle</option>
                      <option value="Debt">Debt</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button 
                    onClick={addExpense}
                    className="mt-4 w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
                  >
                    <Plus size={20} />
                    <span>Add to Budget</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-primary rounded-[2.5rem] shadow-2xl p-8 text-white">
                <h3 className="text-2xl font-display font-bold mb-8">Cash Flow Summary</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-300">Total Income</span>
                    <span className="text-xl font-bold text-gold">${income.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-300">Total Expenses</span>
                    <span className="text-xl font-bold text-red-400">-${results.totalExpenses.toLocaleString()}</span>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-gray-300 mb-1 uppercase tracking-widest font-bold">Monthly Surplus</p>
                    <p className="text-5xl font-display font-bold text-gold">${results.surplus.toLocaleString()}</p>
                  </div>
                </div>

                <div className="bg-white/10 p-6 rounded-3xl mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-300">Savings Rate</span>
                    <span className="text-lg font-bold text-gold">{results.savingsRate.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                    <div 
                      className="bg-gold h-full transition-all duration-500" 
                      style={{ width: `${Math.min(Math.max(results.savingsRate, 0), 100)}%` }}
                    />
                  </div>
                </div>

                <Link to="/contact" className="w-full bg-gold text-primary py-4 rounded-2xl font-bold text-center block hover:bg-opacity-90 transition-all shadow-xl">
                  Optimise My Cash Flow
                </Link>
              </div>

              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-xl font-display font-bold text-primary mb-6">Spending Breakdown</h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={results.categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {results.categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2">
                  {results.categoryData.map((entry, index) => (
                    <div key={entry.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                        <span className="text-gray-600">{entry.name}</span>
                      </div>
                      <span className="font-bold text-primary">${entry.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-crown-lavender rounded-3xl p-8 border border-gray-100">
                <h4 className="font-bold text-primary mb-4 flex items-center">
                  <Info className="text-gold mr-2" size={20} />
                  Crown Money Tip
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Most Australians waste 15-20% of their income on "invisible" expenses. By using an offset account effectively and tracking your surplus, you can shave years off your mortgage without changing your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
