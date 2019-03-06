import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appSameContentAs]',
  providers: [{provide: NG_VALIDATORS, useExisting: SameContentAsDirective, multi: true}]
})
export class SameContentAsDirective implements Validator {
  @Input() appSameContentAs: AbstractControl;

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any; } {
    if (c.value !== this.appSameContentAs.value) {
      return { 'appSameContentAs': this.appSameContentAs.value };
    } else {
      return null;
    }
  }

}
