import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  Validators, FormBuilder }  from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  profileForm = this.formBuilder.group({
    newpassword: ['', Validators.required],
    reenterpassword:['',Validators.required],
    otp:['',Validators.required]
  });


  newpasswordError=null;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private authService: AuthService, private router: Router) { }

  ngOnInit(): void { 
   
   

  }


  onSubmit(){
    console.log('Resetpassword')
    console.log(this.profileForm.value);

    var n = this.profileForm.value.newpassword.localeCompare(this.profileForm.value.reenterpassword);

    if(n==0){
      
      this.newpasswordError= null;
      


    var localData = JSON.parse(localStorage.getItem('data'));
    
    if(+this.profileForm.value.otp === localData.data.otp){

      this.profileForm.value['_id'] = localData.data._id;
  
      this.authService.Changepassword(this.profileForm.value, ).then(data =>{
        console.log(data);
        
        if(data['success'] !== true){
          alert(data['message']);
        } else {
          this.router.navigate(['/login']);
        }
        
      });
    
    }


    } else {
      this.newpasswordError ="tftryh"
    } 

  }

}

 
