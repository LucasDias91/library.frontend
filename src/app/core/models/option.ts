import { SortType } from "../enums/sort-type";

export class Option {
    key: string;
    label: string;
    options: option[] = [];
    constructor(key: string,
                label: string){
     this.key = key;
     this.label = label;
     this.addOption();
    }

   addOption(){
    switch(this.key){
       case 'title' :{
         this.setOption1();
         break;
       }
       case 'authorName':{
         this.setOption1();
          break;
       }
       case 'editionYear':{
        this.setOption2();
        break;
       }
    }
   }

   setOption1(){
    this.options.push(new option(SortType.ascending, "De A a Z"));
    this.options.push(new option(SortType.downward, "De Z a A"));
   }

   setOption2(){
      this.options.push(new option(SortType.ascending, "Do mais antigo"));
      this.options.push(new option(SortType.downward, "Do mais recente"));
   }
}


export class option {
    value: SortType | null;
    label: string;
    constructor(value: SortType  | null,
                label: string){
     this.value = value;
     this.label = label;
    }
}