import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductData } from '../data/products';

@Injectable()
export class ProductService extends ProductData {

    private products = [
        { id: 1, libelle: 'Product Libelle 1', description: 'Product description 1', price: 15, qunatity_stock: 150 },
        { id: 2, libelle: 'Product Libelle 2', description: 'Product description 2', price: 45, qunatity_stock: 150 },
        { id: 3, libelle: 'Product Libelle  3', description: 'Product description 3', price: 25, qunatity_stock: 150 },
        { id: 4, libelle: 'Product Libelle  4', description: 'Product description 4', price: 35, qunatity_stock: 150 },
    ]


    getProducts(): Observable<any> {
        return observableOf(this.products);
    }

}
