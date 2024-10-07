import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCalculatorComponent } from './test-calculator.component';

describe('TestCalculatorComponent', () => {
  let component: TestCalculatorComponent;
  let fixture: ComponentFixture<TestCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
