import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, History, Award, CheckCircle, Linkedin } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: "Debt Reduced", value: "$50M+" },
    { label: "Families Helped", value: "Thousands" },
    { label: "Years Experience", value: "20+" },
    { label: "Success Rate", value: "98%" },
  ];

  const team = [
    { name: "Scott Parry", role: "Founder", image: "https://picsum.photos/seed/scott/400/400" },
    { name: "Craig Parry", role: "Senior Finance Broker", image: "https://picsum.photos/seed/craig/400/400" },
    { name: "Sarah Jenkins", role: "Client Success Manager", image: "https://picsum.photos/seed/sarah/400/400" },
    { name: "Michael Chen", role: "Financial Strategist", image: "https://picsum.photos/seed/michael/400/400" },
  ];

  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Australia’s Leading Specialists In Money Management
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are on a mission to help 5,000 Australian families become mortgage-free and build lasting wealth.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white relative -mt-10 z-10 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-50">
              <p className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/office/800/600" 
              alt="Crown Money Office" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-display font-bold">2004</p>
              <p className="text-sm font-medium">Year Founded</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-gold font-bold uppercase tracking-widest text-sm">
              <History size={16} />
              <span>Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Founded on a simple belief: Banks shouldn't keep you in debt.</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2004 by Scott Parry, Crown Money was born out of a frustration with the traditional banking system. Scott saw that banks were designed to keep people in debt for as long as possible to maximise interest profits.
            </p>
            <p className="text-gray-600 leading-relaxed">
              He developed a unique financial strategy that allows homeowners to use their existing income more effectively, attacking the principal of their mortgage while still maintaining their lifestyle.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-gold mt-1" size={20} />
                <p className="text-gray-700 font-medium">Pioneered debt reduction strategies in Australia</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-gold mt-1" size={20} />
                <p className="text-gray-700 font-medium">Developed proprietary wealth tracking technology</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-gold mt-1" size={20} />
                <p className="text-gray-700 font-medium">Built a team of dedicated financial coaches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-crown-lavender">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Target className="text-primary mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-2xl text-gray-700 font-medium leading-relaxed italic">
            "To empower 5,000 Australian families to become mortgage-free, providing them with the tools, knowledge, and coaching to build generational wealth."
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Meet Our Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A dedicated team of finance professionals committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-4 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex space-x-3 text-white">
                      <Linkedin size={20} className="cursor-pointer hover:text-gold" />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
