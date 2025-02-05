import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDashes',
  standalone: true
})
export class RemoveDashesPipe implements PipeTransform {
  transform(phone: any): any {
    return phone ? phone.replace(/[^+0-9]/g, '') : phone
  }
}
