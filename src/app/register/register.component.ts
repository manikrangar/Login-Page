import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }


  registerForm  = new FormGroup({

    name : new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phn: new FormControl('', [Validators.required]),
    password :new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
    country:new FormControl('',[Validators.required])

  });

  sendRequest(userInput:any){
    return this.httpClient.post("http://localhost:3000/users",userInput);
  }

  registerUser(){
    console.log(this.registerForm.getRawValue());
    let userInput = this.registerForm.getRawValue();
    this.sendRequest(userInput).subscribe((data:any)=>{
      if(!("msg" in data))
      {
        console.log(data);
        console.log("user created successfully Enjoy");
        alert("Profile Created Welcome to website");
        this.router.navigateByUrl('/dashboard')
      }
      else{
        console.log(data);
        alert(data.msg)
      }
    })

    // if(this.loginForm.value.user==environment.username && this.loginForm.value.password==environment.password)
    // alert(this.success="Logged in Successfully")
    // else
    // alert(this.unsuccess="Sorry Invalid Credentials")

    // // console.warn(this.loginForm.value);
  }

  get name(){
    return this.registerForm.get('name');

  }
  get password(){
    return this.registerForm.get('password');

  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword');

  }
  get email(){
    return this.registerForm.get('email');

  }
  get country(){
    return this.registerForm.get('country');

  }
  get phn(){
    return this.registerForm.get('phn');

  }

  success="";
  unsuccess="";

}
