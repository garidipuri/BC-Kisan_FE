import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  Validators, FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl,  } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    Confirm: ['',Validators.required]
  });

  
  passwordError=null;
 
  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router) {

   

    
    

  }


  ngOnInit(): void {

  }

  

  onSubmit(){
    console.log('Next')
    console.log(this.profileForm.value);

    var n = this.profileForm.value.password.localeCompare(this.profileForm.value.Confirm);

    if(n==0){

      this.passwordError= null;

      this.authService.signup(this.profileForm.value).then(data =>{
        console.log(data);
        
        if(data['success'] !== true){
          alert(data['message']);
        } else {
          this.router.navigate(['/dash-board']);
        }
        
      });

    } else {
      this.passwordError ="hgvhjh"
    } 
    




  }


}
