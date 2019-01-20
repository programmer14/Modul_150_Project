import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AgbDialogComponent } from '../agb-dialog/agb-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  AGB(){
    let dialogRef = this.dialog.open(AgbDialogComponent, {
    });
  }

  register(){
    console.log('Test');
  }

}
