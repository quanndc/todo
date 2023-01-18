import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from 'src/actions/auth.action';
import { AuthService } from 'src/app/services/auth.service';
import { AuthState } from 'src/states/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private store: Store<{auth:AuthState}>
    ) {}

  login(){
    this.store.dispatch(AuthActions.login());
  }

  logout(){
    this.store.dispatch(AuthActions.logout());
  }



  ngOnInit(): void {
  }


}
