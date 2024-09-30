import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { AgentExtensionComponent } from '../../agents/agent/agent-extension/agent-extension.component';
import { AgentListComponent } from '../../agents/agent/agent-list/agent-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgentComponent,
    AgentExtensionComponent,
    AgentListComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AgentModule { }
