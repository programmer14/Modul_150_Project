import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgbDialogComponent } from './agb-dialog.component';

describe('AgbDialogComponent', () => {
  let component: AgbDialogComponent;
  let fixture: ComponentFixture<AgbDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgbDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgbDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
