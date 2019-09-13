import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlabComponent } from './testlab.component';

describe('TestlabComponent', () => {
  let component: TestlabComponent;
  let fixture: ComponentFixture<TestlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
