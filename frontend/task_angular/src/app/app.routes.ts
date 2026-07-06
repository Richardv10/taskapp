import { Routes } from '@angular/router';

import { TaskList } from './features/tasks/pages/task-list/task-list';
import { InputForm } from './features/tasks/pages/task-form/task-form';
import { TaskDetails } from './features/tasks/pages/task-details/task-details';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'

    },

    {
        path: 'tasks',
        component: TaskList
    },

    {
        path: 'tasks/new',
        component: InputForm
    },

    {
        path: 'tasks/:id',
        component: TaskDetails
    },

    {
        path: 'tasks/:id/edit',
        component: InputForm
    }








];
