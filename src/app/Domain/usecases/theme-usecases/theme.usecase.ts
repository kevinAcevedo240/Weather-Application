import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IThemeRepository } from '../../repositories/ITheme.repository';

@Injectable({
  providedIn: 'root',
})
export class ThemeUsecase implements IThemeRepository{
  private default = 'light';
  private themeChanged: BehaviorSubject<string> = new BehaviorSubject(this.getTheme());


  public getTheme(): string {
    return localStorage.getItem('theme') ?? this.default;
  }

  public setTheme(value: string): void {
    localStorage.setItem('theme', value);
    this.themeChanged.next(value);
  }

  public isDarkTheme(): boolean {
    return this.getTheme() === 'dark';
  }
}
