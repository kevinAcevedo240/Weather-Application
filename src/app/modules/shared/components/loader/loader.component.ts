import { Component, OnInit } from '@angular/core'; // Ajusta la ruta al servicio del loader
import { LoaderService } from 'src/app/Domain/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit{
   isLoading: boolean = false;

   constructor(private loaderService: LoaderService) {

   }
  ngOnInit(): void {
    // Suscríbete al observable isLoading$ del servicio para obtener el estado del loader
    this.loaderService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
  // constructor(private loadingService:LoaderService) { }
  // isLoading$ = this.loadingService.isLoading$;
  // isFinalizing$ = this.loadingService.isFinalizing$;
}
