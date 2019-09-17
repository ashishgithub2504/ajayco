import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { WebserviceService } from '../../services/webservice.service';
import { Router } from '@angular/router';
import { EventemitterService } from 'src/app/services/eventemitter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  private formSubmitAttempt: boolean;
  constructor(private router: Router, 
    private _eventEmiter: EventemitterService,
    public WebserviceService: WebserviceService) { }
  
  result: any = [];
  userinfo: any;
  // @Output() dataStr = new EventEmitter(); 
  counter :any = '0';
  ngOnInit() {
    // this.dataStr.emit(this.counter);
    this._eventEmiter.sendMessage('5');
    this.result.title = 'Login';
  }
  onSubmit() {
    
     this.result = this.WebserviceService.login(this.loginForm.value);
     console.log(this.result);
    // .subscribe((data) => {
    //   this.result = data;
    //   console.log(data);
    //   if(this.result.status == true){
    //     this.userinfo = this.result.data;
    //     localStorage.setItem('USERINFO', JSON.stringify(this.result.data));
    //     this.router.navigate(['/']);
    //   }
    //   this.formSubmitAttempt = true;
    //   this.counter = this.counter + 1;
    //   this._eventEmiter.sendMessage(this.counter);
    //   // this.valueChange.emit(this.counter);       
    // })
  }

}
