import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentExtensionComponent } from './agent-extension.component';

describe('AgentExtensionComponent', () => {
  let component: AgentExtensionComponent;
  let fixture: ComponentFixture<AgentExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentExtensionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
