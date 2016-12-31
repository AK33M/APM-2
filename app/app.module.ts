import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
    //Angular and Third Party Modules go in the 'imports' array
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
        { path: 'products', component: ProductListComponent },
        { path: 'product/:id', component: ProductDetailComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      ])
    ],
    //The App's Directives, Components and Pipes are declared in the 'declarations' array.
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductFilterPipe,
        StarComponent,
        ProductDetailComponent,
        WelcomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
