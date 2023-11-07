"use client";

import React from 'react';
import { RingLoader } from "react-spinners";
import {getContent} from '../api/apolloClientContext';
import SectionMenu from '../components/SectionMenu/SectionMenu';
import SectionHero from '../components/SectionHero/SectionHero';
import SectionAbout from '../components/SectionAbout/SectionAbout';
import SectionCallToAction from '../components/SectionCallToAction/SectionCallToAction';
import SectionServices from '../components/SectionServices/SectionServices';
import SectionContact from '../components/SectionContact/SectionContact';
import SectionContactForm from '../components/SectionContactForm/SectionContactForm';
import SectionFooter from '../components/SectionFooter/SectionFooter'


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
			<SectionMenu/>
			<SectionHero/>
			<SectionAbout/>
		   <SectionCallToAction/>
			<SectionServices/>
			<SectionContact/>
			<SectionContactForm/>
	       <SectionFooter/>
		</div>
	);
}

export default SWLandingLayout;
