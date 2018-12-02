import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( _.isString(value) && value.length > 0 ) {
      let result = '';
      for ( let i = value.length - 1 ; i >= 0 ; i --) {
        result += value[i];
      }
      return result;
    }
    return value;
  }

}
