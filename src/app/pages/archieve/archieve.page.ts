import { Component, OnInit } from '@angular/core';
import { ChatlistService } from 'src/app/services/chatlist.service';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.page.html',
  styleUrls: ['./archieve.page.scss'],
})
export class ArchievePage implements OnInit {

  menu = [
    'New Group',
    'New Broadcast',
    'WhatsApp Web',
    'Starred messages'
  ];

  userList;
  constructor(
    private chatList: ChatlistService,
    private router: Router,
    private modalController: ModalController,
    private popoverController: PopoverController
  ) {
    this.userList = this.chatList.userList;
  }

  ngOnInit() {
  }

  goToSelectContact() {
    this.router.navigate(['/select-contact']);
  }

  goToChat(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id: JSON.stringify(val)
      }
    };
    this.router.navigate(['/chat'], navData);
  }

  async presentModal(val) {

    console.log(val);
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass : 'custom_modal',
      componentProps: {
        data : JSON.stringify(val)
      }
    });
    return await modal.present();
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
