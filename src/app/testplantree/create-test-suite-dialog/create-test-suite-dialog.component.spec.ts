import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestSuiteDialogComponent } from './create-test-suite-dialog.component';

describe('CreateTestSuiteDialogComponent', () => {
  let component: CreateTestSuiteDialogComponent;
  let fixture: ComponentFixture<CreateTestSuiteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTestSuiteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestSuiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
