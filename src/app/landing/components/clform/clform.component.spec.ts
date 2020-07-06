import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLFormComponent } from './clform.component';

describe('CLFormComponent', () => {
  let component: CLFormComponent;
  let fixture: ComponentFixture<CLFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
