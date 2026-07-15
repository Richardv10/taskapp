import { NavigationItem } from "./navigation-item";


// Doesn't replace the routes file, but functions in addition. Providing user accessible route management 
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