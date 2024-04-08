import 'server-only';
 
const dictionaries = {
  en: () => import('./dictionaries/en-US.json').then((module) => module.default),
  nl: () => import('./dictionaries/nl-NL.json').then((module) => module.default),
};
 
export const getDictionary = async (locale: string) => {
    const lang = locale.split('-')?.[0];
    if((dictionaries as Record<string, any>)?.[lang]){
        return (dictionaries as Record<string, any>)?.[lang]()    
    }
    return {};
}