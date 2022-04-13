
import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes:Quote[] = [
 new Quote(1,'Oscar','Humour','Code is like humour.When you have to explain it its bad','Cory House',new Date(2019,7,12),0,0),
 new Quote(2,'David','Simplicity','Simplicity is the soul of efficiency','Austin Freeman',new Date(2019,6,9),0,0),
 new Quote(3,'Joy','Fix','Fix the cause not the symptom','Steve Maguire',new Date(2022,1,12),0,0),
//  new Quote(4,'Precious','Time','Sometimes it pays to stay in bed on Monday,rather than spending the rest of the week debugging Mondays code ','Dan Salomon',new Date(2019,0,18),0,0),
//  new Quote(5,'Angela','Experience','Experience is the name everyone gives to their mistakes','Oscar Wilde',new Date(2030,3,14),0,0),
//  new Quote(6,'Sharon','Code','Any fool can write code that a computer  can understand . Good programmers write code that humans can understand','Martin Fowler',new Date(2019,2,14),0,0),
];

toggleDetails(index:any){
  this.quotes[index].showInfo = !this.quotes[index].showInfo;
}

deleteQuote(isComplete: any,index: number){
  if (isComplete) { 
    let toDelete = confirm('Are you sure you want to delete ${this.quotes[index].name}?')
    if (toDelete)
    this.quotes.splice(index,1);
  }
}
addNewQuote(quote:any){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  Quote.completeDate = new Date(quote.completeDate)
  
  this.quotes.push(quote)
}
  constructor() { }

  ngOnInit(): void {
  }

}
