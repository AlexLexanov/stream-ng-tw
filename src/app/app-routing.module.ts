import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule) },
    { path: 'store', loadChildren: () => import('./pages/store/store.module').then(module => module.StoreModule) },
    { path: 'view', loadChildren: () => import('./pages/view/view.module').then(module => module.ViewModule) },
    { path: 'pay', loadChildren: () => import('./pages/pay/pay.module').then(module => module.PayModule) },
    { path: '**', loadChildren: () => import('./pages/not/not.module').then(module => module.NotModule) }
  ], {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {}
