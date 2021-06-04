import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotRoutingModule } from './not-routing.module';
import { NotComponent } from './not.component';


@NgModule({
  declarations: [NotComponent],
  imports: [
    CommonModule,
    NotRoutingModule
  ]
})
export class NotModule {}
