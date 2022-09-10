import { Component, OnInit } from '@angular/core';
import { ChatlistService } from 'src/app/services/chatlist.service';
import { Router,NavigationExtras } from '@angular/router';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userList;
  constructor(private chatList: ChatlistService, private router: Router, private modalController: ModalController) {
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

  goToArchive() {
    this.router.navigate(['/archieve']);
  }

}
