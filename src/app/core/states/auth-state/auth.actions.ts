export class LoginAction {
  static readonly type = '[Auth] Login';
  constructor(public payload: { email: string; password: string }) { }
}
export class LogoutAction {
  static readonly type = '[Auth] Logout';
}
