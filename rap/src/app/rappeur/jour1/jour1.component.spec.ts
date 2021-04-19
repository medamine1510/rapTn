import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jour1Component } from './jour1.component';

describe('Jour1Component', () => {
  let component: Jour1Component;
  let fixture: ComponentFixture<Jour1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jour1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jour1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
