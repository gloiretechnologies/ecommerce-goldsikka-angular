import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpageEcomComponent } from './cartpage-ecom.component';

describe('CartpageEcomComponent', () => {
  let component: CartpageEcomComponent;
  let fixture: ComponentFixture<CartpageEcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartpageEcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartpageEcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
