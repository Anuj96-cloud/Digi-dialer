import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonlyComponent } from './telephonly.component';

describe('TelephonlyComponent', () => {
  let component: TelephonlyComponent;
  let fixture: ComponentFixture<TelephonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelephonlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelephonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
