import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, TrendingUp, Home, DollarSign, Percent, PieChart, ArrowRight, Info, CheckCircle, RefreshCw, Briefcase, Wallet, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Helmet } from 'react-helmet-async';

// --- Helper Components ---

const ToolCard = ({ icon: Icon, title, description, onClick, active }: any) => (
  <button 
    onClick={onClick}
    className={`w-full text-left p-6 rounded-3xl transition-all border ${
      active 
        ? 'bg-primary text-white border-primary shadow-xl scale-[1.02]' 
        : 'bg-white text-primary border-gray-100 hover:border-gold hover:shadow-lg'
    }`}
  >
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${active ? 'bg-white/10' : 'bg-accent'}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className={`text-sm ${active ? 'text-gray-300' : 'text-gray-500'}`}>{description}</p>
  </button>
);

const InputField = ({ label, value, onChange, type = "number", prefix, suffix }: any) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-gray-700">{label}</label>
    <div className="relative">
      {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">{prefix}</span>}
      <input 
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none font-bold ${prefix ? 'pl-10' : 'pl-4'} ${suffix ? 'pr-10' : 'pr-4'}`}
      />
      {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">{suffix}</span>}
    </div>
  </div>
);

// --- Calculators ---

const MortgageRepaymentCalc = () => {
  const [loanAmount, setLoanAmount] = useState(600000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [annualFees, setAnnualFees] = useState(395);
  const [frequency, setFrequency] = useState('monthly');

  const results = useMemo(() => {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const monthlyPrincipalInterest = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    const monthlyFee = annualFees / 12;
    const totalMonthly = monthlyPrincipalInterest + monthlyFee;

    let repayment = totalMonthly;
    if (frequency === 'fortnightly') repayment = totalMonthly / 2;
    if (frequency === 'weekly') repayment = totalMonthly / 4;

    const totalRepayment = totalMonthly * n;
    const totalInterest = (monthlyPrincipalInterest * n) - loanAmount;

    return {
      repayment,
      totalRepayment,
      totalInterest
    };
  }, [loanAmount, interestRate, loanTerm, annualFees, frequency]);

  const chartData = [
    { name: 'Principal', value: loanAmount },
    { name: 'Interest', value: results.totalInterest },
    { name: 'Fees', value: annualFees * loanTerm },
  ];

  const COLORS = ['#2A154B', '#F27D26', '#D4AF37'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <InputField label="Loan Amount" value={loanAmount} onChange={setLoanAmount} prefix="$" />
        <InputField label="Interest Rate" value={interestRate} onChange={setInterestRate} suffix="%" />
        <InputField label="Loan Term" value={loanTerm} onChange={setLoanTerm} suffix="Years" />
        <InputField label="Annual Fees" value={annualFees} onChange={setAnnualFees} prefix="$" />
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Repayment Frequency</label>
          <div className="grid grid-cols-3 gap-2">
            {['monthly', 'fortnightly', 'weekly'].map((f) => (
              <button
                key={f}
                onClick={() => setFrequency(f)}
                className={`py-2 rounded-xl font-bold text-sm capitalize transition-all ${frequency === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-[2rem] space-y-8">
        <div className="text-center">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Estimated {frequency} Repayment</p>
          <p className="text-5xl font-display font-bold text-primary">${Math.round(results.repayment).toLocaleString()}</p>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RePieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
              <Legend />
            </RePieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <p className="text-xs text-gray-400 font-bold uppercase mb-1">Total Interest</p>
            <p className="text-lg font-bold text-primary">${Math.round(results.totalInterest).toLocaleString()}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <p className="text-xs text-gray-400 font-bold uppercase mb-1">Total Repayment</p>
            <p className="text-lg font-bold text-primary">${Math.round(results.totalRepayment).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExtraRepaymentCalc = () => {
  const [loanAmount, setLoanAmount] = useState(600000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [extraAmount, setExtraAmount] = useState(500);
  const [frequency, setFrequency] = useState('monthly');

  const results = useMemo(() => {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const standardMonthly = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    let extraPerMonth = extraAmount;
    if (frequency === 'fortnightly') extraPerMonth = extraAmount * 2;
    if (frequency === 'weekly') extraPerMonth = extraAmount * 4;

    // Calculate time saved
    let balance = loanAmount;
    let months = 0;
    let totalInterestWithExtra = 0;
    
    while (balance > 0 && months < 600) {
      const interest = balance * r;
      const principal = (standardMonthly + extraPerMonth) - interest;
      totalInterestWithExtra += interest;
      balance -= principal;
      months++;
    }

    const standardTotalInterest = (standardMonthly * n) - loanAmount;
    const interestSaved = standardTotalInterest - totalInterestWithExtra;
    const yearsSaved = loanTerm - (months / 12);

    return {
      interestSaved,
      yearsSaved,
      monthsWithExtra: months
    };
  }, [loanAmount, interestRate, loanTerm, extraAmount, frequency]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <InputField label="Loan Amount" value={loanAmount} onChange={setLoanAmount} prefix="$" />
        <InputField label="Interest Rate" value={interestRate} onChange={setInterestRate} suffix="%" />
        <InputField label="Extra Repayment" value={extraAmount} onChange={setExtraAmount} prefix="$" />
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Extra Repayment Frequency</label>
          <div className="grid grid-cols-3 gap-2">
            {['monthly', 'fortnightly', 'weekly'].map((f) => (
              <button
                key={f}
                onClick={() => setFrequency(f)}
                className={`py-2 rounded-xl font-bold text-sm capitalize transition-all ${frequency === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-accent/20 p-8 rounded-[2rem] space-y-8 flex flex-col justify-center">
        <div className="text-center">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Potential Interest Saved</p>
          <p className="text-5xl font-display font-bold text-primary">${Math.round(results.interestSaved).toLocaleString()}</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
          <TrendingUp className="text-gold mx-auto mb-4" size={48} />
          <p className="text-lg font-bold text-primary mb-2">You could be mortgage-free</p>
          <p className="text-4xl font-display font-bold text-gold">{results.yearsSaved.toFixed(1)} Years Sooner</p>
        </div>

        <p className="text-sm text-center text-gray-600 italic">
          *Calculated based on consistent extra repayments from day one of the loan.
        </p>
      </div>
    </div>
  );
};

const RentalYieldCalc = () => {
  const [propertyValue, setPropertyValue] = useState(800000);
  const [weeklyRent, setWeeklyRent] = useState(750);
  const [expenses, setExpenses] = useState(5000);

  const results = useMemo(() => {
    const annualRent = weeklyRent * 52;
    const grossYield = (annualRent / propertyValue) * 100;
    const netYield = ((annualRent - expenses) / propertyValue) * 100;

    return {
      grossYield,
      netYield,
      annualRent
    };
  }, [propertyValue, weeklyRent, expenses]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <InputField label="Property Purchase Price" value={propertyValue} onChange={setPropertyValue} prefix="$" />
        <InputField label="Weekly Rent" value={weeklyRent} onChange={setWeeklyRent} prefix="$" />
        <InputField label="Annual Expenses (Rates, Strata, etc.)" value={expenses} onChange={setExpenses} prefix="$" />
      </div>

      <div className="bg-gray-50 p-8 rounded-[2rem] space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Gross Rental Yield</p>
            <p className="text-5xl font-display font-bold text-primary">{results.grossYield.toFixed(2)}%</p>
          </div>
          <div className="bg-primary text-white p-8 rounded-3xl shadow-xl text-center">
            <p className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-2">Net Rental Yield</p>
            <p className="text-5xl font-display font-bold text-accent">{results.netYield.toFixed(2)}%</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Total Annual Rent</span>
            <span className="text-xl font-bold text-primary">${results.annualRent.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const StampDutyCalc = () => {
  const [propertyValue, setPropertyValue] = useState(800000);
  const [state, setState] = useState('QLD');
  const [isFirstHome, setIsFirstHome] = useState(false);

  // Simplified stamp duty logic (actual rates vary significantly by state and first home buyer status)
  const results = useMemo(() => {
    let rate = 0.04; // Default 4%
    if (state === 'VIC') rate = 0.055;
    if (state === 'NSW') rate = 0.045;
    if (state === 'QLD') rate = 0.035;
    
    let duty = propertyValue * rate;
    if (isFirstHome && propertyValue < 600000) duty = 0;
    else if (isFirstHome && propertyValue < 800000) duty = duty * 0.5;

    return { duty };
  }, [propertyValue, state, isFirstHome]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <InputField label="Property Purchase Price" value={propertyValue} onChange={setPropertyValue} prefix="$" />
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">State</label>
          <select 
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full py-3 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none font-bold bg-white"
          >
            {['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'].map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <label className="flex items-center space-x-3 cursor-pointer p-4 bg-gray-50 rounded-xl">
          <input 
            type="checkbox" 
            checked={isFirstHome}
            onChange={(e) => setIsFirstHome(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm font-bold text-gray-700">I am a First Home Buyer</span>
        </label>
      </div>

      <div className="bg-primary text-white p-8 rounded-[2rem] space-y-8 flex flex-col justify-center text-center">
        <p className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-2">Estimated Stamp Duty</p>
        <p className="text-6xl font-display font-bold text-accent">${Math.round(results.duty).toLocaleString()}</p>
        <div className="bg-white/10 p-6 rounded-2xl">
          <p className="text-sm text-gray-300">
            *This is an estimate only. Stamp duty rates are subject to change and vary based on specific property type and buyer circumstances.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Page ---

export const Tools = () => {
  const [activeTab, setActiveTab] = useState('mortgage');

  const toolsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Crown Money",
        "url": "https://crown.money",
        "logo": "https://crown.money/logo.png"
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
            "name": "Financial Tools & Calculators",
            "item": "https://crown.money/tools"
          }
        ]
      }
    ]
  };

  const tools = [
    { id: 'mortgage', title: 'Mortgage Repayment', icon: Calculator, description: 'Calculate your repayments' },
    { id: 'extra', title: 'Extra Repayment', icon: TrendingUp, description: 'See how much time you save' },
    { id: 'yield', title: 'Rental Yield', icon: Home, description: 'For property investors' },
    { id: 'stamp', title: 'Stamp Duty', icon: DollarSign, description: 'Estimate purchase costs' },
  ];

  const advancedTools = [
    { title: "Rent vs Buy", path: "/tools/rent-vs-buy", icon: Home, description: "Compare the long-term cost of renting vs buying." },
    { title: "Car Lease vs Buy", path: "/tools/car-lease-vs-buy", icon: Briefcase, description: "Compare car loan vs lease costs." },
    { title: "Negative Gearing", path: "/tools/negative-gearing", icon: TrendingUp, description: "Calculate tax benefits of investment property." },
    { title: "Net Worth", path: "/tools/net-worth", icon: Wallet, description: "Track your total financial position." },
    { title: "Debt Recycling", path: "/tools/debt-recycling", icon: RefreshCw, description: "Turn home debt into tax-deductible debt." },
    { title: "Budget Planner", path: "/tools/budget", icon: Calculator, description: "Master your cash flow and find savings." },
    { title: "Home Loan Withdrawal Impact", path: "/tools/wishlist-impact", icon: ShoppingCart, description: "See the true cost of lifestyle purchases on your mortgage." },
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Financial Calculators & Mortgage Tools Australia | Crown Money</title>
        <meta name="description" content="Explore our suite of financial tools and calculators designed for Australians. From mortgage reduction to debt recycling, budget planning, and wishlist impact, Crown Money helps you take control of your wealth." />
        <meta name="keywords" content="mortgage calculator australia, rent vs buy calculator, negative gearing calculator, debt recycling calculator, net worth calculator, mortgage reduction tools" />
        <link rel="canonical" href="https://crown.money/tools" />
        <script type="application/ld+json">
          {JSON.stringify(toolsSchema)}
        </script>
      </Helmet>
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Financial Tools & Calculators</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empower your financial decisions with our suite of Australian-specific calculators.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {tools.map((tool) => (
              <ToolCard 
                key={tool.id}
                {...tool}
                active={activeTab === tool.id}
                onClick={() => setActiveTab(tool.id)}
              />
            ))}
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-50 p-8 md:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-12">
                  <h2 className="text-3xl font-display font-bold text-primary mb-4">
                    {tools.find(t => t.id === activeTab)?.title} Calculator
                  </h2>
                  <p className="text-gray-600">
                    {tools.find(t => t.id === activeTab)?.description}. Adjust the sliders and inputs to see your results.
                  </p>
                </div>

                {activeTab === 'mortgage' && <MortgageRepaymentCalc />}
                {activeTab === 'extra' && <ExtraRepaymentCalc />}
                {activeTab === 'yield' && <RentalYieldCalc />}
                {activeTab === 'stamp' && <StampDutyCalc />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Advanced Tools */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Advanced Financial Tools</h2>
            <p className="text-gray-600">Deep-dive into specific financial strategies with our advanced calculators.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedTools.map((tool, idx) => (
              <Link 
                key={idx} 
                to={tool.path}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold transition-all group"
              >
                <div className="w-14 h-14 bg-accent/30 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <tool.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{tool.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{tool.description}</p>
                <div className="flex items-center text-gold font-bold text-sm group-hover:translate-x-2 transition-transform">
                  <span>Open Tool</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-primary mb-6">Need a more detailed analysis?</h2>
          <p className="text-lg text-gray-700 mb-10">
            Our calculators are a great start, but a personalized strategy call can find even more savings.
          </p>
          <Link 
            to="/contact"
            className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl inline-block"
          >
            Book Free Strategy Session
          </Link>
        </div>
      </section>
    </div>
  );
};
