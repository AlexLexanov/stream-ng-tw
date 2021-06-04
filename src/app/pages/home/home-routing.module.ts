import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: HomeComponent},
    { path: 'category/:id', component: CategoryComponent }
    ]
  )],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
