import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Sprint, Story } from '../../services/sprint';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-story-form',
  imports: [
    MatButtonModule, MatDialogModule, MatCardModule, ReactiveFormsModule
  ],
  templateUrl: './story-form.html',
  styleUrl: './story-form.scss'
})
export class StoryForm {

  error: string = ""
  storyName = new FormControl('', Validators.required)
  storyPoint = new FormControl('', Validators.required)
  storyDescription = new FormControl('')

  constructor(
    private service: Sprint
  ) { }

  saveStories() {
    const story: Story = {
      name: this.storyName.value ?? '',
      points: Number(this.storyPoint.value) ?? 0,
      description: this.storyDescription.value ?? '',
    }

    if (this.service.addStory(story)) {
      this.storyName.reset()
      this.storyPoint.reset()
      this.storyDescription.reset()
      this.error = ""
    }
    else {
      this.error = "This story name already exists in your list."
    }
  }

}
