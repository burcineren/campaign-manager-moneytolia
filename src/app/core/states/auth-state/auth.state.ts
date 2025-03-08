import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from '@angular/core';
import { LoginAction, LogoutAction } from "./auth.actions";
import { AuthStateModel } from "./auth.type";
import { AuthService } from '../../services/auth.service';
import { tap } from "rxjs";

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'
  }
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService) { }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return state.isAuthenticated;
  }

  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Action(LoginAction)
  login(ctx: StateContext<AuthStateModel>, action: LoginAction) {
    const { username, password } = action.payload;
    return this.authService.login(username, password).pipe(
      tap((response) => {
        const newState: AuthStateModel = {
          token: response.token,
          isAuthenticated: true
        };
        ctx.patchState(newState);
      })
    );
  }

  @Action(LogoutAction)
  logout(ctx: StateContext<AuthStateModel>) {
    this.authService.logout();
    ctx.setState({
      token: null,
      isAuthenticated: false
    });
  }
}
