import { TestGroup } from './testgroup'
import { TestStatus } from './statusEnum'
import { TestClient } from './testclient'
import { TestCase } from './testcase'
import { User } from './user';
import { Build } from './build';
import { Type } from 'class-transformer';

export class TestSuite {
    type: string;
    status: string;
    runningTime: number;
    workID: string;
    @Type(() => TestGroup)
    testGroups: TestGroup[];
    @Type(() => TestCase)
    testCases: TestCase[];
    @Type(() => Build)
    builds: Build[];
    _id: string;
    name: string;
    @Type(() => User)
    owner: User;
    createdAt: Date;
    // constructor(tsId?: number, tsName?: string, tsDescription?: string, tsAuthor?: string, tsTestGroups?: TestGroup[], 
    //             tsTestCases?: TestCase[], tsClient?: TestClient[], tsStatus?: TestStatus, tsWorkItem?: string[]){
    //     this.tsId = tsId
    //     this.tsName = tsName
    //     this.tsDescription = tsDescription
    //     this.tsAuthor = tsAuthor
    //     this.tsTestGroups = tsTestGroups
    //     this.tsTestCases = tsTestCases
    //     this.tsClient = tsClient
    //     this.tsStatus = tsStatus
    //     this.workItem = tsWorkItem
    // }
}