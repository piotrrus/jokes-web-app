import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material.module';
import { PageNotFoundComponent } from './page-not-found.component';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PageNotFoundModule { }
