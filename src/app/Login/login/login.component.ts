import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   formModel = {
     UserName: '',
     Password: ''
   }

  constructor(private loginDetails: LoginService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.router.navigateByUrl('/project-manager');
    }
  }

  onSubmit(form: NgForm){
    
   this.loginDetails.login(form.value).subscribe(
     (res: any)=>{
       localStorage.setItem('token', res.token);
       if(form.value.UserName == "Poornima")
       {
         this.router.navigateByUrl('/project-feedbacks');
       }
       else{
       this.router.navigateByUrl('/project-manager');
       }
     },
   );
  }

}
