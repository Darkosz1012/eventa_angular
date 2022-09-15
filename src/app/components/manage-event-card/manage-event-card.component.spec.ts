import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventCardComponent } from './manage-event-card.component';

describe('ManageEventCardComponent', () => {
  let component: ManageEventCardComponent;
  let fixture: ComponentFixture<ManageEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEventCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
