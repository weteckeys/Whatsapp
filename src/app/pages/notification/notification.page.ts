import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  menu = ['Reset notification settings'];
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
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
