import { Component } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  ngOnInit(){
    const observable = new Observable(subscriber => {
      subscriber.next(100);
      subscriber.next(2);
      subscriber.next(3000);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('Antes de executar subscribe');
    observable.subscribe({
      next(x) {console.log("recebeu o valor" + x);},
      error(err) {console.log("erro: " + err);},
      complete(){console.log("terminou o subscribe");}
    });
    console.log("ultima linha");
  }
}
