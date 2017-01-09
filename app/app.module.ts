import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';


@NgModule({
    //Angular and Third Party Modules go in the 'imports' array
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
        ]),
        ProductModule,
    ],

    //The App's Directives, Components and Pipes are declared in the 'declarations' array.
    declarations: [
        AppComponent,
        WelcomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
