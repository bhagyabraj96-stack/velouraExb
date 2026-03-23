import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Eye, Heading } from "@/components";
import { ArrowRight, imgDemo, spring, star } from "@/public";
import { imageAnimation, textAnimation } from "@/motion";

export default function CallToAction() {
	const phares1 = ["Connect With Us"];
	const phares2 = [
		"Connect with us and turn your ideas into reality.",
	];
	const phares3 = [
		"Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.",
	];
	return (
		<div className="w-full padding-x py-10 relative bg-gradient-to-b from-white to-[#d2dcff] dark:from-gray-900 dark:to-gray-800">
			<div className="absolute left-40  top-1/2 xs:top-0 -translate-y-1/2">
				<Eye/>
			</div>
			<div className="w-full flex items-center xs:mt-20 justify-center gap-5 pl-20 sm:pl-40 xs:pl-0">
				{/* <motion.div
					variants={imageAnimation}
					initial="initial"
					whileInView="enter"
					viewport={{ once: true }}
					className="xm:hidden sm:hidden">
					<Image
						src={star}
						alt="star-hero-img"
						width={400}
						height={400}
					/>
				</motion.div> */}
				<div className="w-full flex items-center flex-col gap-3">
					<div>
						<Heading
							classname="heading font-bold xm:text-center sm:text-center"
							title={phares1}
						/>
					</div>
					<div>
						<Heading
							classname="paragraph font-normal text-center block xm:hidden sm:hidden"
							title={phares2}
						/>
						<Heading
							classname="paragraph font-normal text-center hidden xm:block sm:block"
							title={phares3}
						/>
					</div>
					<motion.div
						variants={textAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}
						className="flex gap-4 items-center mt-3 overflow-hidden">
						<motion.button
							onClick={() => {
								window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }));
							}}
							whileHover={{ 
								scale: 1.05,
								boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
							}}
							whileTap={{ 
								scale: 0.95 
							}}
							animate={{
								y: [0, -3, 0],
							}}
							transition={{
								y: {
									duration: 2,
									repeat: Infinity,
									repeatType: "reverse",
									ease: "easeInOut"
								},
								scale: {
									duration: 0.2,
									ease: "easeInOut"
								}
							}}
							className="text-white bg-black py-3 px-6 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-200 relative overflow-hidden group"
						>
							<span className="relative z-10">Chat with Us</span>
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								initial={{ x: "-100%" }}
								whileHover={{ x: "0%" }}
								transition={{ duration: 0.3 }}
							/>
						</motion.button>
						
					</motion.div>
				</div>
				<motion.div
					className="xm:hidden sm:hidden"
					variants={imageAnimation}
					initial="initial"
					whileInView="enter"
					viewport={{ once: true }}>
					<Image
						src={imgDemo}
						alt="spring-hero-img"
						width={400}
						height={400}
					/>
				</motion.div>
			</div>
		</div>
	);
}
