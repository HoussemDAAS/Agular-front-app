import { Component } from '@angular/core';
import { User } from '../model/User.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string = "login ou mot de passe erronés..";
  user = new User();
  err: number = 0;
  constructor(private authService: AuthService,
    private router: Router) { }
  // onLoggedin() {
  //   this.authService.login(this.user).subscribe({
  //     next: (data) => {
  //       let jwToken = data.headers.get('Authorization')!;
  //       this.authService.saveToken(jwToken);
  //       this.router.navigate(['/']);
  //     },
  //     error: (err: any) => {
  //       this.err = 1;
  //     }
  //   });
  // }
  onLoggedin()
{
this.authService.login(this.user).subscribe({
next: (data) => {
let jwToken = data.headers.get('Authorization')!;
this.authService.saveToken(jwToken);
this.router.navigate(['/']); 
},
error: (err) => {this.err = 1; 
  if (err.error.errorCause=='disabled')
  this.message="Utilisateur désactivé, Veuillez contacter votre Administrateur";
  }
  });
  }
}