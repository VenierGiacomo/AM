import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNativePage } from './login-native.page';

describe('LoginNativePage', () => {
  let component: LoginNativePage;
  let fixture: ComponentFixture<LoginNativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNativePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
