import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'm2'
})
export class M2Pipe implements PipeTransform {

  transform(area: number): string {
    return `${area} m²`;
  }

}
