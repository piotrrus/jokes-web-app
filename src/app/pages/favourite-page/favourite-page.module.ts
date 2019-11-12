import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritePageComponent } from './favourite-page.component';
import { SharedModule } from 'src/app/modules/shared.module';
import { routes } from '../../routing/favourite.routing';
import { RouterModule } from '@angular/router';
// import { FavouriteService } from 'src/app/services/favourite.service';

@NgModule({
  declarations: [FavouritePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  // providers: [FavouriteService]
})
export class FavouritePageModule { }
