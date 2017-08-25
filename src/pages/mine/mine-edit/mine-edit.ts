import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { MineEditModalPage } from '../mine-edit-modal/mine-edit-modal';
//import {MineEditAvatarModalPage} from '../mine-edit-avatar-modal/mine-edit-avatar-modal';

@Component({
  selector: 'page-mine-edit',
  templateUrl: 'mine-edit.html'
})
export class MineEditPage {
  userInfo: UserInfo = {
    'id'      : '1',
    'username': 'Jason',
    'name'    : 'zzs',
    'email'   : '1111',
    'sex'     : '男',
    'card_type'   : '身份证',
    'hobbies'   : '足球',
    'phone'   : 'qweqwe',
    'avatar'  : 'asdasd',
    'description': 'testa',
    'token'   : '11111', 
  };
  avatarPath: string = 'assets/img/userinfo/avatar.png';
  constructor(
    private modalCtrl: ModalController,
  ) {
    //this.avatarPath = params.get('avatarPath');
    //this.userInfo = params.get('userInfo');
  }


  openEdit() {
    console.log('this is edit')
    let modal = this.modalCtrl.create(MineEditModalPage, {'userInfo':this.userInfo});
    modal.present();
    modal.onDidDismiss(userInfo => {
      userInfo && (this.userInfo = userInfo)
    });
  }

}

export class UserInfo {
  id: string;
  username: string;
  name: string;
  email: string;
  sex: string;
  card_type: string;
  hobbies: string;
  phone: string;
  avatar: string;
  description: string;
  token: string;
}


