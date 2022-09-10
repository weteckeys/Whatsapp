import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  pageData;
  constructor(
    private navParams: NavParams,
    private popoverController: PopoverController) {
    this.pageData = this.navParams.get('data');
    console.log(this.pageData);
  }

  ngOnInit() { }

  onClick(val) {
    console.log(val);
    this.popoverController.dismiss();
  }
}
