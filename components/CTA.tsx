import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-red-500 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Law Practice?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of attorneys who have already grown their practice with Reda Marketing's proven strategies. Get your free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Consultation
            </a>
            <a 
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              See Our Services
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Free Audit</div>
              <div className="text-red-100">Get a comprehensive analysis of your current marketing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Custom Strategy</div>
              <div className="text-red-100">Tailored marketing plan for your specific practice</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Proven Results</div>
              <div className="text-red-100">Track record of success with law firms nationwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 