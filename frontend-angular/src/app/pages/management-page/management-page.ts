import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

type Page = { title: string; singular: string; description: string; columns: string[]; rows: string[][]; action: string; };
const pages: Record<string, Page> = {
 atores: { title:'Atores', singular:'ator', description:'Gerencie os artistas vinculados aos títulos do acervo.', columns:['Nome','Nacionalidade','Data de nascimento'], rows:[['Ana de Armas','Cubana','30/04/1988'],['Wagner Moura','Brasileira','27/06/1976'],['Keanu Reeves','Canadense','02/09/1964']], action:'Novo ator' },
 diretores: { title:'Diretores', singular:'diretor', description:'Cadastre os responsáveis pela direção dos títulos.', columns:['Nome','Nacionalidade','Títulos'], rows:[['Greta Gerwig','Estadunidense','4'],['Fernando Meirelles','Brasileira','7'],['Christopher Nolan','Britânica','12']], action:'Novo diretor' },
 classes: { title:'Classes', singular:'classe', description:'Organize o acervo por categoria e defina os valores de locação.', columns:['Classe','Prazo de locação','Valor da diária'], rows:[['Lançamento','2 dias','R$ 9,90'],['Catálogo','3 dias','R$ 6,90'],['Infantil','3 dias','R$ 4,90']], action:'Nova classe' },
 titulos: { title:'Títulos', singular:'título', description:'Consulte e mantenha as informações dos filmes disponíveis.', columns:['Título','Classe','Ano','Itens'], rows:[['Oppenheimer','Lançamento','2023','3'],['Cidade de Deus','Catálogo','2002','2'],['A Viagem de Chihiro','Infantil','2001','4']], action:'Novo título' },
 itens: { title:'Itens', singular:'item', description:'Controle as cópias físicas e a situação de cada item.', columns:['Código','Título','Situação','Localização'], rows:[['ITM-001','Oppenheimer','Disponível','Prateleira A1'],['ITM-014','Cidade de Deus','Locado','Prateleira B3'],['ITM-027','A Viagem de Chihiro','Disponível','Prateleira C2']], action:'Novo item' },
 clientes: { title:'Clientes', singular:'cliente', description:'Cadastre e mantenha os dados dos clientes da locadora.', columns:['Nome','CPF','Telefone','Situação'], rows:[['Mariana Souza','***.456.789-**','(11) 99876-1234','Ativo'],['Lucas Pereira','***.892.345-**','(11) 98765-4321','Ativo'],['Carla Mendes','***.123.456-**','(11) 97654-3210','Ativo']], action:'Novo cliente' },
 locacoes: { title:'Locações', singular:'locação', description:'Registre locações e acompanhe os itens emprestados.', columns:['Código','Cliente','Retirada','Devolução prevista','Status'], rows:[['LOC-1042','Mariana Souza','14/09/2026','17/09/2026','Em aberto'],['LOC-1041','Lucas Pereira','13/09/2026','16/09/2026','Em aberto'],['LOC-1040','Carla Mendes','10/09/2026','13/09/2026','Finalizada']], action:'Nova locação' },
 devolucoes: { title:'Devoluções', singular:'devolução', description:'Finalize os empréstimos e registre a devolução dos itens.', columns:['Locação','Cliente','Item','Previsão','Situação'], rows:[['LOC-1042','Mariana Souza','Oppenheimer','17/09/2026','Pendente'],['LOC-1041','Lucas Pereira','Cidade de Deus','16/09/2026','Pendente'],['LOC-1038','João Alves','Barbie','14/09/2026','Atrasada']], action:'Registrar devolução' },
 'consultar-titulos': { title:'Consultar títulos', singular:'consulta', description:'Encontre filmes por nome, classe, ator ou diretor.', columns:['Título','Classe','Direção','Disponibilidade'], rows:[['Oppenheimer','Lançamento','Christopher Nolan','2 itens disponíveis'],['Cidade de Deus','Catálogo','Fernando Meirelles','1 item disponível'],['Barbie','Lançamento','Greta Gerwig','Indisponível']], action:'Limpar busca' },
};
@Component({ selector:'app-management-page', imports:[CommonModule], templateUrl:'./management-page.html', styleUrl:'./management-page.css' })
export class ManagementPageComponent {
  showForm = signal(false); query = signal('');
  key = signal('titulos'); page = computed(() => pages[this.key()] ?? pages['titulos']);
  constructor(route: ActivatedRoute) { route.paramMap.subscribe(params => this.key.set(params.get('section') ?? 'titulos')); }
  filteredRows = computed(() => this.page().rows.filter(row => row.join(' ').toLowerCase().includes(this.query().toLowerCase())));
  search(event: Event) { this.query.set((event.target as HTMLInputElement).value); }
}
