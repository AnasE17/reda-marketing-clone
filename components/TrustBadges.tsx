import React from 'react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      name: "Forbes",
      logo: "https://via.placeholder.com/120x40/ffffff20/ffffff?text=Forbes",
      alt: "Forbes"
    },
    {
      name: "Inc5000",
      logo: "https://via.placeholder.com/120x40/ffffff20/ffffff?text=Inc5000",
      alt: "Inc5000"
    },
    {
      name: "BBB",
      logo: "https://via.placeholder.com/120x40/ffffff20/ffffff?text=BBB",
      alt: "BBB"
    },
    {
      name: "Google",
      logo: "https://via.placeholder.com/120x40/ffffff20/ffffff?text=Google",
      alt: "Google Partner"
    },
    {
      name: "Facebook",
      logo: "https://via.placeholder.com/120x40/ffffff20/ffffff?text=Facebook",
      alt: "Facebook Partner"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by Leading Platforms
          </h3>
          <p className="text-gray-600">
            Reda Marketing is certified and recognized by the industry's most trusted platforms
          </p>
        </div>
        
        <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={badge.logo} 
                alt={badge.alt}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Certified partners and industry recognition
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges; 