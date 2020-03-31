import { Observable } from 'rxjs';

export interface Product {
    id: number;
    libelle: string;
    description: string;
    price: number;
    qunatity_stock: number
}

export abstract class ProductData {
    abstract getProducts(): Observable<Product[]>;
}
