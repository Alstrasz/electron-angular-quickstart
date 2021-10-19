import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import * as contentEn from '../assets/i18n/en.json';
import * as contentRu from '../assets/i18n/ru.json';

const TRANSLATIONS = {
  en: contentEn,
  ru: contentRu
};

export class TranslateUniversalLoaderService implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of((TRANSLATIONS as any)[lang].default);
  }
}