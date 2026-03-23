"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components";
import { navVariants } from "@/motion";
import { MobileMenu } from "@/animations";
import { navigationItems } from "@/constants";
import { arrowRightWhite, logo } from "@/public";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const { isDarkMode, toggleTheme } = useTheme();

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 0) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	
	return (
		<>
			<motion.div
				initial="initial"
				whileInView="enter"
				variants={navVariants}
				className="fixed w-full h-[55px] top-0 z-50 xs:hidden sm:hidden">
				{/* <motion.div
					className="w-full flex items-center justify-center gap-3 py-3 bg-black dark:bg-gray-900"
					variants={navVariants}
					animate={hidden ? "hidden" : "vissible"}>
					<div className="xs:hidden sm:hidden">
						<h1 className="text-[#FFFFFF99] text-[18px] font-normal leading-tight">
							Streamline your workflow and boost your productivity.
						</h1>
					</div>
					<div className="flex gap-2 items-center">
						<button className="text-white text-[16px] leading-tight font-normal">
							Get started for free
						</button>
						<Image
							src={arrowRightWhite}
							alt="arrowRightWhite"
							width={20}
							height={20}
							className="text-white"
						/>
					</div>
				</motion.div> */}
				<motion.div
					className="w-full flex items-center justify-between gap-2 padding-x py-3 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80"
					animate={hidden ? { y: -48 } : { y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}>
					<div>
						<Image
							src={logo}
							alt="logo"
							width={40}
							height={40}
						/>
					</div>
					<div className="flex items-center gap-4 xs:hidden sm:hidden">
						{/* Theme Toggle Button */}
						<button
							onClick={toggleTheme}
							className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
							aria-label="Toggle theme"
						>
							{isDarkMode ? (
								<svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
								</svg>
							) : (
								<svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
									<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
								</svg>
							)}
						</button>
						
						{navigationItems.map((item) => {
							// Handle Portfolio and Services with custom navigation
							if (item.title === 'Portfolio' || item.title === 'Services') {
								return (
									<button
										key={item.id}
										onClick={() => {
											const page = item.title === 'Portfolio' ? 'features' : 'services';
											window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
										}}
										className="text-[18px] font-normal leading-tight text-gray-700 dark:text-gray-200 hover:font-bold transition-colors">
										{item.title}
									</button>
								);
							}
							// Handle Home with custom navigation
							if (item.title === 'Home') {
								return (
									<button
										key={item.id}
										onClick={() => {
											window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
										}}
										className="text-[18px] font-normal leading-tight text-gray-700 dark:text-gray-200 hover:font-bold transition-colors">
										{item.title}
									</button>
								);
							}
							// Handle Services as regular link to separate page
							if (item.title === 'Services') {
								return (
									<button
										key={item.id}
										onClick={() => {
											window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'services' } }));
										}}
										className="text-[18px] font-normal leading-tight text-gray-700 dark:text-gray-200 hover:font-bold transition-colors">
										{item.title}
									</button>
									// <Link
									// 	href={item.href}
									// 	key={item.id}
									// 	className="text-[18px] font-normal leading-tight text-gray-700 dark:text-gray-200">
									// 	{item.title}
									// </Link>
								);
							}
							// Handle Reviews with custom navigation
							if (item.title === 'Reviews') {
								return (
									<button
										key={item.id}
										onClick={() => {
											window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'reviews' } }));
										}}
										className="text-[18px] font-normal leading-tight text-gray-700 dark:text-gray-200 hover:font-bold transition-colors">
										{item.title}
									</button>
								);
							}
							// Handle View Profile to open PDF in new window
							if (item.title === 'View Profile') {
								return (
									<button
										key={item.id}
										onClick={() => {
											window.open('/files/Veloura_Global.pdf', '_blank', 'noopener,noreferrer');
										}}
										className="text-[18px] font-normal leading-tight text-gray-700 dark:text-gray-200 hover:font-bold transition-colors">
										{item.title}
									</button>
								);
							}
							// Handle Contact Us with custom navigation
							if (item.title === 'Contact Us') {
								return (
									<button
										key={item.id}
										onClick={() => {
											window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }));
										}}
										className="text-[18px] font-normal leading-tight text-gray-700 dark:text-gray-200 hover:font-bold transition-colors">
										{item.title}
									</button>
								);
							}
							// Keep other items as regular links
							return (
								<Link
									href={item.href}
									key={item.id}
									className="text-[18px] font-normal leading-tight text-gray-700 dark:text-gray-200">
									{item.title}
								</Link>
							);
						})}
						<button
							onClick={() => {
								window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }));
							}}
							className="text-white bg-black dark:bg-white dark:text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
						>
							Contact Us
						</button>
					</div>
				</motion.div>
			</motion.div>
			<div className="fixed w-full top-0 z-50 hidden xs:block sm:block">
				<MobileMenu />
			</div>
		</>
	);
}
