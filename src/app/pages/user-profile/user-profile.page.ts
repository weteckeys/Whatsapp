import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditModalPage } from '../edit-modal/edit-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  constructor(private modalController: ModalController, private router: Router) { }

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

  goToAbout() {
    this.router.navigate(['/about']);
  }

}
