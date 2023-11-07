import {createContext, useContext} from 'react';
import { supportedLocales } from './localisation';
const {DE, EN} = supportedLocales;

export const LocaleContext = createContext({
	locale: '',
	setLocale:()=>{}
});

export const useLocaleContext = () => {
	return useContext(LocaleContext).locale;
}
