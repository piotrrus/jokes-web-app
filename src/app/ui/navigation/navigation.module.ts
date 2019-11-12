import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from 'src/app/modules/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        SharedModule,
        RouterModule
    ],
    exports: [
        NavigationComponent,
        RouterModule
    ],
    declarations: [NavigationComponent]
})
export class NavigationModule {
}
