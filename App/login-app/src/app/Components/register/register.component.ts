import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AgbDialogComponent } from '../agb-dialog/agb-dialog.component';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerObject = {};

  constructor(public dialog: MatDialog, public http: HttpClient) {


  }

  ngOnInit() {
  }


  AGB() {
    let dialogRef = this.dialog.open(AgbDialogComponent, {
    });
  }

  register() {

    console.log(this.registerObject);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http
      .post('https://localhost:44328/api/Login/register', this.registerObject,{
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
      });



  }
}
