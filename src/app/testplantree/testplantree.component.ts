import { Component, OnInit } from '@angular/core';
import { TestplantreeService } from '../testplantree.service';

@Component({
  selector: 'app-testplantree',
  templateUrl: './testplantree.component.html',
  styleUrls: ['./testplantree.component.css']
})
export class TestplantreeComponent implements OnInit {

  constructor(private testplantreeService: TestplantreeService) { }

  ngOnInit() {
  }

}
