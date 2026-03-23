"use client";
import { motion } from "framer-motion";
import { Heading } from "@/components";
import { useState } from "react";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      comment: "Absolutely amazing service! The team was professional, creative, and delivered beyond our expectations. Our exhibition booth was the talk of the event!"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "2024-01-10",
      comment: "Outstanding interior design work. They transformed our office space into something truly remarkable. Highly recommend!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      date: "2024-01-05",
      comment: "Great experience from start to finish. The team listened to our needs and delivered exactly what we wanted."
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      date: "2023-12-28",
      comment: "Professional event management at its finest. Everything was handled perfectly, from planning to execution."
    },
    {
      id: 5,
      name: "Lisa Anderson",
      rating: 5,
      date: "2023-12-20",
      comment: "Incredible attention to detail and creativity. They made our brand vision come to life!"
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      const review = {
        id: reviews.length + 1,
        name: newReview.name,
        rating: newReview.rating,
        date: new Date().toISOString().split('T')[0],
        comment: newReview.comment
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: "", rating: 5, comment: "" });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603.921 1.902 0l1.07 3.292a1 1 0 00.95.69 1l3.514 5.338a1 1 0 00.931.693l3.514-5.338a1 1 0 00.95-.69l1.07-3.292a1 1 0 00-1.902 0l-1.07 3.292a1 1 0 00-.95.69l-3.514 5.338a1 1 0 00-.931.693l-3.514-5.338a1 1 0 00-.95-.69l-1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="w-full padding-x py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header Section */}
      <div className="w-full flex flex-col gap-10 mb-20">
        <div className="w-full flex items-center flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring"
            }}
            className="text-center"
          >
            <Heading
              title={["Customer", "Reviews"]}
              classname="text-center"
            />
          </motion.div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring"
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {review.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {review.comment}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Add Review Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            type: "spring"
          }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Leave a Review
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rating
              </label>
              <div className="flex items-center gap-4">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating })}
                    className={`p-2 rounded-lg border-2 transition-colors ${
                      newReview.rating === rating
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className="flex">
                      {renderStars(rating)}
                    </div>
                    <span className="ml-2 text-sm font-medium">{rating}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Review
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Share your experience with us..."
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
            >
              Submit Review
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
