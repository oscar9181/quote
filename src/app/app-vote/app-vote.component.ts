import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-app-vote',
  templateUrl: './app-vote.component.html',
  styleUrls: ['./app-vote.component.css']
})
export class AppVoteComponent implements OnInit {
  @Input () appvote: string | undefined;
  numberOfLikes: number = 0;
  upvoteButtonClick(){
    this.numberOfLikes+=1;
  }
  downvoteButtonClick(){
    this.numberOfLikes-=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
