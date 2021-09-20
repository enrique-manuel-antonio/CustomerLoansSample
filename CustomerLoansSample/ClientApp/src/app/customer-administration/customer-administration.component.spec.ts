import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAdministrationComponent } from './customer-administration.component';

describe('CustomerAdministrationComponent', () => {
  let component: CustomerAdministrationComponent;
  let fixture: ComponentFixture<CustomerAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
