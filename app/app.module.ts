import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
    //Angular and Third Party Modules go in the 'imports' array
    imports: [
      BrowserModule,
      FormsModule
    ],
    //The App's Directives, Components and Pipes are declared in the 'declarations' array.
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
