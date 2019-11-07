import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodadeconversasPage } from './rodadeconversas.page';

describe('RodadeconversasPage', () => {
  let component: RodadeconversasPage;
  let fixture: ComponentFixture<RodadeconversasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodadeconversasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodadeconversasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
