import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-customer-administration',
  templateUrl: './customer-administration.component.html',
  styleUrls: ['./customer-administration.component.css']
})
export class CustomerAdministrationComponent implements OnInit {
  public customers: Customer[];

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject('BASE_URL') private baseUrl: string
  ) {
    http.get<Customer[]>(baseUrl + 'api/customers').subscribe(
      res => { this.customers = res; },
      err => { console.log('ERROR FETCHING CUSTOMERS', err); }
    );
  }

  ngOnInit() {
  }

  onDelete(customerId, index) {
    this.http.delete(this.baseUrl + 'api/customers/' + customerId).subscribe(
      res => {
        console.log('DELETED', res);
        this.customers.splice(index, 1);
      },
      err => { console.log('ERROR DELETING', err); }
    );
  }

  onEdit(customerId) {
    this.router.navigate(['/customer-modification/' + customerId]);
  }

}
