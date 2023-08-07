import { CanActivateFn } from '@angular/router';
import { inject,Injectable } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authservice=inject(AuthService);
  return authservice.isUserAuthenticated();
};
