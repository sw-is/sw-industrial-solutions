import {useMemo} from 'react';
import styles from 'components/unprocessed/state-default-type-c-t-a-down.module.css';

const StateDefaultTypeCTADown = ({
	                                 button,
	                                 icon,
	                                 arrowWidth,
	                                 arrowHeight,
	                                 iconWidth,
	                                 iconHeight,
                                 }) => {
	const arrow1Style = useMemo(() => {
		return {
			width: arrowWidth,
			height: arrowHeight,
		};
	}, [arrowWidth, arrowHeight]);

	const icon6Style = useMemo(() => {
		return {
			width: iconWidth,
			height: iconHeight,
		};
	}, [iconWidth, iconHeight]);

	return (
			<div className={styles.statedefaultTypectaDown}>
				<div className={styles.button}>{button}</div>
				<div className={styles.arrow} style={arrow1Style}>
					<img className={styles.icon} alt="" src={icon} style={icon6Style}/>
				</div>
			</div>
	);
};

export default StateDefaultTypeCTADown;
