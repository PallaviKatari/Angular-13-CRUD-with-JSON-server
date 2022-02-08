import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup } from '@angular/forms';
import { accountModel } from '../models/accountModel';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formValue!: FormGroup;
  accountModelObj : accountModel = new accountModel();

  constructor(private formbuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      status:[''],
    })
  }

  postAccountDetails(){
    this.accountModelObj.name = this.formValue.value.name;
    this.accountModelObj.email = this.formValue.value.email;
    this.accountModelObj.mobile = this.formValue.value.mobile;
    this.accountModelObj.status = this.formValue.value.status;

    this.api.postAccounts(this.accountModelObj).subscribe(res=>{
      console.log(res);
      alert("New account added successfully!")
    },
    err=>{
      alert("Something went wrong. Please check again!")
    })
  }

}
