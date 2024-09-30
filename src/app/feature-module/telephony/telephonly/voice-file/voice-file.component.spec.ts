import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceFileComponent } from './voice-file.component';

describe('VoiceFileComponent', () => {
  let component: VoiceFileComponent;
  let fixture: ComponentFixture<VoiceFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoiceFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
