import { User } from './user';
import { TestSuite } from './testsuite';

export class Build {
    _id: string;
    type: string;
    name: string;
    status: string;
    runningTime: number;
    description: string;
    owner: User;
    createdAt: Date;
    updatedAt: Date;
    testSuites: TestSuite[];
    // constructor(id?: number, name?: string, testsuite?: TestSuite){
    //     this.catId = id
    //     this.catTestSuites = []
    //     this.catName = name
    //     if(testsuite) this.catTestSuites.push(testsuite)
    // }
    addTestSuite(testsuite: TestSuite){
        this.testSuites.push(testsuite)
    }
}