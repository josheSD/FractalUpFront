import { ToDanceComponent } from './component/to-dance.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        component: ToDanceComponent,
        data:{title:'Para Bailar'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDanceRoutingModule { }
