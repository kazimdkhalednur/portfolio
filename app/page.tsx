'use client';

import HeroSection from './components/HeroSection';
import WorkExperience from './components/WorkExperience';
// import TechnicalMetrics from './components/TechnicalMetrics';
import ContactSection from './components/ContactSection';
import Projects from './components/Projects';
import Volunteer from './components/Volunteers';
import Education from './components/Educations';


export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			<WorkExperience />
			<Projects />
			<Volunteer />
			<Education />
			{/* <TechnicalMetrics /> */}
			<ContactSection />
		</main>
	);
}
