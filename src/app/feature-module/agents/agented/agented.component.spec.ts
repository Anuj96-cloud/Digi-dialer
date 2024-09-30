import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentedComponent } from './agented.component';

describe('AgentedComponent', () => {
  let component: AgentedComponent;
  let fixture: ComponentFixture<AgentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
