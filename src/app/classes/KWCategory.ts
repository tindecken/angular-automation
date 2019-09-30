import { Type } from 'class-transformer'
import { Keyword } from './keyword'
import { KWFeature } from './KWFeature'

export class KWCategory {
    _id: string
    name: string
    type: string
    description: string
    createdAt: Date
    updatedAt: Date
    @Type(() => Keyword)
    keywords: Keyword[];
    @Type(() => KWFeature)
    kwFeatures: KWFeature[];
  
}