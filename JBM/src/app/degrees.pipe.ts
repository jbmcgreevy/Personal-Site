import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degrees'
})
export class DegreesPipe implements PipeTransform {

  transform(value: any): string {
    return (value | 0) + '°';
  }
}
