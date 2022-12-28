import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faArrowLeft,
  faArrowLeftLong,
  faArrowRightLong,
  faBars,
  faBarsStaggered,
  faBugs, faCalendar, faChartColumn,
  faCheck,
  faCircleCheck,
  faCircleMinus,
  faCirclePlus,
  faCircleXmark,
  faCow,
  faEarthAsia, faEnvelope, faEye,
  faFileExcel, faFilePdf,
  faFileWord,
  faGear,
  faGears,
  faHouse,
  faHouseChimneyUser,
  faListCheck, faLocationDot, faLungsVirus,
  faMap,
  faMapLocationDot,
  faMortarPestle,
  faNoteSticky,
  faPaperPlane,
  faPencil,
  faPenToSquare,
  faPlus,
  faReply,
  faScrewdriverWrench,
  faSyringe,
  faTrash,
  faTrashCan,
  faTriangleExclamation,
  faUserGear, faVirus, faViruses,
  faWandMagicSparkles,
  faWrench,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProgresBarComponent } from 'app/views/shared-components/progres-bar/progres-bar.component';
import { SubSliderComponent } from 'app/views/shared-components/sub-slider/sub-slider.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AquilaModule } from './aquila.module';


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [ProgresBarComponent, SubSliderComponent],
  imports: [
    AquilaModule,
    NgxUiLoaderModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    CommonModule,

  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    TranslateModule,
    NgxUiLoaderModule,
    AquilaModule,
    ProgresBarComponent,
    SubSliderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPlus,
      faEye,
      faPencil,
      faTrash,
      faScrewdriverWrench,
      faWrench,
      faCow,
      faMortarPestle,
      faBugs,
      faEarthAsia,
      faViruses,
      faLungsVirus,
      faSyringe,
      faHouse,
      faChartColumn,
      faMap,
      faCircleMinus,
      faCircleXmark,
      faCircleCheck,
      faCirclePlus,
      faFileWord,
      faFilePdf,
      faFileExcel,
      faTriangleExclamation,
      faAngleRight,
      faAngleLeft,
      faWandMagicSparkles,
      faMapLocationDot,
      faHouseChimneyUser,
      faReply,
      faCheck,
      faCalendar,
      faXmark,
      faPaperPlane,
      faBars,
      faPenToSquare,
      faTrashCan,
      faAngleDown,
      faBarsStaggered,
      faArrowLeftLong,
      faArrowRightLong,
      faUserGear,
      faGears,
      faNoteSticky,
      faGears,
      faGear,
      faListCheck,
      faAnglesLeft,
      faAnglesRight,
      faArrowLeft,
      faVirus,
      faEnvelope,
      faLocationDot
    );
  }
}
