import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/models/customer';
import * as moment from 'moment';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  public editId: number;
  public customers: Customer[];
  public registrationForm;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {

    this.registrationForm = this.formBuilder.group({
      id: 0,
      name: '',
      email: '',
      dateOfBirth: null
    });

    let customerId;
    let test = this.route.params.subscribe(
      params => {
        customerId = +params['id'];
        console.log('TESTING', 'FETCH DATA FOR CUSTOMER WITH ID: ', customerId);
        if (customerId) {
          this.editId = customerId;
          this.http.get<Customer>(this.baseUrl + 'api/customers/' + customerId).subscribe(
            res => {
              this.registrationForm = this.formBuilder.group({
                id: res.id,
                name: res.name,
                email: res.email,
                dateOfBirth: moment(res.dateOfBirth).format('YYYY-MM-DD')
              });
            },
            err => { console.log('ERROR', err); }
          );
        }
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(customerData){
    if (this.editId) {
      this.http.put<Customer>(this.baseUrl + 'api/customers/' + this.editId, customerData).subscribe(
        res => {
          console.log('SUCCESS', res);
          this.registrationForm.reset();
        }
      )
    }
    else {
      customerData.id = 0;
      this.http.post<Customer>(this.baseUrl + 'api/customers', customerData).subscribe(
        res => {
          console.log('SUCCESS', res);
          this.registrationForm.reset();
        },
        err => { console.log('ERROR', err); }
      );
    }
  }

  onTest() {
    console.log(this.registrationForm);
  }
}
