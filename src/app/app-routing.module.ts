import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'segunda', loadChildren: './segunda/segunda.module#SegundaPageModule' },
  { path: 'tercera', loadChildren: './tercera/tercera.module#TerceraPageModule' },
  { path: 'cuarto', loadChildren: './cuarto/cuarto.module#CuartoPageModule' },
  { path: 'quinta', loadChildren: './quinta/quinta.module#QuintaPageModule' },
  { path: 'sexta', loadChildren: './sexta/sexta.module#SextaPageModule' },
  { path: 'septima', loadChildren: './septima/septima.module#SeptimaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
