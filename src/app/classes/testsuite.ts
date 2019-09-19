import { TestGroup } from './testgroup'
import { TestStatus } from './statusEnum'
import { TestClient } from './testclient'
import { TestCase } from './testcase'

export class TestSuite {
    tsName: string;
    tsDescription: string;
    tsAuthor: string;
    lstTestGroup: TestGroup[];
    lstTestCase: TestCase[];
    tsClient: TestClient[];
    tsStatus: TestStatus
    tsXmlPath: string; //path to xml
    selectedTestGroup: TestGroup[];
    selectedTestCase: TestCase[];
    workItem: string;
    constructor(tsXmlPath: string){
        
    }
}