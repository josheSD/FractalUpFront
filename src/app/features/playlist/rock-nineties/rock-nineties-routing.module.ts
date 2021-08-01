import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RockNinetiesComponent } from './component/rock-nineties.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        component: RockNinetiesComponent,
        data:{title:'Rock'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RockNinetiesRoutingModule { }
