import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAdministrationComponent } from './loan-administration.component';

describe('LoanAdministrationComponent', () => {
  let component: LoanAdministrationComponent;
  let fixture: ComponentFixture<LoanAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
