import { pt } from './pt';
import { en } from './en';
import { es } from './es';

export type Lang = 'pt' | 'en' | 'es';

export const languages: Record<Lang, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
};

export const defaultLang: Lang = 'pt';

export const ui = { pt, en, es };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: Record<string, unknown> = ui[lang] as unknown as Record<string, unknown>;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k] as Record<string, unknown>;
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };
}

export function getRouteForLang(lang: Lang, page: string): string {
  const routes: Record<Lang, Record<string, string>> = {
    pt: {
      home: '/',
      projects: '/projetos/',
      articles: '/artigos/',
      recommendations: '/recomendacoes/',
      materials: '/materiais/',
      about: '/sobre/',
      contact: '/contato/',
    },
    en: {
      home: '/en/',
      projects: '/en/projects/',
      articles: '/en/articles/',
      recommendations: '/en/recommendations/',
      materials: '/en/materials/',
      about: '/en/about/',
      contact: '/en/contact/',
    },
    es: {
      home: '/es/',
      projects: '/es/proyectos/',
      articles: '/es/articulos/',
      recommendations: '/es/recomendaciones/',
      materials: '/es/materiales/',
      about: '/es/acerca/',
      contact: '/es/contacto/',
    },
  };
  return routes[lang][page] ?? '/';
}
