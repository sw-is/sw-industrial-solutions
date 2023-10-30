import React, {createContext, useContext} from 'react';import {useSuspenseQuery} from '@apollo/experimental-nextjs-app-support/ssr';import {GET_CONTENT} from '../api/queries';const ContentContext = createContext({	queryData: {loading: true, error: false},	refetch: (locale) =>  useSuspenseQuery(GET_CONTENT, {		variables: { locale },	})});export const ContentProvider = ({locale, setLocale, children}) => {	const {data, refetch, error} = useSuspenseQuery(GET_CONTENT, {		variables: { locale },	});	const value = {queryData:{data, loading:false, error}, refetch, locale, setLocale};	return(		<ContentContext.Provider value={value}>{children}</ContentContext.Provider>	);}export const useContentContext = () => {	const context = useContext(ContentContext);	if(!context){		throw new Error(			'useQueryResult must be used within a ContentProvider'		)	}	return context;}export const getContent = () =>{const {queryData, locale, refetch, setLocale } = useContentContext();const content = queryData.data;// const setLoading= (param) => {// 	param = true;// };const contentResponse = {	loading: queryData.loading,	error: queryData.error,	locale,	setLocale,	// setLoading: function(param)  {	// 	param = true;	// }.bind(this),	globalItems: content?.globalsCollection?.items[0] || {} ||this.setLoading(this.loading),	heroItems: content?.topIntroductionCollection?.items[0],	refetch};	return  contentResponse;}// import {ApolloClient, ApolloLink, InMemoryCache, HttpLink} from '@apollo/client';// import {onError} from '@apollo/client/link/error';////// // import { createFragmentRegistry } from "@apollo/client/cache";// // import {GLOBALS, HERO_SECTION} from './queries';//// const cache = new InMemoryCache();// // cache: new InMemoryCache({// //                            fragments: createFragmentRegistry(GLOBALS, HERO_SECTION)// //                          })// console.log("-> process.env.CONTENT_ACCESS_TOKEN", process.env.CONTENT_ACCESS_TOKEN);// console.log("-> process.env.CONTENT_URI", process.env.CONTENT_URI);// // const httpLink = createHttpLink({// // 	                                uri: process.env.CONTENT_URI// //                                 });//// // const afterwareLink = new ApolloLink((operation, forward) => {// // 	return forward(operation).map(response => {// // 		const context = operation.getContext();// // 		const {// // 			response: {// // 				headers// // 			}// // 		} = context;// //// // 		if (headers) {// // 			const requestId = headers.get("X-Contentful-Request-Id");// //// // 			if (requestId) {// // 				console.log("requestId", requestId);// // 			}// //// // 		}// // 		return response;// // 	});// // });// //// // const link = afterwareLink.concat(httpLink);// // console.log("-> link", link);//// const link = new HttpLink({// 	                            uri: process.env.CONTENT_URI,// 	                          //  credentials: 'same-origin',// 	                            fetchOptions: {// 		                            mode: 'no-cors',// 	                            },// 	                            headers: {// 		                            Authorization: `Bearer ${process.env.CONTENT_ACCESS_TOKEN}`,// 	                            },//                             });////// const client = new ApolloClient({// 																//	uri:  process.env.CONTENT_URI,// 	                                link:// 	                                //link,// 			                                ApolloLink.from([// 		                                                      onError(({ graphQLErrors, networkError }) => {// 			                                                      if (graphQLErrors) {// 				                                                      graphQLErrors.map(({ message, locations, path }) =>// 						                                                                        console.log(// 								                                                                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`// 						                                                                        )// 				                                                      )// 			                                                      }// 			                                                      if (networkError) console.log(`[Network error]: ${networkError}`)// 		                                                      }),// 				                                                link// 	                                                      ]),// 	                                cache,//                                 });//////  export default client;