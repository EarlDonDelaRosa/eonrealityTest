import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eonreality',
  templateUrl: './eonreality.component.html',
  styleUrls: ['./eonreality.component.css']
})
export class EonrealityComponent implements OnInit {

  signInForm = new FormGroup ({
    Email: new FormControl ('', [Validators.required, Validators.email]),
    Password: new FormControl ('', Validators.required)
  })

  UserEmail = this.signInForm.value.Email;

  get email(){
    return this.signInForm.get('Email')
  }
  
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signInForm
  }

  onNext() {
    this.router.navigate(['next'])
    localStorage.setItem('UserEmail', this.signInForm.value.Email);
  }

}
