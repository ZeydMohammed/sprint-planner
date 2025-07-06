import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import("./components/story-list/story-list").then(
                (m) => m.StoryList
            )
    },
];
