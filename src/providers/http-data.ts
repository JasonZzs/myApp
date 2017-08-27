import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()

export class HttpData {
  data: any;

  constructor(
    public http: Http,
  ){}

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get("assets/data/data.json")
      .map(this.processData,this)
    }
  }

  processData(data: any) {
    this.data = data.json();
    return this.data;
  }

  /*============================Products Service Start======================  */
  getProducts() {
    return this.load().map((data: any) => {
      console.log(data.productsList);
      return data.productsList;
    }) 
  }
  /*============================Products Service End========================  */
  /*============================Projects Service Start======================  */
  getProjects() {
    return this.load().map((data: any) => {
      console.log(data.projectsList);
      return data.projectsList;
    }) 
  }
  /*============================Projects Service End========================  */

  /*============================Community Service Start=====================  */
  getCommunities() {
    return this.load().map((data: any) => {
      console.log(data.communityList);
      return data.communityList;
    }) 
  }
  /*============================Community Service End=======================  */
  
}