import { Component } from '@angular/core';
import { faWind, faUmbrella, faTint } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: '[other-information-card]',
  templateUrl: './other-information-card.component.html',
  styleUrls: ['./other-information-card.component.scss']
})
export class OtherInformationCardComponent {
  faWind = faWind;
  faUmbrella = faUmbrella;
  faTint = faTint;

  isHovered1 = false;
  isHovered2 = false;
  isHovered3 = false;
}
