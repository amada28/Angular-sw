import { Action } from '@ngrx/store';
import { User } from '../model/User';
import { UserActions, UserActionTypes } from './user.actions';


export const userFeatureKey = 'userState';

export interface State {
  users: User[],
  error: string
}

export const initialState: State = {
  users: [],
  error: ''
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return {
        ...state
      }
    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        users: action.payload.data,
        error: ''
      }
    case UserActionTypes.CreateUserSuccess:
      return {
        ...state,
        users: state.users.concat(action.payload.data),
        error: ''
      }
    case UserActionTypes.CreateUserFailure:
    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        users: [],
        error: action.payload.error
      }
    default:
      return state;
  }
}
