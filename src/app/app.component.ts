import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actName="Elon Musk";
  actPassword="123456789"
  nameNotFound="";
  passwordNotFound="";
  title = 'helloangular';
  name:String='';
  password:String='';
  
  setValue(name:String , password:String){
    console.log(name,password)
    this.name=name;
    this.password=password;
    

    if(this.name==="")
    this.nameNotFound="Enter Your Name";
    
    if(this.password==="")
    this.passwordNotFound="Enter Your Password"

    if(this.actName==this.name && this.actPassword ==this.password)
    alert("Logged In Success")
    else
    if(!(this.name==""||this.password==""))
    alert("Sorry Invalid Credentials");
    window.location.reload();
  }
  check()
  {
    console.log(this.name,this.password);
    alert("Name = " + this.name + "   \nPassword =" +  this.password); 
  }
}
