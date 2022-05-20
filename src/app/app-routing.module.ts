import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
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
import { AbarthComponent } from './brands/abarth/abarth.component';
import { AcadianComponent } from './brands/acadian/acadian.component';
import { AcuraComponent } from './brands/acura/acura.component';
import { AionComponent } from './brands/aion/aion.component';
import { AiwaysComponent } from './brands/aiways/aiways.component';
import { AixamComponent } from './brands/aixam/aixam.component';
import { AlfaRomeoComponent } from './brands/alfa-romeo/alfa-romeo.component';
import { AlpineComponent } from './brands/alpine/alpine.component';
import { AlvisComponent } from './brands/alvis/alvis.component';
import { AndinoComponent } from './brands/andino/andino.component';
import { ApolloComponent } from './brands/apollo/apollo.component';
import { ArashComponent } from './brands/arash/arash.component';
import { ArcfoxComponent } from './brands/arcfox/arcfox.component';
import { ArielComponent } from './brands/ariel/ariel.component';
import { ArrineraComponent } from './brands/arrinera/arrinera.component';
import { AscariComponent } from './brands/ascari/ascari.component';
import { AsparkComponent } from './brands/aspark/aspark.component';
import { AstonMartinComponent } from './brands/aston-martin/aston-martin.component';
import { AsunaComponent } from './brands/asuna/asuna.component';
import { AudiComponent } from './brands/audi/audi.component';
import { AustinComponent } from './brands/austin/austin.component';
import { AutobianchiComponent } from './brands/autobianchi/autobianchi.component';
import { BeaumontComponent } from './brands/beaumont/beaumont.component';
import { BentleyComponent } from './brands/bentley/bentley.component';
import { BitterComponent } from './brands/bitter/bitter.component';
import { BmwComponent } from './brands/bmw/bmw.component';
import { BollingerComponent } from './brands/bollinger/bollinger.component';
import { BolwellComponent } from './brands/bolwell/bolwell.component';
import { BorgwardComponent } from './brands/borgward/borgward.component';
import { BrabhamComponent } from './brands/brabham/brabham.component';
import { BrillianceComponent } from './brands/brilliance/brilliance.component';
import { BristolCarsComponent } from './brands/bristol-cars/bristol-cars.component';
import { BugattiComponent } from './brands/bugatti/bugatti.component';
import { BuickComponent } from './brands/buick/buick.component';
import { BydComponent } from './brands/byd/byd.component';
import { BytonComponent } from './brands/byton/byton.component';
import { CadillacComponent } from './brands/cadillac/cadillac.component';
import { CaterhamComponent } from './brands/caterham/caterham.component';
import { ChatenetComponent } from './brands/chatenet/chatenet.component';
import { ChevroletComponent } from './brands/chevrolet/chevrolet.component';
import { ChryslerComponent } from './brands/chrysler/chrysler.component';
import { CitroenComponent } from './brands/citroen/citroen.component';
import { CodaComponent } from './brands/coda/coda.component';
import { ContinentalComponent } from './brands/continental/continental.component';
import { CupraComponent } from './brands/cupra/cupra.component';
import { CzingerComponent } from './brands/czinger/czinger.component';
import { DaciaComponent } from './brands/dacia/dacia.component';
import { DaewooComponent } from './brands/daewoo/daewoo.component';
import { DaihatsuComponent } from './brands/daihatsu/daihatsu.component';
import { DatsunComponent } from './brands/datsun/datsun.component';
import { DearccComponent } from './brands/dearcc/dearcc.component';
import { DeloreanComponent } from './brands/delorean/delorean.component';
import { DenzaComponent } from './brands/denza/denza.component';
import { DetomasoComponent } from './brands/detomaso/detomaso.component';
import { DevelComponent } from './brands/devel/devel.component';
import { DodgeComponent } from './brands/dodge/dodge.component';
import { DonkervoortComponent } from './brands/donkervoort/donkervoort.component';
import { DrakoComponent } from './brands/drako/drako.component';
import { DsComponent } from './brands/ds/ds.component';
import { EagleComponent } from './brands/eagle/eagle.component';
import { EdselComponent } from './brands/edsel/edsel.component';
import { ElementalComponent } from './brands/elemental/elemental.component';
import { ElfinComponent } from './brands/elfin/elfin.component';
import { EnvoyComponent } from './brands/envoy/envoy.component';
import { EnzmannComponent } from './brands/enzmann/enzmann.component';
import { FacelVegaComponent } from './brands/facel-vega/facel-vega.component';
import { FaradayFutureComponent } from './brands/faraday-future/faraday-future.component';
import { FerrariComponent } from './brands/ferrari/ferrari.component';
import { FiatComponent } from './brands/fiat/fiat.component';
import { FiskerComponent } from './brands/fisker/fisker.component';
import { FordComponent } from './brands/ford/ford.component';
import { FsoComponent } from './brands/fso/fso.component';
import { GeelyComponent } from './brands/geely/geely.component';
import { GeoComponent } from './brands/geo/geo.component';
import { GeometryComponent } from './brands/geometry/geometry.component';
import { GinettaComponent } from './brands/ginetta/ginetta.component';
import { GmcComponent } from './brands/gmc/gmc.component';
import { GoggomobilComponent } from './brands/goggomobil/goggomobil.component';
import { GregoireComponent } from './brands/gregoire/gregoire.component';
import { HavalComponent } from './brands/haval/haval.component';
import { HennesseyComponent } from './brands/hennessey/hennessey.component';
import { HiphiComponent } from './brands/hiphi/hiphi.component';
import { HoldenComponent } from './brands/holden/holden.component';
import { HummerComponent } from './brands/hummer/hummer.component';
import { HycanComponent } from './brands/hycan/hycan.component';
import { HyundaiComponent } from './brands/hyundai/hyundai.component';
import { ImperialComponent } from './brands/imperial/imperial.component';
import { ImvComponent } from './brands/imv/imv.component';
import { IndustriasKaiserArgentinaComponent } from './brands/industrias-kaiser-argentina/industrias-kaiser-argentina.component';
import { InfinitiComponent } from './brands/infiniti/infiniti.component';
import { IsderaComponent } from './brands/isdera/isdera.component';
import { IsuzuComponent } from './brands/isuzu/isuzu.component';
import { IzeraComponent } from './brands/izera/izera.component';
import { JaguarComponent } from './brands/jaguar/jaguar.component';
import { JeepComponent } from './brands/jeep/jeep.component';
import { JianglingComponent } from './brands/jiangling/jiangling.component';
import { JoMobilComponent } from './brands/jo-mobil/jo-mobil.component';
import { K1EngineeringComponent } from './brands/k1-engineering/k1-engineering.component';
import { KandiComponent } from './brands/kandi/kandi.component';
import { KarmaComponent } from './brands/karma/karma.component';
import { KeatingComponent } from './brands/keating/keating.component';
import { KiaComponent } from './brands/kia/kia.component';
import { KoenigseggComponent } from './brands/koenigsegg/koenigsegg.component';
import { KtmComponent } from './brands/ktm/ktm.component';
import { LadaComponent } from './brands/lada/lada.component';
import { LagondaComponent } from './brands/lagonda/lagonda.component';
import { LamborghiniComponent } from './brands/lamborghini/lamborghini.component';
import { LanciaComponent } from './brands/lancia/lancia.component';
import { LandRoverComponent } from './brands/land-rover/land-rover.component';
import { LarakiComponent } from './brands/laraki/laraki.component';
import { LeaheadComponent } from './brands/leahead/leahead.component';
import { LeapmotorComponent } from './brands/leapmotor/leapmotor.component';
import { LexusComponent } from './brands/lexus/lexus.component';
import { LiAutoComponent } from './brands/li-auto/li-auto.component';
import { LigierComponent } from './brands/ligier/ligier.component';
import { LincolnComponent } from './brands/lincoln/lincoln.component';
import { LordstownComponent } from './brands/lordstown/lordstown.component';
import { LotusComponent } from './brands/lotus/lotus.component';
import { LucidComponent } from './brands/lucid/lucid.component';
import { MarcosComponent } from './brands/marcos/marcos.component';
import { MarussiaComponent } from './brands/marussia/marussia.component';
import { MaseratiComponent } from './brands/maserati/maserati.component';
import { MaybachComponent } from './brands/maybach/maybach.component';
import { MazzantiComponent } from './brands/mazzanti/mazzanti.component';
import { MclarenComponent } from './brands/mclaren/mclaren.component';
import { MelkusComponent } from './brands/melkus/melkus.component';
import { MercedesComponent } from './brands/mercedes/mercedes.component';
import { MercuryComponent } from './brands/mercury/mercury.component';
import { MeteorComponent } from './brands/meteor/meteor.component';
import { MgComponent } from './brands/mg/mg.component';
import { MiniComponent } from './brands/mini/mini.component';
import { MitsubishiComponent } from './brands/mitsubishi/mitsubishi.component';
import { MitsuokaComponent } from './brands/mitsuoka/mitsuoka.component';
import { MonarchComponent } from './brands/monarch/monarch.component';
import { MonteverdiComponent } from './brands/monteverdi/monteverdi.component';
import { MorganComponent } from './brands/morgan/morgan.component';
import { MorrisComponent } from './brands/morris/morris.component';
import { MoslerComponent } from './brands/mosler/mosler.component';
import { MtxComponent } from './brands/mtx/mtx.component';
import { NetaComponent } from './brands/neta/neta.component';
import { NioComponent } from './brands/nio/nio.component';
import { NissanComponent } from './brands/nissan/nissan.component';
import { NobleComponent } from './brands/noble/noble.component';
import { OldsmobileComponent } from './brands/oldsmobile/oldsmobile.component';
import { OpelComponent } from './brands/opel/opel.component';
import { OraComponent } from './brands/ora/ora.component';
import { PaganiComponent } from './brands/pagani/pagani.component';
import { PanhardComponent } from './brands/panhard/panhard.component';
import { PanozComponent } from './brands/panoz/panoz.component';
import { PassportComponent } from './brands/passport/passport.component';
import { PegasoComponent } from './brands/pegaso/pegaso.component';
import { PeroduaComponent } from './brands/perodua/perodua.component';
import { PeugeotComponent } from './brands/peugeot/peugeot.component';
import { PiechComponent } from './brands/piech/piech.component';
import { PininfarinaComponent } from './brands/pininfarina/pininfarina.component';
import { PlymouthComponent } from './brands/plymouth/plymouth.component';
import { PolestarComponent } from './brands/polestar/polestar.component';
import { PontiacComponent } from './brands/pontiac/pontiac.component';
import { PorscheComponent } from './brands/porsche/porsche.component';
import { ProtonComponent } from './brands/proton/proton.component';
import { PumaComponent } from './brands/puma/puma.component';
import { QiantuComponent } from './brands/qiantu/qiantu.component';
import { QvaleComponent } from './brands/qvale/qvale.component';
import { RamComponent } from './brands/ram/ram.component';
import { RamblerComponent } from './brands/rambler/rambler.component';
import { RangerComponent } from './brands/ranger/ranger.component';
import { RenaultComponent } from './brands/renault/renault.component';
import { RimacComponent } from './brands/rimac/rimac.component';
import { RivianComponent } from './brands/rivian/rivian.component';
import { RollsRoyceComponent } from './brands/rolls-royce/rolls-royce.component';
import { RossionComponent } from './brands/rossion/rossion.component';
import { RoverComponent } from './brands/rover/rover.component';
import { SaabComponent } from './brands/saab/saab.component';
import { SaehanComponent } from './brands/saehan/saehan.component';
import { SaenaraComponent } from './brands/saenara/saenara.component';
import { SaicComponent } from './brands/saic/saic.component';
import { SaleenComponent } from './brands/saleen/saleen.component';
import { SaturnComponent } from './brands/saturn/saturn.component';
import { ScionComponent } from './brands/scion/scion.component';
import { SeatComponent } from './brands/seat/seat.component';
import { SeresComponent } from './brands/seres/seres.component';
import { ShelbyComponent } from './brands/shelby/shelby.component';
import { ShinjinComponent } from './brands/shinjin/shinjin.component';
import { ShuanghuanComponent } from './brands/shuanghuan/shuanghuan.component';
import { SingulatoComponent } from './brands/singulato/singulato.component';
import { SinogoldComponent } from './brands/sinogold/sinogold.component';
import { SitechComponent } from './brands/sitech/sitech.component';
import { SkodaComponent } from './brands/skoda/skoda.component';
import { SmartComponent } from './brands/smart/smart.component';
import { SolComponent } from './brands/sol/sol.component';
import { SolectriaComponent } from './brands/solectria/solectria.component';
import { SpykerComponent } from './brands/spyker/spyker.component';
import { SrtComponent } from './brands/srt/srt.component';
import { SsangYongComponent } from './brands/ssang-yong/ssang-yong.component';
import { SscComponent } from './brands/ssc/ssc.component';
import { StatesmanComponent } from './brands/statesman/statesman.component';
import { StudebakerComponent } from './brands/studebaker/studebaker.component';
import { SubaruComponent } from './brands/subaru/subaru.component';
import { SuzukiComponent } from './brands/suzuki/suzuki.component';
import { TauroSportAutoComponent } from './brands/tauro-sport-auto/tauro-sport-auto.component';
import { TeslaComponent } from './brands/tesla/tesla.component';
import { ThinkComponent } from './brands/think/think.component';
import { ToggComponent } from './brands/togg/togg.component';
import { ToyotaComponent } from './brands/toyota/toyota.component';
import { TrionComponent } from './brands/trion/trion.component';
import { TriumphComponent } from './brands/triumph/triumph.component';
import { TuckerComponent } from './brands/tucker/tucker.component';
import { TvrComponent } from './brands/tvr/tvr.component';
import { UltimaComponent } from './brands/ultima/ultima.component';
import { VectorComponent } from './brands/vector/vector.component';
import { VegaComponent } from './brands/vega/vega.component';
import { VencerComponent } from './brands/vencer/vencer.component';
import { VinfastComponent } from './brands/vinfast/vinfast.component';
import { VlfComponent } from './brands/vlf/vlf.component';
import { VolkswagenComponent } from './brands/volkswagen/volkswagen.component';
import { VolvoComponent } from './brands/volvo/volvo.component';
import { WMotorsComponent } from './brands/w-motors/w-motors.component';
import { WeltmeisterComponent } from './brands/weltmeister/weltmeister.component';
import { WiesmannComponent } from './brands/wiesmann/wiesmann.component';
import { ZenosComponent } from './brands/zenos/zenos.component';
import { ZenvoComponent } from './brands/zenvo/zenvo.component';

const routes: Routes = [
      { path: '', component: MainComponent },
      {
        path: 'brands', component: BrandsComponent
      },
      {
        path: 'brands/abarth', component: AbarthComponent
      },
      {
        path: 'brands/acadian', component: AcadianComponent
      },
      {
        path: 'brands/acura', component: AcuraComponent
      },
      {
        path: 'brands/aion', component: AionComponent
      },
      {
        path: 'brands/aiways', component: AiwaysComponent
      },
      {
        path: 'brands/aixam', component: AixamComponent
      },
      {
        path: 'brands/alfa-romeo', component: AlfaRomeoComponent
      },
      {
        path: 'brands/alpine', component: AlpineComponent
      },
      {
        path: 'brands/alvis', component: AlvisComponent
      },
      {
        path: 'brands/andino', component: AndinoComponent
      },
      {
        path: 'brands/apollo', component: ApolloComponent
      },
      {
        path: 'brands/arash', component: ArashComponent
      },
      {
        path: 'brands/arcfox', component: ArcfoxComponent
      },
      {
        path: 'brands/ariel', component: ArielComponent
      },
      {
        path: 'brands/arrinera', component: ArrineraComponent
      },
      {
        path: 'brands/artega', component: ArrineraComponent
      },
      {
        path: 'brands/ascari', component: AscariComponent
      },
      {
        path: 'brands/aspark', component: AsparkComponent
      },
      {
        path: 'brands/aston-martin', component: AstonMartinComponent
      },
      {
        path: 'brands/asuna', component: AsunaComponent
      },
      {
        path: 'brands/audi', component: AudiComponent
      },
      {
        path: 'brands/austin', component: AustinComponent
      },
      {
        path: 'brands/autobianchi', component: AutobianchiComponent
      },
      {
        path: 'brands/beaumont', component: BeaumontComponent
      },
      {
        path: 'brands/bentley', component: BentleyComponent
      },
      {
        path: 'brands/bitter', component: BitterComponent
      },
      {
        path: 'brands/bmw', component: BmwComponent
      },
      {
        path: 'brands/bollinger', component: BollingerComponent
      },
      {
        path: 'brands/bolwell', component: BolwellComponent
      },
      {
        path: 'brands/borgward', component: BorgwardComponent
      },
      {
        path: 'brands/brabham', component: BrabhamComponent
      },
      {
        path: 'brands/brilliance', component: BrillianceComponent
      },
      {
        path: 'brands/bristol-cars', component: BristolCarsComponent
      },
      {
        path: 'brands/bugatti', component: BugattiComponent
      },
      {
        path: 'brands/buick', component: BuickComponent
      },
      {
        path: 'brands/byd', component: BydComponent
      },
      {
        path: 'brands/byton', component: BytonComponent
      },
      {
        path: 'brands/cadillac', component: CadillacComponent
      },
      {
        path: 'brands/caterham', component: CaterhamComponent
      },
      {
        path: 'brands/chatenet', component: ChatenetComponent
      },
      {
        path: 'brands/chevrolet', component: ChevroletComponent
      },
      {
        path: 'brands/chrysler', component: ChryslerComponent
      },
      {
        path: 'brands/citroen', component: CitroenComponent
      },
      {
        path: 'brands/coda', component: CodaComponent
      },
      {
        path: 'brands/continental', component: ContinentalComponent
      },
      {
        path: 'brands/cupra', component: CupraComponent
      },
      {
        path: 'brands/czinger', component: CzingerComponent
      },
      {
        path: 'brands/dacia', component: DaciaComponent
      },
      {
        path: 'brands/daewoo', component: DaewooComponent
      },
      {
        path: 'brands/daihatsu', component: DaihatsuComponent
      },
      {
        path: 'brands/datsun', component: DatsunComponent
      },
      {
        path: 'brands/dearcc', component: DearccComponent
      },
      {
        path: 'brands/delorean', component: DeloreanComponent
      },
      {
        path: 'brands/denza', component: DenzaComponent
      },
      {
        path: 'brands/detomaso', component: DetomasoComponent
      },
      {
        path: 'brands/devel', component: DevelComponent
      },
      {
        path: 'brands/dodge', component: DodgeComponent
      },
      {
        path: 'brands/donkervoort', component: DonkervoortComponent
      },
      {
        path: 'brands/drako', component: DrakoComponent
      },
      {
        path: 'brands/ds', component: DsComponent
      },
      {
        path: 'brands/eagle', component: EagleComponent
      },
      {
        path: 'brands/edsel', component: EdselComponent
      },
      {
        path: 'brands/elemental', component: ElementalComponent
      },
      {
        path: 'brands/elfin', component: ElfinComponent
      },
      {
        path: 'brands/envoy', component: EnvoyComponent
      },
      {
        path: 'brands/enzmann', component: EnzmannComponent
      },
      {
        path: 'brands/facel-vega', component: FacelVegaComponent
      },
      {
        path: 'brands/faraday-future', component: FaradayFutureComponent
      },
      {
        path: 'brands/ferrari', component: FerrariComponent
      },
      {
        path: 'brands/fiat', component: FiatComponent
      },
      {
        path: 'brands/fisker', component: FiskerComponent
      },
      {
        path: 'brands/ford', component: FordComponent
      },
      {
        path: 'brands/fso', component: FsoComponent
      },
      {
        path: 'brands/geely', component: GeelyComponent
      },
      {
        path: 'brands/geo', component: GeoComponent
      },
      {
        path: 'brands/geometry', component: GeometryComponent
      },
      {
        path: 'brands/ginetta', component: GinettaComponent
      },
      {
        path: 'brands/gmc', component: GmcComponent
      },
      {
        path: 'brands/goggomobil', component: GoggomobilComponent
      },
      {
        path: 'brands/gregoire', component: GregoireComponent
      },
      {
        path: 'brands/haval', component: HavalComponent
      },
      {
        path: 'brands/hennessey', component: HennesseyComponent
      },
      {
        path: 'brands/hiphi', component: HiphiComponent
      },
      {
        path: 'brands/holden', component: HoldenComponent
      },
      {
        path: 'brands/hummer', component: HummerComponent
      },
      {
        path: 'brands/hycan', component: HycanComponent
      },
      {
        path: 'brands/hyundai', component: HyundaiComponent
      },
      {
        path: 'brands/imperial', component: ImperialComponent
      },
      {
        path: 'brands/imv', component: ImvComponent
      },
      {
        path: 'brands/industrias-kaiser-argentina', component: IndustriasKaiserArgentinaComponent
      },
      {
        path: 'brands/infiniti', component: InfinitiComponent
      },
      {
        path: 'brands/isdera', component: IsderaComponent
      },
      {
        path: 'brands/isuzu', component: IsuzuComponent
      },
      {
        path: 'brands/izera', component: IzeraComponent
      },
      {
        path: 'brands/jaguar', component: JaguarComponent
      },
      {
        path: 'brands/jeep', component: JeepComponent
      },
      {
        path: 'brands/jiangling', component: JianglingComponent
      },
      {
        path: 'brands/jo-mobil', component: JoMobilComponent
      },
      {
        path: 'brands/k1-engineering', component: K1EngineeringComponent
      },
      {
        path: 'brands/kandi', component: KandiComponent
      },
      {
        path: 'brands/karma', component: KarmaComponent
      },
      {
        path: 'brands/keating', component: KeatingComponent
      },
      {
        path: 'brands/kia', component: KiaComponent
      },
      {
        path: 'brands/koenigsegg', component: KoenigseggComponent
      },
      {
        path: 'brands/ktm', component: KtmComponent
      },
      {
        path: 'brands/lada', component: LadaComponent
      },
      {
        path: 'brands/lagonda', component: LagondaComponent
      },
      {
        path: 'brands/lamborghini', component: LamborghiniComponent
      },
      {
        path: 'brands/lancia', component: LanciaComponent
      },
      {
        path: 'brands/land-rover', component: LandRoverComponent
      },
      {
        path: 'brands/laraki', component: LarakiComponent
      },
      {
        path: 'brands/leahead', component: LeaheadComponent
      },
      {
        path: 'brands/leapmotor', component: LeapmotorComponent
      },
      {
        path: 'brands/lexus', component: LexusComponent
      },
      {
        path: 'brands/li-auto', component: LiAutoComponent
      },
      {
        path: 'brands/ligier', component: LigierComponent
      },
      {
        path: 'brands/lincoln', component: LincolnComponent
      },
      {
        path: 'brands/lordstown', component: LordstownComponent
      },
      {
        path: 'brands/lotus', component: LotusComponent
      },
      {
        path: 'brands/lucid', component: LucidComponent
      },
      {
        path: 'brands/marcos', component: MarcosComponent
      },
      {
        path: 'brands/marussia', component: MarussiaComponent
      },
      {
        path: 'brands/maserati', component: MaseratiComponent
      },
      {
        path: 'brands/maybach', component: MaybachComponent
      },
      {
        path: 'brands/mazzanti', component: MazzantiComponent
      },
      {
        path: 'brands/mclaren', component: MclarenComponent
      },
      {
        path: 'brands/melkus', component: MelkusComponent
      },
      {
        path: 'brands/mercedes', component: MercedesComponent
      },
      {
        path: 'brands/mercury', component: MercuryComponent
      },
      {
        path: 'brands/meteor', component: MeteorComponent
      },
      {
        path: 'brands/mg', component: MgComponent
      },
      {
        path: 'brands/mini', component: MiniComponent
      },
      {
        path: 'brands/mitsubishi', component: MitsubishiComponent
      },
      {
        path: 'brands/mitsuoka', component: MitsuokaComponent
      },
      {
        path: 'brands/monarch', component: MonarchComponent
      },
      {
        path: 'brands/monteverdi', component: MonteverdiComponent
      },
      {
        path: 'brands/morgan', component: MorganComponent
      },
      {
        path: 'brands/morris', component: MorrisComponent
      },
      {
        path: 'brands/mosler', component: MoslerComponent
      },
      {
        path: 'brands/mtx', component: MtxComponent
      },
      {
        path: 'brands/neta', component: NetaComponent
      },
      {
        path: 'brands/nio', component: NioComponent
      },
      {
        path: 'brands/nissan', component: NissanComponent
      },
      {
        path: 'brands/noble', component: NobleComponent
      },
      {
        path: 'brands/oldsmobile', component: OldsmobileComponent
      },
      {
        path: 'brands/opel', component: OpelComponent
      },
      {
        path: 'brands/ora', component: OraComponent
      },
      {
        path: 'brands/pagani', component: PaganiComponent
      },
      {
        path: 'brands/panhard', component: PanhardComponent
      },
      {
        path: 'brands/panoz', component: PanozComponent
      },
      {
        path: 'brands/passport', component: PassportComponent
      },
      {
        path: 'brands/pegaso', component: PegasoComponent
      },
      {
        path: 'brands/perodua', component: PeroduaComponent
      },
      {
        path: 'brands/peugeot', component: PeugeotComponent
      },
      {
        path: 'brands/piech', component: PiechComponent
      },
      {
        path: 'brands/pininfarina', component: PininfarinaComponent
      },
      {
        path: 'brands/plymouth', component: PlymouthComponent
      },
      {
        path: 'brands/polestar', component: PolestarComponent
      },
      {
        path: 'brands/pontiac', component: PontiacComponent
      },
      {
        path: 'brands/porsche', component: PorscheComponent
      },
      {
        path: 'brands/proton', component: ProtonComponent
      },
      {
        path: 'brands/puma', component: PumaComponent
      },
      {
        path: 'brands/qiantu', component: QiantuComponent
      },
      {
        path: 'brands/qvale', component: QvaleComponent
      },
      {
        path: 'brands/ram', component: RamComponent
      },
      {
        path: 'brands/rambler', component: RamblerComponent
      },
      {
        path: 'brands/ranger', component: RangerComponent
      },
      {
        path: 'brands/renault', component: RenaultComponent
      },
      {
        path: 'brands/rimac', component: RimacComponent
      },
      {
        path: 'brands/rivian', component: RivianComponent
      },
      {
        path: 'brands/rolls-royce', component: RollsRoyceComponent
      },
      {
        path: 'brands/rossion', component: RossionComponent
      },
      {
        path: 'brands/rover', component: RoverComponent
      },
      {
        path: 'brands/saab', component: SaabComponent
      },
      {
        path: 'brands/saehan', component: SaehanComponent
      },
      {
        path: 'brands/saenara', component: SaenaraComponent
      },
      {
        path: 'brands/saic', component: SaicComponent
      },
      {
        path: 'brands/saleen', component: SaleenComponent
      },
      {
        path: 'brands/saturn', component: SaturnComponent
      },
      {
        path: 'brands/scion', component: ScionComponent
      },
      {
        path: 'brands/seat', component: SeatComponent
      },
      {
        path: 'brands/seres', component: SeresComponent
      },
      {
        path: 'brands/shelby', component: ShelbyComponent
      },
      {
        path: 'brands/shinjin', component: ShinjinComponent
      },
      {
        path: 'brands/shuanghuan', component: ShuanghuanComponent
      },
      {
        path: 'brands/singulato', component: SingulatoComponent
      },
      {
        path: 'brands/sinogold', component: SinogoldComponent
      },
      {
        path: 'brands/sitech', component: SitechComponent
      },
      {
        path: 'brands/skoda', component: SkodaComponent
      },
      {
        path: 'brands/smart', component: SmartComponent
      },
      {
        path: 'brands/sol', component: SolComponent
      },
      {
        path: 'brands/solectria', component: SolectriaComponent
      },
      {
        path: 'brands/spyker', component: SpykerComponent
      },
      {
        path: 'brands/srt', component: SrtComponent
      },
      {
        path: 'brands/ssangy-yong', component: SsangYongComponent
      },
      {
        path: 'brands/ssc', component: SscComponent
      },
      {
        path: 'brands/statesman', component: StatesmanComponent
      },
      {
        path: 'brands/studebaker', component: StudebakerComponent
      },
      {
        path: 'brands/subaru', component: SubaruComponent
      },
      {
        path: 'brands/suzuki', component: SuzukiComponent
      },
      {
        path: 'brands/tauro-sport-auto', component: TauroSportAutoComponent
      },
      {
        path: 'brands/tesla', component: TeslaComponent
      },
      {
        path: 'brands/think', component: ThinkComponent
      },
      {
        path: 'brands/togg', component: ToggComponent
      },
      {
        path: 'brands/toyota', component: ToyotaComponent
      },
      {
        path: 'brands/trion', component: TrionComponent
      },
      {
        path: 'brands/triumph', component: TriumphComponent
      },
      {
        path: 'brands/tucker', component: TuckerComponent
      },
      {
        path: 'brands/tvr', component: TvrComponent
      },
      {
        path: 'brands/ultima', component: UltimaComponent
      },
      {
        path: 'brands/vector', component: VectorComponent
      },
      {
        path: 'brands/vega', component: VegaComponent
      },
      {
        path: 'brands/vencer', component: VencerComponent
      },
      {
        path: 'brands/vinfast', component: VinfastComponent
      },
      {
        path: 'brands/vlf', component: VlfComponent
      },
      {
        path: 'brands/volkswagen', component: VolkswagenComponent
      },
      {
        path: 'brands/volvo', component: VolvoComponent
      },
      {
        path: 'brands/w-motors', component: WMotorsComponent
      },
      {
        path: 'brands/weltmeister', component: WeltmeisterComponent
      },
      {
        path: 'brands/wiesmann', component: WiesmannComponent
      },
      {
        path: 'brands/zenos', component: ZenosComponent
      },
      {
        path: 'brands/zenvo', component: ZenvoComponent
      },





      { path: 'countries', component: CountriesComponent },
      {
        path: 'countries/argentina', component: ArgentinaComponent
      },
      {
        path: 'countries/australia', component: AustraliaComponent
      },
      {
        path: 'countries/austria', component: AustriaComponent
      },
      {
        path: 'countries/brazil', component: BrazilComponent
      },
      {
        path: 'countries/canada', component: CanadaComponent
      },
      {
        path: 'countries/china', component: ChinaComponent
      },
      {
        path: 'countries/croatia', component: CroatiaComponent
      },
      {
        path: 'countries/czech_republic', component: CzechRepublicComponent
      },
      {
        path: 'countries/denmark', component: DenmarkComponent
      },
      {
        path: 'countries/france', component: FranceComponent
      },
      {
        path: 'countries/germany', component: GermanyComponent
      },
      {
        path: 'countries/great_britain', component: GreatBritainComponent
      },
      {
        path: 'countries/italy', component: ItalyComponent
      },
      {
        path: 'countries/japan', component: JapanComponent
      },
      {
        path: 'countries/malaysia', component: MalaysiaComponent
      },
      {
        path: 'countries/morocco', component: MoroccoComponent
      },
      {
        path: 'countries/netherlands', component: NetherlandsComponent
      },
      {
        path: 'countries/norway', component: NorwayComponent
      },
      {
        path: 'countries/poland', component: PolandComponent
      },
      {
        path: 'countries/romania', component: RomaniaComponent
      },
      {
        path: 'countries/russia', component: RussiaComponent
      },
      {
        path: 'countries/slovakia', component: SlovakiaComponent
      },
      {
        path: 'countries/slovenia', component: SloveniaComponent
      },
      {
        path: 'countries/south_africa', component: SouthAfricaComponent
      },
      {
        path: 'countries/south_korea', component: SouthKoreaComponent
      },
      {
        path: 'countries/spain', component: SpainComponent
      },
      {
        path: 'countries/sri_lanka', component: SriLankaComponent
      },
      {
        path: 'countries/sweden', component: SwedenComponent
      },
      {
        path: 'countries/switzerland', component: SwitzerlandComponent
      },
      {
        path: 'countries/turkey', component: TurkeyComponent
      },
      {
        path: 'countries/usa', component: UsaComponent
      },
      {
        path: 'countries/uae', component: UaeComponent
      },
      {
        path: 'countries/vietnam', component: VietnamComponent
      },




  { path: 'years', component: YearsComponent },
    {
      path: 'years/1900', component: NineteenComponent
    },
    {
      path: 'years/1910', component: NineteenTenComponent
    },
    {
      path: 'years/1920', component: NineteenTwentyComponent
    },
    {
      path: 'years/1930', component: NineteenThirtyComponent
    },
    {
      path: 'years/1940', component: NineteenFourtyComponent
    },
    {
      path: 'years/1950', component: NineteenFiftyComponent
    },
    {
      path: 'years/1960', component: NineteenSixtyComponent
    },
    {
      path: 'years/1970', component: NineteenSeventyComponent
    },
    {
      path: 'years/1980', component: NineteenEightyComponent
    },
    {
      path: 'years/1990', component: NineteenNinetyComponent
    },
    {
      path: 'years/2000', component: TwentyComponent
    },
    {
      path: 'years/2010', component: TwentyTenComponent
    },
    {
      path: 'years/2020', component: TwentyTwentyComponent
    },


    { path: 'languages', component: LanguagesComponent },
    {
      path: 'languages/english', component: EnglishComponent
    },
    {
      path: 'languages/german', component: GermanComponent
    },
    {
      path: 'languages/italian', component: ItalianComponent
    },
    {
      path: 'languages/spanish', component: SpanishComponent
    },
    {
      path: 'languages/hungarian', component: HungarianComponent
    },
    {
      path: 'languages/dutch', component: DutchComponent
    },
    {
      path: 'languages/slovak', component: SlovakComponent
    },
    {
      path: 'languages/czech', component: CzechComponent
    },
    {
      path: 'languages/portuguese', component: PortugueseComponent
    },
    {
      path: 'languages/croatian', component: CroatianComponent
    },
    {
      path: 'languages/polish', component: PolishComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
