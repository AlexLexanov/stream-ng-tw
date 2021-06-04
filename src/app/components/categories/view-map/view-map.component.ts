import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CategoriesModel } from '../../../models/categories.model';
import { FilmsService } from '../../../services/requests/films.service';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.css']
})
export class ViewMapComponent {
  @Input() id: CategoriesModel | any;
  @ViewChild('card', {static: true}) card: ElementRef | any;

  constructor(private service: FilmsService) {}
  itemImageUrl: any;

  onVisible($event?: HTMLElement) {
    // console.log(this.itemImageUrl);
    // if (this.service.films.includes(this.id)) return
    this.service.getFilm(this.id).subscribe(image => {
      this.itemImageUrl = '//via.placeholder.com/350x196'
    });
  }
}
