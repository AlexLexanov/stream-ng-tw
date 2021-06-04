import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ViewComponent }])],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
