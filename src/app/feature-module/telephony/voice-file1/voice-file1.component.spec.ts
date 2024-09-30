import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceFile1Component } from './voice-file1.component';

describe('VoiceFile1Component', () => {
  let component: VoiceFile1Component;
  let fixture: ComponentFixture<VoiceFile1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceFile1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoiceFile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
