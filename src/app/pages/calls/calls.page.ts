import { Component, OnInit } from '@angular/core';
import { ChatlistService } from 'src/app/services/chatlist.service';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {

  userList;
  constructor(private chatList: ChatlistService, private router: Router, private modalController: ModalController) {
    this.userList = this.chatList.userList;
  }

  ngOnInit() {
  }

  goToCallsContact() {

    const navData: NavigationExtras = {
      queryParams : {
        id : 'Call'
      }
    };
    this.router.navigate(['/select-contact'], navData);
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

}
