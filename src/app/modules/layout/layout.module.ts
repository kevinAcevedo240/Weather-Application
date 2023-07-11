import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,

  ],
  imports: [CommonModule, LayoutRoutingModule, HttpClientModule, FontAwesomeModule],
})
export class LayoutModule {}
