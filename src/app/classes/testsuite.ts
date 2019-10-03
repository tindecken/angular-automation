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
    workId: string;
    description: string;
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
    category: string;
}