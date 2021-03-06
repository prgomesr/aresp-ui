import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ClienteDataComponent } from './cliente-data/cliente-data.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ClienteService } from './cliente.service';
import { BancoService } from '../../diversos/banco/banco.service';
import { OperadoraService } from '../../diversos/operadora/operadora.service';
import { TipoSocioService } from '../../diversos/tipo-socio/tipo-socio.service';
import { SecretariaService } from '../../diversos/secretaria/secretaria.service';
import { ClienteDataTelefoneComponent } from './cliente-data/cliente-data-telefone/cliente-data-telefone.component';
import { ClienteDataDependenteComponent } from './cliente-data/cliente-data-dependente/cliente-data-dependente.component';
import {HttpService} from '../../../../shared/http/http.service';
import {GrupoService} from '../../diversos/grupo/grupo.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClienteRoutingModule
  ],
  declarations: [ClienteComponent, ClienteDataComponent, ClienteDataTelefoneComponent, ClienteDataDependenteComponent],
  providers: [ClienteService, BancoService, OperadoraService, TipoSocioService, SecretariaService, HttpService, GrupoService]
})
export class ClienteModule { }
