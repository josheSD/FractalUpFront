import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Shared
import { SplashScreenComponent } from './shared/splash-screen/component/splash-screen.component';
import { NotFoundPageComponent } from './shared/not-found-page/component/not-found-page.component';

// Layouts
import { AdminComponent } from './shared/layouts/admin/component/admin.component';
import { AuthComponent } from './shared/layouts/auth/component/auth.component';

const routes: Routes = [
  { path: '' , component: SplashScreenComponent , data: {title: 'Splash'}},
  { path: 'login', component: AuthComponent, data: {title: 'Auth'},
    children:[
      {path:'',         loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)}
    ]
  },
  { path: 'admin', component: AdminComponent, data: {title: 'Admin'},
    children:[
      {path:'',  loadChildren: () => import('./features/my-library/my-library.module').then(m => m.MyLibraryModule)},
      {path:'',     loadChildren: () => import('./features/playlist/playlist.module').then(m => m.PlaylistModule)}
    ]
  },
  { path: '**', component: NotFoundPageComponent , data: {title: 'Page not found'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
