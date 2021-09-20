import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAdministratorComponent } from './loan-administrator.component';

describe('LoanAdministratorComponent', () => {
  let component: LoanAdministratorComponent;
  let fixture: ComponentFixture<LoanAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
