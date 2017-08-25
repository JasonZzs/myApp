import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { MineEditPage } from './mine-edit/mine-edit';

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {
  
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

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

  edit() {
    console.log('this is edit page-link!');
    this.navCtrl.push(MineEditPage, {'userInfo': this.userInfo, 'avatarPath': this.avatarPath});
    
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
