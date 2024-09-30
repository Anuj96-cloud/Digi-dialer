import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, apiResultFormat, getAssets, routes } from 'src/app/core/core.index';
@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {
  public routes = routes;
}
