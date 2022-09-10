import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/mobile/mobile.module').then( m => m.MobilePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./pages/status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./pages/calls/calls.module').then( m => m.CallsPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'select-contact',
    loadChildren: () => import('./pages/select-contact/select-contact.module').then( m => m.SelectContactPageModule)
  },
  {
    path: 'mobile',
    loadChildren: () => import('./pages/mobile/mobile.module').then( m => m.MobilePageModule)
  },
  {
    path: 'profile-info',
    loadChildren: () => import('./pages/profile-info/profile-info.module').then( m => m.ProfileInfoPageModule)
  },
  {
    path: 'verify-mobile',
    loadChildren: () => import('./pages/verify-mobile/verify-mobile.module').then( m => m.VerifyMobilePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'person-info',
    loadChildren: () => import('./pages/person-info/person-info.module').then( m => m.PersonInfoPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./pages/image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'archieve',
    loadChildren: () => import('./pages/archieve/archieve.module').then( m => m.ArchievePageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'edit-modal',
    loadChildren: () => import('./pages/edit-modal/edit-modal.module').then( m => m.EditModalPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'chat-settings',
    loadChildren: () => import('./pages/chat-settings/chat-settings.module').then( m => m.ChatSettingsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./pages/storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'status-viewer',
    loadChildren: () => import('./pages/status-viewer/status-viewer.module').then( m => m.StatusViewerPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
