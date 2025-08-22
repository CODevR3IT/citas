import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { responseError } from '../helpers/response.helper';
import { AuthService } from '../auth/auth.service';

export const httpErrorsInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const messageError = responseError();
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err) {
        switch (err.status) {
          case 400:
            let message = '';
            if (Array.isArray(err.error.message)) {
              err.error.message.forEach((value: string) => {
                message += value;
              });
            } else {
              message = err.error.msg;
            }
            messageError(err.error.error, message);
            break;
          case 401:
            messageError(err.error.error, err.error.msg);
            authService.logout();
            break;

          default:
            messageError(err.error.error, err.error.msg);
            break;
        }
      }

      throw err;
    })
  );
};
