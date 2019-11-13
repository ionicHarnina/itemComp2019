import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintaPage } from './quinta.page';

describe('QuintaPage', () => {
  let component: QuintaPage;
  let fixture: ComponentFixture<QuintaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
