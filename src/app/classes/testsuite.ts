import { TestGroup } from './testgroup'
import { TestStatus } from './statusEnum'
import { TestClient } from './testclient'
import { TestCase } from './testcase'

export class TestSuite {
    tsId: number;
    tsName: string;
    tsDescription: string;
    tsAuthor: string;
    tsTestGroups: TestGroup[];
    tsTestCases: TestCase[];
    tsClient: TestClient[];
    tsStatus: TestStatus
    workItem: string[];
    constructor(tsId?: number, tsName?: string, tsDescription?: string, tsAuthor?: string, tsTestGroups?: TestGroup[], 
                tsTestCases?: TestCase[], tsClient?: TestClient[], tsStatus?: TestStatus, tsWorkItem?: string[]){
        this.tsId = tsId
        this.tsName = tsName
        this.tsDescription = tsDescription
        this.tsAuthor = tsAuthor
        this.tsTestGroups = tsTestGroups
        this.tsTestCases = tsTestCases
        this.tsClient = tsClient
        this.tsStatus = tsStatus
        this.workItem = tsWorkItem
    }
}