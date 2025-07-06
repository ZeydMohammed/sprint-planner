import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSprint } from './selected-sprint';

describe('SelectedSprint', () => {
  let component: SelectedSprint;
  let fixture: ComponentFixture<SelectedSprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedSprint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedSprint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
