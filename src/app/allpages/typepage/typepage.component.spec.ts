import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypepageComponent } from './typepage.component';

describe('TypepageComponent', () => {
  let component: TypepageComponent;
  let fixture: ComponentFixture<TypepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
