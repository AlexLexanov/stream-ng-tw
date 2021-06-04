import {Component, OnInit} from '@angular/core';
import { CategoriesService } from '../../services/requests/categories.service';
import {CategoriesModel} from '../../models/categories.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}

  categories: Array<CategoriesModel> | any

  ngOnInit() {
    this.categories = this.categoriesService.categories
  }
}
