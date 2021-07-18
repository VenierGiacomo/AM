import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSummaryPage } from './player-summary.page';

describe('PlayerSummaryPage', () => {
  let component: PlayerSummaryPage;
  let fixture: ComponentFixture<PlayerSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
