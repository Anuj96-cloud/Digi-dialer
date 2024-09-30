import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelephonlyComponent } from './telephonly.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { FilterComponent } from './filter/filter.component';
import { InboundComponent } from './inbound/inbound.component';
import { ListComponent } from './list/list.component';
import { ScriptComponent } from './script/script.component';
import { UsersComponent } from './users/users.component';
import { VoiceFileComponent } from './voice-file/voice-file.component';

const routes: Routes = [
  { 
    path: '', 
    component: TelephonlyComponent,
    children: [
      { path: "tele-user", component: UsersComponent },
      { path: "campaigns", component: CampaignsComponent },
      { path: "filter", component: FilterComponent },
      { path: "inbound", component: InboundComponent },
      { path: "tele-list", component: ListComponent },
      { path: "tele-script", component: ScriptComponent },
      { path: "voice-file", component: VoiceFileComponent },
     ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelephonyRoutingModule { }
