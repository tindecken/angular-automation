import {Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { Category } from '../classes/category';

import { TestplantreeService } from '../testplantree.service';
import { map } from 'rxjs/operators';
import {plainToClass} from "class-transformer";
import { HttpClient } from '@angular/common/http';
import { TestPlan } from '../classes/testplan';

@Component({
  selector: 'app-testplantree',
  templateUrl: './testplantree.component.html',
  styleUrls: ['./testplantree.component.css'],
})
export class TestplantreeComponent implements OnInit{
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

  onEvent = ($event) => console.log($event);

  nodes = [
    {
      "type": "category",
      "status": "NORUN",
      "runningTime": 0,
      "workID": "",
      "testSuites": [
        {
          "type": "testsuite",
          "status": "NORUN",
          "runningTime": 0,
          "workID": "",
          "testGroups": [
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [
                    "5d385f32bcc0442880df3164",
                    "5d385f46bcc0442880df3165",
                    "5d3871e38ffdfc34580fc733",
                    "5d3871f88ffdfc34580fc735",
                    "5d38720a8ffdfc34580fc737",
                    "5d38722a8ffdfc34580fc739",
                    "5d3872328ffdfc34580fc73e"
                  ],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa8185c5bf4b1334026e6c",
                  "name": "TC_CCD_FHR_001: Verify Record Type Code of File Header Record Priority",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:23:49.264Z",
                  "__v": 0
                },
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa819ec5bf4b1334026e6d",
                  "name": "TC_CCD_FHR_002: Verify Immediate Destination in ACH - CCD File",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:24:14.597Z",
                  "__v": 0
                }
              ],
              "_id": "5cfa7f842c05cd32c89ce85c",
              "name": "1_FHR: File Header Record",
              "testSuite": "5cf4c5838119d62dd8f42238",
              "createdAt": "2019-06-07T15:15:16.187Z",
              "__v": 0
            },
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa7fa12c05cd32c89ce85d",
              "name": "2_CBHR: Company Batch Header Record",
              "testSuite": "5cf4c5838119d62dd8f42238",
              "createdAt": "2019-06-07T15:15:45.832Z",
              "__v": 0
            },
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa80082c05cd32c89ce85e",
              "name": "3_EDR: Entry Detail Record",
              "testSuite": "5cf4c5838119d62dd8f42238",
              "createdAt": "2019-06-07T15:17:28.611Z",
              "__v": 0
            }
          ],
          "testCases": [
            {
              "type": "testcase",
              "status": "NORUN",
              "runningTime": 0,
              "workID": "",
              "enabled": true,
              "primary": false,
              "dependencies": [],
              "steps": [
                "5d37e3f4a9e6de161f5d6ae1",
                "5d37e412a9e6de161f5d6ae2",
                "5d37e41aa9e6de161f5d6ae3"
              ],
              "key": false,
              "isShowClose": false,
              "_id": "5cfa80e92c05cd32c89ce863",
              "name": "PreConfig_CCD",
              "owner": "5cf4c21df3642152a8d0e0e4",
              "createdAt": "2019-06-07T15:21:13.708Z",
              "__v": 0
            }
          ],
          "builds": [],
          "_id": "5cf4c5838119d62dd8f42238",
          "name": "ACH CCD",
          "description": "Test Suite ACH CCD",
          "owner": "5cf4c21df3642152a8d0e0e4",
          "category": "5cf4c238f3642152a8d0e0e5",
          "createdAt": "2019-06-03T07:00:19.408Z",
          "__v": 0
        },
        {
          "type": "testsuite",
          "status": "NORUN",
          "runningTime": 0,
          "workID": "",
          "testGroups": [
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa804c2c05cd32c89ce85f",
              "name": "1_FHR_CTX: File Header Record",
              "testSuite": "5cf4c5878119d62dd8f42239",
              "createdAt": "2019-06-07T15:18:36.061Z",
              "__v": 0
            },
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa80662c05cd32c89ce860",
              "name": "2_CBHR_CTX: Company Batch Header Record",
              "testSuite": "5cf4c5878119d62dd8f42239",
              "createdAt": "2019-06-07T15:19:02.579Z",
              "__v": 0
            },
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa80782c05cd32c89ce861",
              "name": "3_CBHR_CTX: Entry Detail Record",
              "testSuite": "5cf4c5878119d62dd8f42239",
              "createdAt": "2019-06-07T15:19:20.345Z",
              "__v": 0
            }
          ],
          "testCases": [
            {
              "type": "testcase",
              "status": "NORUN",
              "runningTime": 0,
              "workID": "",
              "enabled": true,
              "primary": false,
              "dependencies": [],
              "steps": [],
              "key": false,
              "isShowClose": false,
              "_id": "5cfa81072c05cd32c89ce864",
              "name": "PreConfig_CTX",
              "owner": "5cf4c21df3642152a8d0e0e4",
              "createdAt": "2019-06-07T15:21:43.654Z",
              "__v": 0
            }
          ],
          "builds": [],
          "_id": "5cf4c5878119d62dd8f42239",
          "name": "ACH CTX",
          "description": "Test Suite ACH CTX",
          "owner": "5cf4c21df3642152a8d0e0e4",
          "category": "5cf4c238f3642152a8d0e0e5",
          "createdAt": "2019-06-03T07:00:23.827Z",
          "__v": 0
        }
      ],
      "_id": "5cf4c238f3642152a8d0e0e5",
      "name": "Bank Accounts",
      "description": "Bank Accounts Category",
      "owner": {
        "_id": "5cf4c21df3642152a8d0e0e4",
        "email": "tindecken@gmail.com",
        "username": "tindecken"
      },
      "createdAt": "2019-06-03T06:46:16.373Z",
      "__v": 0,
      "id": "5cf4c238f3642152a8d0e0e5",
      "children": [
        {
          "type": "testsuite",
          "status": "NORUN",
          "runningTime": 0,
          "workID": "",
          "testGroups": [
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [
                    "5d385f32bcc0442880df3164",
                    "5d385f46bcc0442880df3165",
                    "5d3871e38ffdfc34580fc733",
                    "5d3871f88ffdfc34580fc735",
                    "5d38720a8ffdfc34580fc737",
                    "5d38722a8ffdfc34580fc739",
                    "5d3872328ffdfc34580fc73e"
                  ],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa8185c5bf4b1334026e6c",
                  "name": "TC_CCD_FHR_001: Verify Record Type Code of File Header Record Priority",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:23:49.264Z",
                  "__v": 0
                },
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa819ec5bf4b1334026e6d",
                  "name": "TC_CCD_FHR_002: Verify Immediate Destination in ACH - CCD File",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:24:14.597Z",
                  "__v": 0
                }
              ],
              "_id": "5cfa7f842c05cd32c89ce85c",
              "name": "1_FHR: File Header Record",
              "testSuite": "5cf4c5838119d62dd8f42238",
              "createdAt": "2019-06-07T15:15:16.187Z",
              "__v": 0
            },
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa7fa12c05cd32c89ce85d",
              "name": "2_CBHR: Company Batch Header Record",
              "testSuite": "5cf4c5838119d62dd8f42238",
              "createdAt": "2019-06-07T15:15:45.832Z",
              "__v": 0
            },
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa80082c05cd32c89ce85e",
              "name": "3_EDR: Entry Detail Record",
              "testSuite": "5cf4c5838119d62dd8f42238",
              "createdAt": "2019-06-07T15:17:28.611Z",
              "__v": 0
            }
          ],
          "testCases": [
            {
              "type": "testcase",
              "status": "NORUN",
              "runningTime": 0,
              "workID": "",
              "enabled": true,
              "primary": false,
              "dependencies": [],
              "steps": [
                "5d37e3f4a9e6de161f5d6ae1",
                "5d37e412a9e6de161f5d6ae2",
                "5d37e41aa9e6de161f5d6ae3"
              ],
              "key": false,
              "isShowClose": false,
              "_id": "5cfa80e92c05cd32c89ce863",
              "name": "PreConfig_CCD",
              "owner": "5cf4c21df3642152a8d0e0e4",
              "createdAt": "2019-06-07T15:21:13.708Z",
              "__v": 0
            }
          ],
          "builds": [],
          "_id": "5cf4c5838119d62dd8f42238",
          "name": "ACH CCD",
          "description": "Test Suite ACH CCD",
          "owner": "5cf4c21df3642152a8d0e0e4",
          "category": "5cf4c238f3642152a8d0e0e5",
          "createdAt": "2019-06-03T07:00:19.408Z",
          "__v": 0,
          "id": "5cf4c5838119d62dd8f42238",
          "uuid": 437424339186
        },
        {
          "type": "testsuite",
          "status": "NORUN",
          "runningTime": 0,
          "workID": "",
          "testGroups": [
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa804c2c05cd32c89ce85f",
              "name": "1_FHR_CTX: File Header Record",
              "testSuite": "5cf4c5878119d62dd8f42239",
              "createdAt": "2019-06-07T15:18:36.061Z",
              "__v": 0
            },
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa80662c05cd32c89ce860",
              "name": "2_CBHR_CTX: Company Batch Header Record",
              "testSuite": "5cf4c5878119d62dd8f42239",
              "createdAt": "2019-06-07T15:19:02.579Z",
              "__v": 0
            },
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa80782c05cd32c89ce861",
              "name": "3_CBHR_CTX: Entry Detail Record",
              "testSuite": "5cf4c5878119d62dd8f42239",
              "createdAt": "2019-06-07T15:19:20.345Z",
              "__v": 0
            }
          ],
          "testCases": [
            {
              "type": "testcase",
              "status": "NORUN",
              "runningTime": 0,
              "workID": "",
              "enabled": true,
              "primary": false,
              "dependencies": [],
              "steps": [],
              "key": false,
              "isShowClose": false,
              "_id": "5cfa81072c05cd32c89ce864",
              "name": "PreConfig_CTX",
              "owner": "5cf4c21df3642152a8d0e0e4",
              "createdAt": "2019-06-07T15:21:43.654Z",
              "__v": 0
            }
          ],
          "builds": [],
          "_id": "5cf4c5878119d62dd8f42239",
          "name": "ACH CTX",
          "description": "Test Suite ACH CTX",
          "owner": "5cf4c21df3642152a8d0e0e4",
          "category": "5cf4c238f3642152a8d0e0e5",
          "createdAt": "2019-06-03T07:00:23.827Z",
          "__v": 0,
          "id": "5cf4c5878119d62dd8f42239",
          "uuid": 560232502664
        }
      ],
      "uuid": 654271996056
    },
    {
      "type": "category",
      "status": "NORUN",
      "runningTime": 0,
      "workID": "",
      "testSuites": [
        {
          "type": "testsuite",
          "status": "PASS",
          "runningTime": 0,
          "workID": "",
          "testGroups": [
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa88e57b137a2dbc586fbd",
              "name": "Payment Aprrovals",
              "testSuite": "5cf4c3d5f3642152a8d0e0e7",
              "createdAt": "2019-06-07T15:55:17.449Z",
              "__v": 0
            },
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa89107b137a2dbc586fc0",
                  "name": "Payment Comment Preconfig",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:56:00.440Z",
                  "__v": 0
                },
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa89227b137a2dbc586fc1",
                  "name": "Comment_1_1: Comment Alert is on",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:56:18.842Z",
                  "__v": 0
                },
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa89297b137a2dbc586fc2",
                  "name": "Comment_1_2: Comment Alert is off",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:56:25.488Z",
                  "__v": 0
                },
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa893b7b137a2dbc586fc3",
                  "name": "Comment_1_3: Comment without mention to user",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:56:43.984Z",
                  "__v": 0
                }
              ],
              "_id": "5cfa88ef7b137a2dbc586fbe",
              "name": "Payment Comment",
              "testSuite": "5cf4c3d5f3642152a8d0e0e7",
              "createdAt": "2019-06-07T15:55:27.980Z",
              "__v": 0
            }
          ],
          "testCases": [
            {
              "type": "testcase",
              "status": "NORUN",
              "runningTime": 0,
              "workID": "",
              "enabled": true,
              "primary": false,
              "dependencies": [],
              "steps": [],
              "key": false,
              "isShowClose": false,
              "_id": "5cfa88ca7b137a2dbc586fbc",
              "name": "Preconfig: Update Pay4ULimit = 0.00 - Create Bank - Import Vendors - Enroll",
              "owner": "5cf4c21df3642152a8d0e0e4",
              "createdAt": "2019-06-07T15:54:50.881Z",
              "__v": 0
            }
          ],
          "builds": [],
          "_id": "5cf4c3d5f3642152a8d0e0e7",
          "name": "Notifications",
          "description": "Test Suite Notifications",
          "owner": "5cf4c21df3642152a8d0e0e4",
          "category": "5cf4c24cf3642152a8d0e0e6",
          "createdAt": "2019-06-03T06:53:09.105Z",
          "__v": 0
        },
        {
          "type": "testsuite",
          "status": "NORUN",
          "runningTime": 0,
          "workID": "",
          "testGroups": [],
          "testCases": [],
          "builds": [],
          "_id": "5cf4c4f6f3642152a8d0e0e8",
          "name": "Email Remittance",
          "description": "Test Suite Email Remittance",
          "owner": "5cf4c21df3642152a8d0e0e4",
          "category": "5cf4c24cf3642152a8d0e0e6",
          "createdAt": "2019-06-03T06:57:58.130Z",
          "__v": 0
        }
      ],
      "_id": "5cf4c24cf3642152a8d0e0e6",
      "name": "Payment",
      "description": "Payment Category",
      "owner": {
        "_id": "5cf4c21df3642152a8d0e0e4",
        "email": "tindecken@gmail.com",
        "username": "tindecken"
      },
      "createdAt": "2019-06-03T06:46:36.480Z",
      "__v": 0,
      "id": "5cf4c24cf3642152a8d0e0e6",
      "children": [
        {
          "type": "testsuite",
          "status": "PASS",
          "runningTime": 0,
          "workID": "",
          "testGroups": [
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [],
              "_id": "5cfa88e57b137a2dbc586fbd",
              "name": "Payment Aprrovals",
              "testSuite": "5cf4c3d5f3642152a8d0e0e7",
              "createdAt": "2019-06-07T15:55:17.449Z",
              "__v": 0
            },
            {
              "type": "testgroup",
              "status": "NORUN",
              "enabled": true,
              "runningTime": 0,
              "workID": "",
              "testCases": [
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa89107b137a2dbc586fc0",
                  "name": "Payment Comment Preconfig",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:56:00.440Z",
                  "__v": 0
                },
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa89227b137a2dbc586fc1",
                  "name": "Comment_1_1: Comment Alert is on",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:56:18.842Z",
                  "__v": 0
                },
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa89297b137a2dbc586fc2",
                  "name": "Comment_1_2: Comment Alert is off",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:56:25.488Z",
                  "__v": 0
                },
                {
                  "type": "testcase",
                  "status": "NORUN",
                  "runningTime": 0,
                  "workID": "",
                  "enabled": true,
                  "primary": false,
                  "dependencies": [],
                  "steps": [],
                  "key": false,
                  "isShowClose": false,
                  "_id": "5cfa893b7b137a2dbc586fc3",
                  "name": "Comment_1_3: Comment without mention to user",
                  "owner": "5cf4c21df3642152a8d0e0e4",
                  "createdAt": "2019-06-07T15:56:43.984Z",
                  "__v": 0
                }
              ],
              "_id": "5cfa88ef7b137a2dbc586fbe",
              "name": "Payment Comment",
              "testSuite": "5cf4c3d5f3642152a8d0e0e7",
              "createdAt": "2019-06-07T15:55:27.980Z",
              "__v": 0
            }
          ],
          "testCases": [
            {
              "type": "testcase",
              "status": "NORUN",
              "runningTime": 0,
              "workID": "",
              "enabled": true,
              "primary": false,
              "dependencies": [],
              "steps": [],
              "key": false,
              "isShowClose": false,
              "_id": "5cfa88ca7b137a2dbc586fbc",
              "name": "Preconfig: Update Pay4ULimit = 0.00 - Create Bank - Import Vendors - Enroll",
              "owner": "5cf4c21df3642152a8d0e0e4",
              "createdAt": "2019-06-07T15:54:50.881Z",
              "__v": 0
            }
          ],
          "builds": [],
          "_id": "5cf4c3d5f3642152a8d0e0e7",
          "name": "Notifications",
          "description": "Test Suite Notifications",
          "owner": "5cf4c21df3642152a8d0e0e4",
          "category": "5cf4c24cf3642152a8d0e0e6",
          "createdAt": "2019-06-03T06:53:09.105Z",
          "__v": 0,
          "id": "5cf4c3d5f3642152a8d0e0e7",
          "uuid": 1879986947099
        },
        {
          "type": "testsuite",
          "status": "NORUN",
          "runningTime": 0,
          "workID": "",
          "testGroups": [],
          "testCases": [],
          "builds": [],
          "_id": "5cf4c4f6f3642152a8d0e0e8",
          "name": "Email Remittance",
          "description": "Test Suite Email Remittance",
          "owner": "5cf4c21df3642152a8d0e0e4",
          "category": "5cf4c24cf3642152a8d0e0e6",
          "createdAt": "2019-06-03T06:57:58.130Z",
          "__v": 0,
          "id": "5cf4c4f6f3642152a8d0e0e8",
          "uuid": 8050961023863
        }
      ],
      "uuid": 3937259175254
    },
    {
      "type": "category",
      "status": "NORUN",
      "runningTime": 0,
      "workID": "",
      "testSuites": [],
      "_id": "5d259d0c215b315a78b731cf",
      "name": "New Category",
      "description": "New Category description",
      "owner": {
        "_id": "5cf4c21df3642152a8d0e0e4",
        "email": "tindecken@gmail.com",
        "username": "tindecken"
      },
      "createdAt": "2019-07-10T08:08:44.556Z",
      "__v": 0,
      "id": "5d259d0c215b315a78b731cf",
      "children": [],
      "uuid": 39057725914
    },
    {
      "type": "category",
      "status": "NORUN",
      "runningTime": 0,
      "workID": "",
      "testSuites": [],
      "_id": "5d25b5674c8d6d6f6091f6f5",
      "name": "New Category 2",
      "description": "New Category 2 description",
      "owner": {
        "_id": "5cf4c21df3642152a8d0e0e4",
        "email": "tindecken@gmail.com",
        "username": "tindecken"
      },
      "createdAt": "2019-07-10T09:52:39.465Z",
      "__v": 0,
      "id": "5d25b5674c8d6d6f6091f6f5",
      "children": [],
      "uuid": 279520497470
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
