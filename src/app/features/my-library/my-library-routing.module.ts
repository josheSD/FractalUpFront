import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'albunes',
        data:{title:'Albunes',breadcrumds:'/albunes'},
        loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule)
      },
      {
        path:'artistas',
        data:{title:'Artistas',breadcrumds:'/artistas'},
        loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsModule)
      },
      {
        path:'recientes',
        data:{title:'Recientes',breadcrumds:'/recientes'},
        loadChildren: () => import('./recent/recent.module').then(m => m.RecentModule)
      },
      {
        path:'estaciones',
        data:{title:'Estaciones',breadcrumds:'/estaciones'},
        loadChildren: () => import('./seasons/seasons.module').then(m => m.SeasonsModule)
      },
      {
        path:'canciones',
        data:{title:'Canciones',breadcrumds:'/canciones'},
        loadChildren: () => import('./songs/songs.module').then(m => m.SongsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLibraryRoutingModule { }
