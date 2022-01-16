import { Pipe, PipeTransform } from '@angular/core';
import {Photo} from "../models/photo.model";

@Pipe({
  name: 'cityfilter'
})
export class CityfilterPipe implements PipeTransform {
  transform(value: Photo[],filterText?:string | any): Photo[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;
    return filterText?value.filter((p:Photo)=>p.title.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
