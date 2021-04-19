import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourComponent } from './jour.component';

describe('JourComponent', () => {
  let component: JourComponent;
  let fixture: ComponentFixture<JourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
