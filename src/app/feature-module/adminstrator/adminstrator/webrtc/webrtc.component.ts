import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-webrtc',
  templateUrl: './webrtc.component.html',
  styleUrl: './webrtc.component.scss'
})
export class WebrtcComponent {
  public routes = routes;

}
