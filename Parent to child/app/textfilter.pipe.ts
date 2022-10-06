import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textfilter'
})
export class TextfilterPipe implements PipeTransform {

  transform(nameList: [], searchString: string): any {
    let data: any = nameList.filter((o: any) => o['name'].startsWith(searchString));
    return data;
  }

}
