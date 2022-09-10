import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {

  // @Input() id: string;
  val;
  constructor(private modalCtrl: ModalController, private navParams: NavParams) {
    console.log(this.navParams.get('id'));
    this.val = this.navParams.get('id');
  }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
