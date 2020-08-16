import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  Validators, FormBuilder }  from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  profileForm = this.formBuilder.group({
    email: ['', Validators.required],
    
  });


  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private authService: AuthService, private router: Router) { }

  ngOnInit(): void { 
   
   

  }


  onSubmit(){
    console.log('Sendemail')
    console.log(this.profileForm.value);
    
    this.authService.ForgotPassword(this.profileForm.value).then(data =>{
      console.log(data);
      
      if(data['success'] !== true){
        alert(data['message']);
      } else {
        localStorage.setItem('data', JSON.stringify(data));
        this.router.navigate(['/ChangePassword']);
      }
      
    });

  }

}
