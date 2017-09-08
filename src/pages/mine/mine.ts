import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { MineEditPage } from './mine-edit/mine-edit';
import { HttpData } from '../../providers/http-data';

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {
  userInfo: any;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private httpData: HttpData,
  ) {
    this.httpData.getUserInfo().subscribe((userInfo: any) => {
      this.userInfo = userInfo;
      console.log(this.userInfo)
    });
  }


  avatarPath: string = 'assets/img/userinfo/avatar.png';

  edit() {
    console.log('this is edit page-link!');
    let modal = this.modalCtrl.create(MineEditPage, {'userInfo': this.userInfo, 'avatarPath': this.avatarPath});
    modal.present();
  }

  exitSoft() {
    console.log('this is exitSoft page-link!')
  }

  loginOut() {
    console.log('this is loginOut page-link!')
  }

  about() {
    console.log('this is about page-link!')
  }
}
