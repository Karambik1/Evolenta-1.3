import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusFivePipe'
})
export class PlusFivePipePipe implements PipeTransform {

  transform(value: number): number {
    if (isNaN(value)) return value;
    else return value + 5;
  }
}