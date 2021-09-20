import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Loan } from 'src/models/loan';

@Component({
  selector: 'app-customer-loans',
  templateUrl: './customer-loans.component.html',
  styleUrls: ['./customer-loans.component.css']
})
export class CustomerLoansComponent implements OnInit, OnChanges {
  @Input() customerId: string;
  public loans: Loan[];
  public newLoanForm;
  public formDefault;
  public editingLoanId: number = -1;
  public editingLoanDate: string = moment().format('YYYY-MM-DD');
  public editingLoanAmount: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }

  loadData() {
    this.newLoanForm = this.formBuilder.group({
      id: 0,
      customerId: parseInt(this.customerId),
      dateRequested: moment().format('YYYY-MM-DD'),
      amount: null
    });

    this.formDefault = {id: 0, customerId: parseInt(this.customerId), dateRequested: moment().format('YYYY-MM-DD'), amount: null};

    this.http.get<Loan[]>(this.baseUrl + 'api/customers/' + this.customerId + '/loans').subscribe(
      res => {
        console.log('FETCHED LOANS', res);
        this.loans = res;
      },
      err => { console.log('ERROR', err); }
    );
  }

  onSubmit(newLoanData) {
    this.http.post<Loan>(this.baseUrl + 'api/loans', newLoanData).subscribe(
      res => {
        console.log('SUCCESS', res);
        this.loans.push(res);
        this.newLoanForm.reset(this.formDefault);
      },
      err => { console.log('ERROR', err); }
    );
  }

  onToggleEditing(loan: Loan) {
    if (loan.id != this.editingLoanId){
      this.editingLoanId = loan.id;
      this.editingLoanDate = moment(loan.dateRequested).format('YYYY-MM-DD');
      this.editingLoanAmount = loan.amount;
    }
    else
      this.editingLoanId = -1;
  }

  onEdit(index: number){
    let loan: Loan = {
      id: this.editingLoanId,
      customerId: parseInt(this.customerId),
      dateRequested: moment(this.editingLoanDate).toDate(),
      amount: this.editingLoanAmount
    };
    this.http.put(this.baseUrl + 'api/loans/' + this.editingLoanId, loan).subscribe(
      res => {
        console.log('EDITED', res);
        this.loans[index] = loan;
        this.editingLoanId = -1;
      },
      err => { console.log('ERROR', 'EDITING', err); }
    )
  }

  onDelete(loanId, index){
    this.http.delete(this.baseUrl + 'api/loans/' + loanId).subscribe(
      res => { 
        console.log('DELETED', res);
        this.loans.splice(index, 1);
      },
      err => { console.log('ERROR DELETING', err); }
    )
  }

}
