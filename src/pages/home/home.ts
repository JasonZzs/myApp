import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides: Slide[];
  constructor(
    public navCtrl: NavController,
    public translate: TranslateService,
    private toastCtrl: ToastController
  ) {
    translate.get(["HOME_SLIDE1_TITLE",
      "HOME_SLIDE1_DESCRIPTION",
      "HOME_SLIDE2_TITLE",
      "HOME_SLIDE2_DESCRIPTION",
      "HOME_SLIDE3_TITLE",
      "HOME_SLIDE3_DESCRIPTION",
      "HOME_SLIDE4_TITLE",
      "HOME_SLIDE4_DESCRIPTION",
      "HOME_SLIDE5_TITLE",
      "HOME_SLIDE5_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: values.HOME_SLIDE1_TITLE,
            description: values.HOME_SLIDE1_DESCRIPTION,
            image: 'assets/img/home/index_banner_01.jpg',
          },
          {
            title: values.HOME_SLIDE2_TITLE,
            description: values.HOME_SLIDE2_DESCRIPTION,
            image: 'assets/img/home/index_banner_02.jpg',
          },
          {
            title: values.HOME_SLIDE3_TITLE,
            description: values.HOME_SLIDE3_DESCRIPTION,
            image: 'assets/img/home/index_banner_03.jpg',
          },
          {
            title: values.HOME_SLIDE4_TITLE,
            description: values.HOME_SLIDE4_DESCRIPTION,
            image: 'assets/img/home/index_banner_04.jpg',
          },
          {
            title: values.HOME_SLIDE5_TITLE,
            description: values.HOME_SLIDE5_DESCRIPTION,
            image: 'assets/img/home/index_banner_05.jpg',
          }
        ];
      }
    );
  }

  ionViewDidLoad() {
    //this.presentToast()

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message:"text",
      position: "top",
      dismissOnPageChange: false,
    });
    toast.present();
  }

  

}
