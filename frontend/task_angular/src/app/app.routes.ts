import { Routes } from '@angular/router';

import { TaskList } from './features/tasks/pages/task-list/task-list';
import { TaskForm } from './features/tasks/pages/task-form/task-form';
import { TaskDetails } from './features/tasks/pages/task-details/task-details';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'

    },

    {
        path: 'tasks',
        component: TaskList
    },

    {
        path: 'tasks/new',
        component: TaskForm
    },

    {
        path: 'tasks/:id',
        component: TaskDetails
    },

    {
        path: 'tasks/:id/edit',
        component: TaskForm
    },

   {
        path: 'dashboard',
        component: Dashboard
    },

    {
    path: '**',
    redirectTo: 'dashboard'
    }




];
