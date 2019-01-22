import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-verifiy-email',
  templateUrl: './verifiy-email.component.html',
  styleUrls: ['./verifiy-email.component.scss']
})
export class VerifiyEmailComponent implements OnInit {

  verified = false;
  token = '';
  constructor(public dialog: MatDialog, public http: HttpClient, public route: ActivatedRoute) {



    this.token = this.route.snapshot.paramMap.get('id');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http
      .get('https://localhost:44328/api/Login/verify/' + this.token)
      .subscribe(data => {
        this.verified = true;
      },
        error => {
          const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '250px',
            data: { error: error.error }
          });

        }
      );


  }

  ngOnInit() {
  }




}
