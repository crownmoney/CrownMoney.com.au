import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const Privacy = () => {
  return (
    <div className="pt-20 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="bg-crown-lavender w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: May 2024</p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-4">Respecting your privacy</h2>
            <p>
              We respect your personal information, and this Privacy Policy explains how we handle it. The policy covers Crown Lending Pty Ltd.
            </p>
            <p>
              This Policy also includes our credit reporting policy, that is, it covers additional information on how we manage your personal information collected in connection with a credit application, or a credit facility. We refer to this credit-related information below as credit information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-4">What personal information do we collect and hold?</h2>
            <h3 className="text-xl font-bold text-primary mt-6 mb-2">General information</h3>
            <p>The types of information that we collect and hold about you could include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>ID information such as your name, postal or email address, telephone numbers, and date of birth;</li>
              <li>other contact details such as social media handles;</li>
              <li>financial details such as your tax file number;</li>
              <li>health information;</li>
              <li>credit information such as details relating to credit history, credit capacity, and eligibility for credit (‘credit worthiness’); and</li>
              <li>other information we think is necessary.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-4">Information from a credit reporting body</h2>
            <p>
              When we’re checking your credit worthiness and at other times, we might collect information about you from and give it to credit reporting bodies. This information can include ID information, information requests, default information, serious credit infringements, personal insolvency information, court proceedings, and publicly available information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-4">What sensitive information do we collect?</h2>
            <p>
              Sometimes we need to collect sensitive information about you, for instance, in relation to some insurance applications. This could include things like medical checks, medical consultation reports or other information about your health. Unless required by law, we will only collect sensitive information with your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-4">How we collect and hold your information</h2>
            <p>
              Unless it’s unreasonable or impracticable, we will try to collect personal information directly from you. We might collect your information when you fill out a form with us, when you’ve given us a call or used our websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-4">How do we take care of your personal information?</h2>
            <p>
              We store information in different ways, including in paper and electronic form. The security of your personal information is important to us and we take reasonable steps to protect it from misuse, interference and loss, and from unauthorised access, modification or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-4">How we use your personal information</h2>
            <p>
              Collecting your personal information allows us to provide you with the products and services you’ve asked for. This includes providing information, considering eligibility, processing applications, and administering products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-4">Contact Us</h2>
            <p>
              If you have any questions or comments about our privacy policies and procedures, please contact us:
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-6">
              <p className="font-bold text-primary mb-2">The Privacy Officer</p>
              <p>Crown Lending Pty Ltd</p>
              <p>PO Box 29, Taylors Lakes VIC 3038</p>
              <p className="mt-4">Telephone: 1300 882 981</p>
              <p>Email: admin@crown.money</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
