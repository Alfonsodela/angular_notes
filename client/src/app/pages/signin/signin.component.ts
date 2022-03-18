import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public signinForm?: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { 
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  signinUser() {
    if (this.signinForm?.value) {
      this.authService.signIn(this.signinForm.value).subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err)
      });
    }
  }

  public navigateToList() {
    this.router.navigate(["/sign-up"]);
  }

}
