import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, apiResultFormat, getAssets, routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  public routes = routes;
}
