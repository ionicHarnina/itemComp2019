import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-septima',
  templateUrl: './septima.page.html',
  styleUrls: ['./septima.page.scss'],
})
export class SeptimaPage implements OnInit {
  sitios=["parma","roma","milan","venecia","turin","brindisi","napoles"];
  constructor() { }

  ngOnInit() {
  }

}
