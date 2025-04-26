import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = () => {

  const userService = inject(UserService);
  const router = inject(Router)

<<<<<<< HEAD
  return userService.isAdmin
  ? true
  : router.createUrlTree(['/']);

=======
  if(userService.isAdmin) {
    console.log(userService.isAdmin);
    return true;
  } else {
    console.log(userService.isAdmin);
    router.navigate([])
    return false
  }
  
>>>>>>> 8846d83ef7da46eff1b5d40694beb9d15538fc51
};
