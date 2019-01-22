import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ErrorDialogComponent } from '../Components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private http: HttpClient,
        private dialog: MatDialog
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('loginToken') !== null) {
            return true;
        }
        else{
            return false;
        }
        
    }


}