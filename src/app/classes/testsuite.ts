import { TestGroup } from './testgroup'
import { TestStatus } from './statusEnum'
import { TestClient } from './testclient'
import { TestCase } from './testcase'

export class TestSuite {
    tsName: string;
    tsDescription: string;
    tsAuthor: string;
    tsTestGroups: TestGroup[];
    tsTestCases: TestCase[];
    tsClient: TestClient[];
    tsStatus: TestStatus
    selectedTestGroup: TestGroup[];
    selectedTestCase: TestCase[];
    workItem: string;
    constructor(name: string){
        this.tsName = name
    }
}