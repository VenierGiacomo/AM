import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallSummPage } from './chall-summ.page';

describe('ChallSummPage', () => {
  let component: ChallSummPage;
  let fixture: ComponentFixture<ChallSummPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallSummPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallSummPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
