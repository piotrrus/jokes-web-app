import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesPageComponent } from './jokes-page.component';
import { SharedModule } from 'src/app/modules/shared.module';
import { JokesService } from 'src/app/services/joke.service';
// import { FavouriteService } from 'src/app/services/favourite.service';

@NgModule({
  declarations: [JokesPageComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [JokesService]
})
export class JokesPageModule { }
