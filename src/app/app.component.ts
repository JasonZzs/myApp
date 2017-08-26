import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config  } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


/*页面引入*/
// import { FirstRunPage } from '../pages/pages';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MinePage } from '../pages/mine/mine';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
/*页面引入*/

import { TranslateService } from '@ngx-translate/core'

@Component({
  templateUrl: 'app.html' 
})

export class MyApp {
  rootPage = TabsPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: TutorialPage },
    { title: 'Welcome', component: WelcomePage },
    { title: 'Tabs', component: TabsPage },

    { title: 'Home', component: HomePage },
    { title: 'Mine', component: MinePage },
    { title: 'About', component: AboutPage },
  ]

  constructor(
    private translate: TranslateService,
    private platform: Platform,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen
  ) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('zh');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('zh'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
