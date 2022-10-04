import { IsOldEnoughSimplePipe } from './is-old-enough-simple.pipe';

describe('isOldEnoughSimplePipe', () => {
  const pipe = new IsOldEnoughSimplePipe();

  it('should return when person is old enough', () => {
    const isOldEnough = pipe.transform({ name: 'John', age: 19 });
    expect(isOldEnough).toBeTruthy();
  });

  it('should return false when person is too young', () => {
    const isOldEnough = pipe.transform({ name: 'Baby John', age: 3 });
    expect(isOldEnough).toBeFalsy();
  });
});
