"use client";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import {
	CTA,
	Contact,
	ContextView,
	Footer,
	Features,
	Hero,
	LogoTicker,
	Pricing,
	Preloader,
	ProductShowcase,
	Testimonials,
	Services,
} from "@/components";
import { useTheme } from "@/contexts/ThemeContext";
import ServicesPage from "./services/page";
import ReviewsPage from "./reviews/page";

export default function App() {
	const [preloaderComplete, setPreloaderComplete] = useState(false);
	const [currentPage, setCurrentPage] = useState('home');
	const [contextData, setContextData] = useState<any>(null);
	const { isDarkMode } = useTheme();

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	// Handle navigation
	useEffect(() => {
		const handleNavigation = (event: CustomEvent) => {
			if (event.detail.page === 'context') {
				setContextData(event.detail.data);
				setCurrentPage('context');
			} else {
				setCurrentPage(event.detail.page);
				setContextData(null);
			}
		};

		window.addEventListener('navigate', handleNavigation as EventListener);
		return () => window.removeEventListener('navigate', handleNavigation as EventListener);
	}, []);

	if (!preloaderComplete) {
		return <Preloader setComplete={setPreloaderComplete} />;
	}

	// Render different components based on current page
	const renderPage = () => {
		switch (currentPage) {
			case 'features':
				return <Features />;
			case 'services':
				return <ServicesPage />;
			case 'reviews':
				return <ReviewsPage />;
			case 'contact':
				return <Contact />;
			case 'context':
				return (
					<ContextView 
						item={contextData} 
						onBack={() => {
							setCurrentPage('features');
							setContextData(null);
						}} 
					/>
				);
			case 'home':
			default:
				return (
					<>
						<Hero />
						<LogoTicker />
						<ProductShowcase />
						<Pricing />
						<Testimonials />
						<CTA />
						<Services />
						<Footer />
					</>
				);
		}
	};

	return (
		<div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
			{renderPage()}
		</div>
	);
}
