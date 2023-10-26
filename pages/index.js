"use client";
import AboutSection from '../components/AboutSection/AboutSection';

export const dynamic = "force-dynamic";

import HeroSection from '../components/HeroSection/HeroSection';
import Menu from '../components/Menu/Menu';
import {getContent} from '../api/apolloClientContext';

// import AboutContainer from '../components/unprocessed/about-container';
// import IndustryDirectionsContainer from '../components/unprocessed/industry-directions-container';
// import StateDefaultTypeCTABase2 from '../components/unprocessed/state-default-type-c-t-a-base2';
// import ContactCard from '../components/unprocessed/contact-card';
// import ContainerForm from '../components/unprocessed/container-form';
// import FormContainer from '../components/unprocessed/form-container';
// import OnoffNoneFormatDesktop from '../components/Footer/onoff-none-format-desktop';


function SWLandingPage() {
	const {loading, error} = getContent();
	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	return (
		<>

			<div className={'mainContainer'}>
				<Menu/>
				<HeroSection/>
				<AboutSection/>
				{/*<div className={styles.landing}>*/}

				{/*	<IndustryDirectionsContainer/>*/}
				{/*	<div className={styles.ourValues}>*/}
				{/*		<div className={styles.title}>*/}
				{/*			<b className={styles.letsGetStarted}>Our values</b>*/}
				{/*			<b className={styles.technologiesAndPrinciples}>*/}
				{/*				Technologies and principles*/}
				{/*			</b>*/}
				{/*		</div>*/}
				{/*		<div className={styles.contentBlock}>*/}
				{/*			<div className={styles.level1}>*/}
				{/*				<div className={styles.quality}>*/}
				{/*					<div className={styles.qualityChild}/>*/}
				{/*					<div className={styles.cardContent}>*/}
				{/*						<b className={styles.title1}>Quality</b>*/}
				{/*						<div className={styles.description}>*/}
				{/*							We work in accordance with group-specific rules and*/}
				{/*							standards. + Text*/}
				{/*						</div>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*				<div className={styles.responsibility}>*/}
				{/*					<div className={styles.qualityChild}/>*/}
				{/*					<div className={styles.cardContent}>*/}
				{/*						<b className={styles.title2}>Responsibility</b>*/}
				{/*						<div className={styles.description}>*/}
				{/*							Responsibility not only towards our customers, but also*/}
				{/*							towards our employeers*/}
				{/*						</div>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className={styles.level1}>*/}
				{/*				<div className={styles.quality}>*/}
				{/*					<div className={styles.qualityChild}/>*/}
				{/*					<div className={styles.cardContent}>*/}
				{/*						<b className={styles.title2}>Team work</b>*/}
				{/*						<div*/}
				{/*								className={styles.description}*/}
				{/*						>{`Highly qualified specialists are a key value and the foundation of our process. `}</div>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*				<div className={styles.quality}>*/}
				{/*					<div className={styles.qualityChild}/>*/}
				{/*					<div className={styles.cardContent}>*/}
				{/*						<b className={styles.title2}>*/}
				{/*							Timely Results with Flexibility*/}
				{/*						</b>*/}
				{/*						<div className={styles.description}>*/}
				{/*							Our strengths is meeting deadlines. And also project support*/}
				{/*							during the active and passive phases of production.*/}
				{/*						</div>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
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
		</>
	);
};

export default SWLandingPage;
