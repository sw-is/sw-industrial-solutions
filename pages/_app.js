import React, {useEffect, useState} from 'react';
import Head from 'next/head';
//import '../styles/global.css';
import '../styles/index.scss';
import {ApolloWrapper} from '../lib/apollo-wrapper';
import {ContentProvider} from '../api/apolloClientContext';
import {defineUserLocale} from '../utils/localisation';

if (typeof window !== 'undefined'){
	defineUserLocale();
}

function App ({Component, pageProps}) {
	const [locale, setLocale] = useState('');
	 useEffect(()=>{
		 console.log('localStorage.getItem',localStorage.getItem('locale'))
		 setLocale(localStorage.getItem('locale'));
	},[])

	return (
		locale === '' ? null :
		<ApolloWrapper>
			<ContentProvider locale={locale} setLocale={setLocale}>
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
	);
}

export default App;
