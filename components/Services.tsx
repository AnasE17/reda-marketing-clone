import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "🎯",
      title: "Search Engine Optimization (SEO)",
      description: "Dominate local search results with our proven SEO strategies that target high-value attorney keywords and drive qualified leads to your practice.",
      features: [
        "Local SEO optimization",
        "Keyword research & targeting", 
        "Content strategy & creation",
        "Technical SEO audits"
      ]
    },
    {
      icon: "📱",
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Generate immediate leads with targeted PPC campaigns that reach potential clients at the exact moment they're searching for legal help.",
      features: [
        "Google Ads management",
        "Facebook & Instagram ads",
        "Remarketing campaigns", 
        "Conversion optimization"
      ]
    },
    {
      icon: "📊",
      title: "Content Marketing",
      description: "Build authority and trust with compelling content that educates potential clients and positions you as the leading expert in your area.",
      features: [
        "Blog content creation",
        "Video marketing",
        "Social media content",
        "Email marketing campaigns"
      ]
    },
    {
      icon: "📈",
      title: "Website Design & Development",
      description: "Convert visitors into clients with high-converting websites designed specifically for law firms.",
      features: [
        "Mobile-responsive design",
        "Lead capture optimization",
        "Fast loading speeds",
        "Conversion tracking"
      ]
    },
    {
      icon: "📞",
      title: "Lead Generation & Nurturing",
      description: "Turn website visitors into paying clients with our proven lead generation and nurturing systems.",
      features: [
        "Lead capture forms",
        "Email automation",
        "Follow-up sequences",
        "CRM integration"
      ]
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Build relationships and trust with potential clients through strategic social media marketing campaigns.",
      features: [
        "Platform-specific strategies",
        "Community engagement",
        "Paid social advertising",
        "Reputation management"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Attorney Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end digital marketing services designed specifically for attorneys to grow their practice and dominate their local market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Free Marketing Audit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 