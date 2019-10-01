import { Type } from 'class-transformer'

export class TestCase {
    _id: string
    name: string
    type: string
    status: string
    runningTime: number
    workId: string
    enabled: boolean
    primary: boolean
    @Type(() => TestCase)
    dependencies: TestCase[];
    @Type(() => TestCase)
    dependOn: TestCase
}