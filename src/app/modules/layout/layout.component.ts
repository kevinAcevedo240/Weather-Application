import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  constructor() {}

  isContentLoaded: boolean = true;

  ngOnInit(): void {

    setTimeout(() => {
      this.isContentLoaded = true;
    }, 2000);
  }
}
