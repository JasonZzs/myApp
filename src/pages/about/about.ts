import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpData } from '../../providers/http-data';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  aboutLists: any;
  constructor(
    public navCtrl: NavController,
    public httpData: HttpData,
  ) {
    this.httpData.getAboutList().subscribe((aboutLists: any[]) => {
      this.aboutLists = aboutLists;
    });
  }

}
