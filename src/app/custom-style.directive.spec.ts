import { CustomStyleDirective } from './custom-style.directive';
import { ElementRef } from '@angular/core';

describe('CustomStyleDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(5);

    const directive = new CustomStyleDirective(el);
    expect(directive).toBeTruthy();
  });
});
