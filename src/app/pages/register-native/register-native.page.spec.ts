import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNativePage } from './register-native.page';

describe('RegisterNativePage', () => {
  let component: RegisterNativePage;
  let fixture: ComponentFixture<RegisterNativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNativePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
