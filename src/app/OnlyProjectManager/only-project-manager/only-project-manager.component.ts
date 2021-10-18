import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-only-project-manager',
  templateUrl: './only-project-manager.component.html',
  styleUrls: ['./only-project-manager.component.css']
})
export class OnlyProjectManagerComponent implements OnInit {
  
  public feedbacks: any;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  closeModal!: string;

  constructor(private router: Router, private loginDetails: LoginService,private modalService: NgbModal) { 
    this.loginDetails.GetFeedbacks().subscribe(result => {this.feedbacks = result;}, error => console.error(error));
  }

  ngOnInit(): void {
  }
  onLogout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  Submit(id:string, PMcomments:string){
    this.loginDetails.SubmitPMcomments(id,PMcomments).subscribe(
      (res: any)=>{
        localStorage.setItem('token', res.token);
      },
    );
   }

}
