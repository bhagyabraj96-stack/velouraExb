import { Heading, Hero, Footer } from "@/components";

export default function Services() {
  const handleHomeNavigation = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
  };

  return (
    <>
      {/* Header - Hero without click wrapper to avoid navigation conflicts */}
      <Hero />
      
      {/* Services Content */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading title={["Our", "Services"]} classname="text-4xl font-bold text-gray-900 mb-4" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of businesses worldwide
            </p>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">TC</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Tech Corp</h3>
                    <p className="text-gray-600 text-sm">Technology</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "This platform transformed how we manage our projects. Efficiency increased by 40%."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">RS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Retail Solutions</h3>
                    <p className="text-gray-600 text-sm">Retail</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The best investment we made this year. Customer satisfaction has never been higher."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">FS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Finance Studio</h3>
                    <p className="text-gray-600 text-sm">Finance</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Streamlined our operations completely. ROI was achieved within 3 months."
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Happy Services</h2>
            <p className="text-xl mb-6">Start your journey today and see the difference</p>
            <button 
              onClick={handleHomeNavigation}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer with home navigation */}
      <div onClick={handleHomeNavigation} className="cursor-pointer">
        <Footer />
      </div>
    </>
  );
}
