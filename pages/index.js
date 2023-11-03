"use client";

import {getContent} from '../api/apolloClientContext';
import Menu from '../components/Menu/Menu';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
//export const dynamic = "force-dynamic";



function SWLandingLayout() {
	const {loading, error} = getContent();

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className={'mainContainer'}>
			<Menu/>
			<HeroSection/>
			<AboutSection/>

			{/*	<div className={styles.contentBlock1}>*/}
			{/*		<div className={styles.title5}>*/}
			{/*			<b className={styles.letsGetStarted}>Let`s get started</b>*/}
			{/*			<b className={styles.pushYourProject}>*/}
			{/*				Push your project to next level!*/}
			{/*			</b>*/}
			{/*		</div>*/}
			{/*		<StateDefaultTypeCTABase2*/}
			{/*				button="Contact Us"*/}
			{/*				stateDefaultTypeCTABaseAlignSelf="unset"*/}
			{/*		/>*/}
			{/*	</div>*/}
			{/*	<div className={styles.services}>*/}
			{/*		<div className={styles.title6}>*/}
			{/*			<b className={styles.letsGetStarted}> Services</b>*/}
			{/*			<b className={styles.technologiesAndPrinciples}>*/}
			{/*				Solutions we offer*/}
			{/*			</b>*/}
			{/*		</div>*/}
			{/*		<div className={styles.contentBlock2}>*/}
			{/*			<div className={styles.blocks}>*/}
			{/*				<div className={styles.block1}>*/}
			{/*					<div className={styles.customerSuccess}>Customer Success</div>*/}
			{/*					<b className={styles.consulting}>Consulting</b>*/}
			{/*					<div className={styles.description}>*/}
			{/*						For clients who need a highly custom deployment, we provide*/}
			{/*						consulting and professional services to give you exactly what*/}
			{/*						you need.*/}
			{/*					</div>*/}
			{/*				</div>*/}
			{/*				<div className={styles.block1}>*/}
			{/*					<div className={styles.customerSuccess}>Customer Success</div>*/}
			{/*					<b className={styles.consulting}>Engineering</b>*/}
			{/*					<div className={styles.description}>*/}
			{/*						We offer full-cycle strategies, constructions and systems for*/}
			{/*						your projects — in various sectors, from concept to*/}
			{/*						implementation and optimization of facilities.*/}
			{/*					</div>*/}
			{/*				</div>*/}
			{/*				<div className={styles.block1}>*/}
			{/*					<div className={styles.customerSuccess}>Customer Success</div>*/}
			{/*					<b className={styles.consulting}>Construction</b>*/}
			{/*					<div className={styles.description}>*/}
			{/*						High attention to detail and rapid deployment are crucial to*/}
			{/*						ensure that our customers benefit — flexibly and quickly. Our*/}
			{/*						team ensures that your project is delivered on time.*/}
			{/*					</div>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*			<div className={styles.text}>*/}
			{/*				Please, contact us for a consultation or cooperation!*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	<ContactCard/>*/}
			{/*	<ContainerForm/>*/}
			{/*	<FormContainer/>*/}
			{/*</div>*/}
			{/*<OnoffNoneFormatDesktop*/}
			{/*		sWLogo="/sw-logo1.svg"*/}
			{/*		icon="/icon13.svg"*/}
			{/*		onoffNoneFormatDesktopPosition="absolute"*/}
			{/*		onoffNoneFormatDesktopTop="0rem"*/}
			{/*		onoffNoneFormatDesktopLeft="0rem"*/}
			{/*		blockWidth="74.99rem"*/}
			{/*		sWLogoIconWidth="16.44rem"*/}
			{/*		sWLogoIconHeight="3.25rem"*/}
			{/*		iconWidth="1.5rem"*/}
			{/*		iconHeight="1.5rem"*/}
			{/*		rectangleDivWidth="0.06rem"*/}
			{/*		rectangleDivHeight="1.25rem"*/}
			{/*/>*/}
		</div>
	);
}

export default SWLandingLayout;
