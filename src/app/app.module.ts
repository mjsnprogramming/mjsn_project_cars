import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDownButtonComponent } from './scroll-down-button/scroll-down-button.component';
import { HeaderComponent } from './header/header.component';
import { SubCarPagesComponent } from './sub-car-pages/sub-car-pages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrandsComponent } from './brands/brands.component';
import { CountriesComponent } from './countries/countries.component';
import { YearsComponent } from './years/years.component';
import { NineteenTenComponent } from './years/nineteen-ten/nineteen-ten.component';
import { NineteenComponent } from './years/nineteen/nineteen.component';
import { NineteenTwentyComponent } from './years/nineteen-twenty/nineteen-twenty.component';
import { NineteenThirtyComponent } from './years/nineteen-thirty/nineteen-thirty.component';
import { NineteenFourtyComponent } from './years/nineteen-fourty/nineteen-fourty.component';
import { NineteenFiftyComponent } from './years/nineteen-fifty/nineteen-fifty.component';
import { NineteenSixtyComponent } from './years/nineteen-sixty/nineteen-sixty.component';
import { NineteenSeventyComponent } from './years/nineteen-seventy/nineteen-seventy.component';
import { NineteenEightyComponent } from './years/nineteen-eighty/nineteen-eighty.component';
import { NineteenNinetyComponent } from './years/nineteen-ninety/nineteen-ninety.component';
import { TwentyComponent } from './years/twenty/twenty.component';
import { TwentyTenComponent } from './years/twenty-ten/twenty-ten.component';
import { TwentyTwentyComponent } from './years/twenty-twenty/twenty-twenty.component';
import { LanguagesComponent } from './languages/languages.component';
import { EnglishComponent } from './languages/english/english.component';
import { GermanComponent } from './languages/german/german.component';
import { ItalianComponent } from './languages/italian/italian.component';
import { SpanishComponent } from './languages/spanish/spanish.component';
import { HungarianComponent } from './languages/hungarian/hungarian.component';
import { PolishComponent } from './languages/polish/polish.component';
import { CroatianComponent } from './languages/croatian/croatian.component';
import { CzechComponent } from './languages/czech/czech.component';
import { SlovakComponent } from './languages/slovak/slovak.component';
import { PortugueseComponent } from './languages/portuguese/portuguese.component';
import { DutchComponent } from './languages/dutch/dutch.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollDownButtonComponent,
    HeaderComponent,
    SubCarPagesComponent,
    BrandsComponent,
    CountriesComponent,
    YearsComponent,
    NineteenTenComponent,
    NineteenComponent,
    NineteenTwentyComponent,
    NineteenThirtyComponent,
    NineteenFourtyComponent,
    NineteenFiftyComponent,
    NineteenSixtyComponent,
    NineteenSeventyComponent,
    NineteenEightyComponent,
    NineteenNinetyComponent,
    TwentyComponent,
    TwentyTenComponent,
    TwentyTwentyComponent,
    LanguagesComponent,
    EnglishComponent,
    GermanComponent,
    ItalianComponent,
    SpanishComponent,
    HungarianComponent,
    PolishComponent,
    CroatianComponent,
    CzechComponent,
    SlovakComponent,
    PortugueseComponent,
    DutchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
