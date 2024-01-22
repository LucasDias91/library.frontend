import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSortOptionsComponent } from './book-sort-options.component';

describe('BookSortOptionsComponent', () => {
  let component: BookSortOptionsComponent;
  let fixture: ComponentFixture<BookSortOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSortOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSortOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
