import { TestCase } from './testcase';
import { Type } from 'class-transformer';

export class TestGroup {
    enabled: boolean;
    runningTime: number;
    workId: string;
    createdAt: Date;
    type: string;
    status: string;
    name: string;
    _id: string;
    @Type(() => TestCase)
    testCases: TestCase[];
}