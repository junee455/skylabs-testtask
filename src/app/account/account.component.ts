import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

import { UserInfo } from '../../models/models';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(private authService: AuthService) {}

  userInfo: UserInfo | null = null;

  getUserInfo() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  }

  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('userInfo', '');
  }

  ngOnInit(): void {
    this.getUserInfo();
  }
}
