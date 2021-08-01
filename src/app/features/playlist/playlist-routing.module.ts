import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'baladas',
        data:{title:'Baladas',breadcrumds:'/baladas'},
        loadChildren: () => import('./balads/balads.module').then(m => m.BaladsModule)
      },
      {
        path:'metal',
        data:{title:'Metal',breadcrumds:'/metal'},
        loadChildren: () => import('./metal/metal.module').then(m => m.MetalModule)
      },
      {
        path:'rock',
        data:{title:'Rock',breadcrumds:'/rock'},
        loadChildren: () => import('./rock-nineties/rock-nineties.module').then(m => m.RockNinetiesModule)
      },
      {
        path:'para-bailar',
        data:{title:'Para Bailar',breadcrumds:'/para-bailar'},
        loadChildren: () => import('./to-dance/to-dance.module').then(m => m.ToDanceModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
