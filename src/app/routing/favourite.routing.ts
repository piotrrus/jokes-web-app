import { Routes } from '@angular/router';

import { FavouritePageComponent } from '../pages/favourite-page/favourite-page.component';

export const routes: Routes = [
    { path: '', component: FavouritePageComponent },
    { path: 'favourites', component: FavouritePageComponent },
];
