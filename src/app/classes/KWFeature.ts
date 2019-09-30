import { Type } from 'class-transformer'
import { Keyword } from './keyword'
import { KWCategory } from './KWCategory'

export class KWFeature {
    _id: string
    name: string
    type: string
    description: string
    createdAt: Date
    updatedAt: Date
    @Type(() => Keyword)
    keywords: Keyword[];
    @Type(() => KWCategory)
    kwCategory: KWCategory;
}