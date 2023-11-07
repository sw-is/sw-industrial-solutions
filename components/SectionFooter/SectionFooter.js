import {Link} from 'react-scroll';
import {getContent} from '../../api/apolloClientContext';
import LocaleSwitch from "../LocaleSwitch/LocaleSwitch";

import styles from "./section-footer.module.scss";

const NavBlock = () => {
	const {globalItems} = getContent();
	return(
		<nav className={styles['m-navigationBlock']}>
			<Link to="about" spy={true} smooth={true}>
				<button className={styles["a-button"]}>
					{globalItems.menuAbout}
				</button>
			</Link>
			<Link to="services" spy={true} smooth={true}>
				<button className={styles["a-button"]}>
					{globalItems.menuServices}
				</button>
			</Link>
			<Link to="contact" spy={true} smooth={true}>
				<button className={styles["a-button"]}>
					{globalItems.menuContact}
				</button>
			</Link>
		</nav>
	)
};
const SectionFooter = () => {
	const {globalItems} = getContent();
	const year= new Date().getFullYear();

	return (
		<footer className={styles['section-container']}>
			<div className={styles['o-container']}>
					<div className={styles['m-navigation']}>
						<div className={styles['o-content']}>
							<div className={styles['m-logoContainer']}>
							<img className={styles['a-logo']} alt="" src="/sw-logo-mono.svg" />
							</div>
							<div className={styles['m-leftBlock']}>
							  <NavBlock/>
								<div className={styles['m-btnContainer']}>
									<LocaleSwitch darkMode={true}/>
									<Link  to="top" spy={true} smooth={true}>
									<button className={styles['a-upButton']}>
											{globalItems.btnUp}
									</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className={styles['m-info']}>
						<div className={styles['m-infoContacts']}>
							<p className={styles['a-phone']}>
								{globalItems.mainPhoneNumber}
							</p>
							<p className={styles['a-email']}>
								{globalItems.mainEmail}
							</p>
							<p className={styles['a-address']}>
								{globalItems.mainAddress}
							</p>
							<p className={styles['a-licence']}>
								{globalItems.ustId}
							</p>
						</div>
						<div className={styles['a-copyright']}>
							{globalItems.copyright1}  {year} {globalItems.companyName}. {globalItems.copyright2}
						</div>
					</div>
			</div>
		</footer>
	);
};
export default SectionFooter;
