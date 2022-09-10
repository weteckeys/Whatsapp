import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.page.html',
  styleUrls: ['./person-info.page.scss'],
})
export class PersonInfoPage implements OnInit {

  images;
  name;
  image;
  value;
  constructor(private dummy: DummyService, private route: ActivatedRoute) {
    this.images = this.dummy.images;
    this.route.queryParams.subscribe(data => {
      console.log(JSON.parse(data.id));

      this.value = JSON.parse(data.id);

      this.image = this.value.img;
      this.name = this.value.name;
    });
  }

  ngOnInit() {
  }

}
