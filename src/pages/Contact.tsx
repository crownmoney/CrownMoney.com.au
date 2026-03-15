import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, CheckCircle, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    email: '',
    mobile: '',
    state: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

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
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent p-4 rounded-2xl text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Office</p>
                      <p className="text-xl font-bold text-primary">Gold Coast, Australia</p>
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
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-primary font-bold hover:text-gold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-display font-bold text-primary mb-6">Online Enquiry</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>
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
                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Submit Enquiry</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
