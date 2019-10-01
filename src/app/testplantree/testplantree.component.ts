import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Category } from '../classes/category';

import { TestplantreeService } from '../testplantree.service';
import { TreeNode } from 'primeng/components/common/treenode';
import { TestCase } from '../classes/testcase';
import { TestGroup } from '../classes/testgroup';
import { TestSuite } from '../classes/testsuite';
import * as _ from 'lodash';

@Component({
  selector: 'app-testplantree',
  templateUrl: './testplantree.component.html',
  styleUrls: ['./testplantree.component.css'],
})
export class TestplantreeComponent implements OnInit {
  filterValue: string = ''
  categories: Category[] = []
  testPlanTree: any[] = []
  loading: boolean = true
  loadingIcon: string = "fa-circle-o-notch"
  selectedNode: TreeNode[]
  selectedObject: TestCase | TestGroup | TestSuite | Category
  items = [
    { label: 'View', icon: 'fa fa-search', command: () => {}},
    { label: 'Unselect', icon: 'fa fa-close', command: () => {}}
  ];

  constructor(
    private testplanService: TestplantreeService,
    private cdr: ChangeDetectorRef) {
  }
  onNodeSelect(event){
    console.log('event', event.node)
    this.testplanService.getSelectedNode(event.node).subscribe(node => {
      this.selectedObject = node
      console.log('selectedObject', this.selectedObject)
    })
  }

  mapToTree(cats: Category[]): any {
    return cats.map((cat) => ({
      ...cat,
      id: cat._id,
      label: cat.name,
      expandedIcon: `pi pi-folder-open ${cat.status.toLowerCase()}`,
      collapsedIcon: `pi pi-folder ${cat.status.toLowerCase()}`,
      children: cat.testSuites.map((ts) => ({
        ...ts,
        id: ts._id,
        label: ts.name,
        expandedIcon: `pi pi-align-justify ${ts.status.toLowerCase()}`,
        collapsedIcon: `pi pi-align-justify ${ts.status.toLowerCase()}`,
        children: _.flatten([
          ts.testCases.map((tcc) => <any>({
            ...tcc,
            id: tcc._id,
            label: tcc.name,
            expandedIcon: `pi pi-file-o ${tcc.status.toLowerCase()}`,
            collapsedIcon: `pi pi-file-o ${tcc.status.toLowerCase()}`,
          })),
          ts.testGroups.map((tg) => ({
            ...tg,
            id: tg._id,
            label: tg.name,
            expandedIcon: `pi pi-clone ${tg.status.toLowerCase()}`,
            collapsedIcon: `pi pi-clone ${tg.status.toLowerCase()}`,
            children: tg.testCases.map((tc) => ({
              ...tc,
              id: tc._id,
              label: tc.name,
              expandedIcon: `pi pi-file-o ${tc.status.toLowerCase()}`,
              collapsedIcon: `pi pi-file-o ${tc.status.toLowerCase()}`,
            }))
          }))
        ])
      }))
    })); 
  }

  ngOnInit(): void {
    this.testplanService.getCategories().subscribe(categories => {
      this.categories = categories
      console.log(this.categories)
      this.testPlanTree = this.mapToTree(this.categories)  
      this.loading = false
      this.cdr.detectChanges()
      console.log(this.testPlanTree)
    })
  }
}
