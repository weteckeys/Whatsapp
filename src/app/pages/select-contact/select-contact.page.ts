import { Component, OnInit } from '@angular/core';
import { ChatlistService } from 'src/app/services/chatlist.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-select-contact',
  templateUrl: './select-contact.page.html',
  styleUrls: ['./select-contact.page.scss'],
})
export class SelectContactPage implements OnInit {

  userList;
  id;
  constructor(private chatList: ChatlistService, private route: ActivatedRoute, private router: Router) {
    this.userList = this.chatList.userList;
    this.route.queryParams.subscribe(data => {
      console.log(data.id);
      this.id = data.id;
    });
  }

  ngOnInit() {
  }

  goToChat(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id: JSON.stringify(val)
      }
    };
    this.router.navigate(['/chat'], navData);
  }

}
