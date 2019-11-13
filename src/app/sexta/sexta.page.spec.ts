import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SextaPage } from './sexta.page';

describe('SextaPage', () => {
  let component: SextaPage;
  let fixture: ComponentFixture<SextaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SextaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SextaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
