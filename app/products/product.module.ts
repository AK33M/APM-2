import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductRouterModule } from './product-router.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';


@NgModule({
  declarations:[
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
  ],
  imports: [
    SharedModule,
    ProductRouterModule
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})

export class ProductModule {

}
