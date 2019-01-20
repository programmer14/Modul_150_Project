import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  images = [{
    title:'Bild 1 Beispiel Titel', undertitle: 'Bild 1 Beispiel Untertitel', description: 'Bild 1 Beispiel Beschreibung' 
  },
  {
    title:'Bild 2 Beispiel Titel', undertitle: 'Bild 2 Beispiel Untertitel', description: 'Bild 2 Beispiel Beschreibung' 
  },
  {
    title:'Bild 3 Beispiel Titel', undertitle: 'Bild 3 Beispiel Untertitel', description: 'Bild 3 Beispiel Beschreibung' 
  },
  {
    title:'Bild 4 Beispiel Titel', undertitle: 'Bild 4 Beispiel Untertitel', description: 'Bild 4 Beispiel Beschreibung' 
  },
  {
    title:'Bild 5 Beispiel Titel', undertitle: 'Bild 5 Beispiel Untertitel', description: 'Bild 5 Beispiel Beschreibung' 
  },
  {
    title:'Bild 6 Beispiel Titel', undertitle: 'Bild 6 Beispiel Untertitel', description: 'Bild 6 Beispiel Beschreibung' 
  }]

  constructor() { }

  ngOnInit() {
  }

}
