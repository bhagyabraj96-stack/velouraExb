"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextMask } from "@/animations";
import { imgDemo, productImage, pyramid, tube } from "@/public";
import { useRef } from "react";
import { portpofolio } from "@/constants";
import Eye from "./Eye";
import Heading from "./Heading";

export default function ProductShowcase() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const cq = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const mq = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const phares1 = ["Experience Our Work", "Feel the Difference."];
	const phares2 = [
		"Celebrate the joy of accomplishment with an app",
		"designed to track your progress and motivate your",
		"efforts.",
	];
	const phares3 = [
		"Our Gallery is a testament to our commitment to excellence.",
	];

	const handleItemClick = (item: any) => {
		if (item.context && item.context.length > 0) {
			// Navigate to context view page with the item's context
			window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'context', data: item } }));
		}
	};
	return (
		<div className="w-full padding-x py-10 bg-gradient-to-b from-white to-[#d2dcff] dark:from-gray-900 dark:to-gray-800">
			<div className="w-full flex flex-col gap-10">
				<div className="w-full flex items-center flex-col gap-3">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							type: "spring",
						}}
						viewport={{ once: true }}>
						
					</motion.div>
					<div>
						<Heading
							classname="heading text-center font-bold leading-tight tracking-[-2.7px] bg-gradient-to-b from-black to-[#001E7F] bg-clip-text "
							title={phares1}
						/>
					</div>
					 <div>
						 {/* <h1 className="text-[#010D3E] font-dmSans paragraph font-normal leading-tight text-center block xs:hidden sm:hidden">
							<TextMask>{phares2}</TextMask>
						</h1>  */}
						<h1 className="text-[#010D3E] font-dmSans paragraph font-normal leading-tight text-center hidden xs:block sm:block">
							<TextMask>{phares3}</TextMask>
						</h1>
					</div> 
				</div>
				<div
					className="relative"
					ref={container}>
					{/* <motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							type: "spring",
						}}
						viewport={{ once: true }}
						className="w-full flex items-center justify-center">
						<Image
							src={productImage}
							alt="productImage"
							width={600}
							height={400}
							className="w-full h-full object-cover"
						/>
					</motion.div> */}
					{/* Features Grid - Scattered on Desktop, Limited on Mobile */}
          <div className="mdd:relative w-full h-[800px] xs:h-auto sm:h-auto lg:h-[800px] xl:h-[800px] hidden mdd:block">
            {portpofolio.map((item, index) => (
              <div
                key={item.id}
                className={`mdd:absolute xs:w-[250px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                  item.context && item.context.length > 0 ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleItemClick(item)}
                style={{
                  top: `${(index * 15) % 70}%`,
                  left: `${(index * 25) % 80}%`,
                  transform: `rotate(${(index % 3 - 1) * 5}deg)`,
                  zIndex: index
                }}
              >
                <div className="w-48 h-32 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#010D3E] font-dmSans text-lg font-normal leading-tight mb-2">
                    {item.name}
                  </h1>
                  {item.context && item.context.length > 0 && (
                    <p className="text-xs text-gray-500">
                      Click to view {item.context.length} {item.context.length === 1 ? 'item' : 'items'}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout - Maximum 3 Items */}
           <div className="w-full mdd:hidden h-[800px] xs:h-auto sm:h-auto lg:h-[800px] xl:h-[800px]  md:block flex flex-col items-center justify-center lg:relative">
           {portpofolio.slice(0, 3).map((item, index) => (
              <div
                key={item.id}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4 xs:w-[250px] lg:absolute ${
                  item.context && item.context.length > 0 ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleItemClick(item)}
                style={{
                  top: `${(index * 15) % 70}%`,
                  left: `${(index * 25) % 80}%`,
                  transform: `rotate(${(index * 3 - 1) * 5}deg)`,
                  zIndex: index
                }}
              >
                <div className="w-48 h-32 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#010D3E] font-dmSans text-lg font-normal leading-tight mb-2">
                    {item.name}
                  </h1>
                  {item.context && item.context.length > 0 && (
                    <p className="text-xs text-gray-500">
                      Click to view {item.context.length} {item.context.length === 1 ? 'item' : 'items'}
                    </p>
                  )}
                </div>
              </div>
            ))}
			 {portpofolio.length > 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-6"
              >
                <p className="text-sm text-gray-600">
                  And {portpofolio.length - 3} more items...
                </p>
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'features' } }));
                  }}
                  className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium underline"
                >
                  View all portfolio items
                </button>
              </motion.div>
            )}

          </div>

         
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							type: "spring",
						}}
						viewport={{ once: true }}
						className="absolute -left-40 bottom-0 xs:hidden sm:hidden"
						style={{ y: mq }}>
						<Image
							src={tube}
							alt="tube-hero-img"
							width={250}
							height={250}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							type: "spring",
						}}
						viewport={{ once: true }}
						style={{ y: cq }}
						className="absolute -right-32 -top-20 xs:hidden sm:hidden">
						{/* <Image
							src={pyramid}
							alt="pyramid-hero-img"
							width={250}
							height={250}
						/> */}
						
					</motion.div>
				</div>
			</div>
		</div>
	);
}
