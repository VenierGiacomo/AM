import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallOwnPage } from './chall-own.page';

describe('ChallOwnPage', () => {
  let component: ChallOwnPage;
  let fixture: ComponentFixture<ChallOwnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallOwnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallOwnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
