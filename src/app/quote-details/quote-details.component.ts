import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  

  @Input()
  quote!: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  isComplete: any;
  
  upvote(){
    this.quote.likes+=1;
  }
  downvote(){
    this.quote.dislikes+=1;
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

  }
