import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
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
import { ArgentinaComponent } from './countries/argentina/argentina.component';
import { AustraliaComponent } from './countries/australia/australia.component';
import { AustriaComponent } from './countries/austria/austria.component';
import { BrazilComponent } from './countries/brazil/brazil.component';
import { CanadaComponent } from './countries/canada/canada.component';
import { ChinaComponent } from './countries/china/china.component';
import { CroatiaComponent } from './countries/croatia/croatia.component';
import { CzechRepublicComponent } from './countries/czech-republic/czech-republic.component';
import { DenmarkComponent } from './countries/denmark/denmark.component';
import { FranceComponent } from './countries/france/france.component';
import { GermanyComponent } from './countries/germany/germany.component';
import { GreatBritainComponent } from './countries/great-britain/great-britain.component';
import { ItalyComponent } from './countries/italy/italy.component';
import { JapanComponent } from './countries/japan/japan.component';
import { MalaysiaComponent } from './countries/malaysia/malaysia.component';
import { MoroccoComponent } from './countries/morocco/morocco.component';
import { NetherlandsComponent } from './countries/netherlands/netherlands.component';
import { NorwayComponent } from './countries/norway/norway.component';
import { PolandComponent } from './countries/poland/poland.component';
import { RomaniaComponent } from './countries/romania/romania.component';
import { RussiaComponent } from './countries/russia/russia.component';
import { SlovakiaComponent } from './countries/slovakia/slovakia.component';
import { SloveniaComponent } from './countries/slovenia/slovenia.component';
import { SouthAfricaComponent } from './countries/south-africa/south-africa.component';
import { SouthKoreaComponent } from './countries/south-korea/south-korea.component';
import { SpainComponent } from './countries/spain/spain.component';
import { SriLankaComponent } from './countries/sri-lanka/sri-lanka.component';
import { SwedenComponent } from './countries/sweden/sweden.component';
import { SwitzerlandComponent } from './countries/switzerland/switzerland.component';
import { TurkeyComponent } from './countries/turkey/turkey.component';
import { UaeComponent } from './countries/uae/uae.component';
import { VietnamComponent } from './countries/vietnam/vietnam.component';
import { UsaComponent } from './countries/usa/usa.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sub-car-pages', component: SubCarPagesComponent},
  { path: 'brands', component: BrandsComponent},
  { path: 'countries', component: CountriesComponent, children: [
      {
        path: 'argentina', component: ArgentinaComponent
      },
      {
        path: 'australia', component: AustraliaComponent
      },
      {
        path: 'austria', component: AustriaComponent
      },
      {
        path: 'brazil', component: BrazilComponent
      },
      {
        path: 'canada', component: CanadaComponent
      },
      {
        path: 'china', component: ChinaComponent
      },
      {
        path: 'croatia', component: CroatiaComponent
      },
      {
        path: 'czech_republic', component: CzechRepublicComponent
      },
      {
        path: 'denmark', component: DenmarkComponent
      },
      {
        path: 'france', component: FranceComponent
      },
      {
        path: 'germany', component: GermanyComponent
      },
      {
        path: 'great_britain', component: GreatBritainComponent
      },
      {
        path: 'italy', component: ItalyComponent
      },
      {
        path: 'japan', component: JapanComponent
      },
      {
        path: 'malaysia', component: MalaysiaComponent
      },
      {
        path: 'morocco', component: MoroccoComponent
      },
      {
        path: 'netherlands', component: NetherlandsComponent
      },
      {
        path: 'norway', component: NorwayComponent
      },
      {
        path: 'poland', component: PolandComponent
      },
      {
        path: 'romania', component: RomaniaComponent
      },
      {
        path: 'russia', component: RussiaComponent
      },
      {
        path: 'slovakia', component: SlovakiaComponent
      },
      {
        path: 'slovenia', component: SloveniaComponent
      },
      {
        path: 'south_africa', component: SouthAfricaComponent
      },
      {
        path: 'south_korea', component: SouthKoreaComponent
      },
      {
        path: 'spain', component: SpainComponent
      },
      {
        path: 'sri_lanka', component: SriLankaComponent
      },
      {
        path: 'sweden', component: SwedenComponent
      },
      {
        path: 'switzerland', component: SwitzerlandComponent
      },
      {
        path: 'turkey', component: TurkeyComponent
      },
      {
        path: 'usa', component: UsaComponent
      },
      {
        path: 'uae', component: UaeComponent
      },
      {
        path: 'vietnam', component: VietnamComponent
      }
    ]},
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
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
