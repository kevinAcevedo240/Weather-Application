import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-go-top-button',
  templateUrl: './go-top-button.component.html',
  styleUrls: ['./go-top-button.component.scss']
})
export class GoTopButtonComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Muestra u oculta el botón dependiendo del desplazamiento de la página
    this.showButton = window.pageYOffset > this.scrollOffsetToShowButton;
  }

  showButton: boolean = false;
  scrollOffsetToShowButton: number = 300; // Puedes ajustar este valor según tu preferencia

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToTop(): void {
    // scroll to the top of the body
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }
}
