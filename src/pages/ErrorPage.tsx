import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, RotateCcw, Phone, Mail, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="pt-28 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Statement Sharing Failed | Crown Money</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="max-w-xl w-full mx-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden"
        >
          {/* Top Red/Orange Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-rose-500" />
          
          {/* Animated Error Icon */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="bg-rose-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 border border-rose-100"
          >
            <AlertCircle className="text-rose-500" size={44} />
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Sharing Failed
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            We encountered an unexpected issue while trying to securely receive your bank statement. Don't worry, your data remains safe and protected.
          </p>

          {/* Troubleshooting Tips */}
          <div className="bg-rose-50/50 rounded-2xl p-6 text-left border border-rose-100/50 mb-8">
            <h3 className="font-bold text-rose-800 text-sm uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <HelpCircle size={16} />
              How can I fix this?
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full shrink-0 mt-2"></span>
                <span><strong>Check Connection:</strong> Make sure your internet connection is stable and try again.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full shrink-0 mt-2"></span>
                <span><strong>Session Timeout:</strong> Your secure banking session may have timed out. Please restart the sharing process.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full shrink-0 mt-2"></span>
                <span><strong>Browser Settings:</strong> Ensure cookies or ad-blockers are not blocking the verification window.</span>
              </li>
            </ul>
          </div>

          {/* Help Center CTA */}
          <p className="text-xs text-gray-400 mb-8">
            Need manual assistance? Please give us a call or email us, and our team will guide you through other safe ways to share your statement.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto bg-primary hover:bg-opacity-95 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 group text-sm"
            >
              <RotateCcw size={16} className="group-hover:-rotate-45 transition-transform" />
              Try Again
            </button>
            <Link 
              to="/" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primary border border-gray-200 px-8 py-3.5 rounded-xl font-bold transition-all text-sm flex items-center justify-center"
            >
              Back to Home
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
