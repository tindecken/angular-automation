import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/classes/category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TestplantreeService } from 'src/app/testplantree.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-test-suite-dialog',
  templateUrl: './create-test-suite-dialog.component.html',
  styleUrls: ['./create-test-suite-dialog.component.css']
})
export class CreateTestSuiteDialogComponent implements OnInit {
  form: FormGroup
  constructor(
    private _snackBar: MatSnackBar,
    private testPlanService: TestplantreeService,
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<CreateTestSuiteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cat: Category
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      workId: [''],
      description: ['']
    })
  }
  createTestSuite(){
    let payload = {
      name: this.form.value.name,
      description: this.form.value.description,
      workId: this.form.value.workId,
      categoryId: this.cat._id
    }
    this.testPlanService.createTestSuite(payload).subscribe((res: any) => {
      if(res.error) {
        this._snackBar.open(`${res.error}: ${res.message}`, null, { duration: 2000})
      }
      else {
        this._snackBar.open(`Create Test Suite successful !`, null, { duration: 2000})
      }
    })
    this.dialogRef.close();
  }

}
