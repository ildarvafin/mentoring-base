import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonCreateUserFormComponent } from './button-create-user-form/button-create-user-form.component';
import { createUser, User } from '../../interface/user.interface';
import { Store } from '@ngrx/store';
import { UserActions } from './store/users.actions';
import { selectUsers } from './store/users.selectors';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, MatButtonModule, MatIconModule,ButtonCreateUserFormComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {

    private readonly usersApiService = inject(UsersApiService);

    private readonly store = inject(Store);

    public readonly users$ = this.store.select(selectUsers);

    constructor() {
        this.usersApiService.getUseres().subscribe(
            (response: User[]) => {
                this.store.dispatch(UserActions.set({ users: response.slice(0, 8)}));
            }
        )
    };

    public deleteUser(id: number) {
        this.store.dispatch(UserActions.delete({ id }));
    };

    public editUser(user: User) {
        this.store.dispatch(UserActions.edit({ user }));
    };

    public createUser(formData: createUser) {
        this.store.dispatch(UserActions.create({
            user: {
                id: new Date().getTime(),
                name: formData.name,
                email: formData.email,
                website: formData.website,
                company: {
                    name: formData.company.name,
                },
            }
        }));
    }
}

