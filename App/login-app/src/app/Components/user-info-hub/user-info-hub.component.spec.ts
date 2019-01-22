import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoHubComponent } from './user-info-hub.component';

describe('UserInfoHubComponent', () => {
  let component: UserInfoHubComponent;
  let fixture: ComponentFixture<UserInfoHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
