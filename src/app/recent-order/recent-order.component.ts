import { Component } from '@angular/core';
import { ApiDataService } from './../api-data.service';
@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss']
})
export class RecentOrderComponent {
  recent_orders: any
  popupEnabled: boolean = false
  customer: any
  product: any
  months: any = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ]


  constructor(private service: ApiDataService) {
  }

  ngOnInit() {
    this.service.getData('recent_orders').subscribe((data: any) => {
      this.recent_orders = data;
    });
  }

  // popup to disply username and product info
  // performing toggle to enable and disable popup from ui
  public enablePopUp(data: any) {
    this.popupEnabled = !this.popupEnabled
    if (data != null) {
      this.customer = data.name
      this.product = data.product
    }else{
      this.customer = "No customer data"
      this.product = "No product data"
    }
  }

  public deliveryDate(data: any) {
    return (data.slice(8, 10)) + " " + (this.months[data.slice(5, 7) - 1]) + ", " + (data.slice(0, 4))
  }

  getStatusClass(status: string): string {
    if (status === 'Paid') {
      return 'paid-status statusColor';
    } else if (status === 'Pending') {
      return 'pending-status statusColor';
    } else if (status === 'Failed') {
      return 'failed-status statusColor';
    }
    return ''; // If status doesn't match any, no class is applied
  }


}
