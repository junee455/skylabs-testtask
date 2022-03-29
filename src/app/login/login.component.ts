import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponseData } from 'src/models/models';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    captcha: new FormControl(null, [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  resolved(captchaResponse: string) {
    console.log(captchaResponse);
  }

  login() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((response: LoginResponseData) => {
        localStorage.setItem('token', response.result.token);
        localStorage.setItem('userInfo', JSON.stringify(response.result));
        this.router.navigate(['/account']);
      });
  }

  ngOnInit(): void {}
}
