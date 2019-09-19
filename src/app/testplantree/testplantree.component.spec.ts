import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestplantreeComponent } from './testplantree.component';

describe('TestplanComponent', () => {
  let component: TestplantreeComponent;
  let fixture: ComponentFixture<TestplantreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestplantreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestplantreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
