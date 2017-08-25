import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MinePage } from './mine';
import { MineEditPage } from './mine-edit/mine-edit';
import { MineEditModalPage } from './mine-edit-modal/mine-edit-modal';

@NgModule({
  imports: [
    IonicModule 
  ],
  declarations: [
    MinePage,
    MineEditPage,
    MineEditModalPage
  ],
  entryComponents: [
    MinePage,
    MineEditPage,
    MineEditModalPage
  ],
  providers: [],
  exports: [
    IonicModule
  ]
})
export class MineModule {
}
