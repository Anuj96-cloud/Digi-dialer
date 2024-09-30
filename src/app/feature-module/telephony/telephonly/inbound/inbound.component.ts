import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, apiResultFormat, getAssets, routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styleUrl: './inbound.component.scss'
})
export class InboundComponent {
  public routes = routes;

}
