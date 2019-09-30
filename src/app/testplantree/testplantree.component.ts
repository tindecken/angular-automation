import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { Category } from '../classes/category';

import { TestplantreeService } from '../testplantree.service';
import { map } from 'rxjs/operators';
import { plainToClass } from "class-transformer";
import { HttpClient } from '@angular/common/http';
import { TestPlan } from '../classes/testplan';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-testplantree',
  templateUrl: './testplantree.component.html',
  styleUrls: ['./testplantree.component.css'],
})
export class TestplantreeComponent implements OnInit {
  @ViewChild('menu', { static: false }) trigger: MatMenuTrigger;
  filterValue: string = ''
  categories: Category[] = []
  items = [
    { label: 'View', icon: 'fa fa-search', command: () => {}},
    { label: 'Unselect', icon: 'fa fa-close', command: () => {}}
  ];

  constructor(
    private testplanService: TestplantreeService,
    private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.testplanService.getCategories()
      .pipe(
        map(response => {
          const testPlanResult = plainToClass(Category, response)
          return testPlanResult.map((cat) => ({
            ...cat,
            id: cat._id,
            label: cat.name,
            "expandedIcon": `pi pi-folder-open ${cat.status.toLowerCase()}`,
            "collapsedIcon": `pi pi-folder ${cat.status.toLowerCase()}`,
            children: cat.testSuites.map((ts) => ({
              ...ts,
              id: ts._id,
              label: ts.name,
              "expandedIcon": `pi pi-align-justify ${ts.status.toLowerCase()}`,
              "collapsedIcon": `pi pi-align-justify ${ts.status.toLowerCase()}`,
              children: ts.testGroups.map((tg) => ({
                ...tg,
                id: tg._id,
                label: tg.name,
                "expandedIcon": `pi pi-clone ${tg.status.toLowerCase()}`,
                "collapsedIcon": `pi pi-clone ${tg.status.toLowerCase()}`,
                children: tg.testCases.map((tc) => ({
                  ...tc,
                  id: tc._id,
                  label: tc.name,
                  "expandedIcon": `pi pi-file-o ${tc.status.toLowerCase()}`,
                  "collapsedIcon": `pi pi-file-o ${tc.status.toLowerCase()}`,
                }))
              }))
            }))
          }));
        }),
      ).subscribe((list: any[]) => {
        this.categories = list;
        this.cdr.detectChanges();
        console.log(this.categories)
      })
  }
}
