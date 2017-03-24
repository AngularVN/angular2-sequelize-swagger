import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../shared/services/session';
declare var Stripe: any;
@Component({
  selector: 'app-payment',
  templateUrl: 'app/routes/payment/payment.component.html'
})
export class PaymentComponent implements OnInit {
  public item: any = {};


  constructor(private session: SessionService) {}
  ngOnInit() {
    this.item = this.session.get('order') || {};
    this.setUpCard();
  }

  title = 'Stripe Demo';
  private cardToken: any;

 

  private setUpCard() {
    //here we setup the stripe publish key.
    //notice that this is a test key for my account so replace with production key(live)
    Stripe.setPublishableKey('pk_test_GZcmJwjJmMpz9Qd6Y0sEI2Iq');
  }

  private getCardData(number, month, year, cvc) {
    //I get the card data typed in here and pass it to the getCardToken method
    this.getCardToken(number, month, year, cvc);
  }

  public getCardToken(number, month, year, cvc) {
    //set up the card data as an object
    var dataObj = { "number": number, "exp_month": month, "exp_year": year, "cvc": cvc };

    // Request a token from Stripe:
    Stripe.card.createToken(dataObj,
      (status, response) => { //I'm using an arrow function instead of stripeResponseHandler(a function also) cos it's kickass!
        // basically you can do anything here with the reponse that has your token
        // you can hit your backend api and initialize a charge etc
        if (status === 200) {
          console.log("the card response: ", response);
          this.cardToken = response.id;
          console.log("the card token: ", this.cardToken);
          window.alert('The card Ok');
        } else {
          window.alert('The card Error');
          console.log("error in getting card data: ", response.error)
        }
      }
    );

  }
}
