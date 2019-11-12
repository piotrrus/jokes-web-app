import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ng-starrating';
import { MaterialModule } from 'src/app/modules/material.module';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundModule } from '../pages/page-not-found/page-not-found.module';
import { FavouriteService } from '../services/favourite.service';

const SHARED_MODULES = [
  CommonModule,
  MaterialModule,
  RatingModule,
  PageNotFoundModule
];

@NgModule({
  declarations: [],
  imports: [
    SHARED_MODULES,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  exports: [
    ToastrModule,
    SHARED_MODULES
  ],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [FavouriteService]
    };
  }
}
