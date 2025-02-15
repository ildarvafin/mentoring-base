import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);

  const router = inject(Router)

  if(userService.isAdmin) {
    console.log(userService.isAdmin);
    return true;
  } else {
    console.log(userService.isAdmin);
    router.navigate([])
    return false
  }
};
