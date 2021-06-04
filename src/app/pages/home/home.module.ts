import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { HomeRoutingModule } from './home-routing.module';

import { CategoriesComponent } from '../../components/categories/categories.component';
import { VideoboardComponent } from '../../components/videoboard/videoboard.component';
import { ViewMapComponent } from '../../components/categories/view-map/view-map.component';
import { GenreMapComponent } from '../../components/categories/genre-map/genre-map.component';
import { BrowsingHistoryComponent } from '../../components/categories/browsing-history/browsing-history.component';
import { InfoAboutFilmComponent } from '../../components/info-about-film/info-about-film.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ObservableDirective} from '../../directives/observable.directive';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    VideoboardComponent,
    ViewMapComponent,
    GenreMapComponent,
    BrowsingHistoryComponent,
    InfoAboutFilmComponent,
    CategoryComponent,
    ObservableDirective
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FontAwesomeModule,
    ]
})
export class HomeModule {}
