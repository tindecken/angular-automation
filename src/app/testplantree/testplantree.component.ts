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
  testPlanTree: any = [{
    name: ''
  }]
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
            "expandedIcon": "pi pi-folder-open",
            "collapsedIcon": "pi pi-folder",
            children: cat.testSuites.map((ts) => ({
              ...ts,
              id: ts._id,
              label: ts.name,
              "expandedIcon": "pi pi-align-justify",
              "collapsedIcon": "pi pi-align-justify",
              children: ts.testGroups.map((tg) => ({
                ...tg,
                id: tg._id,
                label: tg.name,
                "expandedIcon": "pi pi-clone",
                "collapsedIcon": "pi pi-clone",
                children: tg.testCases.map((tc) => ({
                  ...tc,
                  id: tc._id,
                  label: tc.name,
                  "expandedIcon": "pi pi-file-o",
                  "collapsedIcon": "pi pi-file-o",
                }))
              }))
            }))
          }));
        }),
      ).subscribe((list: any[]) => {
        this.testPlanTree = list;
        this.cdr.detectChanges();
      })
  }

  onActivate($event) {
    // TODO: Load testcase into grid
  }

  onFocus($event) {
    console.log($event)
  }

  options: ITreeOptions = {
    displayField: ' ',
    isExpandedField: 'expanded',
    idField: 'id',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        },
        contextMenu: (tree, node, $event) => {
          this.trigger.openMenu()
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandAll();
        }
      }
    },
    nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    allowDragoverStyling: true,
    levelPadding: 10,
    useVirtualScroll: true,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    scrollContainer: document.documentElement // HTML
  }
}
