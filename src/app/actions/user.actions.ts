import { createAction, props } from '@ngrx/store';
import { User } from '../classes/user'

export const userLogin = createAction(
  '[User] Login',
  props<{ user: User }>()
);

export const userLogout = createAction(
  '[User] Logout',
  props<{ user: User }>()
);
