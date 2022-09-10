import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  msgs;
  value;
  image;
  name;

  menu = [
    'View Contact',
    'Media, links an docs',
    'Search',
    'Mute notification',
    'Wallpaper',
    'More'
  ];

  subMenu = [
    'Report',
    'Block',
    'Clear chat',
    'Export chat',
    'Add Shortcut'
  ];

  constructor(
    private chat: ChatService,
    private router: Router,
    private popoverController: PopoverController,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(data => {
      console.log(JSON.parse(data.id));
      this.value = JSON.parse(data.id);

      this.image = this.value.img;
      this.name = this.value.name;
    });

    this.msgs = this.chat.messages;
    console.log(this.chat.messages);
  }

  ngOnInit() {
  }

  goToPersonDetail() {
    const navData: NavigationExtras = {
      queryParams : {
        id: JSON.stringify(this.value)
      }
    };
    this.router.navigate(['/person-info'], navData);
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
