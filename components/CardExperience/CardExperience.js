import styles from './card-experience.module.scss';

const CardExperience = ({
	icon,
	experienceInfo,
	experienceDescription
}) => {
	return (
		<div className={styles.card}>
			<img
				className={styles['a-icon']}
				alt=""
				src={icon}
			/>
			<div className={styles['m-cardText']}>
				<h3 className={styles['a-header']}>{experienceInfo}</h3>
				<p className={styles['a-description']}>{experienceDescription}</p>
			</div>
		</div>
	);
};

export default CardExperience;
