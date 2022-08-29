import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  myForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, {
      validator: this.checkIfMatchingPassword("password","confirmPassword")
    });
  }

  ngOnInit() {}
  onSubmit(signUpForm) {}
  checkIfMatchingPassword(passwordKey:string,confirmPasswordKey:string){
    return (group:FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      if(password.value == confirmPassword.value) {
        return;
      }
      else {
        confirmPassword.setErrors({
          notEqualToPassword : true
        })
      }
    }
  }
}
