import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  Validators, FormBuilder }  from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  profileForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });


  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private authService: AuthService, private router: Router) { }

  

  
  ngOnInit(): void { 
   
   

  }

  onSubmit(){
    console.log('Login')
    console.log(this.profileForm.value);

    this.authService.login(this.profileForm.value).then(data =>{
      console.log(data);
      
      if(data['success'] !== true){
        alert(data['message']);
      } else {
        this.router.navigate(['/dash-board']);
      }
      
    });

  }

}
