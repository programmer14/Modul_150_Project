import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PicturesComponent } from './Components/pictures/pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
