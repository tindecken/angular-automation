import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Theme } from '../classes/theme';
import { changeTheme } from '../actions/theme.actions';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  themes: Theme[] = [{
    codeName: 'deepPurple_amber',
    name: 'Deep Purple - Amber'
  },
  {
    codeName: 'indigo_pink',
    name: 'Indigo - Pink'
  },
  {
    codeName: 'pink_blueGrey',
    name: 'Pink - Blue Grey'
  },
  {
    codeName: 'purple_green',
    name: 'Purple - Green'
  }]
  constructor(private store: Store<Theme>) { }

  ngOnInit() {
  }
  changeTheme(theme: Theme) {
    this.store.dispatch(changeTheme({theme}))
  }
}
