import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-mobile',
  templateUrl: './verify-mobile.page.html',
  styleUrls: ['./verify-mobile.page.scss'],
})
export class VerifyMobilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProfile() {
    this.router.navigate(['/profile-info']);
  }

}
