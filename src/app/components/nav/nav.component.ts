import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export interface RoutesModel {
  path: string;
  name: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  routes: Array<RoutesModel> = [
      {path: '/', name: 'Мое кино'},
      {path: '/store', name: 'Магазин'},
      {path: '/view', name: 'Буду смотреть'},
      {path: '/pay', name: 'Покупки'},
  ];
  scrollTop = 0;
  show = false;
  opacity = false;

  constructor() {
    fromEvent(window, 'scroll').pipe(debounceTime(4))
      .subscribe(() => {        
        if (window.scrollY > 50) {
          this.show = this.scrollTop < window.scrollY;
          this.scrollTop = window.scrollY;
          this.opacity = window.scrollY > 300;
        } else this.show = false;
      });
  }
}
