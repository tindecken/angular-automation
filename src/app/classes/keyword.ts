import { User } from './user'
import { Type } from 'class-transformer'
import { Step } from './step'

export class Keyword {
    _id: string
    name: string
    inUse: boolean
    description: string
    params: [
      {
        name: string
        description: string
        defaultValue: string
      }
    ]
    @Type(() => User)
    owner: User

    @Type(() => Step)
    step: Step
    createdAt: Date
    updatedAt: Date
}