import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId:string="";



  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {

        console.log(params); // { order: "popular"}
        console.log(params['id']);
        this.userId=params['id'];
        if(this.userId==undefined)
        this.router.navigate(['/login']);
      }
    );
  }

    userProfile(){
    this.router.navigate(
      ['/profile'],
      {queryParams : { id : this.userId } }
    )

    alert("userProfile")
  }

}
