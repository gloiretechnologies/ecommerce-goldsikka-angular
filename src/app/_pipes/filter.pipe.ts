import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../_models/User';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item: any){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
}

}