import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpData } from '../../providers/http-data';

@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})

export class CommunityPage {
  communityList: any;
  constructor(
    public httpData: HttpData,
  ) {
  }

  ionViewDidLoad() {
    this.httpData.getCommunities().subscribe((communityList: any[]) => {
      this.communityList = communityList;
    });
  }

}
