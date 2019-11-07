import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.page.html',
  styleUrls: ['./tela.page.scss'],
})
export class TelaPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.openFirst();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
