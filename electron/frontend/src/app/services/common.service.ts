import {Injectable} from '@angular/core';
import {MatDialog,  MatSnackBar} from '@angular/material';
import {Router} from "@angular/router";

@Injectable()
export class CommonService {

  showSpinner = false;
  drawer: any;

  constructor(private snackBar: MatSnackBar,
              private router: Router,
              public dialog: MatDialog) {
  }

  setSpinnerFlag(value: boolean) {
    Promise.resolve(null).then(() => this.showSpinner = value);
  }

  showNotification(message: string) {
    this.snackBar.open(message, null, {
      duration: 3000,
    });
  }

  showNotificationAndTime(message: string, duration) {  //like showNotification but duration is defined
    this.snackBar.open(message, null, {
      duration: duration,
    });
  }

  // ping(): Observable<any> {
  //   return this.httpClient.get(this.apiUrl + "ping", {});
  // }
}
