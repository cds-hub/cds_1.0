import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tela', loadChildren: './tela/tela.module#TelaPageModule' },
  { path: 'curso', loadChildren: './cursos/cursos.module#CursosPageModule' },
  { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'workshop', loadChildren: './workshop/workshop.module#WorkshopPageModule' },
  { path: 'palestra', loadChildren: './palestra/palestra.module#PalestraPageModule' },
  { path: 'rodadeconversas', loadChildren: './rodadeconversas/rodadeconversas.module#RodadeconversasPageModule' },
    
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
