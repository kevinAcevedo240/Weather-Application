import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
   private isLoadingSubject = new BehaviorSubject<boolean>(false);
   public isLoading$ = this.isLoadingSubject.asObservable();

   showLoader(): void {
     this.isLoadingSubject.next(true);
   }

   hideLoader(): void {
    //  this.isLoadingSubject.next(false);
     setTimeout(() => {
           this.isLoadingSubject.next(false);
         }, 1000);
   }

}
