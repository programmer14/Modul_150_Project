import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginObject = {};

  constructor(public dialog: MatDialog, public http: HttpClient, public snackBar: MatSnackBar,
    public router: Router) { }

  ngOnInit() {
  }

  login() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http
      .post('https://localhost:44328/api/Login/login', this.loginObject, {
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
        sessionStorage.setItem('loginToken', data.toString());
        this.router.navigate(['/user']);

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
