import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class HightlightDirective implements OnInit {
  // elementeRef: element sử dụng directive này
  constructor(private elementeRef: ElementRef) {}

  ngOnInit() {
    this.elementeRef.nativeElement.style.backgroundColor = 'green';
    this.elementeRef.nativeElement.style.color = 'white';
  }
}
