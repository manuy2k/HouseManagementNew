import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMateDialogComponent } from './add-mate-dialog.component';

describe('AddMateDialogComponent', () => {
  let component: AddMateDialogComponent;
  let fixture: ComponentFixture<AddMateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
