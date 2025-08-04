import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    {
      number: "20+",
      label: "Years of Experience",
      description: "Decades of marketing expertise"
    },
    {
      number: "1,000+",
      label: "Law Firms Served",
      description: "Trusted by attorneys nationwide"
    },
    {
      number: "$500M+",
      label: "Revenue Generated",
      description: "For our attorney clients"
    },
    {
      number: "95%",
      label: "Client Retention",
      description: "Long-term partnerships"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results for Attorneys
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reda Marketing has helped hundreds of law firms achieve remarkable growth through our specialized attorney marketing strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg">
            Join the hundreds of law firms that trust Reda Marketing to grow their practice
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats; 