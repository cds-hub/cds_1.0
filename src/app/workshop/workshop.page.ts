import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.page.html',
  styleUrls: ['./workshop.page.scss'],
})
export class WorkshopPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.openFirst();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
