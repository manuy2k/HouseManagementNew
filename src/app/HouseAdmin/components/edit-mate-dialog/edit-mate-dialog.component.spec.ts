import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMateDialogComponent } from './edit-mate-dialog.component';

describe('EditMateDialogComponent', () => {
  let component: EditMateDialogComponent;
  let fixture: ComponentFixture<EditMateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
