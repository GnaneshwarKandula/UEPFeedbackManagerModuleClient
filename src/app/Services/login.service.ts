import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  private _baseUrl:string = "https://localhost:44351/api/UserDetails";
  private _feedbackBaseUrl: string = "https://localhost:44351/api/Feedbacks";

  constructor(private http: HttpClient) { }

  GetUserDetails(){
    return this.http.get(this._baseUrl);
  }

  login(formData: any){
    return this.http.post(this._baseUrl + '/Login', formData);
  }
   
  GetFeedbacks(){
    return this.http.get(this._feedbackBaseUrl);
  }

  SubmitPMcomments(id:string,PMcomments:string){
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('PMcomments', PMcomments);
    return this.http.get('https://localhost:44351/api/Feedbacks/updateComment/id', {params: params});
  }
  
}
