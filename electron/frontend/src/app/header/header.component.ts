import { Component, Injectable, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  toggleDrawer() {
    this.commonService.drawer.toggle();
  }
}
