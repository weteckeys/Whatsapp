import { Component, OnInit } from '@angular/core';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  tabId;

  chatListMenu = [
    'New Group',
    'New Broadcast',
    'WhatsApp Web',
    'Starred messages',
    'Settings'
  ];
  statusMenu = [
    'Status Privacy',
    'Settings'
  ];
  callMenu = [
    'Clear call log',
    'Settings'
  ];

  menu;
  constructor(
    private popoverController: PopoverController,
    private router: Router) { }

  ngOnInit() {
  }

  tabChange(eve) {
    console.log(eve.tab);
    this.tabId = eve.tab;
  }

  async presentPopover(ev: any) {


    if (this.tabId === 'home') {
      this.menu = this.chatListMenu;
    }

    if (this.tabId === 'status') {
      this.menu = this.statusMenu;
    }

    if (this.tabId === 'calls') {
      this.menu = this.callMenu;
    }
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      componentProps: {
        data: this.menu
      },
      translucent: true,
      cssClass: 'header_popover'
    });
    popover.onDidDismiss().then((data) => {
      console.log(data);
      this.router.navigate(['settings']);
    });
    return await popover.present();
  }

}
