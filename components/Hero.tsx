"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button, Heading, ImageEye, Navbar } from "@/components";
import { imageAnimation, textAnimation } from "@/motion";
import { ArrowRight, cog, cylinder, noodle } from "@/public";
import { useRef } from "react";
import { TextMask } from "@/animations";

export default function Hero() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const cq = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const mq = useTransform(scrollYProgress, [0, 1], [0, -200]);

	const phares1 = ["Every Exhibit Tell a Story", "- Let Yours Begin Here"];
	const phares2 = [
		"Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.",
	];
	return (
		<div
			ref={container}
			className="w-full h-screen xs:min-h-screen sm:min-h-screen bg-[radial-gradient(181%_40%_at_0_100%,_#999999,_#6C5CE7,_#000000_112%)] dark:bg-[radial-gradient(181%_40%_at_0_100%,_#1a1a1a,_#4c1d95,_#000000_112%)]">
			<Navbar />
			<div className="w-full  h-full padding-x items-center flex gap-4 justify-between overflow-hidden xs:flex-col sm:flex-col xs:pt-20 sm:pt-20">
				<div className="w-3/4 xs:w-full sm:w-full flex flex-col gap-6 xs:gap-4 sm:gap-4 relative xs:flex-col sm:flex-col">
					<div className="overflow-hidden">
						<motion.button
							className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black dark:text-white font-dmSans text-sm font-medium leading-tight tracking-[-0.02188rem]"
							variants={textAnimation}
							initial="initial"
							whileInView="enter"
							viewport={{ once: true }}>
							{/* Version 2.0 is here */}
						</motion.button>
					</div>
					<div>
						
						<h1 className={`leading-tight text-[#fff] tracking-tight xs:text-sm heading font-bold`}>
									<TextMask>{phares1}</TextMask>
								</h1>
					</div>
					{/* <div>
						<Heading
							classname="paragraph font-normal "
							title={phares2}
						/>
					</div> */}
					<div className="overflow-hidden">
						<motion.div
							className="flex gap-4 items-center"
							variants={textAnimation}
							initial="initial"
							whileInView="enter"
							viewport={{ once: true }}>
							<Button
								className="text-white bg-black py-2 px-4"
								title="Get free quote"
								onClick={() => {
									window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }));
								}}
							/>
							
						</motion.div>
					</div>
				</div>
				<div className="w-1/2 xs:w-full sm:w-full h-full relative items-center justify-center flex">
					<ImageEye />
					{/* <motion.div
						animate={{ y: [-30, 30] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: "mirror",
							ease: "easeInOut",
						}}
						className="w-full flex items-center justify-center">
						<Image
							src={cog}
							alt="cog-hero-img"
							width={800}
							height={400}
							className="w-[70%] xs:w-full sm:w-full h-auto object-cover"
						/>
					</motion.div>
					<motion.div
						className="absolute -right-16 bottom-10 rotate-[30deg] xs:hidden sm:hidden"
						variants={imageAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}
						style={{ y: mq }}>
						<Image
							src={noodle}
							alt="noodle-hero-img"
							width={200}
							height={200}
						/>
					</motion.div>
					<motion.div
						className="absolute -left-20 top-20 xs:hidden sm:hidden"
						variants={imageAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}
						style={{ y: cq }}>
						<Image
							src={cylinder}
							alt="cylinder-hero-img"
							width={200}
							height={200}
						/>
					</motion.div> */}
				</div>
			</div>
		</div>
	);
}
