import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) { }


  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
    private textDeco(action:string){
      this.elem.nativeElement.style.textDecoration=action;
  
  }

}
