import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quoted = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();
  addQuote: any;

  submitQuote(){
    this.addQuote.emit(this.newQuote);
   
  }
  newQuote(newQuote: any) {
    throw new Error('Method not implemented.');
  }
 


  constructor() { }

  ngOnInit(): void {
  }

}
