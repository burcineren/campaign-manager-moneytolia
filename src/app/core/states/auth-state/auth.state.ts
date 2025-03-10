import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from '@angular/core';
import { LoginAction, LogoutAction } from "./auth.actions";
import { AuthStateModel } from "./auth.type";
import { AuthService } from '../../services/auth.service';
import { tap } from "rxjs";

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
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

  @Action(LoginAction)
  login(ctx: StateContext<AuthStateModel>, action: LoginAction) {
    const { username, password } = action.payload;
    return this.authService.login(username, password).pipe(
      tap(isAuthenticated => {
        ctx.patchState({ isAuthenticated });
      })
    );
  }

  @Action(LogoutAction)
  logout(ctx: StateContext<AuthStateModel>) {
    this.authService.logout();
    ctx.setState({
      isAuthenticated: false
    });
  }
}
