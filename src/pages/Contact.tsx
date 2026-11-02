import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, MapPin, CheckCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getLeadSourceData } from '../utils/urlTracker';

const formatPhoneForOnceHub = (phone: string): string => {
  if (!phone) return '';
  // Remove all spaces, hyphens, parenthesis and non-digits
  let cleaned = phone.replace(/[^\d+]/g, '');
  
  // Strip '+61' if present
  if (cleaned.startsWith('+61')) {
    cleaned = cleaned.substring(3);
  } else if (cleaned.startsWith('61') && cleaned.length > 9) {
    // Strip '61' if it looks like a country code (length > 9 to avoid local numbers starting with 61)
    cleaned = cleaned.substring(2);
  }
  
  // Strip leading '0' (e.g. from 0412345678 -> 412345678)
  if (cleaned.startsWith('0')) {
    cleaned = cleaned.substring(1);
  }
  
  return cleaned;
};

export const Contact = () => {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({
    firstName: '',
    email: '',
    mobile: '',
    postcode: '',
    message: '',
    howDidYouHear: '',
    referralSource: '',
    otherSource: '',
    existingClientDetails: '',
    _honeypot: '' // Honeypot field
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  React.useEffect(() => {
    if (isSubmitted) {
      // Build OnceHub URL with parameters
      const formattedPhone = formatPhoneForOnceHub(formState.mobile);
      
      const params = new URLSearchParams({
        name: formState.firstName,
        email: formState.email,
        
        // Primary OnceHub mobile phone mappings
        your_mobile_phone: formattedPhone,
        'your-mobile-phone': formattedPhone,
        mobile_phone: formattedPhone,
        
        // Backups / general phone mappings
        phone: formattedPhone,
        mobile: formattedPhone
      });
      
      // Update browser URL query string without reloading so OnceHub can read the parameters
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState(null, '', newUrl);

      // Load OnceHub embed script dynamically
      const scriptId = 'oncehub-embed-script';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      
      if (script) {
        script.remove();
      }
      
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.oncehub.com/cal/embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formState._honeypot) {
      console.log('Spam detected');
      return;
    }

    if (!formState.email || !formState.email.trim()) {
      setEmailError('Email address is mandatory');
      return;
    }

    if (!validateEmail(formState.email.trim())) {
      setEmailError('Please enter a valid email address');
      return;
    }

    try {
      const sourceData = getLeadSourceData();
      const response = await fetch('https://hooks.zapier.com/hooks/catch/24598887/up2kqpo/', {
        method: 'POST',
        body: JSON.stringify({
          ...formState,
          ...sourceData
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Crown Money",
    "description": "Get in touch with Crown Money Management for a free mortgage strategy session.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Crown Money",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "1300 882 981",
        "contactType": "customer service",
        "areaServed": "AU",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <div className="pt-10">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Book a Free Mortgage Strategy Call</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your journey to mortgage freedom? Our team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-10">
                  Whether you have a question about our strategy or you're ready to book your discovery call, we'd love to hear from you.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent p-4 rounded-2xl text-primary shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Call Us</p>
                      <a href="tel:1300882981" className="text-xl font-bold text-primary hover:text-gold transition-colors">1300 882 981</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent p-4 rounded-2xl text-primary shadow-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Email Us</p>
                      <a href="mailto:admin@crown.money" className="text-xl font-bold text-primary hover:text-gold transition-colors">admin@crown.money</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-crown-lavender p-8 rounded-3xl border border-primary/5">
                <h3 className="text-xl font-bold text-primary mb-4">Why book a call?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-gold" size={18} />
                    <span className="text-gray-700">100% free discovery session</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-gold" size={18} />
                    <span className="text-gray-700">Personalised interest saving projection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-gold" size={18} />
                    <span className="text-gray-700">No obligation, just expert advice</span>
                  </li>
                </ul>
              </div>

              {/* Removed direct OnceHub link as per request to go through form first */}
            </div>

            {/* Form */}
            <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden transition-all duration-300 ${isSubmitted ? 'p-4 md:p-6 lg:p-8' : 'p-8 md:p-12'}`}>
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">Enquiry Sent Successfully!</h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto">
                      Please select a convenient date and time below to schedule your free mortgage strategy call directly on our booking calendar.
                    </p>
                  </div>

                  {/* Inline OnceHub booking calendar widget */}
                  <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-inner mt-4">
                    <div 
                      data-oh-booking-calendar-id="BKC-P96YYPDY6X" 
                      style={{ minWidth: '320px', height: '700px' }}
                      className="w-full"
                    />
                  </div>

                  <div className="text-center pt-2">
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        // Clear the query params from browser URL on resetting
                        window.history.replaceState(null, '', window.location.pathname);
                        setFormState({
                          firstName: '',
                          email: '',
                          mobile: '',
                          postcode: '',
                          message: '',
                          howDidYouHear: '',
                          referralSource: '',
                          otherSource: '',
                          existingClientDetails: '',
                          _honeypot: ''
                        });
                      }}
                      className="text-primary/70 hover:text-gold text-sm font-bold transition-colors inline-flex items-center space-x-1"
                    >
                      <span>← Send another enquiry</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-8">
                  <h3 className="text-2xl font-display font-bold text-primary">Send an Enquiry</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field */}
                    <div className="hidden">
                      <input 
                        type="text" 
                        name="_honeypot" 
                        value={formState._honeypot} 
                        onChange={(e) => setFormState({...formState, _honeypot: e.target.value})} 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">First Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-gray-50/50"
                        placeholder="Your name"
                        value={formState.firstName}
                        onChange={(e) => setFormState({...formState, firstName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        required
                        aria-required="true"
                        className={`w-full px-5 py-4 rounded-xl border ${emailError ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-gray-50/50`}
                        placeholder="your@email.com (required)"
                        value={formState.email}
                        onChange={(e) => {
                          setFormState({...formState, email: e.target.value});
                          if (emailError) setEmailError('');
                        }}
                      />
                      {emailError && <p className="text-red-500 text-xs font-bold mt-1">{emailError}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Mobile</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-gray-50/50"
                        placeholder="0400 000 000"
                        value={formState.mobile}
                        onChange={(e) => setFormState({...formState, mobile: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Postcode</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-gray-50/50"
                        placeholder="e.g. 2000"
                        value={formState.postcode}
                        onChange={(e) => setFormState({...formState, postcode: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 relative">
                      <label className="text-sm font-bold text-gray-700">How did you hear about us?</label>
                      <div className="relative">
                        <select 
                          required
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-gray-50/50 appearance-none cursor-pointer"
                          value={formState.howDidYouHear}
                          onChange={(e) => setFormState({...formState, howDidYouHear: e.target.value})}
                        >
                          <option value="" disabled>Select an option</option>
                          <option value="Google">Google</option>
                          <option value="Facebook">Facebook</option>
                          <option value="YouTube">YouTube</option>
                          <option value="ChatGPT">ChatGPT</option>
                          <option value="Claude">Claude</option>
                          <option value="Referral">Referral</option>
                          <option value="Existing Client">Existing Client</option>
                          <option value="Word of Mouth">Word of Mouth</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <ArrowRight className="rotate-90" size={18} />
                        </div>
                      </div>
                    </div>

                    {formState.howDidYouHear === 'Referral' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-bold text-gray-700">Who referred you?</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-gray-50/50"
                          placeholder="Name of person who referred you"
                          value={formState.referralSource}
                          onChange={(e) => setFormState({...formState, referralSource: e.target.value})}
                        />
                      </motion.div>
                    )}

                    {formState.howDidYouHear === 'Other' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-bold text-gray-700">Please specify</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-gray-50/50"
                          placeholder="How did you hear about us?"
                          value={formState.otherSource}
                          onChange={(e) => setFormState({...formState, otherSource: e.target.value})}
                        />
                      </motion.div>
                    )}

                    {formState.howDidYouHear === 'Existing Client' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-bold text-gray-700">Existing Client Details</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-gray-50/50"
                          placeholder="Existing client's name and/or email"
                          value={formState.existingClientDetails}
                          onChange={(e) => setFormState({...formState, existingClientDetails: e.target.value})}
                        />
                      </motion.div>
                    )}

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Message (Optional)</label>
                      <textarea 
                        rows={4}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none bg-gray-50/50"
                        placeholder="How can we help?"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-gold text-primary py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl flex items-center justify-center space-x-2 active:scale-95"
                    >
                      <span>Submit Enquiry</span>
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
