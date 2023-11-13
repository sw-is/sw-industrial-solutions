'use client';

import React from 'react';
import { RingLoader } from 'react-spinners';
import { NextSeo } from 'next-seo';
import {getContent} from '../api/apolloClientContext';
import SectionMenu from '../components/SectionMenu/SectionMenu';
import SectionHero from '../components/SectionHero/SectionHero';
import SectionAbout from '../components/SectionAbout/SectionAbout';
import SectionCallToAction from '../components/SectionCallToAction/SectionCallToAction';
import SectionServices from '../components/SectionServices/SectionServices';
import SectionContact from '../components/SectionContact/SectionContact';
import SectionContactForm from '../components/SectionContactForm/SectionContactForm';
import SectionFooter from '../components/SectionFooter/SectionFooter';

function SWLandingLayout () {
	const {loading, error, globalItems, heroItems} = getContent();

	if (loading) {
		return (
			<div className={'loaderContainer'}>
				<RingLoader size={50} color={'#004aad'} loading="true"/>
		  </div>
		);
	}
	if (error) {
		return (
			<div>Error: {error.message}</div>
		);
	}

	return (
		<div className={'mainContainer'}>
			<NextSeo
				title={globalItems.companyName}
				description={heroItems.mainHeaderLine1}
				canonical="https://www.canonical.ie/"
				openGraph={{
					url: 'https://www.canonical.ie/',
					title: `${globalItems.companyName}`,
					description: `${heroItems.mainHeaderLine1}`,
					images: [
						{
							url: 'https://www.example.ie/sw-logo-color.svg',
							width: 800,
							height: 600,
							alt: `${globalItems.companyName}`,
							type: 'image/svg'
						}
					],
					siteName: `${globalItems.companyName}`
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image'
				}}
			/>
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
