import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDashes',
  standalone: true
})
export class RemoveDashesPipe implements PipeTransform {
  transform(phone: string): string {
    return phone ? phone.replace(/[^+0-9]/g, '') : phone
  }
}
