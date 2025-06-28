
export const KeyMetrics = () => {
  const metrics = [
    {
      number: "15%",
      label: "Maximum APY on crypto lending",
    },
    {
      number: "$500M+",
      label: "Total value locked in our protocol",
    },
    {
      number: "50K+",
      label: "Active lenders earning daily",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-center">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-3">
            <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-3 font-space">
              {metric.number}
            </div>
            <div className="text-lg lg:text-xl text-gray-600 font-inter leading-relaxed max-w-xs mx-auto">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
