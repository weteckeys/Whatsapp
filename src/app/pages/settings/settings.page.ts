import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToprofile() {
    this.router.navigate(['/user-profile']);
  }

  goToAccount() {
    this.router.navigate(['/account']);
  }

  goToChatSettings() {
    this.router.navigate(['/chat-settings']);
  }

  goToNotification() {
    this.router.navigate(['/notification']);
  }

  goToStorage() {
    this.router.navigate(['/storage']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

}
