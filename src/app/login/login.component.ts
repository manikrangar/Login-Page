import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserAuthentication } from 'src/services/loginService';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  httpClient :HttpClient, private router :Router) { }

  ngOnInit(): void {
    // alert("this is me ")
    
    localStorage.setItem("sessionUser","0");
  }

  loginForm  = new FormGroup({

    email : new FormControl('',[Validators.required,Validators.email]),
    password :new FormControl('',[Validators.required,Validators.minLength(6)])


  });

  REST_API_SERVER_LOGIN = "http://localhost:3000/users/login";
  sendGetRequest(userInfo:any){
    return this.httpClient.post(this.REST_API_SERVER_LOGIN,userInfo);
  }
  loginUser(){
    // if(this.loginForm.value.user==environment.username && this.loginForm.value.password==environment.password)
    // alert(this.success="Logged in Successfully")
    // else
    // alert(this.unsuccess="Sorry Invalid Credentials")
    // let user  = new UserAuthentication();
    let loginInput = this.loginForm.getRawValue();
    
    // console.log(this.httpClient.get("http://localhost:3000/users"))

    
    this.sendGetRequest(loginInput).subscribe((data: any)=>{
      if(!('msg' in data))
      {
        console.log(data);
        // UserAuthentication.isLoggedIn=true;
        localStorage.setItem("sessionUser","1");
        this.router.navigate(
          ['/dashboard'],
          { queryParams: { id: data['_id'] } }
        )

      }
      else{
        
        alert("Invalid Credentials")
      
      }
      // this.products = data;
    }) 
    // console.log()

    console.log(loginInput);

    // console.warn(this.loginForm.value);
  }

  get email(){
    return this.loginForm.get('email');

  }
  get password(){
    return this.loginForm.get('password');

  }

  success="";
  unsuccess="";

}
