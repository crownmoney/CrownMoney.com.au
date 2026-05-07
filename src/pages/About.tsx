import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Target, History, Award, CheckCircle, Linkedin, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Helmet } from 'react-helmet-async';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { Newsletter } from '../components/Newsletter';
import { Awards } from '../components/Awards';
import { TrustSignals } from '../components/TrustSignals';

export const About = () => {
  const [selectedMember, setSelectedMember] = React.useState<any>(null);

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
        { 
          name: "Scott Parry", 
          role: "Founder & CEO", 
          image: "https://storage.googleapis.com/crown_money/Website/About/People/Scott_Parry_BW.jpg",
          slug: "scott-parry",
          bio: "Scott Parry is the visionary founder of Crown Money. With over 25 years in the finance industry, Scott has dedicated his career to challenging the traditional banking model. His passion for helping Australians achieve financial independence led to the creation of Crown's unique debt reduction strategy. Scott is a frequent commentator in financial media and a sought-after speaker on wealth creation."
        },
        { 
          name: "Craig Parry", 
          role: "Partner & Senior Finance Broker", 
          image: "https://storage.googleapis.com/crown_money/Website/About/People/craig%20parry.png",
          slug: "craig-parry",
          bio: "Craig Parry brings a wealth of experience in mortgage broking and financial strategy. As a partner at Crown Money, he oversees the brokerage operations and ensures that every client receives a mortgage structure optimised for their specific goals. Craig's expertise in complex lending scenarios makes him an invaluable asset to the team and our clients."
        },
        { name: "Chelsea Burton", role: "General Manager", image: "https://storage.googleapis.com/crown_money/Website/About/People/chelsea%20burton.jpg" },
        { 
          name: "Jessie Edge", 
          role: "Operations", 
          image: "https://storage.googleapis.com/crown_money/Website/About/People/jessie%20edge.png",
          bio: "Jessie Edge is the engine room of Crown Money's operations. With a background in process optimisation and client services, Jessie ensures that the Crown Money journey is seamless for every family we help. Her commitment to operational excellence and client success is at the heart of everything we do."
        },
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
        { name: "Daniela Marambio", role: "Financial Strategist", image: "https://storage.googleapis.com/crown_money/Website/About/People/Daniela.webp" },
        { name: "Kat Daroczy", role: "Appointment Setter", image: "https://ui-avatars.com/api/?name=Kat+Daroczy&background=F1EAF8&color=2A154B" },
      ]
    },
    {
      title: "Finance Brokers",
      members: [
        { name: "Richard Recordon", role: "Senior Finance Broker", image: "https://storage.googleapis.com/crown_money/Website/About/People/richard%20recordon.jpg" },
        { name: "Mathew Wright", role: "Senior Finance Broker", image: "https://storage.googleapis.com/crown_money/Website/About/People/Mat_BW.jpg" },
        { name: "Natalie Holloway", role: "Mortgage Broker", image: "https://storage.googleapis.com/crown_money/Website/About/People/Natalie%20Holloway_BW.png" },
        { name: "Megan Dibenedetto", role: "Credit Assessor", image: "https://storage.googleapis.com/crown_money/Website/About/People/Megan%20Dibenedetto.jpeg" },
      ]
    },
    {
      title: "Post Settlement Team",
      members: [
        { name: "Adam Santangelo", role: "Client Success Team Leader", image: "https://storage.googleapis.com/crown_money/Website/About/People/Adam_Santangelo_BW.png" },
        { name: "Craig Butler", role: "Financial Coach", image: "https://storage.googleapis.com/crown_money/Website/About/People/Craig.png" },
        { name: "Eden Robinson", role: "Financial Coach", image: "https://storage.googleapis.com/crown_money/Website/About/People/Eden.jpg" },
        { name: "Leigh Parmenter", role: "Financial Coach", image: "https://storage.googleapis.com/crown_money/Website/About/People/Leigh%20Corporate%20Square_BW.png" },
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
        { name: "Joel Hannan", role: "Credit Assessor", image: "https://storage.googleapis.com/crown_money/Website/About/People/Joel%20H_Headshot_BW.jpeg" },
        { name: "Jimmy Walker", role: "Loan Application Concierge", image: "https://storage.googleapis.com/crown_money/Website/About/People/Jimmy.png" },
        { name: "Zu Rahman", role: "Loan Application Concierge", image: "https://storage.googleapis.com/crown_money/Website/About/People/Zu_BW.jpg" },
        { name: "Gale Yabut", role: "Sales Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/GALE%20YABUT.jpg" },
        { name: "Kristine Enriquez", role: "Sales Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/KRISTINE%20Enriquez.jpeg" },
        { name: "Beth Caper", role: "Sales Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/Beth%20Caper.png" },
        { name: "Lyndel Amora", role: "Sales Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/Lyndel%20Amora.png" },
        { name: "Klouie Gasper", role: "Sales Support", image: "https://storage.googleapis.com/crown_money/Website/About/People/Klouie%20Gasper.jpeg" },
        { name: "Allona Mayol", role: "Settlements Officer", image: "https://storage.googleapis.com/crown_money/Website/About/People/Allona%20Mayol.jpeg" },
        { name: "Jade Wilson", role: "FSFL Coordinator", image: "https://storage.googleapis.com/crown_money/Website/About/People/Jade%20Wilson.jpeg" },
      ]
    },
    {
      title: "Technology Team",
      members: [
        { name: "Che Mas", role: "Technology Specialist", image: "https://storage.googleapis.com/crown_money/Website/About/People/Che.jpg" },
        { name: "Vincent Tabayag", role: "Digital Content & Graphic Design", image: "https://storage.googleapis.com/crown_money/Website/About/People/VINCENT%20TABAYAG.png" },
        { name: "Emmanuel Estolas", role: "HubSpot Specialist", image: "https://storage.googleapis.com/crown_money/Website/About/People/Emmanuel%20Estolas.jpg" },
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

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Crown Money",
        "url": "https://crown.money",
        "logo": "https://crown.money/logo.png"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://crown.money"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://crown.money/about"
          }
        ]
      },
      {
        "@type": "Person",
        "name": "Scott Parry",
        "jobTitle": "Founder & CEO",
        "worksFor": {
          "@type": "Organization",
          "name": "Crown Money"
        },
        "description": "Visionary founder of Crown Money with over 25 years in the finance industry."
      },
      {
        "@type": "Person",
        "name": "Craig Parry",
        "jobTitle": "Partner & Senior Finance Broker",
        "worksFor": {
          "@type": "Organization",
          "name": "Crown Money"
        },
        "description": "Expert in mortgage broking and financial strategy at Crown Money."
      }
    ]
  };

  return (
    <div className="pt-10">
      <Helmet>
        <title>About Crown Money | Australia's Mortgage Reduction & Debt Strategy Experts</title>
        <meta name="description" content="Meet the team at Crown Money Management. Founded in 2004 by Scott Parry, we've helped thousands of Australian families pay off their mortgages faster and build wealth through strategic money management." />
        <meta name="keywords" content="Scott Parry, Craig Parry, Crown Money team, mortgage reduction specialists, Australian finance experts, debt reduction experts, financial coaching Australia, mortgage freedom experts" />
        <meta property="og:title" content="About Crown Money | Meet Our Mortgage Reduction Experts" />
        <meta property="og:description" content="Founded in 2004, Crown Money is dedicated to helping Australians become mortgage-free faster. Meet the team behind our proven system." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crown.money/about" />
        <meta property="og:image" content="https://storage.googleapis.com/crown_money/Website/About/People/Scott_Parry_BW.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href="https://crown.money/about" />
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>
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

      <TrustSignals />

      {/* Awards Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <img 
            src="https://storage.googleapis.com/crown_money/Website/About/Other/The-Better-Business-Awards.png" 
            alt="Crown Money Team receiving the Better Business Awards for excellence in finance" 
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
              alt="Scott Parry - Founder and CEO of Crown Money Management, Australian Mortgage Reduction Specialist" 
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
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2004 by Scott Parry, Crown Money was born out of a frustration with the traditional banking system. Scott saw that banks were designed to keep people in debt for as long as possible to maximise interest profits.
              </p>
              <p>
                He developed a unique financial strategy that allows homeowners to use their existing income more effectively, attacking the principal of their mortgage while still maintaining their lifestyle.
              </p>
              <p>
                Over the last two decades, Crown Money has evolved from a small boutique firm into one of Australia's most respected money management specialists, helping thousands of families save millions in interest and shave decades off their mortgages.
              </p>
            </div>
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

      {/* Why Crown Money */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Why Crown Money?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We do things differently because we believe you deserve a better financial future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">We Are Strategy First</h3>
              <p className="text-gray-600">
                Most brokers focus on the interest rate. We focus on the strategy. A lower rate is good, but the right structure is what saves you hundreds of thousands.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Ongoing Coaching</h3>
              <p className="text-gray-600">
                A plan is only good if you stick to it. Our financial coaches provide the accountability and guidance you need to stay on track for the long term.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Proven Results</h3>
              <p className="text-gray-600">
                With over 20 years of experience and thousands of successful clients, our system is tried, tested, and proven to work in any market.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://storage.googleapis.com/crown_money/Awards/2026_Better_Business_Award.jpeg" 
              alt="The Better Business Awards 2026" 
              className="rounded-3xl shadow-2xl w-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-crown-lavender">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Target className="text-primary mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-2xl text-gray-700 font-medium leading-relaxed italic">
            "To empower 5,000 Australian families every year to become mortgage-free, providing them with the tools, knowledge, and coaching to build generational wealth."
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
                    <div 
                      key={idx} 
                      className={cn("group", member.bio && "cursor-pointer")}
                      onClick={() => member.bio && setSelectedMember(member)}
                    >
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
                        {member.bio && (
                          <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white text-primary px-4 py-2 rounded-full text-xs font-bold">View Bio</span>
                          </div>
                        )}
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
      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors z-10"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:w-1/2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary">{selectedMember.name}</h3>
                    <p className="text-gold font-bold text-sm uppercase tracking-widest">{selectedMember.role}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedMember.bio}
                  </p>
                  <div className="pt-4 flex flex-col space-y-3">
                    {selectedMember.slug && (
                      <Link 
                        to={`/author/${selectedMember.slug}`}
                        className="inline-flex items-center space-x-2 text-primary hover:text-gold transition-colors font-bold"
                      >
                        <ArrowRight size={20} className="text-gold" />
                        <span>View Full Professional Profile</span>
                      </Link>
                    )}
                    <a 
                      href="https://www.linkedin.com/company/crown-money" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary hover:text-gold transition-colors font-bold"
                    >
                      <Linkedin size={20} />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Brand Clarity Statement */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 italic">
            Crown Money Management is an Australian mortgage broker and debt reduction specialist. We are not affiliated with Crown Currency Exchange or any other foreign exchange services.
          </p>
        </div>
      </section>

      <Awards />
      <Newsletter />
    </div>
  );
};
