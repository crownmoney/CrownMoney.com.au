import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Completed = () => {
  return (
    <div className="pt-28 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
      
      <div className="max-w-xl w-full mx-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden"
        >
          {/* Top Gold Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gold" />
          
          {/* Animated Success Icon */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100"
          >
            <CheckCircle className="text-emerald-500" size={44} />
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Statement Shared!
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            Thank you for securely sharing your bank statement with Crown Money. Your expense data has been successfully transmitted and will be processed immediately.
          </p>

          {/* Next Steps Box */}
          <div className="bg-accent/40 rounded-2xl p-6 text-left border border-accent/60 mb-8">
            <h3 className="font-bold text-primary text-sm uppercase tracking-wider mb-3">
              What happens next?
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 bg-primary/10 rounded-full text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                <span>Our financial personal trainers will audit your expenses and identify potential savings.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 bg-primary/10 rounded-full text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                <span>We will formulate a tailored cash-flow and mortgage structure plan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 bg-primary/10 rounded-full text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                <span>A Crown Money specialist will reach out to discuss your personalised strategy projection.</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <p className="text-xs text-gray-400 mb-8">
            If you have any questions, feel free to contact our support team.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/" 
              className="w-full sm:w-auto bg-primary hover:bg-opacity-95 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 group text-sm"
            >
              Back to Home
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primary border border-gray-200 px-8 py-3.5 rounded-xl font-bold transition-all text-sm flex items-center justify-center"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>

        {/* Footer Details */}
        <div className="flex justify-center gap-6 mt-8 text-xs text-gray-400">
          <a href="tel:1300882981" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone size={12} />
            1300 882 981
          </a>
          <a href="mailto:admin@crown.money" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail size={12} />
            admin@crown.money
          </a>
        </div>
      </div>
    </div>
  );
};
