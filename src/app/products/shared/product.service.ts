import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private fireStore: AngularFirestore) {}

  getTopProducts(amount: number): Observable<Product[]> {
    return this.fireStore
      .collection<Product>('top-products', (ref) => ref.limit(amount))
      .valueChanges();
  }
}
