import { Component } from '@angular/core';
import { ApiDataService } from './../api-data.service';
@Component({
  selector: 'app-top-data-card',
  templateUrl: './top-data-card.component.html',
  styleUrls: ['./top-data-card.component.scss']
})
export class TopDataCardComponent {

  topCards: any
  slicedNumbers: any = []

  constructor(private service: ApiDataService) {
  }

  ngOnInit() {
    this.service.getData('top_cards').subscribe((data: any) => {
      this.topCards = data;
      this.trimString()
    });
  }

  //trim string to get desired number
  public trimString() {
    this.topCards.forEach((item: any) => {
      this.slicedNumbers = this.topCards.map(item => item.sub_header.slice(0, 3));
    });
  }

  //slice function
  public sliceData(item: string) {
    return item.slice(0, 3)
  }

}
