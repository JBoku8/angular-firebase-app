import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/shared/product.service';
import { Product } from '../products/shared/product';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  topProducts: Product[] = [];
  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.ps.getTopProducts(3).subscribe((data) => {
      this.topProducts = data;
    });
  }
}
