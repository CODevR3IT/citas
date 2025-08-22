import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export function isValidControl(inputAbstract: AbstractControl<string | null, string | null> | null): boolean{
    return inputAbstract?.invalid && (inputAbstract.dirty || inputAbstract.touched) || false;
}

export function noWhitespaceValidator(control: FormControl) {
    return (control.value || '').trim().length? null : { 'whitespace': true };       
}

export function getMessageError(errors: ValidationErrors | null | undefined, campo: string, patternMessage: string = ''): string{
    if(errors && errors['required']) {
        return `El campo ${campo} es requerido.`;
    }
    if(errors && errors['whitespace']) {
        return `No debe de contener espacios vacios.`;
    }
    if(errors && errors['pattern']) {
        return patternMessage;
    }
    if(errors && errors['email']) {
        return `Debe de ser un correo electrónico valido.`;
    }
    if(errors && errors['min']) {
        return `El valor mínimo permitido es ${errors['min'].min}.`;
    }
    if(errors && errors['max']) {
        return `El valor máximo permitido es ${errors['max'].max}.`;
    }
    if(errors && errors['minlength']) {
        return `El campo ${campo} debe de tener al menos ${errors['minlength'].requiredLength} caracteres.`;
    }
    if(errors && errors['maxlength']) {
        return `El campo ${campo} no debe de tener más de ${errors['maxlength'].requiredLength} caracteres.`;
    }

    return '';
}