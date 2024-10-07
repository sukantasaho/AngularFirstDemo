import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('cart title test',()=>{
    it('Expecting Amazon Cart',()=>{
      expect(component.Title()).toBe('Amazon Cart')
    })
  })
  describe('Total Test',()=>{
    it('Total must be 100',()=>{
      expect(component.CalculateTotalPrice(10,10)).toBe(100);
    })
  })
});
