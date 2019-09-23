import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions'
import { User } from '../classes/user'


export const initialUser: User = {
  name: '',
  email: ''
}

const userReducer = createReducer(
  initialUser,
  on(UserActions.userLogin, (state, { user }) => ({
    ...user
  })),
  on(UserActions.userLogout, (state, { user }) => ({
  ...user
  }))
)

export function reducer(state: User | undefined, action: Action) {
  return userReducer(state, action)
}