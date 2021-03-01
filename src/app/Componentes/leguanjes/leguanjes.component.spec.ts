import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeguanjesComponent } from './leguanjes.component';

describe('LeguanjesComponent', () => {
  let component: LeguanjesComponent;
  let fixture: ComponentFixture<LeguanjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeguanjesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeguanjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
