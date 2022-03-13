import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user.models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public user?: User;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute) 
    {
      this.route.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          this.authService.getUserProfile(id).subscribe(user => {
            this.user = user.result;
          })
        }
      })
   }

  ngOnInit(): void {}
}