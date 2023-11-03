import React, {useEffect, useState} from 'react';
import Head from 'next/head';
//import '../styles/global.css';
import '../styles/index.scss';

import {LocaleContext} from '../localisation/localeContext';
import {defineUserLocale} from '../localisation/localisation';
import {ApolloWrapper} from '../api/apollo-wrapper';
import { ContentProvider } from '../api/apolloClientContext';



if (typeof window !== 'undefined'){
	defineUserLocale();
}

function App ({Component, pageProps}) {
	const [locale, setLocale] = useState('');
	useEffect(()=>{
		console.log('localStorage.getItem',localStorage.getItem('locale'))
		setLocale(localStorage.getItem('locale'));
	},[locale]);

	const localeContextProps = {locale, setLocale};

	return (
	<LocaleContext.Provider value={localeContextProps}>
		<ApolloWrapper>
			<ContentProvider locale={locale}>

			<Head>
				<title>S.W. Industrial Solutions</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<Component {...pageProps} />

				</ContentProvider>
			</ApolloWrapper>
		</LocaleContext.Provider>
	);
}

export default App;
