import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'sort' ,
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return  _.sortBy(value , (x) => x.name);
  }

}
