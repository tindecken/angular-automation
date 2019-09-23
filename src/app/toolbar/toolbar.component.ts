import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: User
  @Output() event: EventEmitter<void>;
  constructor(private route: Router) {
    this.event = new EventEmitter();
  }

  ngOnInit() {
    this.user = User.from(localStorage.token)
    console.log('user', this.user)
  }

  toggle() {
    this.event.emit();
  }
  logout() {
    delete localStorage.token
    this.route.navigate(['login'])
  }
}
