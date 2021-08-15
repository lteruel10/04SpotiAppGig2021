import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
private st:string='';
  transform(images: any[], ...args: unknown[]): string {
   
    if(!images){
       this.st= 'assets/img/noimage.png';
    }
    if (images.length>0){
       this.st= images[0].url;
    }else {
       this.st= 'assets/img/noimage.png';
    }
    return this.st;
   }


}
