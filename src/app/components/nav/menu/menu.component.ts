import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  show = false;
  user = {
    login: 'Лексанов А.А',
    email: 'lexanov.a@icloud.com'
  };
  onShow(): void {
    this.show = !this.show;
  }
  constructor() {

  }

}
