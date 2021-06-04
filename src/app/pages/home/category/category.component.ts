import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../../../services/requests/categories.service';
import {CategoriesModel} from '../../../models/categories.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  id: undefined | number;
  category: Observable<CategoriesModel> | any
  index: undefined | number;

  constructor(private activateRoute: ActivatedRoute,
              private categoriesService: CategoriesService) { }

  preViewShow(id: number, i: number): void {
    if (this.id === id) {
      this.id = undefined;
    } else {
      this.id = id;
      this.index = i
    }
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id
    this.category = this.categoriesService.getCategory(Number(this.id))
  }
}
