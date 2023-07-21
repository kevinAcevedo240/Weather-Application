import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';import { LoaderService } from 'src/app/Domain/services/loader.service';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Muestra el loader antes de enviar la petición
    this.loaderService.showLoader();
    return next.handle(req).pipe(
      // Oculta el loader después de recibir la respuesta o si hay un error
      finalize(() => this.loaderService.hideLoader())
    );
  }
}
