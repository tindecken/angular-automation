import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { User } from '../classes/user';
import { userLogout } from '../actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private loginService: LoginService,
    private _snackBar: MatSnackBar,
    private store: Store<User>,
    private route: Router
  ) { }

  ngOnInit() {
    
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    this.loginService.login(this.form.value).subscribe((res: any) => {
      if(res.error) {
        this._snackBar.open(`${res.error}: ${res.message}`, null, { duration: 2000})
        this.loginFailed()
        this.store.dispatch(userLogout)
      }
      else {
        this._snackBar.open(`Login successfully !`, null, { duration: 2000})
        this.loginSuccess(res.id_token)
        this.route.navigate(['home'])
      }
    })
  }
  loginFailed(){
    delete localStorage.token
  }
  loginSuccess(token: string){
    if(!token) return
    localStorage.token = token
  }

}
