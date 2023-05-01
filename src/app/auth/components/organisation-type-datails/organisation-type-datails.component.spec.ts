import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationTypeDatailsComponent } from './organisation-type-datails.component';

describe('OrganisationTypeDatailsComponent', () => {
  let component: OrganisationTypeDatailsComponent;
  let fixture: ComponentFixture<OrganisationTypeDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationTypeDatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationTypeDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
