import { Injectable, computed, signal } from '@angular/core';
import { EN_DATA } from './data/en';
import { KM_DATA } from './data/km';
import { LangCode, Portfolio } from './interface';

@Injectable({ providedIn: 'root' })
export class Service {
  private lang = signal<LangCode>('en');

  // switch language
  setLang(l: LangCode) { this.lang.set(l); }
  lang$ = this.lang.asReadonly();

  // current data
  data = computed<Portfolio>(() => this.lang() === 'km' ? KM_DATA : EN_DATA);
}
