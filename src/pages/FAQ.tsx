import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is Crown Money?",
    answer: "Crown Money is Australia's leading specialist in debt reduction and money management. We help homeowners pay off their mortgages years faster through strategic structure and active financial coaching."
  },
  {
    question: "How much does it cost?",
    answer: "Our initial Discovery Call is 100% free. If you choose to implement a strategy with us, there is a fee for the strategy design and ongoing management, which is typically offset by the massive interest savings we achieve for you."
  },
  {
    question: "I don't have a mortgage yet but I'm looking to buy. Can you help me?",
    answer: "Absolutely! In fact, starting with the right structure before you buy is one of the best things you can do. We can help with pre-approvals and ensure your loan is set up for rapid payoff from day one."
  },
  {
    question: "I have an offset account, so I'm already saving interest, how is this different?",
    answer: "Offset accounts are a great tool, but they are passive. Our strategy combines the right banking structure with active monthly coaching and proprietary tracking software to ensure every dollar is working as hard as possible."
  },
  {
    question: "I'm disciplined with my money and stick to a budget. Why would I need this?",
    answer: "Even the most disciplined savers often have their loans structured in a way that favors the bank. We provide the expert strategy to optimize that structure and the accountability to ensure you're maximizing your wealth creation."
  },
  {
    question: "Do you control all my money and pay my bills for me?",
    answer: "No. You maintain full control of your money. We provide the 'GPS' and the coaching, but you're always in the driver's seat."
  },
  {
    question: "Do you hold my money or is it still sitting with a bank?",
    answer: "Your money always sits with a regulated Australian lender or bank. Crown Money provides the strategy and management layer on top of your banking."
  },
  {
    question: "Why can't I achieve the same thing with my current bank?",
    answer: "Banks are designed to keep you in debt for 30 years—that's how they make their profit. Our interests are aligned with yours: getting you out of debt as fast as humanly possible."
  },
  {
    question: "I hate paperwork, how long does it take to get set up?",
    answer: "We handle the heavy lifting. Once we have your information, the setup process typically takes a few weeks, and we guide you through every step."
  },
  {
    question: "How do we access our money if there's an emergency?",
    answer: "Your funds remain accessible. Our strategies are designed to be flexible, ensuring you have liquidity for life's unexpected events."
  },
  {
    question: "What happens if I want out?",
    answer: "There are no lock-in contracts for our management services. If your circumstances change and you want to stop, you can do so at any time."
  },
  {
    question: "What's the catch. Why isn't everyone doing this?",
    answer: "There's no catch, but it does require a different way of thinking about banking. Most people just follow the standard 30-year path because that's what's advertised. We offer a specialized alternative for those who want to be mortgage-free faster."
  },
  {
    question: "What happens if the lender goes broke or closes down?",
    answer: "Your mortgage is an asset to the lender. If they were to close, your loan would simply be sold to another institution under the same terms. Your deposits are also protected by the Australian Government's Financial Claims Scheme (up to $250k per person)."
  },
  {
    question: "Why do you need so much information during your application process?",
    answer: "To build a strategy that actually works, we need a complete picture of your financial DNA. This allows us to find every possible efficiency and interest-saving opportunity."
  },
  {
    question: "What happens if I get given cash? How do I deposit it?",
    answer: "You can deposit cash via any Australia Post outlet using Bank@Post, or at a physical branch of the underlying lender if they have one."
  },
  {
    question: "I've never heard of this bank. Do we have access?",
    answer: "We work with a range of lenders, from major banks to specialized wholesale lenders. You will have full online and mobile access to your accounts just like any other bank."
  },
  {
    question: "Why haven't we heard of Crown?",
    answer: "We've spent the last 20 years focusing on delivering results for our clients rather than spending millions on mass-market TV advertising. Most of our clients come to us via word-of-mouth."
  },
  {
    question: "How do you get paid?",
    answer: "We are transparent about our fees. We receive a management fee from our clients for our strategy and coaching, and in some cases, we may receive a commission from the lender."
  },
  {
    question: "When will we be able to invest?",
    answer: "Our first priority is usually building your equity and cashflow. Once your 'financial foundation' is solid, we can help you leverage that equity to start building an investment portfolio."
  },
  {
    question: "What happens if one of us take a year off work, how will that affect our loan?",
    answer: "This is where our coaching really shines. We simply adjust your strategy to accommodate the change in income, ensuring your mortgage remains manageable during that period."
  },
  {
    question: "Why is interest rate higher?",
    answer: "Sometimes the specific loan features required for our rapid-payoff strategy come with a slightly different rate. However, the focus should be on the *total interest paid*. Our clients typically save hundreds of thousands in interest, which far outweighs a minor difference in the headline rate."
  }
];

interface FAQItemProps {
  key?: React.Key;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-gold transition-colors group"
      >
        <span className="text-lg font-bold text-primary group-hover:text-gold">{question}</span>
        <ChevronDown 
          className={cn(
            "text-gold transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )} 
          size={24} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Crown Money and our debt reduction strategies.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-50 p-8 md:p-12">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>

          <div className="mt-16 bg-crown-lavender rounded-3xl p-12 text-center">
            <MessageCircle size={48} className="text-gold mx-auto mb-6" />
            <h2 className="text-2xl font-display font-bold text-primary mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-8">
              Our team of experts is ready to help you understand how Crown Money can work for you.
            </p>
            <Link 
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all inline-block"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
