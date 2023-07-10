 export interface IThemeRepository {
   getTheme(): string;
   setTheme(value: string): void;
   isDarkTheme(): boolean;
 }

// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// export abstract class IThemeRepository {
//   public themeChanged: BehaviorSubject<string> = new BehaviorSubject(this.getTheme());

//   abstract getTheme(): string;
//   abstract setTheme(value: string): void;
//   abstract isDarkTheme(): boolean;
// }
