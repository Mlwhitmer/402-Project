import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { CommonService } from './services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  @ViewChild('drawer') drawer: MatSidenav;

  constructor(
    public commonService: CommonService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.commonService.drawer = this.drawer;
  }

}
