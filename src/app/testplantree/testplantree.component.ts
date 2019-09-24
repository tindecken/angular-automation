import {Component, OnInit } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { TestSuite } from '../classes/testsuite';
import { Category } from '../classes/category';


@Component({
  selector: 'app-testplantree',
  templateUrl: './testplantree.component.html',
  styleUrls: ['./testplantree.component.css'],
})
export class TestplantreeComponent implements OnInit{
  categories: Category[]
  testsuites: TestSuite[]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.testsuites = [{
      tsName: 'Pending';
    }]
    var tsPending = new TestSuite('Pending')
    var tsApproval = new TestSuite('Approval')
    var catPayment = new Category('Payment', tsPending)
    catPayment.catTestSuites.push(tsApproval)
    console.log(catPayment)
  }
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options: ITreeOptions = {
    displayField: 'name',
    isExpandedField: 'expanded',
    idField: 'uuid',
    hasChildrenField: 'nodes',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
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
