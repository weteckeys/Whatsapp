import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditModalPage } from '../edit-modal/edit-modal.page';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  list = [
    'Available',
    'Busy',
    'At School',
    'At the movie',
    'At work',
    'Battery about to die',
    'Can not talk, WhatsApp only',
    'In a meeting',
    'At a gym',
    'Sleeping',
    'Urgent calls only'
  ];
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal(val) {

    console.log(val);
    const modal = await this.modalController.create({
      component: EditModalPage,
      cssClass : 'custom_modal2',
      componentProps : {
        'id': val,
      }
    });
    return await modal.present();
  }

}
