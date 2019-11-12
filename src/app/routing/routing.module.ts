import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesPageComponent } from '../pages/jokes-page/jokes-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [

    { path: 'jokes', component: JokesPageComponent },
    {
        path: 'favourites',
        loadChildren: () => import('../pages/favourite-page/favourite-page.module').then(
            m => m.FavouritePageModule
        )
    },
    { path: '', redirectTo: '/jokes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
