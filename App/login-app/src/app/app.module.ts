import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatDialogModule, MatSnackBarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PicturesComponent } from './Components/pictures/pictures.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { AgbDialogComponent } from './Components/agb-dialog/agb-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ErrorDialogComponent } from './Components/error-dialog/error-dialog.component';
import { VerifiyEmailComponent } from './Components/verifiy-email/verifiy-email.component';
import { UserInfoHubComponent } from './Components/user-info-hub/user-info-hub.component';
@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    LoginComponent,
    RegisterComponent,
    AgbDialogComponent,
    ErrorDialogComponent,
    VerifiyEmailComponent,
    UserInfoHubComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AgbDialogComponent, ErrorDialogComponent]
})
export class AppModule { }
