import { TestSuite } from './testsuite';

export class Category {
    catId: number;
    catName: string;
    catTestSuites: TestSuite[];
    constructor(id?: number, name?: string, testsuite?: TestSuite){
        this.catId = id
        this.catTestSuites = []
        this.catName = name
        if(testsuite) this.catTestSuites.push(testsuite)
    }
    addTestSuite(testsuite: TestSuite){
        this.catTestSuites.push(testsuite)
    }
}