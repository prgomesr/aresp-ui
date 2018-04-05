export class Banco {
  id: number;
  nome: string;
  numero: number;
  telefone: string;
}

export class GrupoRecebimento {
  id: number;
  nome: string;
}

export class CategoriaRecebimento {
  id: number;
  nome: string;
}

export class CategoriaPagamento {
  id: number;
  nome: string;
}

export class Convenio {
  id: number;
  nome: string;
  numero: number;
  telefone: string;
  observacao: string;
}

export class Grupo {
  id: number;
  nome: string;
}

export class Operadora {
  id: number;
  nome: string;
  imagem: string;
}

export class Secretaria {
  id: number;
  nome: string;
}

export class Dependente {
  id: number;
}

export class Endereco {
  id: number;
}

export class Telefone {
  id: number;
  numero: string;
  tipo: string;

  constructor(id?: number,
              numero?: string,
              tipo?: string) {
    this.id = id;
    this.numero = numero;
    this.tipo = tipo;
  }
}

export class Cliente {
  id: number;
  endereco = new Endereco();
  dependentes = new Array<Dependente>();
  telefones = new Array<Telefone>();
}

export class Empresa {
  id: number;
  razao: string;
  fantasia: string;
  cnpj: string;
}

export class TipoRecebimento {
  id: number;
  nome: string;
}

export class TipoSocio {
  id: number;
  nome: string;
}

export class StatusParcela {
  id: number;
  situacao: string;
  descricao: string;
}

export class Recebimento {
  descricao: string;
  emissao: Date;
  competencia: Date;
  vencimento: Date;
  recebimento: Date;
  recebido: Date;
  valor: string;
  referecia: string;
  numDocumento: string;
  nossoNumero: string;
  grupo = new GrupoRecebimento();
  categoria = new CategoriaRecebimento();
  conta = new ContaCaixa();
  cliente = new Cliente();
  situacao = new StatusParcela();
}

export class Fornecedor {
  id: number;
  cnpj: string;
  razao: string;
  fantasia: string;
  email: string;
  telefone: string;
  contato: string;
  cadastro = new Date();
}

export class ContaCaixa {
  id: number;
  numero: string;
  digito: number;
  nome: string;
  tipo: string;
  taxa_multa: number;
  taxa_juros: number;
  empresa = new Empresa();
  agencia = new Agencia();
}

export class Agencia {
  id: number;
  numero: string;
  digito: number;
  telefone: string;
  gerente: string;
  banco: Banco;
}
