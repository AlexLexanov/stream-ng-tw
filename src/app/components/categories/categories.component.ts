import {Component, ViewChild, ElementRef, Input, AfterViewInit} from '@angular/core';
import { faChevronRight, faChevronLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { fromEvent } from 'rxjs';

export interface CategoriesModel {
  id: number;
  title: string;
  films: Array<number>;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements AfterViewInit {
  @Input() category: CategoriesModel | any;
  @Input() index: number | any;
  @ViewChild('overflowX', {static: true}) overflowXRef: ElementRef | any;

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faChevronCircleRight = faChevronCircleRight;
  btnLeft = false;
  btnRight = true;
  id: undefined | number;

  ScrollXLeft(): void {
    this.overflowXRef.nativeElement.scrollLeft -= 470 * 2;
  }
  ScrollXRight(): void {
    this.overflowXRef.nativeElement.scrollLeft += 470 * 2;
  }
  preViewShow(id: number | any): void {
    if (this.id === id) {
      this.id = undefined;
    } else {
      this.id = id;
    }
  }

  ngAfterViewInit(): void {
    fromEvent(this.overflowXRef.nativeElement, 'scroll')
      .subscribe( (event: Event | any) => {
        const { clientWidth, scrollLeft, scrollWidth } = event.target;

        if (scrollLeft === 0) {
          this.btnLeft = false;
        } else if (scrollLeft !== 0) {
          this.btnLeft = true;
          this.btnRight = clientWidth + scrollLeft !== scrollWidth;
        }
      });
  }

  onVisible(e: any) {
    console.log(e);
  }
}
