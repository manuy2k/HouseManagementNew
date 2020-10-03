import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMateDialogComponent } from './delete-mate-dialog.component';

describe('DeleteMateDialogComponent', () => {
  let component: DeleteMateDialogComponent;
  let fixture: ComponentFixture<DeleteMateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
