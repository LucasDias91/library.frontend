export class Book{
  id: number;
  title: string;
  authorName: string;
  editionYear: number;
  imageUrl: string;
  constructor(id: number, 
              title: string,
              authorName: string,
              editionYear: number) 
              { 
                this.id = id;
                this.title = title;
                this.authorName = authorName;
                this.editionYear = editionYear;
                this.imageUrl = `./../../../../assets/images/books/${id}.jpg`;
              }
}