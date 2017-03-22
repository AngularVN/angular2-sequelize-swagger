import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../shared/services/session';

@Component({
  selector: 'app-payment',
  templateUrl: 'app/routes/payment/payment.component.html'
})
export class PaymentComponent implements OnInit {
  public item: any = {};
  constructor(private session: SessionService) {}
  ngOnInit() {
    this.item = this.session.get('order') || {};
  }

}
