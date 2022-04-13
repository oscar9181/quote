import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quote = new Quote(0,"","","","",new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();
  // addQuote: any;
  // newQuote: any;
  

  submitQuote (){
    this.addQuote.emit(this.quote);
  }
  
  
  
 


  constructor() { }

  ngOnInit(): void {
  }

}
