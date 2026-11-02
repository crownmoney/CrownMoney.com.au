import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Linkedin, Twitter, Mail, ArrowLeft, Award, BookOpen, MessageSquare } from 'lucide-react';

const authors = {
  'scott-parry': {
    name: 'Scott Parry',
    role: 'Founder & CEO',
    image: 'https://picsum.photos/seed/scott/400/400',
    bio: 'Scott Parry is the founder of Crown Money Management and a pioneer in the Australian mortgage reduction space. With over 20 years of experience, Scott has helped thousands of Australians pay off their mortgages in record time through his innovative Home Ownership Programme (HOP).',
    expertise: ['Mortgage Reduction', 'Debt Management', 'Financial Strategy', 'Cash Flow Optimisation'],
    achievements: [
      'Founded Crown Money Management in 2004',
      'Developed the proprietary Home Ownership Programme (HOP)',
      'Featured in major Australian financial publications',
      'Host of the Crown Money Podcast'
    ]
  },
  'craig-parry': {
    name: 'Craig Parry',
    role: 'Co-Founder & Director',
    image: 'https://picsum.photos/seed/craig/400/400',
    bio: 'Craig Parry is a co-founder of Crown Money Management and an expert in financial systems and client success. He is dedicated to empowering homeowners with the tools and knowledge they need to achieve true financial freedom.',
    expertise: ['Financial Systems', 'Client Success', 'Wealth Building', 'Strategic Planning'],
    achievements: [
      'Co-founded Crown Money Management',
      'Architect of the Crown Money client support system',
      'Over 15 years of experience in financial services',
      'Key contributor to the HOP strategy'
    ]
  }
};

export const AuthorProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = authors[slug as keyof typeof authors];

  if (!author) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold">Author not found</h1>
        <Link to="/" className="text-primary hover:text-gold mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": author.name,
            "jobTitle": author.role,
            "worksFor": {
              "@type": "Organization",
              "name": "Crown Money",
              "url": "https://crownmoney.com.au"
            },
            "description": author.bio,
            "image": author.image,
            "knowsAbout": author.expertise
          })}
        </script>
      </Helmet>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/about" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to About Us</span>
          </Link>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl flex-shrink-0"
            >
              <img 
                src={author.image} 
                alt={author.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">{author.name}</h1>
              <p className="text-xl text-gold font-bold mb-6">{author.role}</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Linkedin size={20} /></a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Twitter size={20} /></a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-all"><Mail size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-6">About {author.name}</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {author.bio}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-8">Key Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {author.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="bg-gold/10 p-2 rounded-lg text-gold">
                        <Award size={20} />
                      </div>
                      <p className="font-medium text-gray-800">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                  <BookOpen size={20} className="text-gold" />
                  <span>Areas of Expertise</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((item, index) => (
                    <span key={index} className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-crown-lavender p-8 rounded-3xl border border-primary/5">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center space-x-2">
                  <MessageSquare size={20} className="text-gold" />
                  <span>Connect with {author.name.split(' ')[0]}</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Interested in learning more about Scott's mortgage reduction strategies? Book a free strategy session today.
                </p>
                <Link 
                  to="/contact"
                  className="block w-full bg-gold text-primary py-4 rounded-xl font-bold text-center hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Book Your Free Strategy Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
