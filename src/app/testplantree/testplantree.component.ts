import {Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { Category } from '../classes/category';

import { TestplantreeService } from '../testplantree.service';
import { map } from 'rxjs/operators';
import {plainToClass} from "class-transformer";
import { HttpClient } from '@angular/common/http';
import { TestPlan } from '../classes/testplan';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-testplantree',
  templateUrl: './testplantree.component.html',
  styleUrls: ['./testplantree.component.css'],
})
export class TestplantreeComponent implements OnInit{
  @ViewChild('menu', {static: false}) trigger: MatMenuTrigger;
  @ViewChild('tree', {static: true}) tree;
  filterValue: string = ''
  testPlanTree: any = [{
    name: ''
  }]
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
          name: cat.name,
          children: cat.testSuites.map((ts) => ({
            ...ts,
            id: ts._id,
            name: ts.name
          }))
        }));
      }),
    ).subscribe((list: any[]) => {
      this.testPlanTree = list;
      this.cdr.detectChanges();
      this.tree.treeModel.expandAll();
    })
  }

  onActivate($event){
    // TODO: Load testcase into grid
  }

  onFocus($event){
    console.log($event)
  }

  options: ITreeOptions = {
    displayField: 'name',
    isExpandedField: 'expanded',
    idField: 'id',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        },
        contextMenu:(tree,node, $event) => {
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
