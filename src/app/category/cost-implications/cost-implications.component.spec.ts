import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostImplicationsComponent } from './cost-implications.component';

describe('CostImplicationsComponent', () => {
  let component: CostImplicationsComponent;
  let fixture: ComponentFixture<CostImplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostImplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostImplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
