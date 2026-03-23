"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { velouraWhite } from "@/public";
import { footerItems, footerSocialsItems } from "@/constants";

export default function Footer() {
	const [showQRCode, setShowQRCode] = useState(false);
	const [qrCodeImage, setQrCodeImage] = useState("");
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	const handleFooterNavigation = (title: string) => {
		// Handle navigation like header menu items
		if (title === 'Home') {
			window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
		} else if (title === 'Portfolio') {
			window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'features' } }));
		} else if (title === 'Services') {
			window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'services' } }));
		} else if (title === 'Customers') {
			window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'customers' } }));
		} else if (title === 'Reviews') {
			window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'reviews' } }));
		} else if (title === 'View Profile') {
			window.open('/files/Veloura_Global.pdf', '_blank', 'noopener,noreferrer');
		}
	};

	const handleWeChatClick = (item: any) => {
		if (item.isWeChat) {
			setQrCodeImage(item.qrCode);
			setShowQRCode(true);
		}
	};

	const handleWhatsAppClick = (item: any) => {
		if (item.isWhatsApp) {
			// Open WhatsApp chat with the number
			window.open(item.href, '_blank');
		}
	};

	return (
		<>
			<div className="w-full bg-black dark:bg-gray-950 py-10 padding-x">
				<div className="w-full flex items-center justify-center flex-col gap-7">
					<div>
						<Image
							src={velouraWhite}
							alt="logo"
							width={150}
							height={40}
						/>
					</div>
					<div className="flex items-center gap-4  xs:flex-col sm:flex-col">
						<p className="paragraph font-normal leading-tight text-[#BCBCBC] dark:text-gray-400 bg-transparent border-none cursor-pointer hover:text-white transition-colors">
							info@velouraexhibition.com
							
						</p>
						<p className="paragraph font-normal leading-tight text-[#BCBCBC] dark:text-gray-400 bg-transparent border-none cursor-pointer hover:text-white transition-colors">
							+971 588860730
						</p>
					</div>
					<div className="flex items-center gap-4  xs:flex-col sm:flex-col">
						{footerItems.map((item) => (
							<button
								onClick={() => handleFooterNavigation(item.title)}
								key={item.id}
								className="paragraph font-normal leading-tight text-[#BCBCBC] dark:text-gray-400 bg-transparent border-none cursor-pointer hover:text-white transition-colors">
								{item.title}
							</button>
						))}
					</div>
					<div className="flex items-center gap-4">
						{footerSocialsItems.map((item) => (
							<div
								key={`social-${item.id}`}
								className="relative"
								onMouseEnter={() => setHoveredItem(item.name)}
								onMouseLeave={() => setHoveredItem(null)}
							>
								{item.isWeChat ? (
									<button
										key={item.id}
										onClick={() => handleWeChatClick(item)}
										className="hover:opacity-80 transition-opacity"
									>
										<Image
											src={item.src}
											alt="WeChat"
											width={30}
											height={30}
										/>
									</button>
								) : item.isWhatsApp ? (
									<button
										key={item.id}
										onClick={() => handleWhatsAppClick(item)}
										className="hover:opacity-80 transition-opacity"
									>
										<Image
											src={item.src}
											alt="WhatsApp"
											width={30}
											height={30}
										/>
									</button>
								) : (
									<Link
										href={item.href}
										key={item.id}
									>
										<Image
											src={item.src}
											alt="logo"
											width={30}
											height={30}
										/>
									</Link>
								)}
								{hoveredItem === item.name && (
									<div 
										key={`tooltip-${item.id}`}
										className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
										{item.name}
									</div>
								)}
							</div>
						))}
					</div>
					<div className="flex items-center">
						<p className="text-[#BCBCBC] dark:text-gray-400 paragraph font-normal">
							{/* © 2024 Your Company, Inc. All rights reserved. */}
						</p>
					</div>
				</div>
			</div>

			{/* QR Code Modal */}
			{showQRCode && (
				<div 
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
					onClick={() => setShowQRCode(false)}
				>
					<div 
						className="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-4"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex justify-between items-center mb-4">
							<h3 className="text-lg font-semibold text-gray-800">Scan WeChat QR Code</h3>
							<button
								onClick={() => setShowQRCode(false)}
								className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
							>
								×
							</button>
						</div>
						<div className="flex justify-center">
							<Image
								src={qrCodeImage}
								alt="WeChat QR Code"
								width={200}
								height={200}
								className="border border-gray-200 rounded"
							/>
						</div>
						<p className="text-center text-sm text-gray-600 mt-4">
							Scan this QR code with WeChat to add us
						</p>
					</div>
				</div>
			)}
		</>
	);
}
