import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestruntreeComponent } from './testruntree.component';

describe('TestruntreeComponent', () => {
  let component: TestruntreeComponent;
  let fixture: ComponentFixture<TestruntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestruntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestruntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
