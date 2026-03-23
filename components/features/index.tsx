import { Heading, Hero, Footer } from "@/components";
import Image from "next/image";
import { portpofolio } from "@/constants";

export default function Features() {
  const handleHomeNavigation = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
  };

  const handleItemClick = (item: any) => {
    if (item.context && item.context.length > 0) {
      // Navigate to context view page with the item's context
      window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'context', data: item } }));
    }
  };

  return (
    <>
      {/* Header - Hero without click wrapper to avoid navigation conflicts */}
      <Hero />
      
      {/* Features Content */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading title={["Our", "Features"]} classname="text-4xl font-bold text-gray-900 mb-4" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in one powerful platform
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portpofolio.map((item) => (
              <div
                key={item.id}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                  item.context && item.context.length > 0 ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div className="w-full h-auto rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={1200}
                    height={1200}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight mb-2">
                    {item.name}
                  </h1>
                  {item.context && item.context.length > 0 && (
                    <p className="text-sm text-gray-500">
                      Click to view {item.context.length} {item.context.length === 1 ? 'item' : 'items'}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers using our platform
            </p>
            <button 
              onClick={handleHomeNavigation}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
