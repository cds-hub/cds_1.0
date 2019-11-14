import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-rodadeconversas',
  templateUrl: './rodadeconversas.page.html',
  styleUrls: ['./rodadeconversas.page.scss'],
})
export class RodadeconversasPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.openFirst();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
