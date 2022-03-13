import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm?: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      emoji: ['']
    })
  }

  ngOnInit() { }

  public signupUser() {
    if (this.signupForm?.value) {
      this.authService.signUp(this.signupForm?.value).subscribe(
        (res) => {
            if (res.result) {
              this.signupForm?.reset()
              this.router.navigate(['sign-in']);
            }
            console.log(res)
         })
    }
  }

}