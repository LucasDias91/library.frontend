import { Book } from "../../models/book";
import { Option } from "../../models/option";
import { Page } from "../../models/page";

export function GetBooks() {
    var books: Book[] = [];
    books.push(new Book(1, "Java How to Program", "Deitel & Deitel", 2007));
    books.push(new Book(2, "Patterns of Enterprise Application", "Martin Fowler", 2002));
    books.push(new Book(3, "Head First Design Patterns", "Elisabeth Freeman ", 2004 ));
    books.push(new Book(4, "Internet & World Wide Web: How to Program", "Deitel & Deitel", 2007));
    return books;
}

export function GetOptions(){
    var options: Option[] = [];
    options.push(new Option('title', "Título"));
    options.push(new Option('authorName', "Nome do autor"));
    options.push(new Option('editionYear', "Ano"));
    return options;
}

export function GetPages(){
    var pages: Page[] = [];
    pages.push(new Page(1,'Livros', '/Books'));
    return pages;
}