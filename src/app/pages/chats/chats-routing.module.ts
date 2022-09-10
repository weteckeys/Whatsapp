import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsPage } from './chats.page';

const routes: Routes = [
  {
    path: 'chats',
    component: ChatsPage,
    children: [
      {
        path: 'camera',
        loadChildren: () => import('../camera/camera.module').then(m => m.CameraPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'status',
        loadChildren: () => import('../status/status.module').then(m => m.StatusPageModule)
      },
      {
        path: 'calls',
        loadChildren: () => import('../calls/calls.module').then(m => m.CallsPageModule)
      },
      {
        path: '',
        redirectTo: '/chats/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/chats/home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsPageRoutingModule {}
