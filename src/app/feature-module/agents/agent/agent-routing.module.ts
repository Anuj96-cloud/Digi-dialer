import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';
import { AgentExtensionComponent } from '../../agents/agent/agent-extension/agent-extension.component';
import { AgentListComponent } from '../../agents/agent/agent-list/agent-list.component';
const routes: Routes = [
  { 
    path: '', 
    component: AgentComponent,
    children: [
      { path: "agent-list", component: AgentExtensionComponent },
      { path: "agent-extension", component: AgentListComponent },
      ],
}];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
