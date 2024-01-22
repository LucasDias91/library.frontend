import { SortType } from "../enums/sort-type";
import { compareNumber, compareString } from "../helpers/sort-helper";
import { Book } from "./book";
export class Sort {
    title: SortType | null;
    authorName: SortType | null;
    editionYear: SortType | null;
    constructor(title: SortType | null,
                authorName: SortType | null,
                editionYear:  SortType | null)
    {
          this.title = title;
          this.authorName = authorName;
          this.editionYear = editionYear;
    }

    books(books: Book[]){
        var sortByAuthor = this.authorName != null;
        var sortByTitle = this.title != null;
        var sortByYear = this.editionYear != null;
        var _this = this;

        return books.sort(function (a, b) {
            if(sortByTitle && !sortByAuthor && !sortByYear){
                return compareString(_this.title,a.title,b.title) 
             }
            else if(!sortByTitle && sortByAuthor && !sortByYear){
                return compareString(_this.authorName,a.authorName,b.authorName) 
             }
             else if(!sortByTitle && !sortByAuthor && sortByYear){
                return compareNumber(_this.editionYear,a.editionYear,b.editionYear) 
             }
             else if(sortByTitle && sortByAuthor && !sortByYear){
                return compareString(_this.title,a.title,b.title) && compareString(_this.authorName,a.authorName,b.authorName) 
             }
             else if(!sortByTitle && sortByAuthor && sortByYear){
                return compareString(_this.authorName,a.authorName,b.authorName) && compareNumber(_this.editionYear,a.editionYear,b.editionYear)
             }
             else if(sortByTitle && !sortByAuthor && sortByYear){
                return compareString(_this.title,a.title,b.title)  && compareNumber(_this.editionYear,a.editionYear,b.editionYear)
             }
            return  (compareString(_this.title,a.title,b.title) ||  compareString(_this.authorName,a.authorName,b.authorName))  &&  compareNumber(_this.editionYear,a.editionYear,b.editionYear)  
          })
          
    }
}

