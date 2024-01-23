import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { PageBase } from '../../page.base';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Option } from 'src/app/core/models/option';
import { OptionService } from 'src/app/core/services/option.service';
import { Sort } from 'src/app/core/models/sort';
import { AuthorValidator, TitleValidator, YearValidator } from 'src/app/core/validators/book-validador';
import { MessageType } from 'src/app/core/enums/message-type';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-book-sort-options',
  templateUrl: './book-sort-options.component.html',
  styleUrls: ['./book-sort-options.component.scss']
})
export class BookSortOptionsComponent  extends PageBase implements OnInit, OnDestroy{
  form: FormGroup | null = null;
  options: Option[] = [];
  message: string | null = null;
  type: MessageType = MessageType.Error;
  @Output() submit: EventEmitter<Sort> = new EventEmitter<Sort>()
  isOpen$: Subject<boolean> = this.optionService.isOpen;
  mobile: boolean = true;
  private state: boolean = false;
 

  constructor(private fb: FormBuilder,
              private optionService: OptionService){
    super();
  }

  ngOnInit(): void {
    this.createForm();
    this.getOptions();
    this.menu();
    console.log("OIT")
  }


  ngOnDestroy(): void {
     this.unSubscribe();
  }

  createForm(){
    this.form = this.fb.group({
      authorName: [null, AuthorValidator()],
      editionYear: [null, YearValidator()],
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
      this.message =  'Selecione pelo menos um item';
      return;
    }
    if(this.form?.invalid){
      return;
    }
    const sort = this.prepareSort();
    this.submit.emit(sort);
  }

  private prepareSort() : Sort{
    return new Sort(this.form?.get('title')?.value, this.form?.get('authorName')?.value,  this.form?.get('editionYear')?.value);
  }

  touched(){
  if(this.form == null){
    return;
  }
    return Object.keys(this.form.controls).filter(control=> this.form?.get(control)?.dirty || this.form?.get(control)?.touched).length > 0
  }

  reset(){
    this.form?.reset();
  }

  
  menu() {
    this.isOpen$.subscribe
    ((isOpen) => {
      if (isOpen) {
        this.open();
      }
      else {
        this.state = false
        this.close();
      }
    })
  }


  
  open() {
    const element = document.getElementById('option-painel') as HTMLElement;
    if(element == null) {return;}
    element.style.width = "270px";

  }

  close() {
    const element = document.getElementById('option-painel') as HTMLElement;
    if(element == null) {return;}
    element.style.width = "0px";
    this.state = !this.state;
  }

}
