import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Cliente, Dependente} from '../../../../core/model';
import * as moment from 'moment';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(environment.apiUrl + 'clientes');
  }

  salvar(dado: Cliente) {
    return this.http.post(environment.apiUrl + 'clientes', dado);
  }

  editar(cliente: Cliente) {
    return this.http.put<any>(environment.apiUrl + 'clientes/' + cliente.id, cliente)
      .map(res => {
        const clienteAlterado = res as Cliente;
        const dependenteAlterado = res as Dependente;
        this.converterStringParaData([clienteAlterado], [dependenteAlterado]);
        return clienteAlterado;
      });
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'clientes/' + `${id}`)
      .map(res => {
        const cliente = res as Cliente;
        const dependente = res as Dependente;
        this.converterStringParaData([cliente], [dependente]);
        return cliente;
      });
  }

  getCep(cep) {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json`);
  }

  private converterStringParaData(clientes: Cliente [], dependentes: Dependente []) {
    for (const cliente of clientes) {
      cliente.nascimento = moment(cliente.nascimento, 'YYYY-MM-DD').toDate();
      cliente.cadastro = moment(cliente.cadastro, 'YYYY-MM-DD').toDate();

      if (cliente.cancelado.dataPedido || cliente.cancelado.dataCancelamento ) {
        cliente.cancelado.dataPedido = moment(cliente.cancelado.dataPedido, 'YYYY-MM-DD').toDate();
        cliente.cancelado.dataCancelamento = moment(cliente.cancelado.dataCancelamento, 'YYYY-MM-DD').toDate();
      }
    for (const dependente of cliente.dependentes) {
      if (dependente.nascimento) {
        dependente.nascimento = moment(dependente.nascimento, 'YYYY-MM-DD').toDate();
      }
    }
    }
  }

}
