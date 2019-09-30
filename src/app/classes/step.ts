import { Type } from 'class-transformer'
import { TestCase } from './testcase'
import { Keyword } from './keyword'
import { TestClient } from './testclient'
import { StepLog } from './steplog'

export class Step {
    _id: string
    name: string
    type: string
    status: string
    runningTime: number
    description: string
    enabled: boolean
    @Type(() => TestCase)
    testCase: TestCase
    @Type(() => Keyword)
    keyword: Keyword
    order: number
    params: [{
      name: string
      description: string
      value: string
      ref_node: string
    }]
    @Type(() => TestClient)
    client: TestClient
    @Type(() => StepLog)
    stepLog: StepLog
    createdAt: Date
    updatedAt: Date
}