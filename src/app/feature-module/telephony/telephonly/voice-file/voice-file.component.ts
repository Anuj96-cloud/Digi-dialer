import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, apiResultFormat, getAssets, routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-voice-file',
  templateUrl: './voice-file.component.html',
  styleUrl: './voice-file.component.scss'
})
export class VoiceFileComponent {
  public routes = routes;

}
