import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistrationsComponent } from './new-registrations.component';

describe('NewRegistrationsComponent', () => {
  let component: NewRegistrationsComponent;
  let fixture: ComponentFixture<NewRegistrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRegistrationsComponent]
    });
    fixture = TestBed.createComponent(NewRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
