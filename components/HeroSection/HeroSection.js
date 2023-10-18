import styles from './hero-section.module.scss';
import HeroForm from '../HeroForm/HeroForm';
import {getContent} from '../../api/apolloClientContext';


function HeroSection() {
	const {heroItems} = getContent();

	return (
		<>
			<div className={styles['gradient']}></div>
			<div className={styles['content']}>
				<div className={styles['content__container']}>
					<h4 className={styles['content__companyName']}>
						{heroItems.companyName}
					</h4>

						<h1	className={
							styles['content__header']
						}>
							<span>{heroItems.mainHeaderLine1}</span>
							<span>{heroItems.mainHeaderLine2}</span>

						</h1>

					<div className={styles['content__text']}>
						<span>{heroItems.descriptionLine1}</span>
						<span>{heroItems.descriptionLine2}</span>
					</div>
				</div>
				<HeroForm/>
				<div className={styles['content__scroll']}>
					<div className={styles['content__scroll-text']}>{heroItems.scrollDown}</div>
					<img className={styles['content__scroll-icon']} src="/icon1.svg"/>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
