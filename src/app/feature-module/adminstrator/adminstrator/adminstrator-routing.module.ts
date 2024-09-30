import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminstratorComponent } from './adminstrator.component';
import { ModulesComponent } from './modules/modules.component';
import { RoleComponent } from '../../administration/settings/role/role.component';
import { WebrtcComponent } from './webrtc/webrtc.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminstratorComponent,
    children: [
      { path: "role-right", component: RoleComponent },
      { path: "adminstrator-module", component: ModulesComponent },
      { path: "adminstrator-webRTC", component: WebrtcComponent },
      { path: "adminstrator-setting", component: CompanySettingsComponent },
 
     ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminstratorRoutingModule { }
