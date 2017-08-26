import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*页面引入*/
import { HomePage } from '../pages/home/home';
import { ProjectsPage } from '../pages/projects/projects';
import { CommunityPage } from '../pages/community/community';
import { ProductsPage } from '../pages/products/products';
import { ProductDetailPage } from '../pages/products/product-detail/product-detail';
import { AboutPage } from '../pages/about/about';

import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
/*页面引入*/

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


/*====================Module Start====================*/
import { MineModule } from "../pages/mine/mine.module";
/*====================Module End======================*/

/*====================Provider Start====================*/
import { HttpData } from '../providers/http-data';
/*====================Provider End======================*/


export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    ProjectsPage,
    CommunityPage,
    ProductsPage,
    ProductDetailPage,
    TabsPage,
    TutorialPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MineModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    ProjectsPage,
    CommunityPage,
    ProductsPage,
    ProductDetailPage,
    TabsPage,
    TutorialPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    HttpData,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
