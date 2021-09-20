import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-loan-administration',
  templateUrl: './loan-administration.component.html',
  styleUrls: ['./loan-administration.component.css']
})
export class LoanAdministrationComponent implements OnInit {
  public selectedCustomer: string = "";
  public customers: Customer[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
    http.get<Customer[]>(baseUrl + 'api/customers').subscribe(
      res => { this.customers = res; console.log('TESTING', 'CUSTOMERS', this.customers); },
      err => { console.log('ERROR FETCHING CUSTOMERS', err); }
    );
  }

  ngOnInit() {

  }

}
