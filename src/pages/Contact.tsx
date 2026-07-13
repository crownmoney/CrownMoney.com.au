import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, MapPin, CheckCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getLeadSourceData } from '../utils/urlTracker';

const formatPhoneForOnceHub = (phone: string): string => {
  if (!phone) return '';
  // Remove all non-digit characters except '+'
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // If it's an Australian mobile number starting with 04 and has 10 digits
  if (cleaned.startsWith('04') && cleaned.length === 10) {
    return '+61' + cleaned.substring(1);
  }
  if (cleaned.startsWith('05') && cleaned.length === 10) {
    return '+61' + cleaned.substring(1);
  }
  
  // If user entered 4 or 5 directly (Australian mobile without national prefix) and has length 9
  if (cleaned.startsWith('4') && cleaned.length === 9) {
    return '+61' + cleaned;
  }
  if (cleaned.startsWith('5') && cleaned.length === 9) {
    return '+61' + cleaned;
  }

  // If starts with '61' (Australia without +) and has 11 digits (e.g. 61412345678)
  if (cleaned.startsWith('61') && cleaned.length === 11) {
    return '+' + cleaned;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formState._honeypot) {
      console.log('Spam detected');
      return;
    }

    if (!validateEmail(formState.email)) {
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
        // Build OnceHub URL with parameters
        const baseUrl = 'https://go.oncehub.com/crown-money-welcome';
        const formattedPhone = formatPhoneForOnceHub(formState.mobile);
        
        const params = new URLSearchParams({
          name: formState.firstName,
          email: formState.email,
          
          // Primary OnceHub mobile phone mappings
          your_mobile_phone: formattedPhone || formState.mobile,
          'your-mobile-phone': formattedPhone || formState.mobile,
          mobile_phone: formattedPhone || formState.mobile,
          
          // Backups / general phone mappings
          phone: formattedPhone || formState.mobile,
          mobile: formattedPhone || formState.mobile
        });
        
        // Wait a bit to show the success message before redirecting, or redirect immediately
        // Redirecting after 2 seconds to let user see success state
        setTimeout(() => {
          window.location.href = `${baseUrl}?${params.toString()}`;
        }, 2000);
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
        <title>Contact Us | Book Your Free Mortgage Strategy Call | Crown Money</title>
        <meta name="description" content="Contact Crown Money Management today. Book your free strategy call, send an enquiry, or find our contact details. We're here to help you achieve financial freedom and pay off your mortgage faster." />
        <meta name="keywords" content="contact Crown Money, book strategy call, mortgage broker contact, financial advice Australia, debt reduction consultation, mortgage reduction experts" />
        <link rel="canonical" href="https://crown.money/contact" />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Get In Touch</h1>
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
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20"
                >
                  <div className="bg-green-100 text-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-primary mb-4">Enquiry Sent Successfully!</h3>
                  <p className="text-gray-600 text-lg max-w-sm mx-auto">
                    Thank you for reaching out. Redirecting you to our booking page now...
                  </p>
                  <div className="mt-12 space-y-4">
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
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
                      className="text-primary font-bold hover:text-gold transition-colors block mx-auto"
                    >
                      Send another message
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
                      <label className="text-sm font-bold text-gray-700">Email</label>
                      <input 
                        type="email" 
                        required
                        className={`w-full px-5 py-4 rounded-xl border ${emailError ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-gray-50/50`}
                        placeholder="your@email.com"
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
