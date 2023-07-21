import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-go-top-button',
  templateUrl: './go-top-button.component.html',
  styleUrls: ['./go-top-button.component.scss']
})
export class GoTopButtonComponent {

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
}
