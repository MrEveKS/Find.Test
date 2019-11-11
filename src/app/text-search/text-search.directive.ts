import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

import Mark from 'mark.js';

@Directive({
  selector: '[appTextSearch]'
})
export class TextSearchDirective implements OnInit {
  private instance: { mark; unmark; };

  @Input() findEmmit: Observable<string> ;

  constructor(private elementRef: ElementRef) {
    this.instance = new Mark(this.elementRef.nativeElement);
  }

  public ngOnInit(): void {
    this.findEmmit.pipe(
      debounceTime(250),
      distinctUntilChanged()
    ).subscribe((v) => {
      this.instance.unmark().mark(v);
    });
  }

}
