"use client";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { imgDemo } from "@/public";

export default function ImageEye() {
	const imageRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const imageContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		const image = imageRef.current;
		const imageContainer = imageContainerRef.current;

		if (!wrapper || !image || !imageContainer) return;

		const moveEvent = (e: MouseEvent) => {
			const wrapperRect = wrapper.getBoundingClientRect();

			const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
			const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

			const imageMaxDisplacement = 30;
			const containerMaxDisplacement = 50;

			const imageDisplacementX =
				(relX / wrapperRect.width) * imageMaxDisplacement;
			const imageDisplacementY =
				(relY / wrapperRect.height) * imageMaxDisplacement;
			const containerDisplacementX =
				(relX / wrapperRect.width) * containerMaxDisplacement;
			const containerDisplacementY =
				(relY / wrapperRect.height) * containerMaxDisplacement;

			gsap.to(image, {
				x: imageDisplacementX,
				y: imageDisplacementY,
				ease: "power3.out",
				duration: 0.35,
			});

			gsap.to(imageContainer, {
				x: containerDisplacementX,
				y: containerDisplacementY,
				ease: "power3.out",
				duration: 0.35,
			});
		};

		const leaveEvent = () => {
			gsap.to([image, imageContainer], {
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
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] py-8"
			ref={wrapperRef}>
			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full shadow-2xl overflow-hidden"
				ref={imageContainerRef}>
				<motion.div
					animate={{
						rotate: [0, 5, 0, -5, 0],
					}}
					transition={{
						duration: 4,
						ease: "easeInOut",
						repeat: Infinity,
					}}
					className="w-full h-full relative"
					ref={imageRef}>
					<div className="w-full h-full flex items-center justify-center">
						<Image
							src={imgDemo}
							alt="interactive demo image"
							width={300}
							height={300}
							className="w-auto h-auto max-w-[90%] max-h-[90%] object-contain"
						/>
					</div>
					{/* Overlay effects */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
					
					{/* Animated elements around the image */}
					<motion.div
						animate={{
							scale: [1, 1.1, 1],
							opacity: [0.3, 0.7, 0.3],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
					/>
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.6, 0.3],
						}}
						transition={{
							duration: 2.5,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
					/>
					<motion.div
						animate={{
							rotate: [0, 360],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: "linear",
						}}
						className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500 rounded-full -translate-y-1/2"
					/>
				</motion.div>
			</div>
		</div>
	);
}
