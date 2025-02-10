import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneRegex = /^[0-9]{10,15}$/; // Только цифры, от 10 до 15 символов
    if (!control.value || phoneRegex.test(control.value)) {
      return null; // Валидно
    }
    return { phone: true }; // Ошибка валидации
  };

}
