import { Category } from '../classes/category'
import { TestSuite } from '../classes/testsuite'
import { TestGroup } from '../classes/testgroup'
import { TestCase } from '../classes/testcase'
import { TestPlan } from '../classes/testplan'

let testplan = new TestPlan()
testplan.tpId = 0
testplan.tpName = 'TestPlan Name'

let catPayment = new Category(1, 'Payment')

let tsPending = new TestSuite(2, 'Pending')
let tsApproval = new TestSuite(3, 'Approval')
catPayment.addTestSuite(tsPending)
catPayment.addTestSuite(tsApproval)

let catPayable = new Category(4, 'Payable Invoice')
let tsWorkFlow = new TestSuite(5, 'WorkFlow')
let tsExportPayable = new TestSuite(5, 'Export Payable')
catPayable.addTestSuite(tsWorkFlow)
catPayable.addTestSuite(tsExportPayable)

testplan.addCategory(catPayment)
testplan.addCategory(catPayable)

export const testPlanMock: TestPlan = testplan