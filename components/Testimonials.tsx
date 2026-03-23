import Image from "next/image";
import { Heading } from "@/components";
import { motion } from "framer-motion";
import { textAnimation } from "@/motion";
import { testimonials } from "@/constants";

export default function Testimonials() {
	const phares = ["Our Mission"];
	const phares1 = [
		"We don’t just build exhibition stalls—we create experiences that leave a lasting impact.",
			"Our clients trust us to deliver creativity, quality, and results, ",
			"and their feedback speaks volumes about the passion we bring to every project."
	];
	return (
		<div className="w-full flex flex-col items-center padding-x py-10 gap-20 bg-gradient-to-br from-gray-50 to-gray-100  xs:gap-10 sm:gap-10 dark:from-gray-900 dark:to-gray-800">
			<div className="flex flex-col items-center gap-5">
				<div className="overflow-hidden">
					{/* <motion.button
						className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black font-dmSans text-sm font-medium leading-tight tracking-[-0.02188rem]"
						variants={textAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}>
						Version 2.0 is here
					</motion.button> */}
				</div>
				<div>
					<Heading
						classname="heading font-bold xs:text-center sm:text-center"
						title={phares}
					/>
				</div>
				<div>
					<Heading
						classname="paragraph text-center font-normal xs:text-center sm:text-center"
						title={phares1}
					/>
				</div>
			</div>
			<motion.div className="w-full flex gap-5 xs:flex-col sm:flex-col xs:w-full py-10 sm:w-full overflow-hidden h-[750px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10">
				<motion.div
					animate={{ y: "-50%" }}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						duration: 30,
					}}
					className="w-1/3 flex flex-col h-fit xs:w-full sm:w-full">
					{[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map(
						(item, index) => (
							<div
								className="flex flex-col gap-5"
								key={`${item.id}-${index}`}>
								<div className="p-10 mb-5 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
									 
									<div className="w-full h-auto rounded-lg overflow-hidden">
										<Image
											src={item.src}
											alt="asd"
											width={1200}
											height={1200}
											className="w-full h-auto object-cover"
										/>
									</div>
									<div className="flex items-center gap-5">
									
										<div className="flex flex-col">
											<h1 className="text-[#010D3E] font-dmSans text-xl font-bold leading-tight">
												{item.name}
											</h1>
											{/* <p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
												{item.username}
											</p> */}
											<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
												{item.text}
											</p> 
										</div>
									</div>
								</div>
							</div>
						),
					)}
				</motion.div>
				<motion.div
					className="w-1/3 flex flex-col h-fit xs:hidden sm:hidden"
					animate={{ y: "-50%" }}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						duration: 15,
					}}>
					{[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map(
						(item, index) => (
							<div
								className="flex flex-col gap-5"
								key={`${item.id}-${index}`}>
								<div className="p-10 mb-5 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
									
									<div className="w-full h-auto rounded-lg overflow-hidden">
										<Image
											src={item.src}
											alt="asd"
											width={1200}
											height={1200}
											className="w-full h-auto object-cover"
										/>
									</div>
										<div className="flex flex-col">
											<h1 className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
												{item.name}
											</h1>
											<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
												{item.username}
											</p>
										</div>
									</div>
								
							</div>
						),
					)}
				</motion.div>
				<motion.div
					className="w-1/3 flex flex-col h-fit xs:hidden sm:hidden"
					animate={{ y: "-50%" }}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						duration: 16,
					}}>
					{[...testimonials.slice(6), ...testimonials.slice(6)].map((item, index) => (
						<div
							className="flex flex-col gap-5"
							key={`${item.id}-${index}`}>
							<div className="p-10 mb-5 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
								
								<div className="w-full h-auto rounded-lg overflow-hidden">
										<Image
											src={item.src}
											alt="asd"
											width={1200}
											height={1200}
											className="w-full h-auto object-cover"
										/>
									</div>
									<div className="flex flex-col">
										<h1 className="text-[#010D3E] font-dmSans align-middle text-xl font-normal leading-tight">
											{item.name}
										</h1>
										<p className="text-[#010D3E] font-dmSans align-middle text-xl font-normal leading-tight">
											{item.username}
										</p>
									</div>
								</div>
							
						</div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}
