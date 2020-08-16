import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  Validators, FormBuilder }  from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

 

 
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private authService: AuthService, private router: Router) { }


 


  ngOnInit(): void { 
   
   

  }
}