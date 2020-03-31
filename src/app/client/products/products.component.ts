import { Component, OnInit } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { ProductService } from '../../@core/mock/products.service'

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  AllProducts : any;
  selectedItem = 'red'

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((products: any) => this.AllProducts = products);
  }


}
 