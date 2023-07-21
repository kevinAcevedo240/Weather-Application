import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DomainModule } from './Domain/domain.module';
import { ThemeUsecase } from './Domain/usecases/theme-usecases/theme.usecase';
import { SharedModule } from './modules/shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptorService } from './Infraestructure/Interceptors/loader-interceptor.service';
import { LoaderService } from './Domain/services/loader.service';
import { LoaderComponent } from './modules/shared/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    [BrowserModule,
      AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule
  ],
  ],
  providers: [
    DomainModule,
    ThemeUsecase,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
