import React, { useContext, useEffect, useState } from 'react';import styles from './locale-switch.module.scss';import {supportedLocales, changeLocale} from '../../localisation/localisation';import { LocaleContext } from '../../localisation/localeContext';function LocaleSwitch ({darkMode}) {	const {locale, setLocale} = useContext(LocaleContext);	const {DE} = supportedLocales;	console.log("darkmode", darkMode);	return(		<div className={styles['m-localeSwitch']}>			<img className={styles['a-icon']} alt="" src={`/language${darkMode?'-white':''}.svg`} />			<button  className={`${styles['a-button']} ${darkMode?styles['--darkMode']:''}`}>				{locale === DE ? 'DEU' : 'ENG'}			</button>			<div className={`${styles['a-divider']} ${darkMode?styles['--darkMode']:''}`}/>			<button className={`${styles['a-button']} ${styles['-inactive']} ${darkMode?styles['--darkMode']:''}`}					onClick={()=> setLocale(changeLocale())}			>				{locale === DE ? 'ENG' : 'DEU'}			</button>		</div>	)}export default LocaleSwitch;