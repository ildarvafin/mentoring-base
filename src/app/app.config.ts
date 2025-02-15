import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations} from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { userReduser } from './components/users/store/users. reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReduser } from './components/todos/store/todos.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), provideAnimationsAsync(), provideAnimationsAsync(),
    provideAnimations(),
    provideStore({
        users: userReduser,
        todos: todoReduser,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
