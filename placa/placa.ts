import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placa',
})
export class PlacaPipe implements PipeTransform {
  
  transform(value: string) {
    if (value) {
      value = value.toString();
      if (value.length === 7) {
        return value.substring(0,3).concat('-').concat(value.substring(3,7));
      }
    }
    return value;
  }
}
