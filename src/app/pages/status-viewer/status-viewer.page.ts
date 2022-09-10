import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { PopoverController, NavController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-status-viewer',
  templateUrl: './status-viewer.page.html',
  styleUrls: ['./status-viewer.page.scss'],
})
export class StatusViewerPage implements OnInit {

  menu = [
    'Mute'
  ];
  images;
  constructor(private dummy: DummyService, private popoverController: PopoverController, private navCtrl: NavController) {
    this.images = this.dummy.images;
  }

  ngOnInit() {

  }

  goBack() {
    this.navCtrl.back();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      componentProps: {
        data : this.menu
      },
      translucent: true,
      cssClass : 'header_popover'
    });
    return await popover.present();
  }
}
