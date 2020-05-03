import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { WebserviceService } from '../../services/webservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm = new FormGroup({
    first_name: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  constructor(public WebserviceService: WebserviceService, private router: Router) { }
  result: any = [];
  ngOnInit() {
    this.result.title = 'Register';
  }
  
  onSubmit() {
    this.WebserviceService.signup(this.signupForm.value)
    .subscribe((data) => {
      this.result = data;
      console.log(this.result);
      if(this.result.status == true) {
        this.router.navigate(['/']);
      } else {
        alert(this.result.message);
      }     
    });
  }
}
