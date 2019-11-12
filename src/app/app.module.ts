import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationModule } from './ui/navigation/navigation.module';
import { RoutingModule } from './routing/routing.module';
import { ApiService } from './services/api-service';
import { HttpClientModule } from '@angular/common/http';
import { JokesPageModule } from './pages/jokes-page/jokes-page.module';
import { FavouritePageModule } from './pages/favourite-page/favourite-page.module';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
     AppComponent,
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    RoutingModule,
    HttpClientModule,
    JokesPageModule,
    FavouritePageModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
