import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';


@NgModule({
  declarations:[
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    StarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent,
                              canActivate: [ ProductDetailGuard] },
    ])
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})

export class ProductModule {

}