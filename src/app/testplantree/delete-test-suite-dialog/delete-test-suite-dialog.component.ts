import { Component, OnInit, Inject } from '@angular/core';
import { TestSuite } from 'src/app/classes/testsuite';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestplantreeService } from 'src/app/testplantree.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-test-suite-dialog',
  templateUrl: './delete-test-suite-dialog.component.html',
  styleUrls: ['./delete-test-suite-dialog.component.css']
})
export class DeleteTestSuiteDialogComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private testPlanService: TestplantreeService,
    public dialogRef: MatDialogRef<DeleteTestSuiteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public ts: TestSuite
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteTestSuite(){
    console.log(this.ts)
  }

}
