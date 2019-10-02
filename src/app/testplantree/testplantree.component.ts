import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Category } from '../classes/category';

import { TestplantreeService } from '../testplantree.service';
import { TreeNode } from 'primeng/components/common/treenode';
import { TestCase } from '../classes/testcase';
import { TestGroup } from '../classes/testgroup';
import { TestSuite } from '../classes/testsuite';
import * as _ from 'lodash';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateTestSuiteDialogComponent } from './create-test-suite-dialog/create-test-suite-dialog.component';
import { DeleteTestSuiteDialogComponent } from './delete-test-suite-dialog/delete-test-suite-dialog.component';

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
  menu: any[] = []

  constructor(
    private testplanService: TestplantreeService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog) {
  }
  onNodeSelect(event){
    this.testplanService.getSelectedNode(event.node).subscribe(node => {
      this.selectedObject = node
    })
  }

  onNodeContextMenuSelect(event) {
    switch (event.node.type) {
      case "category":
        this.menu = [
          { label: 'Create Test Suite', icon: 'pi pi-plus', command: (e) => { 
            this.testplanService.getSelectedNode(event.node).subscribe(node => {
              this.selectedObject = node
              const dialogRef = this.dialog.open(CreateTestSuiteDialogComponent, {
                width: '600px',
                data: this.selectedObject
              })
  
              dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed', result);
              });
            })
          }}
        ]
        break;
      case "testsuite":
          this.menu = [
          { label: 'Delete TestSuite', icon: 'pi pi-minus', command: (e) => {
            this.testplanService.getSelectedNode(event.node).subscribe(node => {
              this.selectedObject = node
              const dialogRef = this.dialog.open(DeleteTestSuiteDialogComponent, {
                width: '600px',
                data: this.selectedObject
              })
              dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed', result);
              });

              this.testPlanTree.concat({
                id: 'zzzz',
                name: 'zzz'
              })
              this.cdr.detectChanges()
            })
           } },
        ]
        break
      case "testgroup":
          this.menu = [
          { label: 'View TestGroup', icon: 'fa fa-search', command: () => { } },
        ]
        break
      case "testcase":
          this.menu = [
          { label: 'View TestCase', icon: 'fa fa-search', command: () => { } },
        ]
        break
      default:
        break;
    }
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
      this.testPlanTree = this.mapToTree(this.categories)  
      this.loading = false
      this.cdr.detectChanges()
      console.log(this.testPlanTree)
    })
  }
}
