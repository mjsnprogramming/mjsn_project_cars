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
  { path: 'brands', component: BrandsComponent, children: [
      {
        path: 'abarth', component: AbarthComponent
      },
      {
        path: 'acadian', component: AcadianComponent
      },
      {
        path: 'acura', component: AcuraComponent
      },
      {
        path: 'aion', component: AionComponent
      },
      {
        path: 'aiways', component: AiwaysComponent
      },
      {
        path: 'aixam', component: AixamComponent
      },
      {
        path: 'alfa-romeo', component: AlfaRomeoComponent
      },
      {
        path: 'alpine', component: AlpineComponent
      },
      {
        path: 'alvis', component: AlvisComponent
      },
      {
        path: 'andino', component: AndinoComponent
      },
      {
        path: 'apollo', component: ApolloComponent
      },
      {
        path: 'arash', component: ArashComponent
      },
      {
        path: 'arcfox', component: ArcfoxComponent
      },
      {
        path: 'ariel', component: ArielComponent
      },
      {
        path: 'arrinera', component: ArrineraComponent
      },
      {
        path: 'artega', component: ArrineraComponent
      },
      {
        path: 'ascari', component: AscariComponent
      },
      {
        path: 'aspark', component: AsparkComponent
      },
      {
        path: 'aston-martin', component: AstonMartinComponent
      },
      {
        path: 'asuna', component: AsunaComponent
      },
      {
        path: 'audi', component: AudiComponent
      },
      {
        path: 'austin', component: AustinComponent
      },
      {
        path: 'autobianchi', component: AutobianchiComponent
      },
      {
        path: 'beaumont', component: BeaumontComponent
      },
      {
        path: 'bentley', component: BentleyComponent
      },
      {
        path: 'bitter', component: BitterComponent
      },
      {
        path: 'bmw', component: BmwComponent
      },
      {
        path: 'bollinger', component: BollingerComponent
      },
      {
        path: 'bolwell', component: BolwellComponent
      },
      {
        path: 'borgward', component: BorgwardComponent
      },
      {
        path: 'brabham', component: BrabhamComponent
      },
      {
        path: 'brilliance', component: BrillianceComponent
      },
      {
        path: 'bristol-cars', component: BristolCarsComponent
      },
      {
        path: 'bugatti', component: BugattiComponent
      },
      {
        path: 'buick', component: BuickComponent
      },
      {
        path: 'byd', component: BydComponent
      },
      {
        path: 'byton', component: BytonComponent
      },
      {
        path: 'cadillac', component: CadillacComponent
      },
      {
        path: 'caterham', component: CaterhamComponent
      },
      {
        path: 'chatenet', component: ChatenetComponent
      },
      {
        path: 'chevrolet', component: ChevroletComponent
      },
      {
        path: 'chrysler', component: ChryslerComponent
      },
      {
        path: 'citroen', component: CitroenComponent
      },
      {
        path: 'coda', component: CodaComponent
      },
      {
        path: 'continental', component: ContinentalComponent
      },
      {
        path: 'cupra', component: CupraComponent
      },
      {
        path: 'czinger', component: CzingerComponent
      },
      {
        path: 'dacia', component: DaciaComponent
      },
      {
        path: 'daewoo', component: DaewooComponent
      },
      {
        path: 'daihatsu', component: DaihatsuComponent
      },
      {
        path: 'datsun', component: DatsunComponent
      },
      {
        path: 'dearcc', component: DearccComponent
      },
      {
        path: 'delorean', component: DeloreanComponent
      },
      {
        path: 'denza', component: DenzaComponent
      },
      {
        path: 'detomaso', component: DetomasoComponent
      },
      {
        path: 'devel', component: DevelComponent
      },
      {
        path: 'dodge', component: DodgeComponent
      },
      {
        path: 'donkervoort', component: DonkervoortComponent
      },
      {
        path: 'drako', component: DrakoComponent
      },
      {
        path: 'ds', component: DsComponent
      },
      {
        path: 'eagle', component: EagleComponent
      },
      {
        path: 'edsel', component: EdselComponent
      },
      {
        path: 'elemental', component: ElementalComponent
      },
      {
        path: 'elfin', component: ElfinComponent
      },
      {
        path: 'envoy', component: EnvoyComponent
      },
      {
        path: 'enzmann', component: EnzmannComponent
      },
      {
        path: 'facel-vega', component: FacelVegaComponent
      },
      {
        path: 'faraday-future', component: FaradayFutureComponent
      },
      {
        path: 'ferrari', component: FerrariComponent
      },
      {
        path: 'fiat', component: FiatComponent
      },
      {
        path: 'fisker', component: FiskerComponent
      },
      {
        path: 'ford', component: FordComponent
      },
      {
        path: 'fso', component: FsoComponent
      },
      {
        path: 'geely', component: GeelyComponent
      },
      {
        path: 'geo', component: GeoComponent
      },
      {
        path: 'geometry', component: GeometryComponent
      },
      {
        path: 'ginetta', component: GinettaComponent
      },
      {
        path: 'gmc', component: GmcComponent
      },
      {
        path: 'goggomobil', component: GoggomobilComponent
      },
      {
        path: 'gregoire', component: GregoireComponent
      },
      {
        path: 'haval', component: HavalComponent
      },
      {
        path: 'hennessey', component: HennesseyComponent
      },
      {
        path: 'hiphi', component: HiphiComponent
      },
      {
        path: 'holden', component: HoldenComponent
      },
      {
        path: 'hummer', component: HummerComponent
      },
      {
        path: 'hycan', component: HycanComponent
      },
      {
        path: 'hyundai', component: HyundaiComponent
      },
      {
        path: 'imperial', component: ImperialComponent
      },
      {
        path: 'imv', component: ImvComponent
      },
      {
        path: 'industrias-kaiser-argentina', component: IndustriasKaiserArgentinaComponent
      },
      {
        path: 'infiniti', component: InfinitiComponent
      },
      {
        path: 'isdera', component: IsderaComponent
      },
      {
        path: 'isuzu', component: IsuzuComponent
      },
      {
        path: 'izera', component: IzeraComponent
      },
      {
        path: 'jaguar', component: JaguarComponent
      },
      {
        path: 'jeep', component: JeepComponent
      },
      {
        path: 'jiangling', component: JianglingComponent
      },
      {
        path: 'jo-mobil', component: JoMobilComponent
      },
      {
        path: 'k1-engineering', component: K1EngineeringComponent
      },
      {
        path: 'kandi', component: KandiComponent
      },
      {
        path: 'karma', component: KarmaComponent
      },
      {
        path: 'keating', component: KeatingComponent
      },
      {
        path: 'kia', component: KiaComponent
      },
      {
        path: 'koenigsegg', component: KoenigseggComponent
      },
      {
        path: 'ktm', component: KtmComponent
      },
      {
        path: 'lada', component: LadaComponent
      },
      {
        path: 'lagonda', component: LagondaComponent
      },
      {
        path: 'lamborghini', component: LamborghiniComponent
      },
      {
        path: 'lancia', component: LanciaComponent
      },
      {
        path: 'land-rover', component: LandRoverComponent
      },
      {
        path: 'laraki', component: LarakiComponent
      },
      {
        path: 'leahead', component: LeaheadComponent
      },
      {
        path: 'leapmotor', component: LeapmotorComponent
      },
      {
        path: 'lexus', component: LexusComponent
      },
      {
        path: 'li-auto', component: LiAutoComponent
      },
      {
        path: 'ligier', component: LigierComponent
      },
      {
        path: 'lincoln', component: LincolnComponent
      },
      {
        path: 'lordstown', component: LordstownComponent
      },
      {
        path: 'lotus', component: LotusComponent
      },
      {
        path: 'lucid', component: LucidComponent
      },
      {
        path: 'marcos', component: MarcosComponent
      },
      {
        path: 'marussia', component: MarussiaComponent
      },
      {
        path: 'maserati', component: MaseratiComponent
      },
      {
        path: 'maybach', component: MaybachComponent
      },
      {
        path: 'mazzanti', component: MazzantiComponent
      },
      {
        path: 'mclaren', component: MclarenComponent
      },
      {
        path: 'melkus', component: MelkusComponent
      },
      {
        path: 'mercedes', component: MercedesComponent
      },
      {
        path: 'mercury', component: MercuryComponent
      },
      {
        path: 'meteor', component: MeteorComponent
      },
      {
        path: 'mg', component: MgComponent
      },
      {
        path: 'mini', component: MiniComponent
      },
      {
        path: 'mitsubishi', component: MitsubishiComponent
      },
      {
        path: 'mitsuoka', component: MitsuokaComponent
      },
      {
        path: 'monarch', component: MonarchComponent
      },
      {
        path: 'monteverdi', component: MonteverdiComponent
      },
      {
        path: 'morgan', component: MorganComponent
      },
      {
        path: 'morris', component: MorrisComponent
      },
      {
        path: 'mosler', component: MoslerComponent
      },
      {
        path: 'mtx', component: MtxComponent
      },
      {
        path: 'neta', component: NetaComponent
      },
      {
        path: 'nio', component: NioComponent
      },
      {
        path: 'nissan', component: NissanComponent
      },
      {
        path: 'noble', component: NobleComponent
      },
      {
        path: 'oldsmobile', component: OldsmobileComponent
      },
      {
        path: 'opel', component: OpelComponent
      },
      {
        path: 'ora', component: OraComponent
      },
      {
        path: 'pagani', component: PaganiComponent
      },
      {
        path: 'panhard', component: PanhardComponent
      },
      {
        path: 'panoz', component: PanozComponent
      },
      {
        path: 'passport', component: PassportComponent
      },
      {
        path: 'pegaso', component: PegasoComponent
      },
      {
        path: 'perodua', component: PeroduaComponent
      },
      {
        path: 'peugeot', component: PeugeotComponent
      },
      {
        path: 'piech', component: PiechComponent
      },
      {
        path: 'pininfarina', component: PininfarinaComponent
      },
      {
        path: 'plymouth', component: PlymouthComponent
      },
      {
        path: 'polestar', component: PolestarComponent
      },
      {
        path: 'pontiac', component: PontiacComponent
      },
      {
        path: 'porsche', component: PorscheComponent
      },
      {
        path: 'proton', component: ProtonComponent
      },
      {
        path: 'puma', component: PumaComponent
      },
      {
        path: 'qiantu', component: QiantuComponent
      },
      {
        path: 'qvale', component: QvaleComponent
      },
      {
        path: 'ram', component: RamComponent
      },
      {
        path: 'rambler', component: RamblerComponent
      },
      {
        path: 'ranger', component: RangerComponent
      },
      {
        path: 'renault', component: RenaultComponent
      },
      {
        path: 'rimac', component: RimacComponent
      },
      {
        path: 'rivian', component: RivianComponent
      },
      {
        path: 'rolls-royce', component: RollsRoyceComponent
      },
      {
        path: 'rossion', component: RossionComponent
      },
      {
        path: 'rover', component: RoverComponent
      },
      {
        path: 'saab', component: SaabComponent
      },
      {
        path: 'saehan', component: SaehanComponent
      },
      {
        path: 'saenara', component: SaenaraComponent
      },
      {
        path: 'saic', component: SaicComponent
      },
      {
        path: 'saleen', component: SaleenComponent
      },
      {
        path: 'saturn', component: SaturnComponent
      },
      {
        path: 'scion', component: ScionComponent
      },
      {
        path: 'seat', component: SeatComponent
      },
      {
        path: 'seres', component: SeresComponent
      },
      {
        path: 'shelby', component: ShelbyComponent
      },
      {
        path: 'shinjin', component: ShinjinComponent
      },
      {
        path: 'shuanghuan', component: ShuanghuanComponent
      },
      {
        path: 'singulato', component: SingulatoComponent
      },
      {
        path: 'sinogold', component: SinogoldComponent
      },
      {
        path: 'sitech', component: SitechComponent
      },
      {
        path: 'skoda', component: SkodaComponent
      },
      {
        path: 'smart', component: SmartComponent
      },
      {
        path: 'sol', component: SolComponent
      },
      {
        path: 'solectria', component: SolectriaComponent
      },
      {
        path: 'spyker', component: SpykerComponent
      },
      {
        path: 'srt', component: SrtComponent
      },
      {
        path: 'ssangy-yong', component: SsangYongComponent
      },
      {
        path: 'ssc', component: SscComponent
      },
      {
        path: 'statesman', component: StatesmanComponent
      },
      {
        path: 'studebaker', component: StudebakerComponent
      },
      {
        path: 'subaru', component: SubaruComponent
      },
      {
        path: 'suzuki', component: SuzukiComponent
      },
      {
        path: 'tauro-sport-auto', component: TauroSportAutoComponent
      },
      {
        path: 'tesla', component: TeslaComponent
      },
      {
        path: 'think', component: ThinkComponent
      },
      {
        path: 'togg', component: ToggComponent
      },
      {
        path: 'toyota', component: ToyotaComponent
      },
      {
        path: 'trion', component: TrionComponent
      },
      {
        path: 'triumph', component: TriumphComponent
      },
      {
        path: 'tucker', component: TuckerComponent
      },
      {
        path: 'tvr', component: TvrComponent
      },
      {
        path: 'ultima', component: UltimaComponent
      },
      {
        path: 'vector', component: VectorComponent
      },
      {
        path: 'vega', component: VegaComponent
      },
      {
        path: 'vencer', component: VencerComponent
      },
      {
        path: 'vinfast', component: VinfastComponent
      },
      {
        path: 'vlf', component: VlfComponent
      },
      {
        path: 'volkswagen', component: VolkswagenComponent
      },
      {
        path: 'volvo', component: VolvoComponent
      },
      {
        path: 'w-motors', component: WMotorsComponent
      },
      {
        path: 'weltmeister', component: WeltmeisterComponent
      },
      {
        path: 'wiesmann', component: WiesmannComponent
      },
      {
        path: 'zenos', component: ZenosComponent
      },
      {
        path: 'zenvo', component: ZenvoComponent
      }
    ]},
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
