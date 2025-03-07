import { Action, Selector, State, StateContext, } from "@ngxs/store";
import { Injectable } from '@angular/core';
import { LoginAction, LogoutAction } from "./auth.actions";
import { AuthStateModel } from "./auth.type";
import { AuthService } from '../../services/auth.service';
import { tap } from "rxjs";



@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    isAuthenticated: false
  }
})

@Injectable()
export class AuthState {
  constructor(private authService: AuthService) { }
  @Selector()
  static isAuthenticated(state: AuthStateModel) {
    return state.isAuthenticated;
  }

  @Selector()
  static token(state: AuthStateModel) {
    return state.token;
  }
  @Action(LoginAction)
  login(ctx: StateContext<AuthStateModel>, action: LoginAction) {
    const { email, password } = action.payload;
    return this.authService.login(email, password).pipe(
      tap((token) => {
        ctx.patchState({
          isAuthenticated: true
        });
        // localStorage.setItem('token', token);
      })
    )
  }

  @Action(LogoutAction)
  logout() { }
}
