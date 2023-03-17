import { IsOldEnoughPipe } from './is-old-enough.pipe';

describe('isOldEnoughPipe', () => {
  const pipe = new IsOldEnoughPipe();

  it('should return true when young person is old enough', () => {
    const isOldEnough = pipe.transform({
      name: 'Young John',
      yearOfBirth: new Date().getFullYear() - 13,
    });
    expect(isOldEnough).toBeTruthy();
  });

  it('should return true when old person is old enough', () => {
    const isOldEnough = pipe.transform({
      name: 'Old John',
      yearOfBirth: new Date().getFullYear() - 80, // ⚠️
    });
    expect(isOldEnough).toBeTruthy();
  });

  it('should return false when person is too young', () => {
    const isOldEnough = pipe.transform({
      name: 'Baby John',
      yearOfBirth: new Date().getFullYear() - 2,
    });
    expect(isOldEnough).toBeFalsy();
  });

  it('should return false when person is too old', () => {
    const isOldEnough = pipe.transform({
      name: 'Baby John',
      yearOfBirth: new Date().getFullYear() - 99,
    });
    expect(isOldEnough).toBeFalsy();
  });
});
