import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappeurComponent } from './rappeur.component';

describe('RappeurComponent', () => {
  let component: RappeurComponent;
  let fixture: ComponentFixture<RappeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RappeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
