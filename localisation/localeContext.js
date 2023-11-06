import {createContext, useContext} from 'react';
import { supportedLocales } from './localisation';
const {DE, EN} = supportedLocales;

export const LocaleContext = createContext({
	locale: '',
	setLocale:()=>{}
});

// export const LocaleProvider = ({children}) => {
// 	console.log('localStorage.getItem',localStorage.getItem('locale'))
//
//
//
// 	return(
// 		<LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
// 	);
// }

export const useLocaleContext = () => {
	return useContext(LocaleContext).locale;
}
