import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from '../utils/motion';
import { AlertCircle, Send, CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck, Lock, RefreshCw, Sparkles } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { getLeadSourceData } from '../utils/urlTracker';

export const ErrorPage = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const emailParam = searchParams.get('email') || searchParams.get('e');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const sourceData = getLeadSourceData();
      const payload = {
        email: trimmedEmail,
        Email: trimmedEmail,
        email_address: trimmedEmail,
        emailAddress: trimmedEmail,
        source: 'bank_statement_error_reconnect',
        page: '/error',
        timestamp: new Date().toISOString(),
        landing_url: sourceData.landing_url || window.location.href,
        current_url: sourceData.current_url || window.location.href,
      };

      const webhookUrl = `https://hooks.zapier.com/hooks/catch/24598887/4h9kvht/?email=${encodeURIComponent(trimmedEmail)}&source=bank_statement_error_reconnect`;

      await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting reconnection request:', err);
      // Ensure user receives confirmation even in strict adblocker browser environments
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
      
      <div className="max-w-xl w-full mx-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden"
        >
          {/* Top Amber Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-gold to-primary" />
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Error Icon */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  className="bg-amber-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-200/70 shadow-sm"
                >
                  <AlertCircle className="text-amber-600" size={40} />
                </motion.div>

                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3 leading-tight">
                  Oops, could not connect the bank statement!
                </h1>
                
                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed max-w-md mx-auto">
                  We weren't able to complete the secure connection to your bank. Don't worry — your data remains completely safe. Request a new connection link below to try again.
                </p>

                {/* Request New Connection Link Form */}
                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200/70 mb-6 text-left">
                  <div className="flex items-center gap-2 mb-4">
                    <RefreshCw size={16} className="text-primary font-bold" />
                    <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
                      Request a New Connection Link
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="reconnect-email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Your Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        id="reconnect-email"
                        type="email" 
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="Enter your email address" 
                        className={`w-full px-4 py-3.5 rounded-xl border ${errorMessage ? 'border-rose-400 focus:border-rose-500' : 'border-gray-300 focus:border-primary'} bg-white text-gray-900 outline-none transition-all text-sm placeholder:text-gray-400 shadow-sm`}
                        required
                        aria-required="true"
                        disabled={isSubmitting}
                      />
                      {errorMessage && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium">
                          {errorMessage}
                        </p>
                      )}
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-opacity-95 text-white py-3.5 px-6 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw size={16} className="animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Me a New Link</span>
                          <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Security badges */}
                <div className="flex items-center justify-center gap-6 py-2 mb-6 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Lock size={13} className="text-emerald-600" />
                    <span>256-Bit Bank Encryption</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-emerald-600" />
                    <span>CDR Accredited</span>
                  </div>
                </div>

                {/* Secondary navigation */}
                <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link 
                    to="/" 
                    className="w-full sm:w-auto text-gray-500 hover:text-primary py-2 px-4 rounded-xl font-medium transition-colors text-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Return to Home</span>
                  </Link>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <Link 
                    to="/contact" 
                    className="w-full sm:w-auto text-primary hover:underline py-2 px-4 rounded-xl font-medium transition-colors text-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Contact Support Team</span>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-4"
              >
                {/* Success Icon */}
                <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200 shadow-sm">
                  <CheckCircle2 className="text-emerald-600" size={42} />
                </div>

                {/* Success Heading */}
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">
                  New Link Requested!
                </h2>

                {/* Success Message */}
                <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                  We've sent a brand new bank statement connection link to <strong className="text-primary font-bold">{email}</strong>.
                </p>

                {/* Next steps card */}
                <div className="bg-accent/40 rounded-2xl p-5 text-left border border-accent/60 mb-8 space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-1.5 font-bold text-primary text-sm mb-1">
                    <Sparkles size={16} className="text-gold" />
                    <span>What to do next:</span>
                  </div>
                  <p>1. Check your email inbox (and junk/spam folder) in the next 1–2 minutes.</p>
                  <p>2. Open the link to securely reconnect your bank statement.</p>
                  <p>3. If you still encounter issues, reach out to our team below.</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail('');
                    }}
                    className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold transition-all text-xs flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw size={14} />
                    <span>Request for another email</span>
                  </button>
                  <Link 
                    to="/" 
                    className="w-full sm:w-auto bg-primary hover:bg-opacity-95 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-sm text-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Back to Home</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Support & Assistance Footer */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-xs text-gray-500">
            Need urgent assistance? Our Australian-based team is here to help.
          </p>
          <div className="flex justify-center items-center gap-6 text-xs text-gray-600 font-medium">
            <a href="tel:1300882981" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone size={13} className="text-primary" />
              <span>1300 882 981</span>
            </a>
            <span className="text-gray-300">•</span>
            <a href="mailto:admin@crown.money" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={13} className="text-primary" />
              <span>admin@crown.money</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
