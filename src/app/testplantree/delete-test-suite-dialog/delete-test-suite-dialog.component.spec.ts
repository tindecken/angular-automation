import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTestSuiteDialogComponent } from './delete-test-suite-dialog.component';

describe('DeleteTestSuiteDialogComponent', () => {
  let component: DeleteTestSuiteDialogComponent;
  let fixture: ComponentFixture<DeleteTestSuiteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTestSuiteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTestSuiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
