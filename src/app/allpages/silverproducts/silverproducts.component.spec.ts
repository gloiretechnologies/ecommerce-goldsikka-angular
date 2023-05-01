import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverproductsComponent } from './silverproducts.component';

describe('SilverproductsComponent', () => {
  let component: SilverproductsComponent;
  let fixture: ComponentFixture<SilverproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilverproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilverproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
