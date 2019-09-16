import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() event: EventEmitter<void>;
  constructor() {
    this.event = new EventEmitter();
  }

  ngOnInit() {
  }

  toggle() {
    this.event.emit();
  }

}
