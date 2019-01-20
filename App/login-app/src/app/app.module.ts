import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PicturesComponent } from './Components/pictures/pictures.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { AgbDialogComponent } from './Components/agb-dialog/agb-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    LoginComponent,
    RegisterComponent,
    AgbDialogComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AgbDialogComponent]
})
export class AppModule { }
