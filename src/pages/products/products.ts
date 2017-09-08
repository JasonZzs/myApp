import { Component } from '@angular/core';
import {
  ActionSheetController,
  Config,
  NavController
} from 'ionic-angular';

import { HttpData } from '../../providers/http-data';
import { ProductDetailPage } from './product-detail/product-detail';


@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  productsList: any ;
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public config: Config,
    public httpData: HttpData,
  ) {
    this.httpData.getProducts().subscribe((productsList: any[]) => {
      console.log(productsList)
      this.productsList = productsList;
    });
  }
  ionViewDidLoad() {
    console.log("this is product page")
  }

  openProduct(product: any) {
    this.navCtrl.push(ProductDetailPage, { productTitle: product.title });
  }
}
