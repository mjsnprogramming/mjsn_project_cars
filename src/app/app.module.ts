import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDownButtonComponent } from './scroll-down-button/scroll-down-button.component';
import { HeaderComponent } from './header/header.component';
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
import { MainComponent } from './main/main.component';
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
import { GreatBritainComponent } from './countries/great-britain/great-britain.component';
import { VietnamComponent } from './countries/vietnam/vietnam.component';
import { UsaComponent } from './countries/usa/usa.component';
import { AlfaRomeoComponent } from './brands/alfa-romeo/alfa-romeo.component';
import { AstonMartinComponent } from './brands/aston-martin/aston-martin.component';
import { AudiComponent } from './brands/audi/audi.component';
import { BentleyComponent } from './brands/bentley/bentley.component';
import { BmwComponent } from './brands/bmw/bmw.component';
import { BugattiComponent } from './brands/bugatti/bugatti.component';
import { ChevroletComponent } from './brands/chevrolet/chevrolet.component';
import { CitroenComponent } from './brands/citroen/citroen.component';
import { DodgeComponent } from './brands/dodge/dodge.component';
import { FerrariComponent } from './brands/ferrari/ferrari.component';
import { FiatComponent } from './brands/fiat/fiat.component';
import { FordComponent } from './brands/ford/ford.component';
import { GmcComponent } from './brands/gmc/gmc.component';
import { HennesseyComponent } from './brands/hennessey/hennessey.component';
import { HyundaiComponent } from './brands/hyundai/hyundai.component';
import { InfinitiComponent } from './brands/infiniti/infiniti.component';
import { JaguarComponent } from './brands/jaguar/jaguar.component';
import { JeepComponent } from './brands/jeep/jeep.component';
import { KiaComponent } from './brands/kia/kia.component';
import { KoenigseggComponent } from './brands/koenigsegg/koenigsegg.component';
import { LamborghiniComponent } from './brands/lamborghini/lamborghini.component';
import { LandRoverComponent } from './brands/land-rover/land-rover.component';
import { LotusComponent } from './brands/lotus/lotus.component';
import { LexusComponent } from './brands/lexus/lexus.component';
import { MaseratiComponent } from './brands/maserati/maserati.component';
import { MclarenComponent } from './brands/mclaren/mclaren.component';
import { MercedesComponent } from './brands/mercedes/mercedes.component';
import { MitsubishiComponent } from './brands/mitsubishi/mitsubishi.component';
import { MiniComponent } from './brands/mini/mini.component';
import { NissanComponent } from './brands/nissan/nissan.component';
import { OpelComponent } from './brands/opel/opel.component';
import { PaganiComponent } from './brands/pagani/pagani.component';
import { PolestarComponent } from './brands/polestar/polestar.component';
import { PeugeotComponent } from './brands/peugeot/peugeot.component';
import { PorscheComponent } from './brands/porsche/porsche.component';
import { RenaultComponent } from './brands/renault/renault.component';
import { RollsRoyceComponent } from './brands/rolls-royce/rolls-royce.component';
import { SeatComponent } from './brands/seat/seat.component';
import { SkodaComponent } from './brands/skoda/skoda.component';
import { SubaruComponent } from './brands/subaru/subaru.component';
import { SuzukiComponent } from './brands/suzuki/suzuki.component';
import { TeslaComponent } from './brands/tesla/tesla.component';
import { ToyotaComponent } from './brands/toyota/toyota.component';
import { VolkswagenComponent } from './brands/volkswagen/volkswagen.component';
import { VolvoComponent } from './brands/volvo/volvo.component';
import { AbarthComponent } from './brands/abarth/abarth.component';
import { AcadianComponent } from './brands/acadian/acadian.component';
import { AionComponent } from './brands/aion/aion.component';
import { AiwaysComponent } from './brands/aiways/aiways.component';
import { AixamComponent } from './brands/aixam/aixam.component';
import { AlpineComponent } from './brands/alpine/alpine.component';
import { AlvisComponent } from './brands/alvis/alvis.component';
import { AndinoComponent } from './brands/andino/andino.component';
import { ApolloComponent } from './brands/apollo/apollo.component';
import { ArcfoxComponent } from './brands/arcfox/arcfox.component';
import { ArielComponent } from './brands/ariel/ariel.component';
import { ArrineraComponent } from './brands/arrinera/arrinera.component';
import { AscariComponent } from './brands/ascari/ascari.component';
import { AsparkComponent } from './brands/aspark/aspark.component';
import { AsunaComponent } from './brands/asuna/asuna.component';
import { AcuraComponent } from './brands/acura/acura.component';
import { ArashComponent } from './brands/arash/arash.component';
import { ArtegaComponent } from './brands/artega/artega.component';
import { AustinComponent } from './brands/austin/austin.component';
import { AutobianchiComponent } from './brands/autobianchi/autobianchi.component';
import { BeaumontComponent } from './brands/beaumont/beaumont.component';
import { BitterComponent } from './brands/bitter/bitter.component';
import { BollingerComponent } from './brands/bollinger/bollinger.component';
import { BorgwardComponent } from './brands/borgward/borgward.component';
import { BydComponent } from './brands/byd/byd.component';
import { BolwellComponent } from './brands/bolwell/bolwell.component';
import { BristolCarsComponent } from './brands/bristol-cars/bristol-cars.component';
import { BuickComponent } from './brands/buick/buick.component';
import { BytonComponent } from './brands/byton/byton.component';
import { BrillianceComponent } from './brands/brilliance/brilliance.component';
import { BrabhamComponent } from './brands/brabham/brabham.component';
import { ChatenetComponent } from './brands/chatenet/chatenet.component';
import { CodaComponent } from './brands/coda/coda.component';
import { ContinentalComponent } from './brands/continental/continental.component';
import { CupraComponent } from './brands/cupra/cupra.component';
import { CzingerComponent } from './brands/czinger/czinger.component';
import { CadillacComponent } from './brands/cadillac/cadillac.component';
import { CaterhamComponent } from './brands/caterham/caterham.component';
import { ChryslerComponent } from './brands/chrysler/chrysler.component';
import { DaewooComponent } from './brands/daewoo/daewoo.component';
import { DaciaComponent } from './brands/dacia/dacia.component';
import { DaihatsuComponent } from './brands/daihatsu/daihatsu.component';
import { DearccComponent } from './brands/dearcc/dearcc.component';
import { DeloreanComponent } from './brands/delorean/delorean.component';
import { DenzaComponent } from './brands/denza/denza.component';
import { DrakoComponent } from './brands/drako/drako.component';
import { DevelComponent } from './brands/devel/devel.component';
import { DonkervoortComponent } from './brands/donkervoort/donkervoort.component';
import { DetomasoComponent } from './brands/detomaso/detomaso.component';
import { DsComponent } from './brands/ds/ds.component';
import { DatsunComponent } from './brands/datsun/datsun.component';
import { EagleComponent } from './brands/eagle/eagle.component';
import { EdselComponent } from './brands/edsel/edsel.component';
import { ElfinComponent } from './brands/elfin/elfin.component';
import { EnvoyComponent } from './brands/envoy/envoy.component';
import { EnzmannComponent } from './brands/enzmann/enzmann.component';
import { ElementalComponent } from './brands/elemental/elemental.component';
import { FacelVegaComponent } from './brands/facel-vega/facel-vega.component';
import { FaradayFutureComponent } from './brands/faraday-future/faraday-future.component';
import { FiskerComponent } from './brands/fisker/fisker.component';
import { FsoComponent } from './brands/fso/fso.component';
import { GeelyComponent } from './brands/geely/geely.component';
import { GeoComponent } from './brands/geo/geo.component';
import { GeometryComponent } from './brands/geometry/geometry.component';
import { GinettaComponent } from './brands/ginetta/ginetta.component';
import { GoggomobilComponent } from './brands/goggomobil/goggomobil.component';
import { GregoireComponent } from './brands/gregoire/gregoire.component';
import { HiphiComponent } from './brands/hiphi/hiphi.component';
import { HoldenComponent } from './brands/holden/holden.component';
import { HycanComponent } from './brands/hycan/hycan.component';
import { HavalComponent } from './brands/haval/haval.component';
import { ImperialComponent } from './brands/imperial/imperial.component';
import { ImvComponent } from './brands/imv/imv.component';
import { IndustriasKaiserArgentinaComponent } from './brands/industrias-kaiser-argentina/industrias-kaiser-argentina.component';
import { IsderaComponent } from './brands/isdera/isdera.component';
import { IzeraComponent } from './brands/izera/izera.component';
import { HummerComponent } from './brands/hummer/hummer.component';
import { IsuzuComponent } from './brands/isuzu/isuzu.component';
import { JianglingComponent } from './brands/jiangling/jiangling.component';
import { JoMobilComponent } from './brands/jo-mobil/jo-mobil.component';
import { K1EngineeringComponent } from './brands/k1-engineering/k1-engineering.component';
import { KandiComponent } from './brands/kandi/kandi.component';
import { KarmaComponent } from './brands/karma/karma.component';
import { KeatingComponent } from './brands/keating/keating.component';
import { KtmComponent } from './brands/ktm/ktm.component';
import { LagondaComponent } from './brands/lagonda/lagonda.component';
import { LanciaComponent } from './brands/lancia/lancia.component';
import { LarakiComponent } from './brands/laraki/laraki.component';
import { LigierComponent } from './brands/ligier/ligier.component';
import { LeaheadComponent } from './brands/leahead/leahead.component';
import { LeapmotorComponent } from './brands/leapmotor/leapmotor.component';
import { LiAutoComponent } from './brands/li-auto/li-auto.component';
import { LincolnComponent } from './brands/lincoln/lincoln.component';
import { LordstownComponent } from './brands/lordstown/lordstown.component';
import { LucidComponent } from './brands/lucid/lucid.component';
import { LadaComponent } from './brands/lada/lada.component';
import { MarcosComponent } from './brands/marcos/marcos.component';
import { MarussiaComponent } from './brands/marussia/marussia.component';
import { MelkusComponent } from './brands/melkus/melkus.component';
import { MeteorComponent } from './brands/meteor/meteor.component';
import { MaybachComponent } from './brands/maybach/maybach.component';
import { MazzantiComponent } from './brands/mazzanti/mazzanti.component';
import { MercuryComponent } from './brands/mercury/mercury.component';
import { MitsuokaComponent } from './brands/mitsuoka/mitsuoka.component';
import { MgComponent } from './brands/mg/mg.component';
import { MoslerComponent } from './brands/mosler/mosler.component';
import { MonarchComponent } from './brands/monarch/monarch.component';
import { MonteverdiComponent } from './brands/monteverdi/monteverdi.component';
import { MorganComponent } from './brands/morgan/morgan.component';
import { MorrisComponent } from './brands/morris/morris.component';
import { MtxComponent } from './brands/mtx/mtx.component';
import { NetaComponent } from './brands/neta/neta.component';
import { NioComponent } from './brands/nio/nio.component';
import { NobleComponent } from './brands/noble/noble.component';
import { OraComponent } from './brands/ora/ora.component';
import { OldsmobileComponent } from './brands/oldsmobile/oldsmobile.component';
import { PanhardComponent } from './brands/panhard/panhard.component';
import { PassportComponent } from './brands/passport/passport.component';
import { PanozComponent } from './brands/panoz/panoz.component';
import { PegasoComponent } from './brands/pegaso/pegaso.component';
import { PiechComponent } from './brands/piech/piech.component';
import { ProtonComponent } from './brands/proton/proton.component';
import { PumaComponent } from './brands/puma/puma.component';
import { PontiacComponent } from './brands/pontiac/pontiac.component';
import { PeroduaComponent } from './brands/perodua/perodua.component';
import { PininfarinaComponent } from './brands/pininfarina/pininfarina.component';
import { PlymouthComponent } from './brands/plymouth/plymouth.component';
import { RamblerComponent } from './brands/rambler/rambler.component';
import { RangerComponent } from './brands/ranger/ranger.component';
import { RivianComponent } from './brands/rivian/rivian.component';
import { RoverComponent } from './brands/rover/rover.component';
import { RimacComponent } from './brands/rimac/rimac.component';
import { RossionComponent } from './brands/rossion/rossion.component';
import { RamComponent } from './brands/ram/ram.component';
import { QiantuComponent } from './brands/qiantu/qiantu.component';
import { QvaleComponent } from './brands/qvale/qvale.component';
import { SaehanComponent } from './brands/saehan/saehan.component';
import { SaenaraComponent } from './brands/saenara/saenara.component';
import { SeresComponent } from './brands/seres/seres.component';
import { ShelbyComponent } from './brands/shelby/shelby.component';
import { ShinjinComponent } from './brands/shinjin/shinjin.component';
import { ShuanghuanComponent } from './brands/shuanghuan/shuanghuan.component';
import { SingulatoComponent } from './brands/singulato/singulato.component';
import { SinogoldComponent } from './brands/sinogold/sinogold.component';
import { SitechComponent } from './brands/sitech/sitech.component';
import { SolComponent } from './brands/sol/sol.component';
import { SolectriaComponent } from './brands/solectria/solectria.component';
import { SrtComponent } from './brands/srt/srt.component';
import { SscComponent } from './brands/ssc/ssc.component';
import { StudebakerComponent } from './brands/studebaker/studebaker.component';
import { SaabComponent } from './brands/saab/saab.component';
import { SaturnComponent } from './brands/saturn/saturn.component';
import { SaicComponent } from './brands/saic/saic.component';
import { SaleenComponent } from './brands/saleen/saleen.component';
import { SmartComponent } from './brands/smart/smart.component';
import { SpykerComponent } from './brands/spyker/spyker.component';
import { SsangYongComponent } from './brands/ssang-yong/ssang-yong.component';
import { StatesmanComponent } from './brands/statesman/statesman.component';
import { ScionComponent } from './brands/scion/scion.component';
import { ThinkComponent } from './brands/think/think.component';
import { ToggComponent } from './brands/togg/togg.component';
import { TuckerComponent } from './brands/tucker/tucker.component';
import { TauroSportAutoComponent } from './brands/tauro-sport-auto/tauro-sport-auto.component';
import { VectorComponent } from './brands/vector/vector.component';
import { VegaComponent } from './brands/vega/vega.component';
import { VinfastComponent } from './brands/vinfast/vinfast.component';
import { TrionComponent } from './brands/trion/trion.component';
import { TriumphComponent } from './brands/triumph/triumph.component';
import { TvrComponent } from './brands/tvr/tvr.component';
import { VlfComponent } from './brands/vlf/vlf.component';
import { WeltmeisterComponent } from './brands/weltmeister/weltmeister.component';
import { WiesmannComponent } from './brands/wiesmann/wiesmann.component';
import { VencerComponent } from './brands/vencer/vencer.component';
import { ZenvoComponent } from './brands/zenvo/zenvo.component';
import { ZenosComponent } from './brands/zenos/zenos.component';
import { UltimaComponent } from './brands/ultima/ultima.component';
import { WMotorsComponent } from './brands/w-motors/w-motors.component';
import { AbarthModelsComponent } from './brands/abarth/abarth-models/abarth-models.component';
import { AbarthHistoryComponent } from './brands/abarth/abarth-history/abarth-history.component';
import { AbarthMuseumComponent } from './brands/abarth/abarth-museum/abarth-museum.component';
import { AcadianModelsComponent } from './brands/acadian/acadian-models/acadian-models.component';
import { AcadianHistoryComponent } from './brands/acadian/acadian-history/acadian-history.component';
import { AcadianMuseumComponent } from './brands/acadian/acadian-museum/acadian-museum.component';
import { AcuraModelsComponent } from './brands/acura/acura-models/acura-models.component';
import { AcuraHistoryComponent } from './brands/acura/acura-history/acura-history.component';
import { AcuraMuseumComponent } from './brands/acura/acura-museum/acura-museum.component';
import { AionModelsComponent } from './brands/aion/aion-models/aion-models.component';
import { AionHistoryComponent } from './brands/aion/aion-history/aion-history.component';
import { AionMuseumComponent } from './brands/aion/aion-museum/aion-museum.component';
import { AiwaysModelsComponent } from './brands/aiways/aiways-models/aiways-models.component';
import { AiwaysHistoryComponent } from './brands/aiways/aiways-history/aiways-history.component';
import { AiwaysMuseumComponent } from './brands/aiways/aiways-museum/aiways-museum.component';
import { AixamModelsComponent } from './brands/aixam/aixam-models/aixam-models.component';
import { AixamHistoryComponent } from './brands/aixam/aixam-history/aixam-history.component';
import { AixamMuseumComponent } from './brands/aixam/aixam-museum/aixam-museum.component';
import { AlfaRomeoModelsComponent } from './brands/alfa-romeo/alfa-romeo-models/alfa-romeo-models.component';
import { AlfaRomeoHistoryComponent } from './brands/alfa-romeo/alfa-romeo-history/alfa-romeo-history.component';
import { AlfaRomeoMuseumComponent } from './brands/alfa-romeo/alfa-romeo-museum/alfa-romeo-museum.component';
import { AlpineModelsComponent } from './brands/alpine/alpine-models/alpine-models.component';
import { AlpineHistoryComponent } from './brands/alpine/alpine-history/alpine-history.component';
import { AlpineMuseumComponent } from './brands/alpine/alpine-museum/alpine-museum.component';
import { AlvisModelsComponent } from './brands/alvis/alvis-models/alvis-models.component';
import { AlvisHistoryComponent } from './brands/alvis/alvis-history/alvis-history.component';
import { AlvisMuseumComponent } from './brands/alvis/alvis-museum/alvis-museum.component';
import { AndinoModelsComponent } from './brands/andino/andino-models/andino-models.component';
import { AndinoHistoryComponent } from './brands/andino/andino-history/andino-history.component';
import { AndinoMuseumComponent } from './brands/andino/andino-museum/andino-museum.component';
import { ApolloModelsComponent } from './brands/apollo/apollo-models/apollo-models.component';
import { ApolloHistoryComponent } from './brands/apollo/apollo-history/apollo-history.component';
import { ApolloMuseumComponent } from './brands/apollo/apollo-museum/apollo-museum.component';
import { ArashModelsComponent } from './brands/arash/arash-models/arash-models.component';
import { ArashHistoryComponent } from './brands/arash/arash-history/arash-history.component';
import { ArashMuseumComponent } from './brands/arash/arash-museum/arash-museum.component';
import { ArcfoxModelsComponent } from './brands/arcfox/arcfox-models/arcfox-models.component';
import { ArcfoxHistoryComponent } from './brands/arcfox/arcfox-history/arcfox-history.component';
import { ArcfoxMuseumComponent } from './brands/arcfox/arcfox-museum/arcfox-museum.component';
import { ArielModelsComponent } from './brands/ariel/ariel-models/ariel-models.component';
import { ArielHistoryComponent } from './brands/ariel/ariel-history/ariel-history.component';
import { ArielMuseumComponent } from './brands/ariel/ariel-museum/ariel-museum.component';
import { ArrineraModelsComponent } from './brands/arrinera/arrinera-models/arrinera-models.component';
import { ArrineraHistoryComponent } from './brands/arrinera/arrinera-history/arrinera-history.component';
import { ArrineraMuseumComponent } from './brands/arrinera/arrinera-museum/arrinera-museum.component';
import { ArtegaModelsComponent } from './brands/artega/artega-models/artega-models.component';
import { ArtegaHistoryComponent } from './brands/artega/artega-history/artega-history.component';
import { ArtegaMuseumComponent } from './brands/artega/artega-museum/artega-museum.component';
import { AscariModelsComponent } from './brands/ascari/ascari-models/ascari-models.component';
import { AscariHistoryComponent } from './brands/ascari/ascari-history/ascari-history.component';
import { AscariMuseumComponent } from './brands/ascari/ascari-museum/ascari-museum.component';
import { AsparkModelsComponent } from './brands/aspark/aspark-models/aspark-models.component';
import { AsparkHistoryComponent } from './brands/aspark/aspark-history/aspark-history.component';
import { AsparkMuseumComponent } from './brands/aspark/aspark-museum/aspark-museum.component';
import { AstonMartinModelsComponent } from './brands/aston-martin/aston-martin-models/aston-martin-models.component';
import { AstonMartinHistoryComponent } from './brands/aston-martin/aston-martin-history/aston-martin-history.component';
import { AstonMartinMuseumComponent } from './brands/aston-martin/aston-martin-museum/aston-martin-museum.component';


@NgModule({
  declarations: [
    AppComponent,
    ScrollDownButtonComponent,
    HeaderComponent,
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
    DutchComponent,
    MainComponent,
    ArgentinaComponent,
    AustraliaComponent,
    AustriaComponent,
    BrazilComponent,
    CanadaComponent,
    ChinaComponent,
    CroatiaComponent,
    CzechRepublicComponent,
    DenmarkComponent,
    FranceComponent,
    GermanyComponent,
    ItalyComponent,
    JapanComponent,
    MalaysiaComponent,
    MoroccoComponent,
    NetherlandsComponent,
    NorwayComponent,
    PolandComponent,
    RomaniaComponent,
    RussiaComponent,
    SlovakiaComponent,
    SloveniaComponent,
    SouthAfricaComponent,
    SouthKoreaComponent,
    SpainComponent,
    SriLankaComponent,
    SwedenComponent,
    SwitzerlandComponent,
    TurkeyComponent,
    UaeComponent,
    GreatBritainComponent,
    VietnamComponent,
    UsaComponent,
    AlfaRomeoComponent,
    AstonMartinComponent,
    AudiComponent,
    BentleyComponent,
    BmwComponent,
    BugattiComponent,
    ChevroletComponent,
    CitroenComponent,
    DodgeComponent,
    FerrariComponent,
    FiatComponent,
    FordComponent,
    GmcComponent,
    HennesseyComponent,
    HyundaiComponent,
    InfinitiComponent,
    JaguarComponent,
    JeepComponent,
    KiaComponent,
    KoenigseggComponent,
    LamborghiniComponent,
    LandRoverComponent,
    LotusComponent,
    LexusComponent,
    MaseratiComponent,
    MclarenComponent,
    MercedesComponent,
    MitsubishiComponent,
    MiniComponent,
    NissanComponent,
    OpelComponent,
    PaganiComponent,
    PolestarComponent,
    PeugeotComponent,
    PorscheComponent,
    RenaultComponent,
    RollsRoyceComponent,
    SeatComponent,
    SkodaComponent,
    SubaruComponent,
    SuzukiComponent,
    TeslaComponent,
    ToyotaComponent,
    VolkswagenComponent,
    VolvoComponent,
    AbarthComponent,
    AcadianComponent,
    AionComponent,
    AiwaysComponent,
    AixamComponent,
    AlpineComponent,
    AlvisComponent,
    AndinoComponent,
    ApolloComponent,
    ArcfoxComponent,
    ArielComponent,
    ArrineraComponent,
    AscariComponent,
    AsparkComponent,
    AsunaComponent,
    AcuraComponent,
    ArashComponent,
    ArtegaComponent,
    AustinComponent,
    AutobianchiComponent,
    BeaumontComponent,
    BitterComponent,
    BollingerComponent,
    BorgwardComponent,
    BydComponent,
    BolwellComponent,
    BristolCarsComponent,
    BuickComponent,
    BytonComponent,
    BrillianceComponent,
    BrabhamComponent,
    ChatenetComponent,
    CodaComponent,
    ContinentalComponent,
    CupraComponent,
    CzingerComponent,
    CadillacComponent,
    CaterhamComponent,
    ChryslerComponent,
    DaewooComponent,
    DaciaComponent,
    DaihatsuComponent,
    DearccComponent,
    DeloreanComponent,
    DenzaComponent,
    DrakoComponent,
    DevelComponent,
    DonkervoortComponent,
    DetomasoComponent,
    DsComponent,
    DatsunComponent,
    EagleComponent,
    EdselComponent,
    ElfinComponent,
    EnvoyComponent,
    EnzmannComponent,
    ElementalComponent,
    FacelVegaComponent,
    FaradayFutureComponent,
    FiskerComponent,
    FsoComponent,
    GeelyComponent,
    GeoComponent,
    GeometryComponent,
    GinettaComponent,
    GoggomobilComponent,
    GregoireComponent,
    HiphiComponent,
    HoldenComponent,
    HycanComponent,
    HavalComponent,
    ImperialComponent,
    ImvComponent,
    IndustriasKaiserArgentinaComponent,
    IsderaComponent,
    IzeraComponent,
    HummerComponent,
    IsuzuComponent,
    JianglingComponent,
    JoMobilComponent,
    K1EngineeringComponent,
    KandiComponent,
    KarmaComponent,
    KeatingComponent,
    KtmComponent,
    LagondaComponent,
    LanciaComponent,
    LarakiComponent,
    LigierComponent,
    LeaheadComponent,
    LeapmotorComponent,
    LiAutoComponent,
    LincolnComponent,
    LordstownComponent,
    LucidComponent,
    LadaComponent,
    MarcosComponent,
    MarussiaComponent,
    MelkusComponent,
    MeteorComponent,
    MaybachComponent,
    MazzantiComponent,
    MercuryComponent,
    MitsuokaComponent,
    MgComponent,
    MoslerComponent,
    MonarchComponent,
    MonteverdiComponent,
    MorganComponent,
    MorrisComponent,
    MtxComponent,
    NetaComponent,
    NioComponent,
    NobleComponent,
    OraComponent,
    OldsmobileComponent,
    PanhardComponent,
    PassportComponent,
    PanozComponent,
    PegasoComponent,
    PiechComponent,
    ProtonComponent,
    PumaComponent,
    PontiacComponent,
    PeroduaComponent,
    PininfarinaComponent,
    PlymouthComponent,
    RamblerComponent,
    RangerComponent,
    RivianComponent,
    RoverComponent,
    RimacComponent,
    RossionComponent,
    RamComponent,
    QiantuComponent,
    QvaleComponent,
    SaehanComponent,
    SaenaraComponent,
    SeresComponent,
    ShelbyComponent,
    ShinjinComponent,
    ShuanghuanComponent,
    SingulatoComponent,
    SinogoldComponent,
    SitechComponent,
    SolComponent,
    SolectriaComponent,
    SrtComponent,
    SscComponent,
    StudebakerComponent,
    SaabComponent,
    SaturnComponent,
    SaicComponent,
    SaleenComponent,
    SmartComponent,
    SpykerComponent,
    SsangYongComponent,
    StatesmanComponent,
    ScionComponent,
    ThinkComponent,
    ToggComponent,
    TuckerComponent,
    TauroSportAutoComponent,
    VectorComponent,
    VegaComponent,
    VinfastComponent,
    TrionComponent,
    TriumphComponent,
    TvrComponent,
    VlfComponent,
    WeltmeisterComponent,
    WiesmannComponent,
    VencerComponent,
    ZenvoComponent,
    ZenosComponent,
    UltimaComponent,
    WMotorsComponent,
    AbarthModelsComponent,
    AbarthHistoryComponent,
    AbarthMuseumComponent,
    AcadianModelsComponent,
    AcadianHistoryComponent,
    AcadianMuseumComponent,
    AcuraModelsComponent,
    AcuraHistoryComponent,
    AcuraMuseumComponent,
    AionModelsComponent,
    AionHistoryComponent,
    AionMuseumComponent,
    AiwaysModelsComponent,
    AiwaysHistoryComponent,
    AiwaysMuseumComponent,
    AixamModelsComponent,
    AixamHistoryComponent,
    AixamMuseumComponent,
    AlfaRomeoModelsComponent,
    AlfaRomeoHistoryComponent,
    AlfaRomeoMuseumComponent,
    AlpineModelsComponent,
    AlpineHistoryComponent,
    AlpineMuseumComponent,
    AlvisModelsComponent,
    AlvisHistoryComponent,
    AlvisMuseumComponent,
    AndinoModelsComponent,
    AndinoHistoryComponent,
    AndinoMuseumComponent,
    ApolloModelsComponent,
    ApolloHistoryComponent,
    ApolloMuseumComponent,
    ArashModelsComponent,
    ArashHistoryComponent,
    ArashMuseumComponent,
    ArcfoxModelsComponent,
    ArcfoxHistoryComponent,
    ArcfoxMuseumComponent,
    ArielModelsComponent,
    ArielHistoryComponent,
    ArielMuseumComponent,
    ArrineraModelsComponent,
    ArrineraHistoryComponent,
    ArrineraMuseumComponent,
    ArtegaModelsComponent,
    ArtegaHistoryComponent,
    ArtegaMuseumComponent,
    AscariModelsComponent,
    AscariHistoryComponent,
    AscariMuseumComponent,
    AsparkModelsComponent,
    AsparkHistoryComponent,
    AsparkMuseumComponent,
    AstonMartinModelsComponent,
    AstonMartinHistoryComponent,
    AstonMartinMuseumComponent,
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
