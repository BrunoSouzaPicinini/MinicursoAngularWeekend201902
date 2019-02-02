import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Olá mundo"
  listaDePlanetas;

  constructor(ajax: HttpClient) {
    ajax.get('http://localhost:3000/v2/dados').subscribe(
      (planetasApli) => {
       this.listaDePlanetas = planetasApli;
      }
    );
  }
}