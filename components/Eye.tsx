"use client";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Eye() {
	const emojiRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const emojiFaceRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		const emoji = emojiRef.current;
		const emojiFace = emojiFaceRef.current;

		if (!wrapper || !emoji || !emojiFace) return;

		const moveEvent = (e: MouseEvent) => {
			const wrapperRect = wrapper.getBoundingClientRect();

			const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
			const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

			const emojiMaxDisplacement = 50;
			const emojiFaceMaxDisplacement = 75;

			const emojiDisplacementX =
				(relX / wrapperRect.width) * emojiMaxDisplacement;
			const emojiDisplacementY =
				(relY / wrapperRect.height) * emojiMaxDisplacement;
			const emojiFaceDisplacementX =
				(relX / wrapperRect.width) * emojiFaceMaxDisplacement;
			const emojiFaceDisplacementY =
				(relY / wrapperRect.height) * emojiFaceMaxDisplacement;

			gsap.to(emoji, {
				x: emojiDisplacementX,
				y: emojiDisplacementY,
				ease: "power3.out",
				duration: 0.35,
			});

			gsap.to(emojiFace, {
				x: emojiFaceDisplacementX,
				y: emojiFaceDisplacementY,
				ease: "power3.out",
				duration: 0.35,
			});
		};

		const leaveEvent = () => {
			gsap.to([emoji, emojiFace], {
				x: 0,
				y: 0,
				ease: "power3.out",
				duration: 1,
			});
		};

		wrapper.addEventListener("mousemove", moveEvent);
		wrapper.addEventListener("mouseleave", leaveEvent);

		return () => {
			wrapper.removeEventListener("mousemove", moveEvent);
			wrapper.removeEventListener("mouseleave", leaveEvent);
		};
	}, []);

	return (
		<div
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] py-8"
			ref={wrapperRef}>
			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] xs:w-[200px] sm:w-[200px] h-[250px] xs:h-[200px] sm:h-[200px] bg-gradient-to-br from-blue-400 to-purple-600 rounded-full shadow-2xl"
				ref={emojiRef}>
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[225px] sm:w-[160px] xs:w-[160px] sm:h-[125px] xs:h-[125px] h-[200px] flex flex-col"
					ref={emojiFaceRef}>
					<div className="flex flex-1 justify-between">
						<motion.div
							animate={{
								rotate: [0, 360],
								transition: {
									duration: 4,
									ease: "linear",
									repeat: Infinity,
								},
							}}
							className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center shadow-lg"
						>
							<div 
								className="w-6 h-6 bg-black"
								style={{
									clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
								}}
							></div>
						</motion.div>
						 <motion.div
							animate={{
								rotate: [0, 360],
								transition: {
									duration: 4,
									ease: "linear",
									repeat: Infinity,
								},
							}}
							className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center shadow-lg"
						>
							<div 
								className="w-6 h-6 bg-black"
								style={{
									clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
								}}
							></div>
						</motion.div> 
					</div>
					<div className="flex flex-1 justify-center items-start">
						<motion.div
							animate={{
								borderRadius: ["50% 50% 50% 50%", "0% 0% 100% 100%", "0% 0% 100% 100%", "50% 50% 50% 50%"],
								width: [30, 80, 90, 30],
								height: [15, 40, 35, 15],
								borderTopWidth: [0, 0, 0, 0],
								borderBottomWidth: [4, 8, 6, 4],
								borderLeftWidth: [0, 4, 3, 0],
								borderRightWidth: [0, 4, 3, 0],
							}}
							transition={{
								duration: 4,
								ease: [0.4, 0, 0.2, 1],
								repeat: Infinity,
								repeatType: "reverse",
							}}
							className="bg-transparent border-red-600 border-b-4"
							style={{
								borderStyle: "solid",
								borderColor: "#dc2626",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
