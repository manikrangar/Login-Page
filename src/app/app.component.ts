import { Router } from '@angular/router';
import { Component } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import {FormGroup, FormControl,Validators} from '@angular/forms'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private readonly router:Router){}
  
  btnlogin(){
    this.router.navigate(['/login'])
  }

  btnregister(){
    this.router.navigate(['/register'])
  }

  btndashboard(){
    this.router.navigate(['/dashboard'])
  }

  userProfile()
  {
    // this.router.navigateByUrl('/user')
  }

}
