import React from 'react';
import Head from 'next/head';
//import client from '../api/apolloClient';
//import {ApolloProvider, useQuery} from '@apollo/client';
//import '../styles/global.css';
import '../styles/index.scss';
import {ApolloWrapper} from '../lib/apollo-wrapper';

function App ({Component, pageProps}) {
	return (
		<ApolloWrapper>
			<Head>
				<title>S.W. Industrial Solutions</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<Component {...pageProps} />
		</ApolloWrapper>
	);
}

export default App;
