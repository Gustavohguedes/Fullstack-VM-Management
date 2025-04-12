import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VmListComponent } from './components/vm-list/vm-list.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: "list-vms",
        component: VmListComponent
    }

];
