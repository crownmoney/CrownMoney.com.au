import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, MapPin, CheckCircle, MessageSquare, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({
    firstName: '',
    email: '',
    mobile: '',
    state: '',
    mortgageStatus: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/24598887/up2kqpo/', {
        method: 'POST',
        body: JSON.stringify(formState),
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

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="pt-10">
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
                    <div className="bg-accent p-4 rounded-2xl text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Call Us</p>
                      <a href="tel:1300882981" className="text-xl font-bold text-primary hover:text-gold transition-colors">1300 882 981</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent p-4 rounded-2xl text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Email Us</p>
                      <a href="mailto:admin@crown.money" className="text-xl font-bold text-primary hover:text-gold transition-colors">admin@crown.money</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-crown-lavender p-8 rounded-3xl">
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
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-50 relative">
              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">Enquiry Submitted!</h3>
                  <p className="text-gray-600">Thank you for reaching out. One of our experts will be in touch shortly.</p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                      setFormState({
                        firstName: '',
                        email: '',
                        mobile: '',
                        state: '',
                        mortgageStatus: '',
                        message: ''
                      });
                    }}
                    className="mt-8 text-primary font-bold hover:text-gold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <span>Step {step} of {totalSteps}</span>
                      <span>{Math.round(progress)}% Complete</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-gold"
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <h3 className="text-2xl font-display font-bold text-primary mb-6">Personal Details</h3>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">First Name</label>
                            <input 
                              type="text" 
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
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
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                              placeholder="your@email.com"
                              value={formState.email}
                              onChange={(e) => setFormState({...formState, email: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Mobile</label>
                            <input 
                              type="tel" 
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                              placeholder="0400 000 000"
                              value={formState.mobile}
                              onChange={(e) => setFormState({...formState, mobile: e.target.value})}
                            />
                          </div>
                          <button 
                            type="button"
                            onClick={nextStep}
                            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl flex items-center justify-center space-x-2"
                          >
                            <span>Next Step</span>
                            <ArrowRight size={18} />
                          </button>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <h3 className="text-2xl font-display font-bold text-primary mb-6">Financial Status</h3>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">State</label>
                            <select 
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none bg-white"
                              value={formState.state}
                              onChange={(e) => setFormState({...formState, state: e.target.value})}
                            >
                              <option value="">Select State</option>
                              <option value="QLD">Queensland</option>
                              <option value="NSW">New South Wales</option>
                              <option value="VIC">Victoria</option>
                              <option value="WA">Western Australia</option>
                              <option value="SA">South Australia</option>
                              <option value="TAS">Tasmania</option>
                              <option value="ACT">ACT</option>
                              <option value="NT">Northern Territory</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Current Mortgage Status</label>
                            <select 
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none bg-white"
                              value={formState.mortgageStatus}
                              onChange={(e) => setFormState({...formState, mortgageStatus: e.target.value})}
                            >
                              <option value="">Select Status</option>
                              <option value="existing">I have an existing mortgage</option>
                              <option value="looking">I'm looking to buy soon</option>
                              <option value="refinance">I want to refinance</option>
                              <option value="investor">I'm an investor</option>
                            </select>
                          </div>
                          <div className="flex space-x-4">
                            <button 
                              type="button"
                              onClick={prevStep}
                              className="flex-1 bg-gray-100 text-primary py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all"
                            >
                              Back
                            </button>
                            <button 
                              type="button"
                              onClick={nextStep}
                              className="flex-2 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl flex items-center justify-center space-x-2 px-8"
                            >
                              <span>Next Step</span>
                              <ArrowRight size={18} />
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <h3 className="text-2xl font-display font-bold text-primary mb-6">Final Message</h3>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Message (Optional)</label>
                            <textarea 
                              rows={4}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none resize-none"
                              placeholder="How can we help?"
                              value={formState.message}
                              onChange={(e) => setFormState({...formState, message: e.target.value})}
                            ></textarea>
                          </div>
                          <div className="flex space-x-4">
                            <button 
                              type="button"
                              onClick={prevStep}
                              className="flex-1 bg-gray-100 text-primary py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all"
                            >
                              Back
                            </button>
                            <button 
                              type="submit"
                              className="flex-2 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl flex items-center justify-center space-x-2 px-8"
                            >
                              <span>Submit Enquiry</span>
                              <Send size={18} />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
