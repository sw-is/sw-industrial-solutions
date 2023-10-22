import React, { useEffect, useState } from 'react';
import styles from './menu.module.scss';
import LocaleSwitch from '../LocaleSwitch/LocaleSwitch';
import { useSwipeable } from 'react-swipeable';

function Menu () {

	const [viewport, setViewport] = useState(0);
	const [mobileMenu, setMobileMenu] = useState(false);

	const toggleMobileMenu = ()=> {
		setMobileMenu(!mobileMenu)
	}


	const swipeActions = useSwipeable({
		onSwipeStart: () => toggleMobileMenu(),
		onSwiped: () => toggleMobileMenu(),
	});



	useEffect(() => {
		setViewport(window.innerWidth);

		function handleViewportResize () {
			setViewport(window.innerWidth);
		}

		window.addEventListener('resize', handleViewportResize);
		return () => {
			window.removeEventListener('resize', handleViewportResize);
		};

	}, []);
	const mobileDevice = viewport <= 799;

	return (
		mobileDevice ?
			<>
				<div className={styles['menu']}>
					<div className={styles['o-content']}>
						<img className={styles['m-logo']}
								 alt=""
								 src="/sw-logo-color.svg"
						/>

						<button className={styles['a-button']} onClick={toggleMobileMenu}>
							{!mobileMenu ? 'Menu' : 'Close'}
						</button>
					</div>

					{mobileMenu ?
            <div className={styles['o-mobileMenu']} {...swipeActions}>
						<div className={styles['m-navigationBlock']}>
							<button className={styles['a-button']}>
								About
							</button>
							<button className={styles['a-button']}>
								Services
							</button>
							<button className={styles['a-contactUsButton']}>
								Contact Us
							</button>
							<LocaleSwitch />
						</div>
						</div>
						: null}
				</div>

			</>
			:
			<div className={styles['menu']}
			>
				<div className={styles['o-content']}>
					<img className={styles['m-logo']} alt="" src="/sw-logo-color.svg" />
					<div className={styles['m-navigationBlock']}>
						<button className={styles['a-button']}>
							About
						</button>
						<button className={styles['a-button']}>
							Services
						</button>
						<button className={styles['a-button']}>
							Contact
						</button>
					</div>
					<div className={styles['m-leftBlock']}>
						<LocaleSwitch />
						<button className={styles['a-contactUsButton']}>
							Contact Us
						</button>
					</div>
				</div>
			</div>

	);
}

export default Menu;
