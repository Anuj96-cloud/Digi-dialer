import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelephonyRoutingModule } from './telephony-routing.module';
  
import { TelephonlyComponent } from './telephonly.component';
 
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { InboundComponent } from './inbound/inbound.component';
import { ScriptComponent } from './script/script.component';
import { VoiceFileComponent } from './voice-file/voice-file.component';
import { EditListModalComponent } from './list/edit-list-modal/edit-list-modal.component';


@NgModule({
  declarations: [TelephonlyComponent,
    UsersComponent,
    CampaignsComponent,
    ListComponent,
    FilterComponent,
    InboundComponent,
    ScriptComponent,
    VoiceFileComponent,
    EditListModalComponent,

  ],
  imports: [
    CommonModule,
    TelephonyRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
 })
export class TelephonyModule { }
