import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// import {FormGroup, FormControl,Validators} from '@angular/forms'
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });


  // it("should login successfully with valid credentials",()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   app.loginForm.setValue({user:"Admin",password:"111111111"})
    
  //   app.loginUser();
   
  //   expect(app.success).toBe("Logged in Successfully");

    
  // })

  // it("should not login successfully with valid name and invalid password",()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   app.loginForm.setValue({user:"Admin",password:"111111"})
  //   app.loginUser();
  //   expect(app.unsuccess).toBe("Sorry Invalid Credentials");
    
    
  // })

  // it("should not login successfully with invalid name and valid password",()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
    
  //   app.loginForm.setValue({user:"Admining",password:"111111"})
  //   app.loginUser();
  //   expect(app.unsuccess).toBe("Sorry Invalid Credentials");
   
    
    
  // })

  // it("should not login successfully with invalid credentials",()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   app.loginForm.setValue({user:"manik",password:"123456789"})
    
  //   app.loginUser();
  //   expect(app.unsuccess).toBe("Sorry Invalid Credentials");

    
  // })

  // it("Submit Button Disabled with empty credentials",()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
    
  //   app.loginForm.setValue({user:"",password:""})
  //   expect(app.disabled).toBeTruthy();
  // })

  // it("should promt with empty Name and Valid/Invalid Password",()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   app.setValue("","nlkdk");
  //   expect(app.nameNotFound).toBe("Enter Your Name");
  //   expect(app.passwordNotFound).toBe("");
    
  // })

  // it("should promt with Valid/Invalid Name and Empty Password",()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   app.setValue("ewdvd","");
  //   expect(app.nameNotFound).toBe("");
  //   expect(app.passwordNotFound).toBe("Enter Your Password");
    
  // })
  

  
  

});


