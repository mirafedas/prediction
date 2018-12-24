import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPredictionComponent } from './get-prediction.component';

describe('GetPredictionComponent', () => {
  let component: GetPredictionComponent;
  let fixture: ComponentFixture<GetPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
