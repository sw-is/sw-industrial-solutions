import NotifificationStateDefault2 from '../HeroFormNotification/notifification-state-default2';
import styles from './hero-section.module.scss';
import HeroForm from '../HeroForm/HeroForm';

function HeroSection ({
	globalItems,
	heroItems,
}) {
	console.log(globalItems);

	return (
		// <>
		// 	<div className={styles.heroContainer}>
		// 		<div className={styles.gradient}>
		//
		//
		// 			<img className={styles.heroIcon} alt="" src="/hero.svg"/>
		//
		// 			<div className={styles.content}>
		//
		//
		// 				<div className={styles.title}>
		// 					<b className={styles.swIndustrialSolutions}>
		// 						S.W. Industrial Solutions OHG
		// 					</b>
		//
		// 					<b className={styles.yourReliablePartnerContainer}>
		// 						<p className={styles.yourReliablePartner}>Your reliable partner</p>
		// 						<p className={styles.yourReliablePartner}>in plant engineering</p>
		// 					</b>
		//
		// 					<div className={styles.text}>
		// 						<p className={styles.yourReliablePartner}>
		// 							End-to-end development and construction for any industrial needs.
		// 						</p>
		// 						<p className={styles.yourReliablePartner}>
		// 							Contact us for a consultation or cooperation!
		// 						</p>
		// 					</div>
		//
		// 				</div>
		// 				{/*<NotifificationStateDefault2*/}
		// 				{/*		iconEMail="/icon-email.svg"*/}
		// 				{/*		icon="/icon.svg"*/}
		// 				{/*		notifificationStateDefaulHeight="5.88rem"*/}
		// 				{/*		signUpFormAlignSelf="unset"*/}
		// 				{/*		signUpFormWidth="37.5rem"*/}
		// 				{/*		eMailFieldHeight="4rem"*/}
		// 				{/*		iconEMailWidth="1.25rem"*/}
		// 				{/*		iconEMailHeight="1.25rem"*/}
		// 				{/*		buttonColor="#fbfcfd"*/}
		// 				{/*		iconWidth="1rem"*/}
		// 				{/*		iconHeight="1rem"*/}
		// 				{/*		showIconEMail*/}
		// 				{/*/>*/}
		//
		// 			</div>
		// 			<div className={'scrollDown'}>
		// 				<div className={'scrollDown1'}>Scroll down</div>
		// 				<img className={'icon'} alt="" src="/icon1.svg"/>
		// 			</div>
		// 		</div>
		// 	</div>
		// </>

		<>
			<div className={styles.gradient}></div>
			<div className={styles['content']}>
				<div className={styles['content__title']}>
					<div className={styles['content__company-name']}>
						{heroItems?.companyName}
					</div>
					<div
						className={
							styles['content__header']
						}
					>
						Your reliable partner <br/>
						in plant engineering{' '}
					</div>
					<div className={styles['content__text']}>
						<p>End-to-end development and construction for any industrial needs.</p>
						<p>Contact us for a consultation or cooperation!</p>
					</div>
				</div>
				<HeroForm/>
				<div className={styles['content__scroll-down']}>
					<div className={styles['content__scroll-text']}>Scroll down</div>
					<img className={styles['content__scroll-icon']} alt="" src="/icon1.svg"/>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
