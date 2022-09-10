import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  val;
  name;
  image;
  constructor(private navParams: NavParams, private router: Router, private modalCtrl: ModalController) {

    this.val = JSON.parse(this.navParams.get('data'));
    this.name = this.val.name;
    this.image = this.val.img;
  }

  goToChat() {

    this.modalCtrl.dismiss();
    const navData: NavigationExtras = {
      queryParams : {
        id: JSON.stringify(this.val)
      }
    };
    this.router.navigate(['/chat'], navData);
  }

  goToPersonDetail() {
    this.modalCtrl.dismiss();
    const navData: NavigationExtras = {
      queryParams : {
        id: JSON.stringify(this.val)
      }
    };
    this.router.navigate(['/person-info'], navData);
  }

  ngOnInit() {
  }

}
