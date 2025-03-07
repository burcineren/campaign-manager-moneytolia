import { Action, Selector, State, } from "@ngxs/store";
import { Injectable } from '@angular/core';
import { LoginAction, LogoutAction } from "./auth.actions";
import { AuthStateModel } from "./auth.type";



@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    isAuthenticated: false
  }
})

@Injectable()
export class AuthState {

  @Selector()
  static isAuthenticated(state: AuthStateModel) {
    return state.isAuthenticated;
  }

  @Selector()
  static token(state: AuthStateModel) {
    return state.token;
  }
  @Action(LoginAction)
  login() { }

  @Action(LogoutAction)
  logout() { }
}
