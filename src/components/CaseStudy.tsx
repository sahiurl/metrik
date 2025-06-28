
export const CaseStudy = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white border-l-4 border-blue-400 rounded-3xl shadow-xl p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl">
              🥞
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-space">PancakeSwap Case Study</h3>
          </div>
          <div className="flex items-center space-x-3">
            <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">←</button>
            <span className="text-sm text-gray-500 font-inter">1/4</span>
            <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">→</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="bg-orange-100 text-orange-700 px-6 py-3 rounded-2xl text-center font-semibold mb-6 font-inter">
              Before
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  ↻
                </div>
                <div>
                  <p className="text-gray-700 font-inter text-lg mb-2">High latency issues causing failed transactions</p>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-inter font-medium">450ms avg latency</span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  ↻
                </div>
                <div>
                  <p className="text-gray-700 font-inter text-lg mb-2">Limited throughput during peak times</p>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-inter font-medium">2,000 TPS max</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-green-100 text-green-700 px-6 py-3 rounded-2xl text-center font-semibold mb-6 font-inter">
              After
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <p className="text-gray-700 font-inter text-lg mb-2">Ultra-low latency infrastructure</p>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-inter font-medium">12ms avg latency</span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <p className="text-gray-700 font-inter text-lg mb-2">Unlimited throughput capacity</p>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-inter font-medium">50,000+ TPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
