import { NavigationItem } from "./navigation-item";

export const NAVIGATION: readonly NavigationItem[] = [
    {
        label: 'Dashboard',
        icon: 'dashboard',
        route: '/'
    },

    {
        label: 'Tasks',
        icon: 'task',
        route: '/tasks'
    },

    {
        label: 'Calender',
        icon: 'calender_month',
        route: '/calender'
    }
    
];