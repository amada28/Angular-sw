import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as UserActions from '../state/user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private _userService: UserService) { }

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LoadUsers),
    mergeMap(action => this._userService.getUsers().pipe(
      map(users => (new UserActions.LoadUsersSuccess({ data: users }))),
      catchError(err => of(new UserActions.LoadUsersFailure({ error: err }))
      ))
    )
  )

  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.CreateUser),
    mergeMap(action => this._userService.createUser(action).pipe(
      map(users => (new UserActions.CreateUserSuccess({ data: users }))),
      catchError(err => of(new UserActions.CreateUserFailure({ error: err }))
      ))
    )
  )

}
