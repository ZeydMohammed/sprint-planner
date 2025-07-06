import { Component } from '@angular/core';
import { SprintCalculator } from "../sprint-calculator/sprint-calculator";
// import { MatButtonModule } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { Sprint } from '../../services/sprint';
import { StoryForm } from '../story-form/story-form';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-story-list',
  imports: [
    SprintCalculator,
    MatButtonModule,
    MatDividerModule,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './story-list.html',
  styleUrl: './story-list.scss'
})
export class StoryList {

  constructor(
    private dialog: MatDialog,
    public service: Sprint
  ) { }

  openDialogNewItem() {
    const dialogRef = this.dialog.open(StoryForm, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    }
    )
  }


}
