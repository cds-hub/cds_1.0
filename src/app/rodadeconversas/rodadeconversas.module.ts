import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RodadeconversasPage } from './rodadeconversas.page';

const routes: Routes = [
  {
    path: '',
    component: RodadeconversasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RodadeconversasPage]
})
export class RodadeconversasPageModule {}
