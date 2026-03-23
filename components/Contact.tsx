"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Footer, Heading, Navbar } from "@/components";
import { textAnimation } from "@/motion";
import { ArrowRight } from "@/public";
import { useEffect } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState('');

	// Initialize EmailJS
	useEffect(() => {
		// Load EmailJS script
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
		script.async = true;
		
		script.onload = () => {
			// Initialize EmailJS with your public key
			(window as any).emailjs.init("nE7aOLhbLJHu7BUiB");
		};
		
		document.body.appendChild(script);
		
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('');

		try {
			// Check if EmailJS is loaded
			if (!(window as any).emailjs) {
				throw new Error('EmailJS not loaded');
			}

			const params = {
				name: formData.name,
				email: formData.email,
				message: formData.message,
				subject: "Enquiry - " + formData.name
			};

			console.log('Sending email with params:', params);

			const response = await (window as any).emailjs.send(
				"service_lc327ru", 
				"template_9cnzo14", 
				params
			);

			console.log("SUCCESS!", response.status, response.text);
			setSubmitStatus('success');
			setFormData({ name: '', email: '', message: '' });

		} catch (error) {
			console.error("FAILED...", error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	const phares1 = ["Get in", "Touch"];
	const phares2 = [
		"We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
	];

	return (
		<div className="w-full min-h-screen bg-gradient-to-b from-white to-[#d2dcff] dark:from-gray-900 dark:to-gray-800">
			<Navbar />
			{/* Hero Section */}
			<div className="w-full padding-x py-20">
				<div className="w-full flex flex-col gap-10">
					<div className="w-full flex items-center flex-col gap-3">
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1,
								type: "spring",
							}}
							viewport={{ once: true }}
							className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black dark:text-white font-dmSans text-sm font-medium leading-tight tracking-[-0.02188rem]"
						>
							Contact Us
						</motion.div>
					</div>
					<div>
						<Heading
							classname="heading font-bold text-center"
							title={phares1}
						/>
					</div>
					<div>
						<Heading
							classname="paragraph font-normal text-center"
							title={phares2}
						/>
					</div>
				</div>
			</div>

			{/* Contact Form Section */}
			<div className="w-full padding-x py-10">
				<div className="max-w-2xl mx-auto">
					<motion.form
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						onSubmit={handleSubmit}
						className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
					>
						<div className="space-y-6">
							{/* Name Field */}
							<motion.div
								initial={{ opacity: 0, x: -50, rotate: -5 }}
								whileInView={{ opacity: 1, x: 0, rotate: 0 }}
								transition={{ 
									duration: 0.8, 
									delay: 0.1,
									type: "spring",
									stiffness: 100
								}}
								viewport={{ once: true }}
								whileHover={{ 
									scale: 1.02,
									rotate: [0, -2, 2, 0],
									transition: { duration: 0.3 }
								}}
							>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Name
								</label>
								<motion.input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									placeholder="Your Name"
									whileFocus={{ 
										scale: 1.02,
										boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
									}}
								/>
							</motion.div>

							{/* Email Field */}
							<motion.div
								initial={{ opacity: 0, x: 50, rotate: 5 }}
								whileInView={{ opacity: 1, x: 0, rotate: 0 }}
								transition={{ 
									duration: 0.8, 
									delay: 0.3,
									type: "spring",
									stiffness: 100
								}}
								viewport={{ once: true }}
								whileHover={{ 
									scale: 1.02,
									rotate: [0, 2, -2, 0],
									transition: { duration: 0.3 }
								}}
							>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Email
								</label>
								<motion.input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									placeholder="your.email@example.com"
									whileFocus={{ 
										scale: 1.02,
										boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
									}}
								/>
							</motion.div>

							{/* Message Field */}
							<motion.div
								initial={{ opacity: 0, y: 50, rotate: -3 }}
								whileInView={{ opacity: 1, y: 0, rotate: 0 }}
								transition={{ 
									duration: 0.8, 
									delay: 0.5,
									type: "spring",
									stiffness: 100
								}}
								viewport={{ once: true }}
								whileHover={{ 
									scale: 1.02,
									rotate: [0, -1, 1, 0],
									transition: { duration: 0.3 }
								}}
							>
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Message
								</label>
								<motion.textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									placeholder="Tell us about your project or inquiry..."
									whileFocus={{ 
										scale: 1.02,
										boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
									}}
								/>
							</motion.div>

							{/* Submit Button */}
							<motion.div
								initial={{ opacity: 0, y: 30, scale: 0.8 }}
								whileInView={{ 
									opacity: 1, 
									y: 0, 
									scale: 1,
									rotate: [0, 360]
								}}
								transition={{ 
									duration: 1, 
									delay: 0.7,
									type: "spring",
									stiffness: 80,
									rotate: { duration: 2 }
								}}
								viewport={{ once: true }}
								className="flex flex-col gap-4"
							>
								<motion.button
									whileHover={{ 
										scale: 1.05,
										boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
										rotate: [0, -5, 5, 0],
										transition: { duration: 0.3 }
									}}
									whileTap={{ 
										scale: 0.95,
										rotate: 360
									}}
									animate={{
										y: [0, -5, 0],
									}}
									transition={{
										y: {
											duration: 2,
											repeat: Infinity,
											repeatType: "reverse",
											ease: "easeInOut"
										}
									}}
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
								>
									<span className="relative z-10">
										{isSubmitting ? 'Sending...' : 'Send Message'}
									</span>
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
										initial={{ x: "-100%" }}
										whileHover={{ x: "0%" }}
										transition={{ duration: 0.3 }}
									/>
								</motion.button>

								{/* Status Messages */}
								{submitStatus === 'success' && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center"
									>
										✅ Message sent successfully! We'll get back to you soon.
									</motion.div>
								)}

								{submitStatus === 'error' && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center"
									>
										❌ Failed to send message. Please try again.
									</motion.div>
								)}
							</motion.div>
						</div>
					</motion.form>
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}
