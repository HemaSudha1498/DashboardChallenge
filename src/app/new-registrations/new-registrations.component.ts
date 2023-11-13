import { Component } from '@angular/core';
import { ApiDataService } from './../api-data.service';

@Component({
  selector: 'app-new-registrations',
  templateUrl: './new-registrations.component.html',
  styleUrls: ['./new-registrations.component.scss']
})
export class NewRegistrationsComponent {
  new_users: any
  currentIndex: any = 0
  constructor(private service: ApiDataService) {
  }

  ngOnInit() {
    this.service.getData('new_users').subscribe((data: any) => {
      this.new_users = data;
    });
  }

  public changeIndex(index: number) {
    this.currentIndex = index
  }
}
