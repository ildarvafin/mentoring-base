import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncate',
    standalone: true,
    pure: true, 
  })

  export class TruncatePipe implements PipeTransform {
    transform(value: string, limit: number = 20, trail: string = '...'): string {
        if (value.length > limit) {
          return value.substring(0, limit) + trail;
        }
        return value;
      }
  }