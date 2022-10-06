import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReccipeStartComponent } from './reccipe-start.component';

describe('ReccipeStartComponent', () => {
  let component: ReccipeStartComponent;
  let fixture: ComponentFixture<ReccipeStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReccipeStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReccipeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
