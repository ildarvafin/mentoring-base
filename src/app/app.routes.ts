import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/todos/todos.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [

    { path: '', component: HomepageComponent, },
    
    { path: 'admin', component: AdminComponent, canActivate: [authGuard] },

    { path: 'users', component: UsersComponent, },

    { path: 'todos', component: TodosComponent, },

];
