import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-palestra',
  templateUrl: './palestra.page.html',
  styleUrls: ['./palestra.page.scss'],
})
export class PalestraPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.openFirst();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
