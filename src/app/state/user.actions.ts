import { Action } from '@ngrx/store';
import { User } from '../model/User';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',

  CreateUser = '[User] Create Users',
  CreateUserSuccess = '[User] Create Users Success',
  CreateUserFailure = '[User] Create Users Failure',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: { data: User[] }) { }
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: { error: string }) { }
}

export class CreateUser implements Action {
  readonly type = UserActionTypes.CreateUser;
  constructor(public payload: { user: User }) { }
}

export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CreateUserSuccess;
  constructor(public payload: { data: User }) { }
}

export class CreateUserFailure implements Action {
  readonly type = UserActionTypes.CreateUserFailure;
  constructor(public payload: { error: string }) { }
}

export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersFailure | CreateUser | CreateUserSuccess | CreateUserFailure;

