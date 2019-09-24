import { TestSuite } from './testsuite';

export class Category {
    catName: string;
    catTestSuites: TestSuite[]
    constructor(name: string, testsuite: TestSuite){
        this.catName = name
        this.catTestSuites.push(testsuite)
    }
}