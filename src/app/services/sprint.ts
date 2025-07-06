import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Sprint {

  stories: any[] = []
  selectedStories: any[] = []

  constructor() { }

  addStory(story: Story) {
    const existItem = this.stories.some(item => item.name.toLowerCase() == story.name.toLowerCase())
    if (existItem) return false;
    this.stories.push(story);
    return true
  }

  getAllStories() {
    return [...this.stories]
  }

  getStoriesSelected(): Story[] {
    return [...this.selectedStories];
  }

  clearStories() {
    this.stories = [];
  }

  clearSelectedStories() {
    this.selectedStories = []
  }

  generateSprint(capacity: number) {
    const allCombinations = this.getAllCombinations(this.stories);
    let bestMatch: Story[] = [];
    let maxTotal = 0;

    for (const combo of allCombinations) {
      const total = combo.reduce((sum, story) => sum + story.points, 0);
      if (total <= capacity && total > maxTotal) {
        bestMatch = combo;
        maxTotal = total;
      }
    }
    this.selectedStories = bestMatch;
  }

  getAllCombinations(stories: Story[]): Story[][] {
    const results: Story[][] = [];
    const backtrack = (index: number, current: Story[]) => {
      if (index === stories.length) {
        results.push([...current]);
        return;
      }
      current.push(stories[index]);
      backtrack(index + 1, current);
      current.pop();
      backtrack(index + 1, current);
    };

    backtrack(0, []);
    return results;
  }
}

export interface Story {
  name: string;
  points: number;
  description: string;
}
