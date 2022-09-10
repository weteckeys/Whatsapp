import { Component, OnInit } from '@angular/core';
import { ChatlistService } from 'src/app/services/chatlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  userList;
  constructor(private chatList: ChatlistService, private router: Router) {
    this.userList = this.chatList.userList;
  }

  ngOnInit() {
  }

  goToViewer() {
    this.router.navigate(['/status-viewer']);
  }

}
