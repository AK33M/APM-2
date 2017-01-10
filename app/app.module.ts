import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRouterModule } from './app-router.module';


@NgModule({
    //Angular and Third Party Modules go in the 'imports' array
    imports: [
        BrowserModule,
        HttpModule,
        ProductModule, // feature module
        AppRouterModule
    ],

    //The App's Directives, Components and Pipes are declared in the 'declarations' array.
    declarations: [
        AppComponent, 
        WelcomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
