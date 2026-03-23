"use client";
import Link from "next/link";
import { TlinksProps } from "@/types";
import { slide, scale } from "@/motion";
import { motion } from "framer-motion";

export default function Links({
	data,
	isActive,
	setSelectedIndicator,
}: TlinksProps) {
	const { title, href, index } = data;

	const handleClick = () => {
		// Handle Portfolio and Customers with custom navigation
		if (title === 'Portfolio' || title === 'Services') {
			const page = title === 'Portfolio' ? 'features' : 'services';
			window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
		}
		// Handle Home with custom navigation
		if (title === 'Home') {
			window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
		}
	};

	return (
		<motion.div
			className="relative flex items-center"
			onMouseEnter={() => {
				setSelectedIndicator(href);
			}}
			custom={index}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit">
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-20px]"
			/>
			{title === 'Portfolio' || title === 'Services' || title === 'Home' ? (
				<button onClick={handleClick} className="text-white bg-transparent border-none cursor-pointer hover:text-gray-300 transition-colors">
					{title}
				</button>
			) : (
				<Link href={href}>{title}</Link>
			)}
		</motion.div>
	);
}
