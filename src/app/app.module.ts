import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularSplitModule } from 'angular-split';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { SettingComponent } from './setting/setting.component';
import { TestplantreeComponent } from './testplantree/testplantree.component';
import { TestruntreeComponent } from './testruntree/testruntree.component';
import { HomeComponent } from './home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatRadioModule} from '@angular/material/radio'
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs'
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StatusbarComponent,
    SettingComponent,
    TestplantreeComponent,
    TestruntreeComponent,
    HomeComponent,
    ContainerComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularSplitModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AngularSplitModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
