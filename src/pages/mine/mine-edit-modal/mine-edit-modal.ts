import {Component} from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ViewController, } from 'ionic-angular';

import {Validators} from "../../../providers/Validators";

@Component({
  selector: 'page-mine-edit-modal',
  templateUrl: 'mine-edit-modal.html'
})
export class MineEditModalPage {
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
  userForm: any;
  verifyMessages = {
    'name': {
      'errorMsg': '',
      'required': '用户名为必填项',
      'minlength': '姓名最少2个字符',
      'chinese': '姓名必须是中文'
    },
    'phone': {
      'errorMsg': '',
      'required': '手机号码为必填项',
      'phone': '请输入正确的手机号码'
    },
    'email': {
      'errorMsg': '',
      'required': '电子邮箱为必填项',
      'email': '请输入正确的邮箱地址'
    }
  };

  constructor(private viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    // this.userInfo = params.get('userInfo');
    this.userForm = this.formBuilder.group({
      name: [this.userInfo.name, [Validators.required, Validators.minLength(2), Validators.chinese]],
      phone: [this.userInfo.phone, [Validators.required, Validators.phone]],
      email: [this.userInfo.email, [Validators.required, Validators.email]]
    });
    this.userForm.valueChanges
      .subscribe(data => {
        const verifyMessages = this.verifyMessages;
        for (const field in verifyMessages) {
          verifyMessages[field].errorMsg = '';
          const control = this.userForm.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = verifyMessages[field];
            for (const key in control.errors) {
              messages[key] && (verifyMessages[field].errorMsg += messages[key] + ' ');
            }
          }
        }
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
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

