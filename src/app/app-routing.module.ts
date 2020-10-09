import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IsConnectedGuard} from './core/gaurds/is-connected.guard';


const routes: Routes = [
  {path:'home',canActivate:[IsConnectedGuard],loadChildren:() => import('../app/features/home/home.module').then(m => m.HomeModule)},
  {path:'login',loadChildren:() => import('../app/features/connection/connection.module').then(m => m.ConnectionModule)},
  {path:'dashboard',canActivate:[IsConnectedGuard],loadChildren:() => import('../app/features/dash-board/dash-board.module').then(m => m.DashBoardModule)},
  {path:'project',canActivate:[IsConnectedGuard],loadChildren:() => import('../app/features/project/project.module').then(m => m.ProjectModule)},
  {path:'**', redirectTo:'login',pathMatch:'full'},
  {path: '',redirectTo: 'login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
