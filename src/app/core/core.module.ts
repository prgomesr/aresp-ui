import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ToastyModule } from 'ng2-toasty';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

import { NavbarComponent } from './navbar/navbar.component';
import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ErrorHandlerService } from './error-handler.service';

defineLocale('pt-br', ptBrLocale);

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ToastyModule.forRoot(),
    CoreRoutingModule
  ],
  declarations: [NavbarComponent, LayoutComponent],
  exports: [NavbarComponent, ToastyModule],
  providers: [
    ErrorHandlerService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }