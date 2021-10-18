import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  public userdetails: any;

  constructor(private router: Router, private loginDetails: LoginService) { 
    this.loginDetails.GetUserDetails().subscribe(result => {this.userdetails = result;}, error => console.error(error));
  }
  
  ngOnInit(): void {
  }
  onLogout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
