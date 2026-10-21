import { Heading, Hero, Footer } from "@/components";
import Image from "next/image";
import { useState } from "react";

interface ContextItem {
  id: number;
  src: any;
  name: string;
  type: string;
}

interface ContextViewProps {
  item: {
    id: number;
    name: string;
    src: any;
    context: ContextItem[];
  };
  onBack: () => void;
}

export default function ContextView({ item, onBack }: ContextViewProps) {
  const [selectedMedia, setSelectedMedia] = useState<ContextItem | null>(null);

  // Add null check for item
  if (!item) {
    return (
      <>
        <Hero />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Item not found</h2>
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mx-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Features
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleMediaClick = (mediaItem: ContextItem) => {
    setSelectedMedia(mediaItem);
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
  };

  const handleNext = () => {
    if (!item.context || !selectedMedia) return;
    const currentIndex = item.context.findIndex((m) => m.id === selectedMedia.id);
    const nextIndex = (currentIndex + 1) % item.context.length;
    setSelectedMedia(item.context[nextIndex]);
  };

  const handlePrevious = () => {
    if (!item.context || !selectedMedia) return;
    const currentIndex = item.context.findIndex((m) => m.id === selectedMedia.id);
    const prevIndex = (currentIndex - 1 + item.context.length) % item.context.length;
    setSelectedMedia(item.context[prevIndex]);
  };

  return (
    <>
      {/* Media Popup Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 xs:p-0"
          onClick={handleCloseModal} // Close when clicking backdrop
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto xs:rounded-none xs:h-full xs:max-h-full xs:max-w-full xs:flex xs:flex-col xs:overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b xs:p-4 xs:shrink-0">
              <h2 className="text-2xl font-bold text-gray-900 xs:text-lg">{selectedMedia.name}</h2>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors xs:hidden"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 relative xs:p-0 xs:flex-1 xs:flex xs:items-center xs:justify-center xs:min-h-0">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all xs:z-30"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all xs:z-30"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {selectedMedia.type === 'mp4' ? (
                <div className="w-full aspect-video bg-black rounded-lg overflow-hidden xs:rounded-none xs:flex-1 xs:flex xs:items-center xs:justify-center">
                  <video
                    controls
                    autoPlay
                    className="w-full h-full xs:max-w-full xs:max-h-full"
                    playsInline
                    muted
                  >
                    <source src={selectedMedia.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="w-full h-auto rounded-lg overflow-hidden xs:rounded-none xs:flex-1 xs:flex xs:items-center xs:justify-center xs:overflow-hidden">
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.name}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover xs:object-contain xs:max-w-full"
                  />
                </div>
              )}

              {/* <div className="mt-4">
                <p className="text-sm text-gray-500">Type: {selectedMedia.type.toUpperCase()}</p>
                <p className="text-sm text-gray-500">ID: {selectedMedia.id}</p>
              </div> */}
            </div>

            {/* Mobile Close Button - Bottom */}
            <button
              onClick={handleCloseModal}
              className="hidden xs:flex items-center justify-center w-full p-4 bg-white border-t shadow-lg"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <Hero />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Features
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden">
              <Image
                src={item.src}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
            <Heading title={[item.name, "Gallery"]} classname="text-4xl font-bold text-gray-900 dark:text-white mb-4" />
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {item.context && item.context.length > 0 
                ? `Browse through ${item.context.length} ${item.context.length === 1 ? 'item' : 'items'}`
                : 'No items available'
              }
            </p>
          </div>

          {/* Media Grid */}
          {item.context && item.context.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {item.context.map((mediaItem) => (
                <div
                  key={mediaItem.id}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleMediaClick(mediaItem)}
                >
                  <div className="w-full h-48 rounded-t-lg overflow-hidden bg-gray-100 dark:bg-gray-600">
                    {mediaItem.type === 'mp4' ? (
                      <div className="w-full h-full relative">
                        <video
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          onMouseOver={(e) => {
                            const video = e.currentTarget;
                            video.play().catch(() => {});
                          }}
                          onMouseOut={(e) => {
                            const video = e.currentTarget;
                            video.pause();
                          }}
                        >
                          <source src={mediaItem.src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="bg-black bg-opacity-50 rounded-full p-3">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={mediaItem.src}
                        alt={mediaItem.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{mediaItem.name}</h3>
                    <div className="flex items-center justify-between">
                      {/* <span className="text-sm text-gray-500 dark:text-gray-400">{mediaItem.type.toUpperCase()}</span> */}
                      <span className="text-xs text-gray-400 dark:text-gray-500">ID: {mediaItem.id}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No media items available for this gallery.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
