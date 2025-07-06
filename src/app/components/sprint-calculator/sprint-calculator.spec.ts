import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintCalculator } from './sprint-calculator';

describe('SprintCalculator', () => {
  let component: SprintCalculator;
  let fixture: ComponentFixture<SprintCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprintCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
