import { Router } from '@angular/router';
import { AuthService } from './../app/services/auth.service';
import { AuthActions } from './../actions/auth.action';
// import { HttpService } from './../app/services/http.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthEffect {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(() => this.authService.loginWithGoogle()),
      map((idToken) => {
        this.router.navigate(['/home']);
        return AuthActions.loginSuccess({ idToken });
      }),
      catchError((error) => of(AuthActions.loginFailure({ error })))
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => this.authService.logout()),
      map(() => {
        this.router.navigate(['/']);
        return AuthActions.logoutSuccess();
      }),
      catchError((error) => of(AuthActions.logoutFailure({ error })))
    )
  );
}