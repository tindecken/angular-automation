import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions'
import { User } from '../classes/user'


export const initialUser: User = User.from(localStorage.token)

const userReducer = createReducer(
  initialUser,
  on(UserActions.userLogout, (state) => null)
)

export function reducer(state: User | undefined, action: Action) {
  return userReducer(state, action)
}