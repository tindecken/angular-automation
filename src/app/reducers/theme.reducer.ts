import { Action, createReducer, on } from '@ngrx/store';
import * as ThemeActions from '../actions/theme.actions'
import { Theme } from '../classes/theme'


export const initialTheme: Theme = {
    codeName: localStorage.getItem('themeCodeName'),
    name: localStorage.getItem('themeName')
}

const themeReducer = createReducer(
    initialTheme,
    on(ThemeActions.changeTheme, (state, { theme }) => ({
        ...theme
    }))
)

export function reducer(state: Theme | undefined, action: Action){
    return themeReducer(state, action)
}