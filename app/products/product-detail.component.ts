import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router: Router){

    }

    ngOnInit(): void{
      let id = +this._route.snapshot.params['id'];
      this.pageTitle += `: ${id}`;
    }

    onBack() : void{
      this._router.navigate(['/products']);
    }
}
