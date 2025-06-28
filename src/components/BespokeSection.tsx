
export const BespokeSection = () => {
  const cards = [
    {
      title: "Custom Infrastructure",
      description: "Tailored solutions for your specific blockchain needs",
      color: "purple"
    },
    {
      title: "Expert Support", 
      description: "24/7 dedicated support from blockchain infrastructure experts",
      color: "blue"
    },
    {
      title: "Scalable Solutions",
      description: "Infrastructure that grows with your business requirements", 
      color: "orange"
    }
  ];

  const awards = [
    { name: "Top Developer", year: "2023" },
    { name: "Best Service", year: "2023" }, 
    { name: "Leader", year: "2024" },
    { name: "Top Rated", year: "2024" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 font-space leading-tight">
            A bespoke solution created by Dysnix
          </h2>
          
          <div className="space-y-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`bg-white p-6 lg:p-8 rounded-3xl shadow-lg border-l-4 hover:shadow-xl transition-shadow duration-300 ${
                  card.color === 'purple' ? 'border-l-purple-500 bg-purple-50/30' :
                  card.color === 'blue' ? 'border-l-blue-500 bg-blue-50/30' : 'border-l-orange-500 bg-orange-50/30'
                }`}
              >
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 font-space">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center font-space">
            Clutch Awards
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-orange-600 font-space">C</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm font-space">{award.name}</h4>
                <p className="text-gray-600 text-sm font-inter">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
