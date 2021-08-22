import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  begin() {
    console.log('Inicion');
    this.route.navigate(['rooms']);
  }

  create() {
    console.log('Create');
    this.route.navigate(['rooms/create']);
  }
}
