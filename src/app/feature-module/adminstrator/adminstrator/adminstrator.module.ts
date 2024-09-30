import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminstratorRoutingModule } from './adminstrator-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModulesComponent } from './modules/modules.component';
import { RolesComponent } from './roles/roles.component';
import { WebrtcComponent } from './webrtc/webrtc.component';
import { AdminstratorComponent } from './adminstrator.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';


@NgModule({
  declarations: [
    AdminstratorComponent,
    RolesComponent,
    ModulesComponent,
    WebrtcComponent,
    CompanySettingsComponent,
 
  ],
  imports: [
    CommonModule,
    AdminstratorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  
  ]
})
export class AdminstratorModule { }
