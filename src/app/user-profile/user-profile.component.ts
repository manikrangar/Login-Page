import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl , Validators} from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private route:ActivatedRoute, private router:Router , private httpClient:HttpClient
  ) { }
  
  profileId="";
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {

      console.log(params); // { order: "popular"}
      this.profileId=params['id'];
      console.log(this.profileId);
    }
  );

  this.sendRequestForGet(this.profileId).subscribe((data:any)=>{

    console.log(data);
    if("msg" in data)
    alert(data['msg']);
    else{

      this.profileForm.get('name')?.setValue(data['name']);
      this.profileForm.get('email')?.setValue(data['email']);
      this.profileForm.get('phn')?.setValue(data['phn']);
      this.profileForm.get('password')?.setValue(data['password']);
      this.profileForm.get('confirmPassword')?.setValue(data['confirmPassword']);
      this.profileForm.get('country')?.setValue(data['country']);
    }
      
      
  })
  }



  profileForm  = new FormGroup({

    name : new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phn: new FormControl('', [Validators.required]),
    password :new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
    country:new FormControl('',[Validators.required])

  });

  sendRequestForGet(userId:any){
    return this.httpClient.get("http://localhost:3000/users/"+userId);
  }

  sendRequestForUpdate(userInput:any){
    return this.httpClient.post("http://localhost:3000/users/update",userInput);
  }


  updateUserProfile(){
    console.log(this.profileForm.getRawValue());
    let userInput = this.profileForm.getRawValue();
    this.sendRequestForUpdate(userInput).subscribe((data:any)=>{
      if(!("msg" in data))
      {
        console.log(data);
        console.log("Profile Updated");
        alert("Profile Updated Successfully");
        // this.router.navigateByUrl('/dashboard')
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

  sendRequestForDelete(userId:any){
    return this.httpClient.delete("http://localhost:3000/users/delete/id/"+userId);
  }
  deleteAccount(){
    
    var msg= prompt("Write 'DELETE' to continue ");
    if(msg=="DELETE")
    {
      this.sendRequestForDelete(this.profileId).subscribe((data)=>{
        console.log("Deleted Successfully")
        })
        this.router.navigateByUrl('/')
    }
  }

  get name(){
    return this.profileForm.get('name');

  }
  get password(){
    return this.profileForm.get('password');

  }

  get confirmPassword(){
    return this.profileForm.get('confirmPassword');

  }
  get email(){
    return this.profileForm.get('email');

  }
  get country(){
    return this.profileForm.get('country');

  }
  get phn(){
    return this.profileForm.get('phn');

  }


}
