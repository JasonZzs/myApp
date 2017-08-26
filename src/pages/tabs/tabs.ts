import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';


import { HomePage } from '../home/home';
import { ProjectsPage } from '../projects/projects';
import { CommunityPage } from '../community/community';
import { ProductsPage } from '../products/products';
import { AboutPage } from '../about/about';
import { MinePage } from '../mine/mine';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = ProjectsPage;
  tab3Root: any = ProductsPage;
  tab4Root: any = CommunityPage;
  tab5Root: any = AboutPage;
  tab6Root: any = MinePage;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = "社区生活";
  tab5Title = "关于";
  tab6Title = "我的";

  constructor(
    public navCtrl: NavController, 
    public translateService: TranslateService
  ) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
    });
  }
}
