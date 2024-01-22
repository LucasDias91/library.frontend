import { SortType } from "../enums/sort-type";

export function compareString(type: SortType | null, a: string, b: string){
    switch(type){
        case SortType.downward:
            return b.localeCompare(a)
        case SortType.ascending:
            return a.localeCompare(b)
        default:
            return -1;
    }
}


export function compareNumber(type: SortType | null, a: number, b: number){
    switch(type){
        case SortType.downward:
            return compare(b, a);
        case SortType.ascending:
            return compare(a, b);
        default:
            return -1;
    }

    function compare(a: number, b: number){
        if (a > b) {
            return 1;
         }
          return -1;
    }
}