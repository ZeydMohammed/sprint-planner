import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectedSprint } from '../selected-sprint/selected-sprint';
import { Sprint } from '../../services/sprint';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sprint-calculator',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sprint-calculator.html',
  styleUrl: './sprint-calculator.scss'
})
export class SprintCalculator {

  sprintName = new FormControl('', Validators.required)
  sprintPoint = new FormControl('', Validators.required)

  constructor(
    private dialog: MatDialog,
    public service: Sprint
  ) { }

  openGeneratedStory() {
    const dialogRef = this.dialog.open(SelectedSprint, {
      width: '800px',
      data : {
        sprintName : this.sprintName.value ?? '',
        sprintPoint : this.sprintPoint.value ?? 0,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    }
    )
  }

  generateSprint() {
    const capacity = Number(this.sprintPoint.value) ?? 0;
    this.service.generateSprint(capacity);
    this.openGeneratedStory()
  }
}
