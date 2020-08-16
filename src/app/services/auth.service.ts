import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL ="http://192.168.43.93:3000"
  constructor(private httpClient: HttpClient) { }

  
  

  login(data){
    console.log(data);
   
    return this.httpClient.post(`${this.apiURL}/user/login`, data).toPromise();
  }

  signup(data){
    console.log(data);
   
    return this.httpClient.post(`${this.apiURL}/user/signup`, data).toPromise();

  }
 
  ForgotPassword(data){
    console.log(data);
   
    return this.httpClient.post(`${this.apiURL}/user/verification-code`, data).toPromise();
  }

  Changepassword(data){
    console.log(data);
   
    return this.httpClient.post(`${this.apiURL}/user/password_reset`, data).toPromise();
  }


}
