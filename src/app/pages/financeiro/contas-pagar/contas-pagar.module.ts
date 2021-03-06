import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { ContasPagarRoutingModule } from './contas-pagar.routing.module';
import { ContasPagarComponent } from './contas-pagar.component';
import { ContasPagarDataComponent } from './contas-pagar-data/contas-pagar-data.component';
import { ContasPagarService } from './contas-pagar.service';
import { CategoriaPagamentoService } from '../../cadastros/diversos/categoria-pagamento/categoria-pagamento.service';
import { FornecedorService } from '../../cadastros/instancias/fornecedor/fornecedor.service';
import { ContaCaixaService } from '../../cadastros/diversos/conta-caixa/conta-caixa.service';
import {HttpService} from '../../../shared/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContasPagarRoutingModule
  ],
  declarations: [ContasPagarComponent, ContasPagarDataComponent],
  providers: [ContasPagarService, CategoriaPagamentoService, FornecedorService, ContaCaixaService, HttpService]
})
export class ContasPagarModule { }
