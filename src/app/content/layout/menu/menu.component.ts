import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/models/page';
import { PageService } from 'src/app/core/services/page.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  pages: Page[] = [];
  constructor(private pageService: PageService){

  }

  ngOnInit(): void {
    this.getPages();
  } 

  getPages(): void{
    this.pageService.getAll()
                  .subscribe({
                    next:(pages)=>  this.pages = pages
                  })
  }
}
