import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './component/artists.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        component: ArtistsComponent,
        data:{title:'Artistas'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
