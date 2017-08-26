import { Component } from '@angular/core';
import {
  ActionSheetController,
  Config,
  NavController
} from 'ionic-angular';

import { HttpData } from '../../providers/http-data';
import { ProductDetailPage } from './product-detail/product-detail';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  productLists: any ;
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public config: Config,
    public httpData: HttpData,
  ) {}

  ionViewDidLoad() {
    this.httpData.getProducts().subscribe((productLists: any[]) => {
      console.log(productLists)
      this.productLists = productLists;
    });
  }

  openProduct(product: any) {
    this.navCtrl.push(ProductDetailPage, { productTitle: product.title });
  }
}
