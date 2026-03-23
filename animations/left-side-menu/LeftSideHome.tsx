"use client";
import Navbar from "./Navbar";
import Image from "next/image";
import { logo } from "@/public";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navVariants } from "@/motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function LeftSideHome() {
	const pathname = usePathname();
	const [isActive, setIsActive] = useState(false);
	const { isDarkMode, toggleTheme } = useTheme();

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	return (
		<>
			<motion.div
				variants={navVariants}
				initial="initial"
				whileInView="enter"
				viewport={{ once: true }}
				className="w-full flex items-center justify-between gap-5 padding-x py-[12px] relative z-[999] backdrop-blur-sm">
				<div>
					<Image
						src={logo}
						alt="logo"
						width={40}
						height={40}
					/>
				</div>
				<div className="z-10">
					<div
						onClick={() => {
							setIsActive(!isActive);
						}}
						className="w-[40px] h-[40px] rounded-full bg-black cursor-pointer flex items-center justify-center relative">
						<div
							className={`w-[50%] h-[2px] bg-white absolute ${
								!isActive && "top-[45%]"
							} transform -translate-x-1/2 -translate-y-1/2`}
							style={{
								transform: isActive ? "rotate(45deg)" : "none",
								transition: "transform 0.3s",
							}}
						/>
						<div
							className={`w-[50%] h-[2px] bg-white absolute ${
								!isActive && "top-[55%]"
							} transform -translate-x-1/2 -translate-y-1/2`}
							style={{
								transform: isActive ? "rotate(-45deg)" : "none",
								transition: "transform 0.3s",
							}}
						/>
					</div>
					<button
							onClick={toggleTheme}
							style={{ display: !isActive?"block":"none" }}
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
				</div>
			</motion.div>
			
			<AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
		</>
	);
}
