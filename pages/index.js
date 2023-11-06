"use client";

import {getContent} from '../api/apolloClientContext';
import MenuSection from '../components/MenuSection/MenuSection';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import CallToActionSection from '../components/CallToActionSection/CallToActionSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import ContactSection from '../components/ContactSection/ContactSection';
import ContactFormSection from '../components/ContactFormSection/ContactFormSection';
import FooterSection from '../components/FooterSection/FooterSection';

function SWLandingLayout() {
	const {loading, error} = getContent();

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className={'mainContainer'}>
			<MenuSection/>
			<HeroSection/>
			<AboutSection/>
			<CallToActionSection/>
			<ServicesSection/>
			<ContactSection/>
			<ContactFormSection/>
			<FooterSection/>
		</div>
	);
}

export default SWLandingLayout;
