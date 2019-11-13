import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.page.html',
  styleUrls: ['./cuarto.page.scss'],
})
export class CuartoPage implements OnInit {
  elemento=false;

  constructor() { }
  mostrar(){
    console.log("evento de click");
  }
  ngOnInit() {
  }

}
