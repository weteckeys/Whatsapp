import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SelectCountryPage } from '../select-country/select-country.page';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.page.html',
  styleUrls: ['./mobile.page.scss'],
})
export class MobilePage implements OnInit {
  ccCode: any = '+91';
  cname: any = 'India';
  constructor(
    private router: Router,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  goToVerify() {
    this.router.navigate(['/verify-mobile']);
  }

  async openCountry() {
    console.log('open ccode');
    const modal = await this.modalController.create({
      component: SelectCountryPage,
      backdropDismiss: false,
      showBackdrop: true,
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      if (data && data.role === 'selected' && data.data && data.data.country_name) {
        console.log('ok');
        this.cname = data.data.country_name;
        this.ccCode = '+' + data.data.dialling_code;
      } else {
        this.cname = 'India';
        this.ccCode = '+91';
      }
    });
    await modal.present();
  }

}
