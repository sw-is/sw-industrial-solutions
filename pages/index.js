"use client";

import React from 'react';
import { RingLoader } from "react-spinners";
import {getContent} from '../api/apolloClientContext';
import MenuSection from '../components/MenuSection/MenuSection';
import HeroSection from '../components/HeroSection/HeroSection';
import SectionAbout from '../components/SectionAbout/SectionAbout';
import SectionCallToAction from '../components/SectionCallToAction/SectionCallToAction';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import SectionContact from '../components/SectionContact/SectionContact';
import SectionContactForm from '../components/SectionContactForm/SectionContactForm';
import FooterSection from '../components/FooterSection/FooterSection';


function SWLandingLayout() {
	const {loading, error} = getContent();

	if (loading) return (
			<div className={'loaderContainer'}>
				<RingLoader size={50} color={"#004aad"} loading="true"/>
		  </div>
	);
	if (error) return (
		<div>Error: {error.message}</div>
	);

	return (
		<div className={'mainContainer'}>
			<MenuSection/>
			<HeroSection/>
			<SectionAbout/>
		   <SectionCallToAction/>
			<ServicesSection/>
			<SectionContact/>
			<SectionContactForm/>
	<FooterSection/>
		</div>
	);
}

export default SWLandingLayout;
