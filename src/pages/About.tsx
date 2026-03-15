import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, History, Award, CheckCircle, Linkedin } from 'lucide-react';

import { Newsletter } from '../components/Newsletter';

export const About = () => {
  const stats = [
    { label: "Debt Reduced", value: "$50M+" },
    { label: "Families Helped", value: "Thousands" },
    { label: "Years Experience", value: "20+" },
    { label: "Success Rate", value: "98%" },
  ];

  const teamGroups = [
    {
      title: "Leadership",
      members: [
        { name: "Scott Parry", role: "Founder & CEO", image: "https://storage.googleapis.com/crown_money/Website/About/People/Scott_Parry_BW.jpg" },
        { name: "Craig Parry", role: "Partner & Senior Finance Broker", image: "https://storage.googleapis.com/crown_money/Website/About/People/craig%20parry.png" },
        { name: "Chelsea Burton", role: "General Manager", image: "https://storage.googleapis.com/crown_money/Website/About/People/chelsea%20burton.jpg" },
        { name: "Jessie Edge", role: "Operations", image: "https://storage.googleapis.com/crown_money/Website/About/People/jessie%20edge.png" },
      ]
    },
    {
      title: "Financial Strategists",
      members: [
        { name: "Michael Koole", role: "Senior Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/MICHAEL%20KOOLE.jpeg" },
        { name: "Reuben Dabrow", role: "Senior Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/reuben%20dabrow.png" },
        { name: "Joel Bate", role: "Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/JOEL%20BATE.jpeg" },
        { name: "Hayley Wilson", role: "Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/HAYLEY%20WILSON.png" },
        { name: "Emma Kelly", role: "Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/EMMA%20Kelly.jpg" },
        { name: "Theo Collett", role: "Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/THEO%20COLLETT.jpg" },
        { name: "Jenn Durling", role: "Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/JENN%20DURLING.jpeg" },
        { name: "Tammie Bennett", role: "Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/Tammie%20Bennett.png" },
        { name: "Ashlee Slarks", role: "Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/ASHLEE%20SLARKS.jpg" },
        { name: "Ellie Pipkin", role: "Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/Ellie%20Pipkin.jpg" },
        { name: "Katherine Daczo", role: "Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/KATHERINE%20DACZO.png" },
        { name: "Kat Daroczy", role: "Appointment Setter", image: "https://storage.googleapis.com/crown_money/Website/About/People/KATHERINE%20DACZO.png" },
        { name: "Chad Martin", role: "Appointment Setter", image: "https://storage.googleapis.com/crown_money/Website/About/People/CHAD%20MARTIN.jpg" },
      ]
    },
    {
      title: "Finance Brokers",
      members: [
        { name: "Richard Recordon", role: "Senior Finance Broker", image: "https://storage.googleapis.com/crown_money/Website/About/People/richard%20recordon.jpg" },
        { name: "Mathew Wright", role: "Senior Finance Broker", image: "https://storage.googleapis.com/crown_money/Website/About/People/Mat_BW.jpg" },
        { name: "Richard Pollock", role: "Senior Finance Broker", image: "https://storage.googleapis.com/crown_money/Website/About/People/Richard-Pollock-Headshot-2.0.jpg" },
      ]
    },
    {
      title: "Post Settlement Team",
      members: [
        { name: "Adam Santangelo", role: "Client Success Team Leader", image: "https://storage.googleapis.com/crown_money/Website/About/People/Adam_Santangelo_BW.png" },
        { name: "Craig Butler", role: "Financial Coach", image: "https://storage.googleapis.com/crown_money/Website/About/People/Craig.png" },
        { name: "Eden Robinson", role: "Financial Coach", image: "https://storage.googleapis.com/crown_money/Website/About/People/Eden.jpg" },
        { name: "Leigh Parmenter", role: "Financial Coach", image: "https://storage.googleapis.com/crown_money/Website/About/People/Leigh%20Parmenter.jpg" },
        { name: "Bec Derksen", role: "Client Experience Manager", image: "https://storage.googleapis.com/crown_money/Website/About/People/bec%20derksen.png" },
        { name: "Nikki Van De Scheur", role: "Client Care Coordinator", image: "https://storage.googleapis.com/crown_money/Website/About/People/nikki%20van%20de%20scheur.jpg" },
        { name: "Silette Kroon", role: "Client Care Officer", image: "https://storage.googleapis.com/crown_money/Website/About/People/Silette%20Kroon.png" },
        { name: "Bianca Del Rosario", role: "Client Care Officer", image: "https://storage.googleapis.com/crown_money/Website/About/People/Bianca%20Del%20Rosario.jpg" },
        { name: "Grace Rosario", role: "Client Care Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/Grace.jpg" },
        { name: "Maria Gabinete", role: "Client Success Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/Maria.jpg" },
        { name: "Joyce Generale", role: "Client Success Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/JOYCE%20GENERALE.jpg" },
      ]
    },
    {
      title: "Pre Settlement Team",
      members: [
        { name: "Megan Dibenedetto", role: "Credit Assessor", image: "https://storage.googleapis.com/crown_money/Website/About/People/Megan%20Dibenedetto.jpeg" },
        { name: "Jimmy Walker", role: "Sales Support Coordinator", image: "https://storage.googleapis.com/crown_money/Website/About/People/Jimmy.png" },
        { name: "Gale Yabut", role: "Sales Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/GALE%20YABUT.jpg" },
        { name: "Kristine Enriquez", role: "Sales Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/KRISTINE%20Enriquez.jpeg" },
        { name: "Beth Caper", role: "Sales Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/Beth%20Caper.png" },
        { name: "Lyndel Amora", role: "Sales Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/Lyndel%20Amora.png" },
        { name: "Klouie Gasper", role: "Sales Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/Klouie%20Gasper.jpeg" },
        { name: "Allona Mayol", role: "Settlements Officer", image: "https://storage.googleapis.com/crown_money/Website/About/People/Allona%20Mayol.jpeg" },
      ]
    },
    {
      title: "Technology Team",
      members: [
        { name: "Che Mas", role: "Technology Specialist", image: "https://storage.googleapis.com/crown_money/Website/About/People/Che.jpg" },
        { name: "Vincent Tabayag", role: "Digital Content & Graphic Design", image: "https://storage.googleapis.com/crown_money/Website/About/People/VINCENT%20TABAYAG.png" },
        { name: "Emmanuel Estolas", role: "HubSpot Specialist", image: "https://storage.googleapis.com/crown_money/Website/About/People/Emmanuel%20Estolas.jpg" },
        { name: "Nikino Pamintuan", role: "Video Editor", image: "https://storage.googleapis.com/crown_money/Website/About/People/Nikino%20Pamintuan.jpg" },
      ]
    },
    {
      title: "Craig Parry Team",
      members: [
        { name: "Nicola Parry", role: "Office Manager", image: "https://storage.googleapis.com/crown_money/Website/About/People/Nicola%20Parry.png" },
        { name: "Jas Durdin", role: "Client Success Specialist", image: "https://storage.googleapis.com/crown_money/Website/About/People/Jas%20Durdin.png" },
        { name: "Brodie Statham", role: "Credit Manager", image: "https://storage.googleapis.com/crown_money/Website/About/People/Brodie.png" },
        { name: "Josie Carreon", role: "Credit & Settlement Support Officer", image: "https://storage.googleapis.com/crown_money/Website/About/People/Josie.jpg" },
        { name: "Roxanne Timbol", role: "Client Services Officer", image: "https://storage.googleapis.com/crown_money/Website/About/People/ROXANNE.jpeg" },
        { name: "Eloisa Llaneta", role: "Credit & Settlement Support Officer", image: "https://storage.googleapis.com/crown_money/Website/About/People/Eloisa%20Llaneta.png" },
      ]
    }
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

      {/* Awards Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <img 
            src="https://storage.googleapis.com/crown_money/Website/About/Other/The-Better-Business-Awards.png" 
            alt="Better Business Awards" 
            className="w-full h-auto rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white relative z-10 max-w-5xl mx-auto px-4">
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
              src="https://storage.googleapis.com/crown_money/Website/About/People/Scott_Parry_BW.jpg" 
              alt="Scott Parry - Founder" 
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

          <div className="space-y-20">
            {teamGroups.map((group, gIdx) => (
              <div key={gIdx}>
                <h3 className="text-2xl font-display font-bold text-primary mb-8 border-b border-gray-100 pb-4">{group.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {group.members.map((member, idx) => (
                    <div key={idx} className="group">
                      <div className="relative overflow-hidden rounded-3xl mb-4 aspect-square bg-gray-100">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${member.name}/400/400`;
                          }}
                        />
                      </div>
                      <h4 className="text-lg font-bold text-primary">{member.name}</h4>
                      <p className="text-gray-500 text-sm">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};
