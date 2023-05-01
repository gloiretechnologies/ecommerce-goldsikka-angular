import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcploreDealsComponent } from './excplore-deals.component';

describe('ExcploreDealsComponent', () => {
  let component: ExcploreDealsComponent;
  let fixture: ComponentFixture<ExcploreDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcploreDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcploreDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
