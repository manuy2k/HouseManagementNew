import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseCapitalComponent } from './raise-capital.component';

describe('RaiseCapitalComponent', () => {
  let component: RaiseCapitalComponent;
  let fixture: ComponentFixture<RaiseCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
