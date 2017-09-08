import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { HttpData } from '../../providers/http-data';

@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})

export class CommunityPage {
  communityList: any;
  constructor(
    private httpData: HttpData,
    public loadCtrl: LoadingController,
  ) {
    this.httpData.getCommunities().subscribe((communityList: any[]) => {
      this.communityList = communityList;
    });
  }
  loadDefault() {
    // let loading = this.loadCtrl.create({
    //   content: "loading...",//loading框显示的内容 
    //   dismissOnPageChange:true, // 是否在切换页面之后关闭loading框 
    //   showBackdrop:false// 是否显示遮罩层 
    // }); 
    // loading.present();// 弹出load框 
    // setTimeout(()=>{
    //   loading.dismiss(); 
    // },10000); // 上面这段代码先是在按下按钮1000毫秒之后挑战页面，再在3000毫秒之后关闭loading框 但是因为设置了切换页面之后关闭loading框，因此在切换页面后则关闭loading框 
  }
  ionViewDidLoad() {
    this.loadDefault();
    console.log("this is community page")
  }

}
