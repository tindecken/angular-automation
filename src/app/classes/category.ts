import { TestSuite } from './testsuite';
import { User } from './user';
import { Type } from 'class-transformer'

export class Category {
    type: string;
    status: string;
    runningTime: number;
    workID: string;
    _id: string;
    name: string;
    description: string;
    @Type(() => User)
    owner: User;
    createdAt: Date;
    @Type(() => TestSuite)
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