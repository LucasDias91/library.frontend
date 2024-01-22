import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { PageBase } from '../../page.base';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Option } from 'src/app/core/models/option';
import { OptionService } from 'src/app/core/services/option.service';
import { Sort } from 'src/app/core/models/sort';
import { SortService } from 'src/app/core/services/sort.service';
import { AuthorValidator, TitleValidator } from 'src/app/core/validators/book-validador';

@Component({
  selector: 'app-book-sort-options',
  templateUrl: './book-sort-options.component.html',
  styleUrls: ['./book-sort-options.component.scss']
})
export class BookSortOptionsComponent  extends PageBase implements OnInit, OnDestroy{
  form: FormGroup | null = null;
  options: Option[] = [];
  @Output() submit: EventEmitter<Sort> = new EventEmitter<Sort>()

  constructor(private fb: FormBuilder,
              private optionService: OptionService,
              private sortService: SortService){
    super();
  }

  ngOnInit(): void {
    this.createForm();
    this.getOptions();
  }


  ngOnDestroy(): void {
     this.unSubscribe();
  }

  createForm(){
    this.form = this.fb.group({
      authorName: [null, AuthorValidator()],
      editionYear: [null],
      title: [null,TitleValidator()]
    })
  }

  getOptions(){
    this.subscribe(
      this.optionService.getAll()
             .subscribe({
              next:(options)=> this.options = options
             })
    )
  }

  onSubmit(){
    if(this.form?.invalid){
      Object.keys(this.form)
            .forEach((controlName)=> this.form?.get(controlName)?.markAsTouched())
      return;
    }

    const sort = this.prepareSort();
    this.submit.emit(sort);
  }

  private prepareSort() : Sort{
    return new Sort(this.form?.get('title')?.value, this.form?.get('authorName')?.value,  this.form?.get('editionYear')?.value);
  }

  reset(){
    this.form?.reset();
  }

}
