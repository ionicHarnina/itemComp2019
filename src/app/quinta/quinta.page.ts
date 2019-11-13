import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  seleccion: string;
  constructor() { }
  mostrar() {
    console.log(this.seleccion);
  }
  ngOnInit() {
  }

}
