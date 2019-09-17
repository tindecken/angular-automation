import { createAction, props } from '@ngrx/store';
import { Theme } from '../classes/theme'

export const changeTheme = createAction(
  '[Theme] Change',
  props<{ theme: Theme }>()
);