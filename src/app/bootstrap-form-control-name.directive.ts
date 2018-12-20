import { Optional, Host, SkipSelf, Self, Inject, Directive, forwardRef, InjectionToken, Input } from '@angular/core';
import {
  FormControlName,
  ControlContainer,
  Validator,
  ValidatorFn,
  AsyncValidator,
  AsyncValidatorFn,
  NG_VALIDATORS,
  NG_ASYNC_VALIDATORS,
  NgControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

// const NG_MODEL_WITH_FORM_CONTROL_WARNING =
//   new InjectionToken('NgModelWithFormControlWarning');

// const NG_VALUE_ACCESSOR = new InjectionToken<ControlValueAccessor>('NgValueAccessor');

// const controlNameBinding: any = {
//   provide: NgControl,
//   useExisting: forwardRef(() => BootstrapFormControlNameDirective)
// };

@Directive({
  selector: '[appBootstrapFormControlName]'
})
export class BootstrapFormControlNameDirective extends FormControlName {

  @Input('appBootstrapFormControlName') set controlName(newName: string) {
    this.name = newName;
  }

  get controlName(): string {
    return this.name;
  }

  constructor(
    @Optional() @Host() @SkipSelf() parent: ControlContainer,
    @Optional() @Self() @Inject(NG_VALIDATORS) validators: Array<Validator | ValidatorFn>,
    @Optional() @Self() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<AsyncValidator | AsyncValidatorFn>,
    @Optional() @Inject(NG_VALUE_ACCESSOR) valueAccessors: ControlValueAccessor[]) {
     super(parent, null, null, null, null);
  }

}
