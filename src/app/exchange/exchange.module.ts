import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorExchangeComponent } from './components/calculator-exchange/calculator-exchange.component';
import { ExchangeService } from './exchange.service';
import { CurrencyExchangeComponent } from './container/currency-exchange/currency-exchange.component';
import { ExchangeRoutingModule } from './exchange-routing.module';

@NgModule({
  declarations: [CalculatorExchangeComponent, CurrencyExchangeComponent],
  imports: [
    CommonModule,
    ExchangeRoutingModule
  ],
  providers: [ExchangeService]
})
export class ExchangeModule { }
