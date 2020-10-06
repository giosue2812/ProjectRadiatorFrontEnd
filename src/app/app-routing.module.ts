import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home',loadChildren:() => import('../app/features/home/home.module').then(m => m.HomeModule)},
  {path:'login',loadChildren:() => import('../app/features/connection/connection.module').then(m => m.ConnectionModule)},
  {path:'**',redirectTo:'home',pathMatch:'full'},
  {path: '',redirectTo: 'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
