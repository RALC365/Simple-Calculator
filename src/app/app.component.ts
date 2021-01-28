import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animales:Array<any> = [
    {tipo: 'Perro', nombre: 'Lisa', edad:10},
    {tipo: 'Gato', nombre: 'Pepon', edad:2},
    {tipo: 'Pato', nombre: 'Tantan', edad:7},
  ]
}
