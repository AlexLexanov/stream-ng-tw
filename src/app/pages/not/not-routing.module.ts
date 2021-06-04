import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotComponent } from './not.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: NotComponent }])],
  exports: [RouterModule]
})
export class NotRoutingModule { }
