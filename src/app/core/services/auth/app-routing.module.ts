import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './admin-auth.guard';
import { UserAuthGuard } from './user-auth.guard';
import { PublicModule } from './modules/public/public.module';
import { SupervisorModule } from './modules/supervisor/supervisor.module';

const routes: Routes = [
  { path: 'admin', canActivate: [AdminAuthGuard], loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'user', canActivate: [UserAuthGuard], loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'supervisor', canActivate: [UserAuthGuard], loadChildren: () => import('./modules/supervisor/supervisor.module').then(m => m.SupervisorModule) },
  { path: '', loadChildren: () => PublicModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
