import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Newsletter } from '../components/Newsletter';
import { Testimonials } from '../components/Testimonials';

const currentTMDs = [
  { name: "Prime – Portfolio Variable 2024", link: "https://storage.googleapis.com/crown_money/Website/Target%20Market%20Determinations/Prime-Portfolio-Variable-TMD-2024.1-February-2024-FINAL.pdf" },
  { name: "Prime – Fixed 2024", link: "https://storage.googleapis.com/crown_money/Website/Target%20Market%20Determinations/Prime-Fixed-TMD-2024.1-February-2024-FINAL.pdf" },
  { name: "Prime – Variable 2024", link: "https://storage.googleapis.com/crown_money/Website/Target%20Market%20Determinations/Prime-Variable-TMD-2024.1-February-2024-FINAL.pdf" },
  { name: "SMSF – Variable 2024", link: "https://storage.googleapis.com/crown_money/Website/Target%20Market%20Determinations/SMSF-Variable-TMD-2024.1-February-2024-FINAL.pdf" },
  { name: "SMSF – Fixed 2024", link: "https://storage.googleapis.com/crown_money/Website/Target%20Market%20Determinations/SMSF-Fixed-TMD-2024.1-February-2023-FINAL.pdf" }
];

const archivedTMDs = [
  "Prime – Fixed Product 2022",
  "Prime – Variable Product 2022",
  "SMSF – Fixed Rate Product 2022.2",
  "SMSF – Variable Rate Product 2022.2",
  "Prime – Portfolio Product 2022",
  "SMSF – Fixed Product 2022",
  "SMSF – Variable Product 2022",
  "SMSF – Investment Variable (2021.3)",
  "SMSF – Investment Fixed (2021.3)",
  "SMSF Commercial – Investment Fixed (2021.2)",
  "SMSF Commercial – Investment Variable (2021.3)",
  "Standard – Investment Fixed (2021.2)",
  "Standard – Investment Variable (2021.2)",
  "Standard – Owner Occupied Fixed (2021.2)",
  "Standard – Owner Occupied Variable (2021.2)",
  "Construction MMP – Investment Variable (2021.2)",
  "Construction MMP – Owner Occupied Variable (2021.2)",
  "Construction Standard – Investment Fixed (2021.2)",
  "Construction Standard – Investment Variable (2021.2)",
  "Construction Standard – Owner Occupied Fixed (2021.2)",
  "Construction Standard – Owner Occupied Variable (2021.2)",
  "MMP – Investment Variable (2021.2)",
  "MMP – Owner Occupied Variable (2021.2)",
  "Construction MMP – Investment Variable (September 2021)",
  "Construction MMP – Owner Occupied Variable (September 2021)",
  "Construction Standard – Investment Variable (September 2021)",
  "Construction Standard – Owner Occupied Fixed (September 2021)",
  "Construction Standard – Owner Occupied Variable (September 2021)",
  "MMP – Investment Variable (September 2021)",
  "MMP – Owner Occupied Variable (September 2021)",
  "SMSF – Investment Fixed (September 2021)",
  "SMSF – Investment Variable (September 2021)",
  "SMSF Commercial – Investment Variable (September 2021)",
  "Standard – Investment Fixed (September 2021)",
  "Standard – Investment Variable (September 2021)",
  "Standard – Owner Occupied Fixed (September 2021)",
  "Standard – Owner Occupied Variable (September 2021)"
];

const TargetMarketDeterminations = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Target Market Determinations (TMD) | Crown Money Australia</title>
        <meta name="description" content="Access Crown Money Management's Target Market Determinations (TMDs) to understand which of our financial products, including home loans and SMSF products, are appropriate for your needs." />
        <meta name="keywords" content="Target Market Determinations, TMD, Crown Money products, financial product suitability Australia, mortgage TMD, SMSF TMD, financial compliance" />
        <link rel="canonical" href="https://crown.money/target-market-determinations" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Target Market Determinations</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Target Market Determinations (TMDs) help you understand which of our products might be appropriate for your needs, objectives, and financial situation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Current TMDs */}
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-4 flex items-center">
                  <FileText className="mr-3 text-gold" />
                  Current Target Market Determinations
                </h2>
                <p className="text-gray-600 mb-8">Please click on the links below to download Crown Money’s Target Market Determinations for each product:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentTMDs.map((tmd, idx) => (
                    <a 
                      key={idx}
                      href={tmd.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-accent transition-all flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-700 group-hover:text-primary">{tmd.name}</span>
                      <Download size={18} className="text-gray-400 group-hover:text-gold" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Archived TMDs */}
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-8 flex items-center">
                  <FileText className="mr-3 text-gold" />
                  Archived Target Market Determinations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {archivedTMDs.map((tmd, idx) => (
                    <div 
                      key={idx}
                      className="group p-4 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-600 group-hover:text-primary">{tmd}</span>
                      <Download size={16} className="text-gray-300 group-hover:text-gold" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-crown-lavender p-8 rounded-[2rem] sticky top-24">
                <h3 className="text-xl font-display font-bold text-primary mb-4">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-6">
                  If you're unsure which product is right for you, our financial experts are here to help.
                </p>
                <Link 
                  to="/contact"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center group"
                >
                  <span>Book Strategy Call</span>
                  <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default TargetMarketDeterminations;
