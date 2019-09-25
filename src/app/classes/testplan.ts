import { Category } from './category';


export class TestPlan {
  tpId: number;
  tpName: string;
  tpCategories: Category[]
  constructor(name?: string, cat?: Category){
    this.tpCategories = []
    this.tpName = name;
    if (cat) this.tpCategories.push(cat)
  }
  addCategory(cat: Category){
    if(cat) this.tpCategories.push(cat)
  }
}