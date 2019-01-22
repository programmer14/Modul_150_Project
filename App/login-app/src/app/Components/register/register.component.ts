import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AgbDialogComponent } from '../agb-dialog/agb-dialog.component';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerObject = {};

  constructor(public dialog: MatDialog, public http: HttpClient, public snackBar: MatSnackBar,
    public router: Router) {


  }

  ngOnInit() {
  }


  AGB() {
    let dialogRef = this.dialog.open(AgbDialogComponent, {
    });
  }

  register() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http
      .post('https://localhost:44328/api/Login/register', this.registerObject, {
        headers: headers
      })
      .subscribe(data => {
        this.snackBar.open('Profil erstellt', 'OK', {
          duration: 7000,
          verticalPosition: 'top'
        });
        this.router.navigate(['/login']);

      },
        error => {
            const dialogRef = this.dialog.open(ErrorDialogComponent, {
              width: '250px',
              data: {error: error.error}
            });
        
        }
      );



  }
}
