import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubCarPagesComponent } from './sub-car-pages/sub-car-pages.component';
import { BrandsComponent } from './brands/brands.component';
import { CountriesComponent } from './countries/countries.component';
import { YearsComponent } from './years/years.component';
import { NineteenComponent } from './years/nineteen/nineteen.component';
import { NineteenTenComponent } from './years/nineteen-ten/nineteen-ten.component';
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
import { HungarianComponent } from './languages/hungarian/hungarian.component';
import { GermanComponent } from './languages/german/german.component';
import { ItalianComponent } from './languages/italian/italian.component';
import { SpanishComponent } from './languages/spanish/spanish.component';
import { DutchComponent } from './languages/dutch/dutch.component';
import { SlovakComponent } from './languages/slovak/slovak.component';
import { CzechComponent } from './languages/czech/czech.component';
import { PortugueseComponent } from './languages/portuguese/portuguese.component';
import { CroatianComponent } from './languages/croatian/croatian.component';
import { PolishComponent } from './languages/polish/polish.component';

const routes: Routes = [
  { path: 'sub-car-pages', component: SubCarPagesComponent},
  { path: 'brands', component: BrandsComponent},
  { path: 'countries', component: CountriesComponent},
  { path: 'years', component: YearsComponent, children: [
    {
      path: '1900', component: NineteenComponent
    },
    {
      path: '1910', component: NineteenTenComponent
    },
    {
      path: '1920', component: NineteenTwentyComponent
    },
    {
      path: '1930', component: NineteenThirtyComponent
    },
    {
      path: '1940', component: NineteenFourtyComponent
    },
    {
      path: '1950', component: NineteenFiftyComponent
    },
    {
      path: '1960', component: NineteenSixtyComponent
    },
    {
      path: '1970', component: NineteenSeventyComponent
    },
    {
      path: '1980', component: NineteenEightyComponent
    },
    {
      path: '1990', component: NineteenNinetyComponent
    },
    {
      path: '2000', component: TwentyComponent
    },
    {
      path: '2010', component: TwentyTenComponent
    },
    {
      path: '2020', component: TwentyTwentyComponent
    }
    ]},
    { path: 'languages', component: LanguagesComponent,  children: [
    {
      path: 'english', component: EnglishComponent
    },
    {
      path: 'german', component: GermanComponent
    },
    {
      path: 'italian', component: ItalianComponent
    },
    {
      path: 'spanish', component: SpanishComponent
    },
    {
      path: 'hungarian', component: HungarianComponent
    },
    {
      path: 'dutch', component: DutchComponent
    },
    {
      path: 'slovak', component: SlovakComponent
    },
    {
      path: 'czech', component: CzechComponent
    },
    {
      path: 'portuguese', component: PortugueseComponent
    },
    {
      path: 'croatian', component: CroatianComponent
    },
    {
      path: 'polish', component: PolishComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
