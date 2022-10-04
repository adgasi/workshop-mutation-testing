import { Pipe } from '@angular/core';

@Pipe({
  name: 'isOldEnough',
})
export class IsOldEnoughPipe {
  transform(user: { name: string; yearOfBirth: number }) {
    const age = new Date().getFullYear() - user.yearOfBirth;
    return age >= 13 && age <= 80;
  }
}
