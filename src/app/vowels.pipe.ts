import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowels'
})
export class VowelsPipe implements PipeTransform {

  transform(value:string,flag:boolean):string{
    let newvalue:string="";
    const vowels=['a','e','i','o','u','A','E','I','O','U'];
    for(let letter of value){
      if(flag==true)
      {
        if(vowels.includes(letter))
        {
          newvalue+=letter;
        }
      }
      else
      {
        if(!vowels.includes(letter))
        {
          newvalue+=letter;
        }
      }
      
    }
    value=newvalue;

    return value;
  }
}


