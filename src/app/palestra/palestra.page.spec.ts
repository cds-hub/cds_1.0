import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestraPage } from './palestra.page';

describe('PalestraPage', () => {
  let component: PalestraPage;
  let fixture: ComponentFixture<PalestraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalestraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
