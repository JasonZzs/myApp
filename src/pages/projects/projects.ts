import { Component } from '@angular/core';
import {
  ActionSheet,
  ActionSheetController,
  ActionSheetOptions,
  Config,
  NavController
} from 'ionic-angular';
/**
 * Generated class for the ProjectsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// TODO remove
export interface ActionSheetButton {
  text?: string;
  role?: string;
  icon?: string;
  cssClass?: string;
  handler?: () => boolean|void;
};

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  actionSheet: ActionSheet;
  speakers: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    //public confData: ConferenceData,
    public config: Config,
  ) {}

  ionViewDidLoad() {
    //this.confData.getSpeakers().subscribe((speakers: any[]) => {
      //this.speakers = speakers;
    //});
  }

  goToSessionDetail(session: any) {
    //this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
  }

  goToSpeakerDetail(speaker: any) {
    //this.navCtrl.push(SpeakerDetailPage, { speakerId: speaker.id });
  }

  goToSpeakerTwitter(speaker: any) {
    
  }

  openSpeakerShare(speaker: any) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
            if ( (window as any)['cordova'] && (window as any)['cordova'].plugins.clipboard) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' + speaker.twitter
              );
            }
          }
        } as ActionSheetButton,
        {
          text: 'Share via ...'
        } as ActionSheetButton,
        {
          text: 'Cancel',
          role: 'cancel'
        } as ActionSheetButton
      ]
    } as ActionSheetOptions);

    actionSheet.present();
  }

  openContact(speaker: any) {
    let mode = this.config.get('mode');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + speaker.name,
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        } as ActionSheetButton,
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        } as ActionSheetButton
      ]
    } as ActionSheetOptions);

    actionSheet.present();
  }
}
