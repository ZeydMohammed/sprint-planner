import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Sprint } from '../../services/sprint';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-selected-sprint',
  imports: [
    MatDialogModule,
    MatCardModule
  ],
  templateUrl: './selected-sprint.html',
  styleUrl: './selected-sprint.scss'
})
export class SelectedSprint {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: Sprint
  ) { }

  getTotalOfStoryPoints(): number {
    return this.service.getStoriesSelected().reduce((sum, s) => sum + s.points, 0)
  }

}
