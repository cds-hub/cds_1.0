import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
  
})
export class CursosPage implements OnInit {
 users = [];
 page = 0;
maximumPages = 4;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.openFirst();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}




