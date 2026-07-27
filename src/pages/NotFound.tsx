import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, AlertTriangle, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/', { replace: true });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="pt-28 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Page Not Found | Crown Money</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 text-center relative overflow-hidden"
        >
          {/* Top Gold Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gold" />

          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-100">
            <AlertTriangle className="text-gold" size={36} />
          </div>

          <h1 className="text-3xl font-display font-bold text-primary mb-2">
            Page Not Found
          </h1>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            The page you are looking for doesn't exist or has been moved. We are redirecting you back to the home page automatically.
          </p>

          <div className="bg-accent/40 rounded-2xl p-4 mb-8 border border-accent/60">
            <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">
              Auto Redirecting
            </p>
            <p className="text-2xl font-display font-bold text-primary">
              Redirecting in <span className="text-gold">{countdown}</span> {countdown === 1 ? 'second' : 'seconds'}...
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/', { replace: true })}
              className="w-full bg-primary hover:bg-opacity-95 text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <Home size={18} />
              Go to Home Page Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/contact"
              className="w-full bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 py-3 rounded-xl font-medium text-xs transition-all"
            >
              Need help? Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
