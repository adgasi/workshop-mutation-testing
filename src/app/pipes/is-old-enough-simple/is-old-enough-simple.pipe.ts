import { Pipe } from '@angular/core';

@Pipe({
  name: 'isOldEnoughSimple',
})
export class IsOldEnoughSimplePipe {
  transform(user: { name: string; age: number }) {
    return user.age >= 15;
  }
}
